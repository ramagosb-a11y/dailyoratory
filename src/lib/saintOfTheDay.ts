import { cache } from "react";
import { saintOfTheDayCalendar as localSaintOfTheDayCalendar } from "@/data/saintOfTheDayCalendar";
import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";

const DEFAULT_SAINT_OF_THE_DAY_SHEET_ID = "1NW-77lyZvbM7TmZT9xuR65b5HvPMLpK5Y-a-q8n9hHI";
const SAINT_OF_THE_DAY_SHEET = "Saint_Of_The_Day";
const FRANCISCAN_CALENDAR_URL = "https://www.franciscanmedia.org/saint-of-the-day/calendar/";
const FRANCISCAN_DAY_URL = "https://www.franciscanmedia.org/saint-of-the-day/";
const VATICAN_NEWS_SAINTS_URL = "https://www.vaticannews.va/en/saints.html";
const CATHOLIC_ONLINE_SAINTS_URL = "https://www.catholic.org/saints/sofd.php";
const CACHE_TAG = "saint-of-the-day-google-sheet";
const REVALIDATE_SECONDS = 60 * 60 * 24;
const SITE_TIME_ZONE = process.env.DAILY_ORATORY_SITE_TIME_ZONE || "America/Chicago";

type SheetRow = Record<string, string>;

type SaintOfTheDaySource = {
  entries: SaintOfTheDayEntry[];
  sourceMode: "google-sheet" | "static-fallback" | "static-only";
  remoteSheetId: string;
};

export function getTodayDateKey(date = new Date()) {
  const parts = getSiteDateParts(date);
  return `${parts.month}-${parts.day}`;
}

export function getSiteTimeZone() {
  return SITE_TIME_ZONE;
}

export function getSiteDate(date = new Date()) {
  const parts = getSiteDateParts(date);
  return new Date(parts.year, Number.parseInt(parts.month, 10) - 1, Number.parseInt(parts.day, 10), 12);
}

export function getSaintOfTheDaySheetId() {
  return (
    process.env.GOOGLE_SHEETS_SAINT_OF_THE_DAY_SHEET_ID ||
    process.env.SAINT_OF_THE_DAY_SHEET_ID ||
    DEFAULT_SAINT_OF_THE_DAY_SHEET_ID
  ).trim();
}

export const getSaintOfTheDaySource = cache(async (): Promise<SaintOfTheDaySource> => {
  const remoteSheetId = getSaintOfTheDaySheetId();
  if (!remoteSheetId) {
    return {
      entries: getSortedApprovedEntries(localSaintOfTheDayCalendar),
      sourceMode: "static-only",
      remoteSheetId: "",
    };
  }

  const remoteEntries = await fetchSaintOfTheDayRows(remoteSheetId);
  if (remoteEntries.length > 0) {
    return {
      entries: getSortedApprovedEntries(mergePreferredEntries(remoteEntries, localSaintOfTheDayCalendar)),
      sourceMode: "google-sheet",
      remoteSheetId,
    };
  }

  return {
    entries: getSortedApprovedEntries(localSaintOfTheDayCalendar),
    sourceMode: "static-fallback",
    remoteSheetId,
  };
});

export async function getApprovedSaintEntries() {
  return (await getSaintOfTheDaySource()).entries;
}

export async function getSaintByDateKey(dateKey: string) {
  return (await getApprovedSaintEntries()).find((entry) => entry.dateKey === dateKey);
}

export async function getSaintForDate(date = new Date()) {
  return getSaintByDateKey(getTodayDateKey(date));
}

export async function getUpcomingSaints(date = new Date(), count = 7) {
  return sortRelativeToDate(await getApprovedSaintEntries(), date, "next").slice(0, count);
}

export async function getPreviousSaints(date = new Date(), count = 7) {
  return sortRelativeToDate(await getApprovedSaintEntries(), date, "previous").slice(0, count);
}

export function getFallbackSaintOfTheDayLinks(date = new Date()) {
  const dateKey = getTodayDateKey(date);
  return [
    {
      label: "Franciscan Media Calendar",
      href: FRANCISCAN_CALENDAR_URL,
      source: "Franciscan Media",
      dateKey,
    },
    {
      label: "Franciscan Media Saint of the Day",
      href: FRANCISCAN_DAY_URL,
      source: "Franciscan Media",
      dateKey,
    },
    {
      label: "Vatican News Saints",
      href: VATICAN_NEWS_SAINTS_URL,
      source: "Vatican News",
      dateKey,
    },
    {
      label: "Catholic Online Saint of the Day",
      href: CATHOLIC_ONLINE_SAINTS_URL,
      source: "Catholic Online",
      dateKey,
    },
  ] as const;
}

export function formatSaintPrayerForCopy(entry: SaintOfTheDayEntry) {
  const prayer = entry.prayerPrompt
    ? entry.prayerPrompt
    : `Lord Jesus,\nthank You for the witness of ${entry.name}.\nThrough their prayers,\nhelp me grow in ${entry.virtue ?? "holiness"}\nand follow You more faithfully today.\nAmen.`;

  return `Prayer with ${entry.name}\n\n${prayer}`;
}

export function getRelatedSaintOfTheDayTools() {
  return [
    { title: "Saints Library", href: "/saints" },
    { title: "Angels", href: "/angels" },
    { title: "Relics", href: "/relics" },
    { title: "Sacramentals", href: "/sacramentals" },
    { title: "Devotions", href: "/devotions" },
    { title: "Formation", href: "/formation" },
  ];
}

export function isValidDateKey(value: string | undefined) {
  return Boolean(value && /^\d{2}-\d{2}$/.test(value));
}

export function formatDateKey(dateKey: string) {
  const [month, day] = dateKey.split("-").map((value) => Number.parseInt(value, 10));
  if (!month || !day) return dateKey;
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric" }).format(new Date(2026, month - 1, day));
}

function getSortedApprovedEntries(entries: SaintOfTheDayEntry[]) {
  return entries
    .filter((entry) => entry.status === "approved")
    .sort((a, b) => a.sortOrder - b.sortOrder || a.month - b.month || a.day - b.day);
}

function getSiteDateParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: SITE_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(date);
  return {
    year: Number.parseInt(parts.find((part) => part.type === "year")?.value ?? "2026", 10),
    month: parts.find((part) => part.type === "month")?.value ?? "01",
    day: parts.find((part) => part.type === "day")?.value ?? "01",
  };
}

function mergePreferredEntries(
  remoteEntries: SaintOfTheDayEntry[],
  localEntries: SaintOfTheDayEntry[],
) {
  const localByDateKey = new Map(localEntries.map((entry) => [entry.dateKey, entry]));
  const merged = remoteEntries.map((remoteEntry) => {
    const localEntry = localByDateKey.get(remoteEntry.dateKey);
    if (!localEntry) return remoteEntry;

    return {
      ...remoteEntry,
      ...localEntry,
      franciscanMediaUrl:
        localEntry.franciscanMediaUrl === FRANCISCAN_CALENDAR_URL
          ? remoteEntry.franciscanMediaUrl
          : localEntry.franciscanMediaUrl,
      vaticanNewsUrl: localEntry.vaticanNewsUrl || remoteEntry.vaticanNewsUrl,
      catholicOnlineUrl: localEntry.catholicOnlineUrl || remoteEntry.catholicOnlineUrl,
    };
  });

  for (const localEntry of localEntries) {
    if (!merged.some((entry) => entry.dateKey === localEntry.dateKey)) {
      merged.push(localEntry);
    }
  }

  return merged;
}

function dateKeyToDayOfYear(entry: Pick<SaintOfTheDayEntry, "month" | "day">) {
  const base = new Date(2024, 0, 1);
  const current = new Date(2024, entry.month - 1, entry.day);
  return Math.floor((current.getTime() - base.getTime()) / 86400000);
}

function sortRelativeToDate(
  entries: SaintOfTheDayEntry[],
  date = new Date(),
  direction: "next" | "previous" = "next",
) {
  const referenceDay = dateKeyToDayOfYear({ month: date.getMonth() + 1, day: date.getDate() });

  return [...entries]
    .map((entry) => {
      const entryDay = dateKeyToDayOfYear(entry);
      let delta = entryDay - referenceDay;
      if (direction === "next" && delta <= 0) delta += 366;
      if (direction === "previous" && delta >= 0) delta -= 366;
      return { entry, delta };
    })
    .filter((item) => (direction === "next" ? item.delta > 0 : item.delta < 0))
    .sort((a, b) => (direction === "next" ? a.delta - b.delta : b.delta - a.delta))
    .map((item) => item.entry);
}

async function fetchSaintOfTheDayRows(sheetId: string) {
  try {
    const rows = await fetchGoogleSheetRows(sheetId, SAINT_OF_THE_DAY_SHEET);
    return rows.map((row, index) => mapRowToSaintOfTheDayEntry(row, index)).filter(Boolean) as SaintOfTheDayEntry[];
  } catch {
    return [];
  }
}

async function fetchGoogleSheetRows(sheetId: string, sheetName: string): Promise<SheetRow[]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
  });

  if (!response.ok) return [];

  const body = await response.text();
  const match = body.match(/setResponse\(([\s\S]+)\);/);
  if (!match?.[1]) return [];

  const parsed = JSON.parse(match[1]) as {
    table?: { cols?: Array<{ label?: string }>; rows?: Array<{ c?: Array<{ v?: unknown; f?: string | null } | null> }> };
  };

  const cols = parsed.table?.cols ?? [];
  const rows = parsed.table?.rows ?? [];
  const headers = cols.map((col) => String(col.label ?? "").trim());
  if (!headers.length) return [];

  return rows
    .map((row) => {
      const record: SheetRow = {};
      headers.forEach((header, index) => {
        if (!header) return;
        const cell = row.c?.[index];
        const value = cell?.f ?? cell?.v;
        record[header] = value == null ? "" : String(value).trim();
      });
      return record;
    })
    .filter((record) => Object.values(record).some((value) => value.trim() !== ""));
}

function mapRowToSaintOfTheDayEntry(row: SheetRow, index: number): SaintOfTheDayEntry | null {
  const id = pick(row, ["ID", "Saint ID"]);
  const month = Number(pick(row, ["Month"]));
  const day = Number(pick(row, ["Day"]));
  const dateKey = pick(row, ["Date Key", "DateKey"]) || `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const name = pick(row, ["Name"]);
  const slug = pick(row, ["Slug"]);
  const title = pick(row, ["Title"]);
  const shortDescription = pick(row, ["Short Description"]);
  const dailyOratorySummary = pick(row, ["Daily Oratory Summary"]);
  const franciscanMediaUrl = pick(row, ["Franciscan Media URL"]) || FRANCISCAN_CALENDAR_URL;
  const vaticanNewsUrl = pick(row, ["Vatican News URL"]) || VATICAN_NEWS_SAINTS_URL;
  const catholicOnlineUrl = pick(row, ["Catholic Online URL"]) || CATHOLIC_ONLINE_SAINTS_URL;
  const status = normalizeStatus(pick(row, ["Status"])) ?? "review";
  const sortOrder = Number(pick(row, ["Sort Order"]) || `${index + 1}`) || index + 1;

  if (
    !id ||
    !month ||
    !day ||
    !isValidDateKey(dateKey) ||
    !name ||
    !slug ||
    !title ||
    !shortDescription ||
    !dailyOratorySummary
  ) {
    return null;
  }

  return {
    id,
    month,
    day,
    dateKey,
    name,
    slug,
    title,
    shortDescription,
    dailyOratorySummary,
    virtue: emptyToUndefined(pick(row, ["Virtue"])),
    patronage: emptyToUndefined(pick(row, ["Patronage"])),
    lifeDates: emptyToUndefined(pick(row, ["Life Dates"])),
    feastNote: emptyToUndefined(pick(row, ["Feast Note"])),
    prayerPrompt: emptyToUndefined(pick(row, ["Prayer Prompt"])),
    reflectionQuestion: emptyToUndefined(pick(row, ["Reflection Question"])),
    practicalAction: emptyToUndefined(pick(row, ["Practical Action"])),
    scriptureReference: emptyToUndefined(pick(row, ["Scripture Reference"])),
    relatedDailyOratoryLinks: buildRelatedLinks(pick(row, ["Related Daily Oratory Links"])),
    franciscanMediaUrl,
    vaticanNewsUrl,
    catholicOnlineUrl,
    imageUrl: emptyToUndefined(pick(row, ["Image URL"])),
    imageAlt: emptyToUndefined(pick(row, ["Image Alt"])),
    sourceNotes: emptyToUndefined(pick(row, ["Source Notes"])),
    copyrightNotes: emptyToUndefined(pick(row, ["Copyright Notes"])),
    status,
    sortOrder,
  };
}

function buildRelatedLinks(value: string) {
  if (!value) return [];

  return value
    .split(/\s*,\s*/g)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const [label, href] = entry.split("|").map((item) => item.trim());
      if (!label || !href) return null;
      return { label, href };
    })
    .filter((entry): entry is { label: string; href: string } => Boolean(entry));
}

function normalizeStatus(value: string) {
  const normalized = value.trim().toLowerCase();
  if (normalized === "approved" || normalized === "draft" || normalized === "review" || normalized === "hidden") {
    return normalized;
  }
  return null;
}

function pick(row: SheetRow, keys: string[]) {
  for (const key of keys) {
    if (row[key]?.trim()) return row[key].trim();
  }
  return "";
}

function emptyToUndefined(value: string) {
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}
