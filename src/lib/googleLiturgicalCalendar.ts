import { liturgicalGoogleCalendarIcsUrl } from "@/config/liturgicalCalendar";
import type { ISODateString, LiturgicalSeasonName } from "@/types/content";
import type { LiturgicalColor, LiturgicalRank } from "@/types/liturgicalLiving";

const REVALIDATE_SECONDS = 60 * 60 * 24;

export type GoogleLiturgicalCalendarEvent = {
  uid: string;
  title: string;
  description?: string;
  startDate: ISODateString;
  endDate?: ISODateString;
  rank?: LiturgicalRank;
  colors?: LiturgicalColor[];
  season?: LiturgicalSeasonName;
};

export async function getGoogleLiturgicalCalendarEventForDate(date: ISODateString) {
  const events = await getGoogleLiturgicalCalendarEvents();

  return events
    .filter((event) => eventCoversDate(event, date))
    .sort(compareLiturgicalEventPriority)[0] ?? null;
}

export async function getGoogleLiturgicalCalendarEvents(): Promise<GoogleLiturgicalCalendarEvent[]> {
  try {
    const response = await fetch(liturgicalGoogleCalendarIcsUrl, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) return [];

    return parseIcsCalendar(await response.text());
  } catch {
    return [];
  }
}

function parseIcsCalendar(value: string): GoogleLiturgicalCalendarEvent[] {
  const lines = unfoldIcsLines(value);
  const events: GoogleLiturgicalCalendarEvent[] = [];
  let current: Record<string, string> | null = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      current = {};
      continue;
    }

    if (line === "END:VEVENT") {
      const event = current ? toGoogleCalendarEvent(current) : null;
      if (event) events.push(event);
      current = null;
      continue;
    }

    if (!current) continue;

    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;

    const rawKey = line.slice(0, separatorIndex);
    const key = rawKey.split(";")[0]?.toUpperCase();
    const rawValue = line.slice(separatorIndex + 1);

    if (key) current[key] = rawValue;
  }

  return events;
}

function unfoldIcsLines(value: string) {
  const rawLines = value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  const lines: string[] = [];

  for (const line of rawLines) {
    if ((line.startsWith(" ") || line.startsWith("\t")) && lines.length) {
      lines[lines.length - 1] += line.slice(1);
      continue;
    }

    lines.push(line.trimEnd());
  }

  return lines;
}

function toGoogleCalendarEvent(raw: Record<string, string>): GoogleLiturgicalCalendarEvent | null {
  const title = cleanCalendarText(raw.SUMMARY);
  const startDate = parseIcsDate(raw.DTSTART);
  if (!title || !startDate) return null;

  const description = cleanCalendarText(raw.DESCRIPTION);

  return {
    uid: raw.UID ? (cleanCalendarText(raw.UID) ?? `${startDate}-${title}`) : `${startDate}-${title}`,
    title,
    description,
    startDate,
    endDate: parseIcsDate(raw.DTEND),
    rank: inferRank(title, description),
    colors: inferColors(title, description),
    season: inferSeason(title, description),
  };
}

function parseIcsDate(value?: string): ISODateString | undefined {
  if (!value) return undefined;

  const datePart = value.slice(0, 8);
  if (!/^\d{8}$/.test(datePart)) return undefined;

  return `${datePart.slice(0, 4)}-${datePart.slice(4, 6)}-${datePart.slice(6, 8)}`;
}

function cleanCalendarText(value?: string) {
  if (!value) return undefined;

  return value
    .replace(/\\n/g, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\")
    .replace(/<[^>]+>/g, " ")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function eventCoversDate(event: GoogleLiturgicalCalendarEvent, date: ISODateString) {
  if (!event.endDate) return event.startDate === date;
  return event.startDate <= date && date < event.endDate;
}

function compareLiturgicalEventPriority(a: GoogleLiturgicalCalendarEvent, b: GoogleLiturgicalCalendarEvent) {
  return getRankPriority(b.rank, b.title) - getRankPriority(a.rank, a.title);
}

function getRankPriority(rank: LiturgicalRank | undefined, title: string) {
  if (rank === "holy-day" || rank === "solemnity") return 6;
  if (rank === "sunday" || title.toLowerCase().includes("sunday")) return 5;
  if (rank === "feast") return 4;
  if (rank === "memorial") return 3;
  if (rank === "optional-memorial") return 2;
  return 1;
}

function inferRank(title: string, description?: string): LiturgicalRank | undefined {
  const text = `${title}\n${description ?? ""}`.toLowerCase();
  if (text.includes("holyday") || text.includes("holy day")) return "holy-day";
  if (text.includes("solemnity")) return "solemnity";
  if (text.includes("optional memorial")) return "optional-memorial";
  if (text.includes("memorial")) return "memorial";
  if (text.includes("feast")) return "feast";
  if (text.includes("sunday")) return "sunday";
  return undefined;
}

function inferColors(title: string, description?: string): LiturgicalColor[] | undefined {
  const text = `${title}\n${description ?? ""}`.toLowerCase();
  const colors = ["violet", "white", "gold", "green", "red", "rose", "black", "blue"].filter((color) =>
    text.includes(color),
  ) as LiturgicalColor[];

  return colors.length ? colors : undefined;
}

function inferSeason(title: string, description?: string): LiturgicalSeasonName | undefined {
  const text = `${title}\n${description ?? ""}`.toLowerCase();
  if (text.includes("pentecost")) return "Pentecost";
  if (text.includes("advent")) return "Advent";
  if (text.includes("christmas") || text.includes("nativity of the lord")) return "Christmas";
  if (text.includes("lent") || text.includes("lenten") || text.includes("holy week")) return "Lent";
  if (text.includes("easter") || text.includes("ascension")) return "Easter";
  if (text.includes("ordinary time")) return "Ordinary Time";
  return undefined;
}
