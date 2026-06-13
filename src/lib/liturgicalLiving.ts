import {
  defaultLiturgicalLivingSettings,
  diocesanVerificationNote,
  liturgicalDayRecords,
  liturgicalHolyDays,
  liturgicalSeasonRecords,
  officialDailyReadingsUrl,
} from "@/data/liturgicalLiving";
import { getGoogleLiturgicalCalendarEventForDate, type GoogleLiturgicalCalendarEvent } from "@/lib/googleLiturgicalCalendar";
import { getContentById, getRelatedContent, type DailyOratoryContentRecord } from "@/lib/content";
import type { ISODateString, LiturgicalSeasonName } from "@/types/content";
import type { LiturgicalDayRecord, LiturgicalHolyDayRecord } from "@/types/liturgicalLiving";

export type LiturgicalDashboardModel = {
  isoDate: ISODateString;
  dateLabel: string;
  day: LiturgicalDayRecord;
  season: (typeof liturgicalSeasonRecords)[number];
  upcomingHolyDays: LiturgicalHolyDayRecord[];
  featuredResources: DailyOratoryContentRecord[];
  verificationNote: string;
  officialReadingsUrl: string;
};

export type CalendarDayCell = {
  date: ISODateString;
  dayNumber: number;
  isToday: boolean;
  record?: LiturgicalDayRecord;
};

export type CalendarMonthModel = {
  label: string;
  year: number;
  month: number;
  leadingBlanks: number[];
  days: CalendarDayCell[];
};

export function getTodayIsoDate(date = new Date(), timeZone = defaultLiturgicalLivingSettings.timeZone) {
  const rolloverHour = defaultLiturgicalLivingSettings.dayRolloverHour ?? 0;
  const localParts = getTimeZoneDateParts(date, timeZone);
  const effectiveDate =
    localParts.hour < rolloverHour ? new Date(date.getTime() - 24 * 60 * 60 * 1000) : date;
  const parts = getTimeZoneDateParts(effectiveDate, timeZone);

  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function getLiturgicalDashboardModel(date = new Date()): LiturgicalDashboardModel {
  const isoDate = getTodayIsoDate(date);
  const day = getLiturgicalDayForDate(isoDate) ?? createUnauthoredDay(isoDate);
  const season = getSeasonRecord(day.season);

  return {
    isoDate,
    dateLabel: formatLongDate(isoDate),
    day,
    season,
    upcomingHolyDays: getUpcomingHolyDays(isoDate, 4),
    featuredResources: getFeaturedResourcesForDay(day),
    verificationNote: diocesanVerificationNote,
    officialReadingsUrl: day.dailyReadingsUrl ?? officialDailyReadingsUrl,
  };
}

export async function getLiturgicalDashboardModelWithGoogleCalendar(date = new Date()): Promise<LiturgicalDashboardModel> {
  const model = getLiturgicalDashboardModel(date);
  const googleEvent = await getGoogleLiturgicalCalendarEventForDate(model.isoDate);

  if (!googleEvent) return model;

  const day = mergeGoogleCalendarEvent(model.day, googleEvent);

  return {
    ...model,
    day,
    season: getSeasonRecord(day.season),
    verificationNote:
      "Today's liturgical day is sourced from the Daily Oratory Google Calendar when available, with the USCCB PDF-derived calendar as a local fallback. Verify local observances with your diocese.",
  };
}

export function getLiturgicalDayForDate(date: ISODateString) {
  return liturgicalDayRecords.find((record) => record.date === date);
}

export function getSeasonRecord(season: LiturgicalSeasonName) {
  return (
    liturgicalSeasonRecords.find((record) => record.season === season) ??
    liturgicalSeasonRecords.find((record) => record.season === "Ordinary Time") ??
    liturgicalSeasonRecords[0]
  );
}

export function getUpcomingHolyDays(fromDate: ISODateString, limit = 6) {
  const upcoming = liturgicalHolyDays
    .filter((day) => day.date >= fromDate)
    .sort((a, b) => a.date.localeCompare(b.date));

  return (upcoming.length ? upcoming : [...liturgicalHolyDays].sort((a, b) => a.date.localeCompare(b.date))).slice(0, limit);
}

export function getCalendarMonthModel(date = new Date()): CalendarMonthModel {
  const todayIso = getTodayIsoDate(date);
  const [year, month] = todayIso.split("-").map(Number);
  const firstOfMonth = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const recordsByDate = new Map(liturgicalDayRecords.map((record) => [record.date, record]));

  return {
    label: new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(firstOfMonth),
    year,
    month,
    leadingBlanks: Array.from({ length: firstOfMonth.getDay() }, (_, index) => index),
    days: Array.from({ length: daysInMonth }, (_, index) => {
      const dayNumber = index + 1;
      const isoDate = `${year}-${String(month).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;

      return {
        date: isoDate,
        dayNumber,
        isToday: isoDate === todayIso,
        record: recordsByDate.get(isoDate),
      };
    }),
  };
}

export function getFeaturedResourcesForDay(day: LiturgicalDayRecord) {
  const featuredIds = day.featuredResourceIds?.length ? day.featuredResourceIds : day.relatedResourceIds;
  const explicit = featuredIds
    .map((id) => getContentById(id))
    .filter((record): record is DailyOratoryContentRecord => Boolean(record));

  if (explicit.length) return explicit.slice(0, 4);

  return getRelatedContent(day, 4);
}

export function formatLongDate(isoDate: ISODateString) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parseIsoDate(isoDate));
}

export function formatShortDate(isoDate: ISODateString) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(parseIsoDate(isoDate));
}

export function formatRank(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function parseIsoDate(isoDate: ISODateString) {
  return new Date(`${isoDate}T12:00:00`);
}

function getTimeZoneDateParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
  }).formatToParts(date);

  return {
    year: parts.find((part) => part.type === "year")?.value ?? "2026",
    month: parts.find((part) => part.type === "month")?.value ?? "01",
    day: parts.find((part) => part.type === "day")?.value ?? "01",
    hour: Number(parts.find((part) => part.type === "hour")?.value ?? "00"),
  };
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

function mergeGoogleCalendarEvent(day: LiturgicalDayRecord, event: GoogleLiturgicalCalendarEvent): LiturgicalDayRecord {
  const season = event.season ?? day.season;
  const rank = event.rank ?? day.rank;
  const colors = event.colors?.length ? event.colors : day.colors;
  const massReadingsCitation = extractGoogleCalendarReadings(event.description) ?? day.massReadingsCitation;

  return {
    ...day,
    id: `google-calendar-${day.date}`,
    title: event.title,
    slug: `${day.date}-${slugify(event.title)}`,
    description: getGoogleCalendarDescription(event.title, season, rank),
    source: { system: "google-calendar", externalId: event.uid },
    updatedAt: day.date,
    season,
    rank,
    colors,
    saintOrFeast: rank === "weekday" ? day.saintOrFeast : event.title,
    massReadingsCitation,
    localObservanceNote:
      "Sourced from the Daily Oratory Google Calendar. Verify holy days, transferred solemnities, patronal feasts, and local observances with your diocese or parish.",
  };
}

function extractGoogleCalendarReadings(description?: string) {
  if (!description) return undefined;
  const match = description.match(/(?:^|\n)Readings:\s*([^\n]+)/i);
  return match?.[1]?.trim();
}

function getGoogleCalendarDescription(title: string, season: LiturgicalSeasonName, rank: LiturgicalDayRecord["rank"]) {
  if (rank === "solemnity" || rank === "holy-day") return `${title}, observed in the liturgical calendar for the United States.`;
  if (rank === "feast" || rank === "memorial" || rank === "optional-memorial") return `${title}, from the Daily Oratory liturgical Google Calendar.`;
  return `${title} in the ${season} season.`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
