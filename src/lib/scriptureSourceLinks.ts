import type { MassReadingReference } from "@/types/massReadingsReflections";
import haydockChapterMap from "./haydockChapterLinks.generated.json" with { type: "json" };

const haydockChapterLinks: Record<string, string> = haydockChapterMap.chapters;

export type ScriptureStudyTarget = { href: string; label: string };

export type ScriptureStudyPassage = {
  label: string;
  reference: string;
  newAdventTargets: ScriptureStudyTarget[];
  douayTargets: ScriptureStudyTarget[];
  haydockTargets: ScriptureStudyTarget[];
  haydockDirect: boolean;
};

const douayBookNumbers: Record<string, number> = {
  genesis: 1,
  exodus: 2,
  leviticus: 3,
  numbers: 4,
  deuteronomy: 5,
  joshua: 6,
  judges: 7,
  ruth: 8,
  "1 samuel": 9,
  "2 samuel": 10,
  "1 kings": 11,
  "2 kings": 12,
  "1 chronicles": 13,
  "2 chronicles": 14,
  ezra: 15,
  nehemiah: 16,
  tobit: 17,
  tobías: 17,
  judith: 18,
  esther: 19,
  job: 20,
  psalm: 21,
  psalms: 21,
  proverbs: 22,
  ecclesiastes: 23,
  "song of songs": 24,
  "song of solomon": 24,
  canticles: 24,
  wisdom: 25,
  sirach: 26,
  ecclesiasticus: 26,
  isaiah: 27,
  jeremiah: 28,
  lamentations: 29,
  baruch: 30,
  ezekiel: 31,
  daniel: 32,
  hosea: 33,
  joel: 34,
  amos: 35,
  obadiah: 36,
  jonah: 37,
  micah: 38,
  nahum: 39,
  habakkuk: 40,
  zephaniah: 41,
  haggai: 42,
  zechariah: 43,
  malachi: 44,
  "1 maccabees": 45,
  "2 maccabees": 46,
  matthew: 47,
  mark: 48,
  luke: 49,
  john: 50,
  acts: 51,
  "acts of the apostles": 51,
  romans: 52,
  "1 corinthians": 53,
  "2 corinthians": 54,
  galatians: 55,
  ephesians: 56,
  philippians: 57,
  colossians: 58,
  "1 thessalonians": 59,
  "2 thessalonians": 60,
  "1 timothy": 61,
  "2 timothy": 62,
  titus: 63,
  philemon: 64,
  hebrews: 65,
  james: 66,
  "1 peter": 67,
  "2 peter": 68,
  "1 john": 69,
  "2 john": 70,
  "3 john": 71,
  jude: 72,
  revelation: 73,
  apocalypse: 73,
};

const referenceAliases: Record<string, string> = {
  gen: "genesis",
  ex: "exodus",
  exod: "exodus",
  lev: "leviticus",
  num: "numbers",
  deut: "deuteronomy",
  dt: "deuteronomy",
  jos: "joshua",
  josh: "joshua",
  judg: "judges",
  jdg: "judges",
  "1 sam": "1 samuel",
  "2 sam": "2 samuel",
  "1 sa": "1 samuel",
  "2 sa": "2 samuel",
  "1 kgs": "1 kings",
  "2 kgs": "2 kings",
  "1 kin": "1 kings",
  "2 kin": "2 kings",
  "1 chr": "1 chronicles",
  "2 chr": "2 chronicles",
  "1 chron": "1 chronicles",
  "2 chron": "2 chronicles",
  neh: "nehemiah",
  tob: "tobit",
  ps: "psalm",
  prov: "proverbs",
  eccl: "ecclesiastes",
  eccles: "ecclesiastes",
  song: "song of songs",
  wis: "wisdom",
  sir: "sirach",
  isa: "isaiah",
  is: "isaiah",
  jer: "jeremiah",
  lam: "lamentations",
  ezek: "ezekiel",
  ez: "ezekiel",
  dan: "daniel",
  hos: "hosea",
  obad: "obadiah",
  mic: "micah",
  nah: "nahum",
  hab: "habakkuk",
  zeph: "zephaniah",
  hag: "haggai",
  zech: "zechariah",
  mal: "malachi",
  "1 macc": "1 maccabees",
  "2 macc": "2 maccabees",
  mt: "matthew",
  matt: "matthew",
  mk: "mark",
  mr: "mark",
  lk: "luke",
  lu: "luke",
  jn: "john",
  acts: "acts",
  rom: "romans",
  "1 cor": "1 corinthians",
  "2 cor": "2 corinthians",
  gal: "galatians",
  eph: "ephesians",
  phil: "philippians",
  ph: "philippians",
  col: "colossians",
  "1 thess": "1 thessalonians",
  "2 thess": "2 thessalonians",
  "1 tim": "1 timothy",
  "2 tim": "2 timothy",
  tit: "titus",
  phlm: "philemon",
  heb: "hebrews",
  jas: "james",
  "1 pet": "1 peter",
  "2 pet": "2 peter",
  "1 jn": "1 john",
  "2 jn": "2 john",
  "3 jn": "3 john",
  rev: "revelation",
  apoc: "revelation",
};

const newAdventBookCodes: Record<string, string> = {
  genesis: "gen", exodus: "exo", leviticus: "lev", numbers: "num", deuteronomy: "deu",
  joshua: "jos", judges: "jdg", ruth: "rut", "1 samuel": "1sa", "2 samuel": "2sa",
  "1 kings": "1ki", "2 kings": "2ki", "1 chronicles": "1ch", "2 chronicles": "2ch",
  ezra: "ezr", nehemiah: "neh", tobit: "tob", tobías: "tob", judith: "jdt", esther: "est", job: "job",
  psalm: "psa", psalms: "psa", proverbs: "pro", ecclesiastes: "ecc", "song of songs": "son",
  "song of solomon": "son", canticles: "son", wisdom: "wis", sirach: "sir", ecclesiasticus: "sir",
  isaiah: "isa", jeremiah: "jer", lamentations: "lam", baruch: "bar", ezekiel: "eze", daniel: "dan",
  hosea: "hos", joel: "joe", amos: "amo", obadiah: "oba", jonah: "jon", micah: "mic", nahum: "nah",
  habakkuk: "hab", zephaniah: "zep", haggai: "hag", zechariah: "zec", malachi: "mal",
  "1 maccabees": "1ma", "2 maccabees": "2ma", matthew: "mat", mark: "mar", luke: "luk", john: "joh",
  acts: "act", "acts of the apostles": "act", romans: "rom", "1 corinthians": "1co", "2 corinthians": "2co",
  galatians: "gal", ephesians: "eph", philippians: "phi", colossians: "col", "1 thessalonians": "1th",
  "2 thessalonians": "2th", "1 timothy": "1ti", "2 timothy": "2ti", titus: "tit", philemon: "phm",
  hebrews: "heb", james: "jam", "1 peter": "1pe", "2 peter": "2pe", "1 john": "1jo", "2 john": "2jo",
  "3 john": "3jo", jude: "jud", revelation: "rev", apocalypse: "rev",
};

const haydockOldTestamentIndex = "https://johnblood.gitlab.io/haydock/id330.html";
const haydockNewTestamentIndex = "https://johnblood.gitlab.io/haydock/index.html";

export function getScriptureStudyPassages(readings: MassReadingReference[]): ScriptureStudyPassage[] {
  const passages = readings.flatMap((reading) =>
    reading.reference
      .split(";")
      .map((reference) => reference.trim())
      .filter(Boolean)
      .map((reference) => ({ reading, reference, parsed: parseReference(reference) }))
      .filter((item) => item.parsed),
  );

  return passages.map(({ reading, reference, parsed }) => {
    const bookNumber = douayBookNumbers[parsed!.book];
    const chapterTargets = parsed!.book === "psalm"
      ? getDouayPsalmChapters(parsed!.chapter, parsed!.verses)
      : [{ chapter: parsed!.chapter, detail: "" }];
    const newAdventCode = newAdventBookCodes[parsed!.book];
    const fallbackIndex = bookNumber <= 46 ? haydockOldTestamentIndex : haydockNewTestamentIndex;
    const newAdventTargets = chapterTargets.map(({ chapter, detail }) => ({
      href: `https://www.newadvent.org/bible/${newAdventCode}${String(chapter).padStart(3, "0")}.htm`,
      label: getTargetLabel("newadvent", parsed!.book, parsed!.chapter, chapter, detail),
    }));
    const douayTargets = chapterTargets.map(({ chapter, detail }) => ({
      href: `https://www.drbo.org/chapter/${String(bookNumber).padStart(2, "0")}${String(chapter).padStart(3, "0")}.htm`,
      label: getTargetLabel("douay", parsed!.book, parsed!.chapter, chapter, detail),
    }));
    const haydockTargets = chapterTargets.map(({ chapter, detail }) => {
      const href = haydockChapterLinks[`${parsed!.book}:${chapter}`];
      return {
        href: href ?? fallbackIndex,
        label: href
          ? getTargetLabel("haydock", parsed!.book, parsed!.chapter, chapter, detail)
          : `Choose chapter in the ${bookNumber <= 46 ? "Old Testament" : "New Testament"} index`,
      };
    });

    return {
      label: reading.label,
      reference,
      newAdventTargets,
      douayTargets,
      haydockTargets,
      haydockDirect: haydockTargets.every((target) => !target.label.startsWith("Choose chapter")),
    };
  });
}

function parseReference(reference: string) {
  const normalized = reference.replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
  const match = normalized.match(/^(.+?)\s+(\d+)(?:\s*[:.]\s*(.*))?$/);
  if (!match) return null;

  const sourceBook = match[1].toLowerCase().replace(/\.$/, "");
  const book = referenceAliases[sourceBook] ?? sourceBook;
  if (!(book in douayBookNumbers)) return null;
  return { book, chapter: Number(match[2]), verses: match[3] ?? "" };
}

function getDouayPsalmChapters(modernNumber: number, verseText: string) {
  if (modernNumber === 116 || modernNumber === 147) {
    const splitAt = modernNumber === 116 ? 9 : 11;
    const firstChapter = modernNumber === 116 ? 114 : 146;
    const secondChapter = modernNumber === 116 ? 115 : 147;
    const ranges = parseVerseRanges(verseText);
    if (ranges.length === 0) {
      return [
        { chapter: firstChapter, detail: "first part" },
        { chapter: secondChapter, detail: "second part" },
      ];
    }
    const firstPart = ranges.filter((range) => range.start <= splitAt).map((range) => ({
      start: range.start,
      end: Math.min(range.end, splitAt),
    }));
    const secondPart = ranges.filter((range) => range.end > splitAt).map((range) => ({
      start: Math.max(range.start, splitAt + 1),
      end: range.end,
    }));
    return [
      ...(firstPart.length ? [{ chapter: firstChapter, detail: formatVerseDetail(firstPart) }] : []),
      ...(secondPart.length ? [{ chapter: secondChapter, detail: formatVerseDetail(secondPart) }] : []),
    ];
  }

  let chapter = modernNumber;
  if (modernNumber >= 9 && modernNumber <= 10) chapter = 9;
  else if (modernNumber >= 11 && modernNumber <= 113) chapter = modernNumber - 1;
  else if (modernNumber >= 114 && modernNumber <= 115) chapter = 113;
  else if (modernNumber >= 117 && modernNumber <= 146) chapter = modernNumber - 1;
  return [{ chapter, detail: "" }];
}

function parseVerseRanges(verseText: string) {
  return [...verseText.matchAll(/(\d+)(?:[a-z])?(?:\s*[-–]\s*(\d+)(?:[a-z])?)?/gi)]
    .map((match) => ({ start: Number(match[1]), end: Number(match[2] ?? match[1]) }));
}

function formatVerseDetail(ranges: Array<{ start: number; end: number }>) {
  return `verses ${ranges.map(({ start, end }) => start === end ? start : `${start}–${end}`).join(", ")}`;
}

function getTargetLabel(
  source: "newadvent" | "douay" | "haydock",
  book: string,
  modernChapter: number,
  sourceChapter: number,
  detail: string,
) {
  if (book === "psalm") {
    const sourceNumber = `Psalm ${sourceChapter}`;
    const modernNumber = sourceChapter === modernChapter && !detail
      ? ""
      : ` (modern Psalm ${modernChapter}${detail ? `, ${detail}` : ""})`;
    return `Open ${sourceNumber}${modernNumber}`;
  }
  if (source === "haydock") return "Open chapter notes";
  if (source === "douay") return "Open passage";
  return "Open chapter";
}
