from __future__ import annotations

import json
import re
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from typing import Any

try:
    from pypdf import PdfReader
except ImportError as exc:  # pragma: no cover - local maintenance helper
    raise SystemExit("Missing pypdf. Run this with the Codex bundled Python or install pypdf.") from exc


ROOT = Path(__file__).resolve().parents[1]
DOWNLOADS = Path.home() / "Downloads"
PDFS = {
    2026: DOWNLOADS / "2026cal.pdf",
    2027: DOWNLOADS / "2027cal.pdf",
    2028: DOWNLOADS / "2028cal.pdf",
}

JSON_OUTPUT = ROOT / "src" / "data" / "liturgicalCalendar" / "usccbPdfCalendar.generated.json"
ICS_OUTPUT = ROOT / "public" / "calendar" / "daily-oratory-liturgical-calendar-2026-2028.ics"
QA_DIR = ROOT / "qa" / "liturgical-calendar"
QA_JSON_OUTPUT = QA_DIR / "usccb-calendar-import-report.json"
QA_MD_OUTPUT = QA_DIR / "usccb-calendar-import-checks.md"

CALENDAR_NAME = "Daily Oratory Liturgical Calendar"
CALENDAR_TIMEZONE = "America/Chicago"
USCCB_CALENDAR_SOURCE_URL = "https://www.usccb.org/committees/divine-worship/liturgical-calendar"

MONTHS = {
    month: index
    for index, month in enumerate(
        [
            "JANUARY",
            "FEBRUARY",
            "MARCH",
            "APRIL",
            "MAY",
            "JUNE",
            "JULY",
            "AUGUST",
            "SEPTEMBER",
            "OCTOBER",
            "NOVEMBER",
            "DECEMBER",
        ],
        1,
    )
}

YEAR_CONFIG = {
    2026: {"easter": "2026-04-05", "adventStart": "2026-11-29"},
    2027: {"easter": "2027-03-28", "adventStart": "2027-11-28"},
    2028: {"easter": "2028-04-16", "adventStart": "2028-12-03"},
}

COLOR_WORDS = ["violet", "white", "gold", "green", "red", "rose", "black", "blue"]
COLOR_RE = re.compile(r"\s+((?:%s)(?:/(?:%s))*)\s*$" % ("|".join(COLOR_WORDS), "|".join(COLOR_WORDS)), re.I)
DATE_ROW_RE = re.compile(r"^\s*(\d{1,2})\s+(SUN|Mon|Tue|Wed|Thu|Fri|Sat)\s+(.+?)\s*$")
MONTH_RE = re.compile(r"^\s*(%s)\s+(20\d{2})\s*$" % "|".join(MONTHS.keys()))
RANK_RE = re.compile(r"^(Solemnity|Feast|Memorial|Optional Memorial)(?:\s|$)", re.I)
FOOTNOTE_RE = re.compile(r"^\d+\s+(When|Although|In|Since|The following|The first|The Optional)\b", re.I)
READING_START_RE = re.compile(
    r"^(Vigil:|Day:|Morning:|At |or,|Gn|Ex|Lv|Nm|Dt|Jos|Jgs|Ru|1 Sm|2 Sm|1 Kgs|2 Kgs|1 Chr|2 Chr|"
    r"Ezr|Neh|Tb|Jdt|Est|1 Mc|2 Mc|Jb|Prv|Eccl|Sg|Wis|Sir|Is|Jer|Lam|Bar|Ez|Dn|Hos|Jl|Am|Ob|Jon|Mi|"
    r"Na|Hb|Zep|Hg|Zec|Mal|Acts|Rom|1 Cor|2 Cor|Gal|Eph|Phil|Col|1 Thes|2 Thes|1 Tm|2 Tm|Ti|Phlm|"
    r"Heb|Jas|1 Pt|2 Pt|1 Jn|2 Jn|3 Jn|Jude|Rv|Mt|Mk|Lk|Jn)\b"
)

SMALL_TITLE_WORDS = {"a", "an", "and", "at", "by", "for", "in", "of", "on", "or", "the", "to", "with"}


def main() -> None:
    missing = [str(path) for path in PDFS.values() if not path.exists()]
    if missing:
        raise SystemExit(f"Missing PDF(s): {', '.join(missing)}")

    records: list[dict[str, Any]] = []
    report: dict[str, Any] = {"years": {}, "checks": []}

    for year, path in PDFS.items():
        year_records = parse_pdf(year, path)
        records.extend(year_records)
        report["years"][str(year)] = {
            "sourcePdf": str(path),
            "count": len(year_records),
            "firstDate": year_records[0]["date"],
            "lastDate": year_records[-1]["date"],
        }

    records.sort(key=lambda record: record["date"])
    report["totalRecords"] = len(records)
    report["checks"].extend(check_date_coverage(records))
    report["checks"].extend(check_anchor_dates(records))

    JSON_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    ICS_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    QA_DIR.mkdir(parents=True, exist_ok=True)

    JSON_OUTPUT.write_text(json.dumps(records, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    ICS_OUTPUT.write_text(build_ics(records), encoding="utf-8", newline="\r\n")
    QA_JSON_OUTPUT.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    QA_MD_OUTPUT.write_text(build_markdown_report(report, records), encoding="utf-8")

    failed = [check for check in report["checks"] if check["status"] != "pass"]
    print(f"Wrote {len(records)} liturgical calendar events.")
    print(f"JSON: {JSON_OUTPUT}")
    print(f"ICS:  {ICS_OUTPUT}")
    print(f"QA:   {QA_MD_OUTPUT}")
    if failed:
        raise SystemExit(f"{len(failed)} QA check(s) failed.")


def parse_pdf(year: int, path: Path) -> list[dict[str, Any]]:
    raw_entries: list[dict[str, Any]] = []
    current_month: int | None = None
    current_entry: dict[str, Any] | None = None
    pending_context: str | None = None

    def finish_current() -> None:
        nonlocal current_entry
        if current_entry:
            raw_entries.append(current_entry)
            current_entry = None

    reader = PdfReader(str(path))
    for page in reader.pages:
        text = page.extract_text() or ""
        for raw_line in text.splitlines():
            line = " ".join(raw_line.strip().split())
            if not line:
                continue
            if line.startswith("APPENDIX") or line.startswith("APÉNDICE"):
                finish_current()
                return collapse_regional_duplicates([postprocess_entry(year, entry) for entry in raw_entries])

            month_match = MONTH_RE.match(line)
            if month_match:
                finish_current()
                current_month = MONTHS[month_match.group(1)]
                pending_context = None
                continue

            if line.endswith(":") and ("Ecclesiastical Provinces" in line or "All Other U.S." in line):
                finish_current()
                pending_context = line[:-1]
                continue

            row_match = DATE_ROW_RE.match(line)
            if row_match and current_month:
                finish_current()
                day_number = int(row_match.group(1))
                weekday = row_match.group(2)
                title, colors, jurisdiction = parse_title_and_colors(row_match.group(3))
                current_entry = {
                    "date": f"{year}-{current_month:02d}-{day_number:02d}",
                    "weekday": weekday,
                    "title": title,
                    "jurisdiction": jurisdiction,
                    "colors": colors,
                    "lines": [],
                    "context": pending_context,
                    "sourcePdf": path.name,
                    "sourceUrl": f"https://www.usccb.org/resources/{year}cal.pdf",
                }
                pending_context = None
                continue

            if re.fullmatch(r"\d{1,2}", line):
                continue

            if current_entry:
                current_entry["lines"].append(line)

    finish_current()
    return collapse_regional_duplicates([postprocess_entry(year, entry) for entry in raw_entries])


def parse_title_and_colors(raw: str) -> tuple[str, list[str], str | None]:
    color_match = COLOR_RE.search(raw)
    color_text = ""
    title = raw
    if color_match:
        color_text = color_match.group(1).lower()
        title = raw[: color_match.start()].strip()

    title = re.sub(r"(?<=[A-Za-z)])\d+$", "", title).strip()
    jurisdiction = "USA" if title.upper().startswith("USA:") else None
    title = re.sub(r"^USA:\s*", "", title, flags=re.I)
    return smart_title(title), color_text.split("/") if color_text else [], jurisdiction


def postprocess_entry(year: int, entry: dict[str, Any]) -> dict[str, Any]:
    rank = ""
    optional_observances: list[str] = []
    parenthetical_lines: list[str] = []
    reading_lines: list[str] = []
    notes: list[str] = []
    lines = list(entry.pop("lines"))

    while lines and is_title_continuation(entry, lines[0]):
        fragment, colors, jurisdiction = parse_title_and_colors(lines.pop(0))
        entry["title"] = smart_title(f"{entry['title']} {fragment}")
        if colors:
            entry["colors"] = colors
        if jurisdiction:
            entry["jurisdiction"] = jurisdiction

    for line in lines:
        if FOOTNOTE_RE.match(line):
            continue
        if line.startswith("[") and line.endswith("]"):
            optional_observances.append(line.strip("[]"))
            continue
        rank_match = RANK_RE.match(line)
        if rank_match:
            rank = smart_title(rank_match.group(1))
            if "[" in line:
                notes.append(line)
            continue
        if line.startswith("(") and line.endswith(")"):
            parenthetical_lines.append(line)
            continue
        reading_lines.append(line)

    title = entry["title"]
    entry["rank"] = rank or ("Sunday" if entry["weekday"] == "SUN" else infer_rank_from_title(title))
    entry["season"] = infer_season(entry["date"], title)
    entry["subtitle"] = " ".join(parenthetical_lines)
    entry["optionalObservances"] = optional_observances
    entry["readings"] = " ".join(reading_lines).strip()
    entry["notes"] = notes
    entry["uid"] = f"daily-oratory-liturgical-{entry['date']}@dailyoratory.faith"
    return entry


def is_title_continuation(entry: dict[str, Any], line: str) -> bool:
    if FOOTNOTE_RE.match(line):
        return False
    if line.startswith("[") and line.endswith("]"):
        return False
    if RANK_RE.match(line):
        return False
    if line.startswith("(") and line.endswith(")"):
        return False
    if READING_START_RE.match(line):
        return False
    return bool(entry["title"].endswith(",") or not entry["colors"] or COLOR_RE.search(line))


def collapse_regional_duplicates(entries: list[dict[str, Any]]) -> list[dict[str, Any]]:
    by_date: dict[str, dict[str, Any]] = {}
    alternates_by_date: dict[str, list[dict[str, Any]]] = {}

    for entry in entries:
        existing = by_date.get(entry["date"])
        if not existing:
            by_date[entry["date"]] = entry
            continue

        alternates_by_date.setdefault(entry["date"], []).append(existing)
        if is_default_us_context(entry.get("context")):
            by_date[entry["date"]] = entry
            continue

        if is_regional_exception_context(existing.get("context")) and not is_regional_exception_context(entry.get("context")):
            by_date[entry["date"]] = entry
            continue

        alternates_by_date[entry["date"]].append(entry)

    for event_date, alternates in alternates_by_date.items():
        selected = by_date[event_date]
        selected["regionalAlternates"] = [
            {
                "context": alternate.get("context"),
                "title": alternate["title"],
                "rank": alternate["rank"],
                "colors": alternate["colors"],
                "readings": alternate["readings"],
            }
            for alternate in alternates
            if alternate is not selected
        ]

    return [by_date[event_date] for event_date in sorted(by_date)]


def is_default_us_context(context: str | None) -> bool:
    return bool(context and context.startswith("All Other U.S."))


def is_regional_exception_context(context: str | None) -> bool:
    return bool(context and context.startswith("Ecclesiastical Provinces"))


def infer_rank_from_title(title: str) -> str:
    lowered = title.lower()
    if "solemnity" in lowered:
        return "Solemnity"
    if "feast" in lowered:
        return "Feast"
    if "memorial" in lowered:
        return "Memorial"
    return "Weekday"


def infer_season(iso_date: str, title: str) -> str:
    if "Pentecost" in title:
        return "Pentecost"
    lowered = title.lower()
    if "advent" in lowered:
        return "Advent"
    if "christmas" in lowered or "nativity of the lord" in lowered or "baptism of the lord" in lowered:
        return "Christmas"
    if "lent" in lowered or "lenten" in lowered or "holy week" in lowered or "passion of the lord" in lowered:
        return "Lent"
    if "easter" in lowered or "ascension of the lord" in lowered:
        return "Easter"

    year = int(iso_date[:4])
    config = YEAR_CONFIG[year]
    current = date.fromisoformat(iso_date)
    easter = date.fromisoformat(config["easter"])
    advent_start = date.fromisoformat(config["adventStart"])
    ash_wednesday = easter - timedelta(days=46)
    holy_thursday = easter - timedelta(days=3)
    pentecost = easter + timedelta(days=49)

    if current <= date(year, 1, 11):
        return "Christmas"
    if ash_wednesday <= current < holy_thursday:
        return "Lent"
    if holy_thursday <= current <= pentecost:
        return "Easter"
    if advent_start <= current < date(year, 12, 25):
        return "Advent"
    if current >= date(year, 12, 25):
        return "Christmas"
    return "Ordinary Time"


def smart_title(value: str) -> str:
    value = " ".join(value.split())
    title_check = re.sub(r"\([^)]*\)", "", value)
    if re.search(r"[a-z]", title_check):
        return normalize_title_corrections(value)

    words: list[str] = []
    for word in value.lower().split(" "):
        if word in SMALL_TITLE_WORDS and words and not words[-1].endswith(":"):
            words.append(word)
        elif word == "bvm":
            words.append("BVM")
        else:
            words.append(word[:1].upper() + word[1:])
    return normalize_title_corrections(" ".join(words))


def normalize_title_corrections(value: str) -> str:
    value = value.replace("Bvm", "BVM").replace("Usa:", "USA:")
    value = value.replace("(christmas)", "(Christmas)")
    value = re.sub(r", The\b", ", the", value)
    value = re.sub(r", And\b", ", and", value)
    return value


def check_date_coverage(records: list[dict[str, Any]]) -> list[dict[str, str]]:
    checks: list[dict[str, str]] = []
    by_date = {record["date"]: record for record in records}

    for year in PDFS:
        current = date(year, 1, 1)
        final = date(year, 12, 31)
        missing: list[str] = []
        while current <= final:
            iso = current.isoformat()
            if iso not in by_date:
                missing.append(iso)
            current += timedelta(days=1)

        expected = 366 if is_leap_year(year) else 365
        actual = sum(1 for record in records if record["date"].startswith(f"{year}-"))
        checks.append(
            {
                "name": f"{year} date coverage",
                "status": "pass" if not missing and actual == expected else "fail",
                "detail": f"{actual}/{expected} records; missing: {', '.join(missing) if missing else 'none'}",
            }
        )

    return checks


def check_anchor_dates(records: list[dict[str, Any]]) -> list[dict[str, str]]:
    by_date = {record["date"]: record for record in records}
    anchors = {
        "2026-01-01": "Mary, the Holy Mother of God",
        "2026-02-18": "Ash Wednesday",
        "2026-04-05": "Easter Sunday of the Resurrection of the Lord",
        "2026-05-17": "The Ascension of the Lord",
        "2026-05-24": "Pentecost Sunday",
        "2026-05-31": "The Most Holy Trinity",
        "2026-06-07": "The Most Holy Body and Blood of Christ",
        "2026-06-12": "The Most Sacred Heart of Jesus",
        "2026-11-29": "First Sunday of Advent",
        "2026-12-25": "The Nativity of the Lord",
        "2027-03-28": "Easter Sunday of the Resurrection of the Lord",
        "2027-05-09": "The Ascension of the Lord",
        "2027-05-16": "Pentecost Sunday",
        "2028-04-16": "Easter Sunday of the Resurrection of the Lord",
        "2028-05-28": "The Ascension of the Lord",
        "2028-06-04": "Pentecost Sunday",
    }

    checks: list[dict[str, str]] = []
    for iso, expected in anchors.items():
        actual = by_date.get(iso, {}).get("title", "")
        checks.append(
            {
                "name": f"Anchor {iso}",
                "status": "pass" if expected.lower() in actual.lower() else "fail",
                "detail": f"expected '{expected}', got '{actual or 'missing'}'",
            }
        )
    return checks


def is_leap_year(year: int) -> bool:
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)


def build_ics(records: list[dict[str, Any]]) -> str:
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Daily Oratory//USCCB Liturgical Calendar 2026-2028//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        f"X-WR-CALNAME:{escape_ics_text(CALENDAR_NAME)}",
        f"X-WR-TIMEZONE:{CALENDAR_TIMEZONE}",
    ]

    for record in records:
        start = record["date"].replace("-", "")
        end = (date.fromisoformat(record["date"]) + timedelta(days=1)).strftime("%Y%m%d")
        summary = record["title"]
        if record.get("subtitle"):
            summary = f"{summary} {record['subtitle']}"
        description = build_event_description(record)

        lines.extend(
            [
                "BEGIN:VEVENT",
                f"UID:{record['uid']}",
                f"DTSTAMP:{stamp}",
                f"DTSTART;VALUE=DATE:{start}",
                f"DTEND;VALUE=DATE:{end}",
                f"SUMMARY:{escape_ics_text(summary)}",
                f"DESCRIPTION:{escape_ics_text(description)}",
                "TRANSP:TRANSPARENT",
                "STATUS:CONFIRMED",
                "END:VEVENT",
            ]
        )

    lines.append("END:VCALENDAR")
    return "\n".join(fold_ics_line(line) for line in lines) + "\n"


def build_event_description(record: dict[str, Any]) -> str:
    parts = [
        f"Rank: {record['rank']}",
        f"Liturgical color: {', '.join(record['colors']) if record['colors'] else 'See USCCB calendar'}",
        f"Season: {record['season']}",
    ]
    if record.get("jurisdiction"):
        parts.append(f"Jurisdiction note: {record['jurisdiction']}")
    if record.get("optionalObservances"):
        parts.append(f"Optional observance(s): {'; '.join(record['optionalObservances'])}")
    if record.get("readings"):
        parts.append(f"Readings: {record['readings']}")
    if record.get("regionalAlternates"):
        alt_lines = []
        for alternate in record["regionalAlternates"]:
            alt_lines.append(f"{alternate.get('context')}: {alternate.get('title')}")
        parts.append(f"Regional alternate(s): {' | '.join(alt_lines)}")
    parts.append(f"Source: USCCB Liturgical Calendar PDF ({record['sourceUrl']})")
    parts.append("Verify local observances with your diocese or parish.")
    return "\n".join(parts)


def escape_ics_text(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace(";", r"\;")
        .replace(",", r"\,")
        .replace("\r\n", r"\n")
        .replace("\n", r"\n")
    )


def fold_ics_line(line: str) -> str:
    encoded = line.encode("utf-8")
    if len(encoded) <= 75:
        return line

    folded: list[str] = []
    current = ""
    current_len = 0
    limit = 75
    for char in line:
        char_len = len(char.encode("utf-8"))
        if current and current_len + char_len > limit:
            folded.append(current)
            current = " " + char
            current_len = 1 + char_len
            limit = 74
        else:
            current += char
            current_len += char_len
    folded.append(current)
    return "\n".join(folded)


def build_markdown_report(report: dict[str, Any], records: list[dict[str, Any]]) -> str:
    lines = [
        "# USCCB Liturgical Calendar Import Checks",
        "",
        f"Generated records: {report['totalRecords']}",
        "",
        "## Year Coverage",
    ]

    for year, data in report["years"].items():
        lines.append(f"- {year}: {data['count']} records ({data['firstDate']} to {data['lastDate']})")

    lines.extend(["", "## Checks"])
    for check in report["checks"]:
        marker = "PASS" if check["status"] == "pass" else "FAIL"
        lines.append(f"- {marker}: {check['name']} - {check['detail']}")

    lines.extend(["", "## Sample Records"])
    for iso in ["2026-05-31", "2026-06-07", "2027-05-09", "2028-05-28"]:
        record = next((item for item in records if item["date"] == iso), None)
        if record:
            lines.append(f"- {iso}: {record['title']} ({record['rank']}; {', '.join(record['colors'])})")

    return "\n".join(lines) + "\n"


if __name__ == "__main__":
    main()
