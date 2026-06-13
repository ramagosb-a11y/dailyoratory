import { massReadingsReflectionMedia, massReadingsReflections } from "@/data/massReadingsReflections";
import type { ContentSourceReference } from "@/types/content";
import type {
  MassReadingReference,
  MassReadingsReflection,
  ReflectionMediaRecord,
  ReflectionPrayer,
  ReflectionStatus,
  ReflectionType,
} from "@/types/massReadingsReflections";

const DEFAULT_SHEET_ID = "17sMLuAMjUYyEo0ZqSJBrLF3p-j-9e6Dbzn7UEfoMmr0";
const REFLECTIONS_SHEET = "Mass_Readings_Reflections";
const MEDIA_SHEET = "Reflection_Media";
const CACHE_TAG = "mass-readings-google-sheet";
const REVALIDATE_SECONDS = 60 * 60 * 24;
const OFFICIAL_READINGS_URL = "https://bible.usccb.org/daily-bible-reading";

type SheetRow = Record<string, string>;

export async function getMassReadingsReflectionsSource() {
  const remoteSheetId = getMassReadingsSheetId();
  if (!remoteSheetId) {
    return {
      reflections: massReadingsReflections,
      media: massReadingsReflectionMedia,
      sourceMode: "static-only" as const,
      remoteSheetId: "",
    };
  }

  const [remoteReflections, remoteMedia] = await Promise.all([
    fetchReflectionRows(remoteSheetId),
    fetchMediaRows(remoteSheetId),
  ]);

  return {
    reflections: mergeReflections(remoteReflections, massReadingsReflections),
    media: mergeMedia(remoteMedia, massReadingsReflectionMedia),
    sourceMode: remoteReflections.length > 0 ? ("google-sheet" as const) : ("static-fallback" as const),
    remoteSheetId,
  };
}

export function getMassReadingsSheetId() {
  return (
    process.env.GOOGLE_SHEETS_MASS_READINGS_SHEET_ID ||
    process.env.MASS_READINGS_REFLECTIONS_SHEET_ID ||
    DEFAULT_SHEET_ID
  ).trim();
}

export function getMassReadingsGoogleSheetTag() {
  return CACHE_TAG;
}

async function fetchReflectionRows(sheetId: string) {
  try {
    const rows = await fetchGoogleSheetRows(sheetId, REFLECTIONS_SHEET);
    return rows.map((row, index) => mapRowToReflection(row, index)).filter(Boolean) as MassReadingsReflection[];
  } catch {
    return [];
  }
}

async function fetchMediaRows(sheetId: string) {
  try {
    const rows = await fetchGoogleSheetRows(sheetId, MEDIA_SHEET);
    return rows.map((row) => mapRowToMedia(row)).filter(Boolean) as ReflectionMediaRecord[];
  } catch {
    return [];
  }
}

async function fetchGoogleSheetRows(sheetId: string, sheetName: string): Promise<SheetRow[]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(
    sheetName,
  )}`;

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

function mapRowToReflection(row: SheetRow, index: number): MassReadingsReflection | null {
  const slug = pick(row, ["Slug"]);
  const title = pick(row, ["Title"]);
  const reflectionDate = pick(row, ["Reflection Date"]);

  if (!slug || !title || !reflectionDate) return null;

  const reflectionType = normalizeReflectionType(pick(row, ["Reflection Type"]));
  const status = normalizeReflectionStatus(pick(row, ["Status"]));
  const bodyParagraphs = splitParagraphs(pick(row, ["Body"]));
  const prayerBody = pick(row, ["Prayer", "Prayers"]);
  const prayers = buildPrayerRecords(prayerBody);
  const externalReadingsUrl = pick(row, ["External Readings URL", "Official Readings URL"]) || OFFICIAL_READINGS_URL;
  const notes = pick(row, ["Notes"]);
  const createdAt = normalizeDateTime(pick(row, ["Created At"]), reflectionDate);
  const updatedAt = normalizeDateTime(pick(row, ["Updated At"]), reflectionDate);
  const source: ContentSourceReference = {
    system: "google-sheets",
    sheetName: REFLECTIONS_SHEET,
    externalId: pick(row, ["Reflection ID"]) || slug,
    lastSyncedAt: new Date().toISOString(),
  };

  return {
    id: pick(row, ["Reflection ID"]) || `mass-reading-${slug}`,
    title,
    slug,
    description: pick(row, ["Short Description"]) || title,
    category: "Reflection",
    tags: buildTags(reflectionType, pick(row, ["Liturgical Season"]), pick(row, ["Theme"])),
    relatedResourceIds: splitList(pick(row, ["Related Resource IDs"])),
    status,
    createdAt,
    updatedAt,
    visibility: "public",
    source,
    sourceNotes:
      "Imported from the Daily Oratory Google Sheet. Scripture references only; no full modern Bible readings are republished.",
    copyrightStatus: "original",
    attributionText: "Original reflection by Daily Oratory.",
    contentAuthor: "Daily Oratory",
    contentReviewer: notes || "Sheet import pending editorial review.",
    provenance: {
      sourceType: "original",
      creator: "Daily Oratory",
      sourceName: "Daily Oratory Google Sheet",
      copyrightStatus: "original",
      attributionText: "Original reflection by Daily Oratory.",
      attributionRequired: false,
      reviewStatus: "reviewed",
      notes: notes || "Imported from Google Sheets.",
    },
    schemaVersion: 1,
    contentType: "mass-readings-reflection",
    reflectionDate,
    reflectionType,
    liturgicalDay: pick(row, ["Liturgical Day"]) || title,
    liturgicalSeason: normalizeSeason(pick(row, ["Liturgical Season"])),
    lectionaryNumber: pick(row, ["Lectionary Number"]) || "",
    cycleYear: normalizeCycleYear(pick(row, ["Cycle Year"])),
    weekdayCycle: normalizeWeekdayCycle(pick(row, ["Weekday Cycle"])),
    readings: buildReadings(row),
    firstReadingReference: emptyToUndefined(pick(row, ["First Reading Reference"])),
    psalmReference: emptyToUndefined(pick(row, ["Psalm Reference"])),
    secondReadingReference: emptyToUndefined(pick(row, ["Second Reading Reference"])),
    gospelReference: emptyToUndefined(pick(row, ["Gospel Reference"])),
    theme: pick(row, ["Theme"]) || "Mass readings reflection",
    shortDescription: pick(row, ["Short Description"]) || title,
    featuredImageUrl: emptyToUndefined(pick(row, ["Featured Image URL"])),
    featuredImageAlt: emptyToUndefined(pick(row, ["Featured Image Alt"])),
    body: bodyParagraphs.length ? bodyParagraphs : [title],
    theologicalInsights: splitParagraphsOrList(pick(row, ["Theological Insights"])),
    connectionBetweenReadings: pick(row, ["Connection Between Readings"]),
    spiritualInvitation: pick(row, ["Spiritual Invitation"]),
    prayers,
    liturgyPoints: splitParagraphsOrList(pick(row, ["Liturgy Points"])),
    practicalApplication: splitParagraphsOrList(pick(row, ["Practical Application"])),
    liturgicalInsight:
      pick(row, ["Liturgical Insight"]) ||
      "The Church teaches through the rhythm of the liturgy as well as through the text of the readings.",
    saintOfDay: emptyToUndefined(pick(row, ["Saint Of Day"])),
    saintWitness: emptyToUndefined(pick(row, ["Saint Witness"])),
    mediaIds: splitList(pick(row, ["Media IDs"])),
    featured: parseBoolean(pick(row, ["Featured"])) || index === 0,
    externalReadingsUrl,
    canonicalPath: `/reflections/mass-readings/${slug}`,
  };
}

function mapRowToMedia(row: SheetRow): ReflectionMediaRecord | null {
  const id = pick(row, ["Media ID"]);
  const reflectionId = pick(row, ["Reflection ID"]);
  const title = pick(row, ["Title"]);
  if (!id || !reflectionId || !title) return null;

  return {
    id,
    reflectionId,
    mediaType: normalizeMediaType(pick(row, ["Media Type"])),
    title,
    description: pick(row, ["Description"]) || title,
    fileUrl: emptyToUndefined(pick(row, ["File URL"])),
    embedUrl: emptyToUndefined(pick(row, ["Embed URL"])),
    thumbnailUrl: emptyToUndefined(pick(row, ["Thumbnail URL"])),
    altText: emptyToUndefined(pick(row, ["Alt Text"])),
    creator: emptyToUndefined(pick(row, ["Creator"])),
    sourceUrl: emptyToUndefined(pick(row, ["Source URL"])),
    license: emptyToUndefined(pick(row, ["License"])),
    copyrightStatus: "original",
    sortOrder: Number(pick(row, ["Sort Order"]) || "0") || 0,
    status: normalizeMediaStatus(pick(row, ["Status"])),
    createdAt: normalizeDateTime(pick(row, ["Created At"]), new Date().toISOString().slice(0, 10)),
    updatedAt: normalizeDateTime(pick(row, ["Updated At"]), new Date().toISOString().slice(0, 10)),
    notes: emptyToUndefined(pick(row, ["Notes"])),
  };
}

function mergeReflections(remote: MassReadingsReflection[], local: MassReadingsReflection[]) {
  const bySlug = new Map<string, MassReadingsReflection>();
  for (const record of local) bySlug.set(record.slug, record);
  for (const record of remote) bySlug.set(record.slug, record);
  return Array.from(bySlug.values());
}

function mergeMedia(remote: ReflectionMediaRecord[], local: ReflectionMediaRecord[]) {
  const byId = new Map<string, ReflectionMediaRecord>();
  for (const record of local) byId.set(record.id, record);
  for (const record of remote) byId.set(record.id, record);
  return Array.from(byId.values());
}

function buildReadings(row: SheetRow): MassReadingReference[] {
  const readings: MassReadingReference[] = [];
  const firstReading = pick(row, ["First Reading Reference"]);
  const psalm = pick(row, ["Psalm Reference"]);
  const secondReading = pick(row, ["Second Reading Reference"]);
  const gospel = pick(row, ["Gospel Reference"]);

  if (firstReading) readings.push({ label: "First Reading", reference: firstReading });
  if (psalm) readings.push({ label: "Responsorial Psalm", reference: psalm });
  if (secondReading) readings.push({ label: "Second Reading", reference: secondReading });
  if (gospel) readings.push({ label: "Gospel", reference: gospel });

  return readings;
}

function buildPrayerRecords(value: string): ReflectionPrayer[] {
  if (!value) return [];
  return splitParagraphs(value).map((paragraph, index) => ({
    title: index === 0 ? "Prayer" : `Prayer ${index + 1}`,
    body: paragraph,
  }));
}

function buildTags(reflectionType: ReflectionType, season: string, theme: string) {
  return ["mass readings", reflectionType, season, theme]
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function splitParagraphs(value: string) {
  return value
    .split(/\r?\n\s*\r?\n/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

function splitParagraphsOrList(value: string) {
  if (!value) return [];
  if (value.includes("|")) return splitList(value);
  return value
    .split(/\r?\n|•/g)
    .map((item) => item.replace(/^-+/, "").trim())
    .filter(Boolean);
}

function splitList(value: string) {
  if (!value) return [];
  return value
    .split(/[|,]/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

function pick(row: SheetRow, keys: string[]) {
  for (const key of keys) {
    if (row[key]?.trim()) return row[key].trim();
  }
  return "";
}

function parseBoolean(value: string) {
  return ["true", "yes", "1"].includes(value.trim().toLowerCase());
}

function normalizeReflectionType(value: string): ReflectionType {
  const normalized = value.trim().toLowerCase();
  if (
    normalized === "daily-mass" ||
    normalized === "sunday-mass" ||
    normalized === "solemnity" ||
    normalized === "feast-day" ||
    normalized === "memorial" ||
    normalized === "optional-memorial" ||
    normalized === "seasonal"
  ) {
    return normalized;
  }
  return "daily-mass";
}

function normalizeReflectionStatus(value: string): ReflectionStatus {
  const normalized = value.trim().toLowerCase();
  if (normalized === "scheduled" || normalized === "draft" || normalized === "archived" || normalized === "published") {
    return normalized;
  }
  if (normalized === "approved") return "published";
  return "draft";
}

function normalizeCycleYear(value: string): MassReadingsReflection["cycleYear"] {
  const normalized = value.trim().toUpperCase();
  if (normalized === "A" || normalized === "B" || normalized === "C") return normalized;
  return "none";
}

function normalizeWeekdayCycle(value: string): MassReadingsReflection["weekdayCycle"] {
  const normalized = value.trim().toUpperCase();
  if (normalized === "I" || normalized === "II") return normalized;
  return "none";
}

function normalizeSeason(value: string): MassReadingsReflection["liturgicalSeason"] {
  const normalized = value.trim();
  if (
    normalized === "Advent" ||
    normalized === "Christmas" ||
    normalized === "Lent" ||
    normalized === "Easter" ||
    normalized === "Pentecost" ||
    normalized === "Ordinary Time" ||
    normalized === "Marian"
  ) {
    return normalized;
  }
  return "All Year";
}

function normalizeMediaType(value: string): ReflectionMediaRecord["mediaType"] {
  const normalized = value.trim().toLowerCase();
  if (
    normalized === "image" ||
    normalized === "gallery" ||
    normalized === "pdf" ||
    normalized === "powerpoint" ||
    normalized === "download"
  ) {
    return normalized;
  }
  return "download";
}

function normalizeMediaStatus(value: string): ReflectionMediaRecord["status"] {
  return value.trim().toLowerCase() === "published" ? "published" : "draft";
}

function normalizeDateTime(value: string, fallbackDate: string) {
  if (!value) return fallbackDate;
  return value;
}

function emptyToUndefined(value: string) {
  return value || undefined;
}
