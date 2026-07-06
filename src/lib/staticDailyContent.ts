import {
  defaultLiturgicalLivingSettings,
  diocesanVerificationNote,
  liturgicalDayRecords,
  liturgicalSeasonRecords,
  officialDailyReadingsUrl,
} from "@/data/liturgicalLiving";
import type { ISODateString } from "@/types/content";
import type { LiturgicalDayRecord } from "@/types/liturgicalLiving";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";
import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";

const DAY_MS = 24 * 60 * 60 * 1000;
const SITE_TIME_ZONE = defaultLiturgicalLivingSettings.timeZone;
const SITE_DAY_ROLLOVER_HOUR = defaultLiturgicalLivingSettings.dayRolloverHour ?? 0;

export type StaticLiturgicalDashboardModel = {
  isoDate: ISODateString;
  dateLabel: string;
  day: LiturgicalDayRecord;
  season: (typeof liturgicalSeasonRecords)[number];
  verificationNote: string;
  officialReadingsUrl: string;
};

export type MassReflectionSelection = {
  reflection?: MassReadingsReflection;
  mode: "today" | "fallback" | "upcoming";
  referenceDate: ISODateString;
};

export function getCurrentSiteIsoDate(date = new Date()): ISODateString {
  const effectiveDate = getEffectiveSiteDate(date);
  const parts = getSiteDateParts(effectiveDate);

  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function getCurrentSiteDateKey(date = new Date()) {
  return isoDateToDateKey(getCurrentSiteIsoDate(date));
}

export function isoDateToDateKey(isoDate: string) {
  return isoDate.slice(5);
}

export function getStaticLiturgicalDashboardModelForIsoDate(
  isoDate: ISODateString,
): StaticLiturgicalDashboardModel {
  const day = liturgicalDayRecords.find((record) => record.date === isoDate) ?? createUnauthoredDay(isoDate);
  const season = getSeasonRecord(day.season);

  return {
    isoDate,
    dateLabel: formatLongDate(isoDate),
    day,
    season,
    verificationNote: diocesanVerificationNote,
    officialReadingsUrl: day.dailyReadingsUrl ?? officialDailyReadingsUrl,
  };
}

export function getStaticLiturgicalDashboardModel(date = new Date()) {
  return getStaticLiturgicalDashboardModelForIsoDate(getCurrentSiteIsoDate(date));
}

export function getStaticSaintForDateKey(entries: SaintOfTheDayEntry[], dateKey: string) {
  return getApprovedSaintEntries(entries).find((entry) => entry.dateKey === dateKey);
}

export function getStaticSaintForSiteDate(entries: SaintOfTheDayEntry[], date = new Date()) {
  return getStaticSaintForDateKey(entries, getCurrentSiteDateKey(date));
}

export function getApprovedSaintEntries(entries: SaintOfTheDayEntry[]) {
  return [...entries]
    .filter((entry) => entry.status === "approved")
    .sort((a, b) => a.sortOrder - b.sortOrder || a.month - b.month || a.day - b.day);
}

export function selectMassReflectionForIsoDate(
  reflections: MassReadingsReflection[],
  referenceDate: ISODateString,
): MassReflectionSelection | null {
  const today = sortSameDayReflections(
    reflections.filter(
      (reflection) => isReflectionLive(reflection, referenceDate) && reflection.reflectionDate === referenceDate,
    ),
  )[0];

  if (today) {
    return {
      reflection: today,
      mode: "today",
      referenceDate,
    };
  }

  const fallback = sortReflectionsDescending(
    reflections.filter((reflection) => isReflectionLive(reflection, referenceDate)),
  )[0];

  if (fallback) {
    return {
      reflection: fallback,
      mode: "fallback",
      referenceDate,
    };
  }

  const upcoming = sortReflectionsAscending(
    reflections.filter(
      (reflection) =>
        (reflection.status === "published" || reflection.status === "scheduled") &&
        reflection.reflectionDate > referenceDate,
    ),
  )[0];

  if (upcoming) {
    return {
      reflection: upcoming,
      mode: "upcoming",
      referenceDate,
    };
  }

  return null;
}

export function selectMassReflectionForSiteDate(reflections: MassReadingsReflection[], date = new Date()) {
  return selectMassReflectionForIsoDate(reflections, getCurrentSiteIsoDate(date));
}

export function getSeasonsPageAnchorForStaticSlug(slug: string) {
  switch (slug) {
    case "advent":
      return "advent";
    case "christmas":
      return "christmas";
    case "lent":
      return "lent";
    case "easter-triduum":
      return "triduum";
    case "easter-season":
      return "easter";
    case "ordinary-time":
      return "ordinary-time";
    default:
      return "what-is-the-liturgical-year";
  }
}

function getEffectiveSiteDate(date: Date) {
  const parts = getSiteDateParts(date);
  return parts.hour < SITE_DAY_ROLLOVER_HOUR ? new Date(date.getTime() - DAY_MS) : date;
}

function getSiteDateParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SITE_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    hourCycle: "h23",
  }).formatToParts(date);

  return {
    year: parts.find((part) => part.type === "year")?.value ?? "2026",
    month: parts.find((part) => part.type === "month")?.value ?? "01",
    day: parts.find((part) => part.type === "day")?.value ?? "01",
    hour: Number(parts.find((part) => part.type === "hour")?.value ?? "00"),
  };
}

function getSeasonRecord(seasonName: LiturgicalDayRecord["season"]) {
  return (
    liturgicalSeasonRecords.find((record) => record.season === seasonName) ??
    liturgicalSeasonRecords.find((record) => record.season === "Ordinary Time") ??
    liturgicalSeasonRecords[0]
  );
}

function formatLongDate(isoDate: ISODateString) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T12:00:00Z`));
}

function createUnauthoredDay(date: ISODateString): LiturgicalDayRecord {
  return {
    id: `day-${date}-placeholder`,
    title: "Today in the Church",
    slug: `${date}-today-in-the-church`,
    description: "Static calendar data has not yet been authored for this date.",
    category: "Liturgical Year",
    tags: ["today in the church", "liturgical calendar"],
    relatedResourceIds: ["res-daily-reflections", "prayer-morning-offering"],
    status: "published",
    createdAt: date,
    updatedAt: date,
    visibility: "public",
    source: { system: "static" },
    schemaVersion: 1,
    contentType: "liturgical-day",
    date,
    season: "All Year",
    rank: "weekday",
    colors: ["green"],
    saintOrFeast: "Verify local calendar",
    massReadingsCitation: "See official daily readings.",
    readings: [],
    dailyReadingsUrl: officialDailyReadingsUrl,
    suggestedPrayer: {
      title: "Begin in prayer",
      description: "Offer the day to the Lord and ask for grace to live faithfully.",
      resourceId: "prayer-morning-offering",
    },
    suggestedDevotion: {
      title: "Pray with the Church",
      description: "Use the official readings link and your diocesan calendar for today's observance.",
    },
    seasonalPractice: {
      title: "Build a daily rule of life",
      description: "Choose one small act of prayer, virtue, and mercy for today.",
      resourceId: "rule-template-simple-daily-rule",
    },
    fastingReminder: {
      applies: false,
      title: "Verify local observances",
      description: "Fasting and abstinence reminders depend on the date, country, and local calendar.",
      severity: "pastoral-note",
    },
    familyPrayerIdea: {
      title: "One-minute family prayer",
      description: "Pray the Our Father together and ask for peace in your home.",
    },
    worksOfMercySuggestion: {
      title: "Choose one work of mercy",
      description: "Look for a concrete way to serve someone near you today.",
    },
    featuredResourceIds: ["res-daily-reflections", "prayer-morning-offering"],
    relatedSaintIds: [],
  };
}

function isReflectionLive(reflection: MassReadingsReflection, referenceDate: ISODateString) {
  return (
    reflection.reflectionDate <= referenceDate &&
    (reflection.status === "published" || reflection.status === "scheduled")
  );
}

function sortSameDayReflections(reflections: MassReadingsReflection[]) {
  return [...reflections].sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));
}

function sortReflectionsDescending(reflections: MassReadingsReflection[]) {
  return [...reflections].sort(
    (a, b) =>
      dateValue(b.reflectionDate) - dateValue(a.reflectionDate) ||
      Number(b.featured) - Number(a.featured) ||
      a.title.localeCompare(b.title),
  );
}

function sortReflectionsAscending(reflections: MassReadingsReflection[]) {
  return [...reflections].sort(
    (a, b) =>
      dateValue(a.reflectionDate) - dateValue(b.reflectionDate) ||
      Number(b.featured) - Number(a.featured) ||
      a.title.localeCompare(b.title),
  );
}

function dateValue(value: string) {
  return new Date(`${value}T12:00:00Z`).getTime();
}
