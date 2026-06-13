import calendarDays from "@/data/liturgicalCalendar/usccbPdfCalendar.generated.json";
import type { ISODateString, LiturgicalSeasonName } from "@/types/content";
import type { LiturgicalColor, LiturgicalDayRecord, LiturgicalHolyDayRecord, LiturgicalRank } from "@/types/liturgicalLiving";

type PdfCalendarDay = {
  date: ISODateString;
  weekday: string;
  title: string;
  jurisdiction?: string | null;
  colors: string[];
  context?: string | null;
  sourcePdf: string;
  sourceUrl: string;
  rank: string;
  season: string;
  subtitle?: string;
  optionalObservances?: string[];
  readings?: string;
  notes?: string[];
  uid: string;
  regionalAlternates?: Array<{
    context?: string | null;
    title: string;
    rank?: string;
    colors?: string[];
    readings?: string;
  }>;
};

const pdfCalendarDays = calendarDays as PdfCalendarDay[];

export const usccbCalendarSourceUrls: Record<2026 | 2027 | 2028, string> = {
  2026: "https://www.usccb.org/resources/2026cal.pdf",
  2027: "https://www.usccb.org/resources/2027cal.pdf",
  2028: "https://www.usccb.org/resources/2028cal.pdf",
};

const sourceNote =
  "Based on the USCCB Liturgical Calendar PDFs for the Dioceses of the United States of America. Verify local observances with your diocese.";

export const usccbLiturgicalDayRecords: LiturgicalDayRecord[] = pdfCalendarDays.map(toLiturgicalDayRecord);

export const usccbGeneratedHolyDays: LiturgicalHolyDayRecord[] = usccbLiturgicalDayRecords
  .filter(isGeneratedHolyDay)
  .map((day) => ({
    id: `holy-${day.slug}`,
    title: day.title,
    date: day.date,
    season: day.season,
    rank: getHolyDayRank(day),
    colors: day.colors,
    description: day.description,
    obligationNote: getObligationNote(day.title, day.date),
    localObservanceNote: day.localObservanceNote,
  }));

function toLiturgicalDayRecord(day: PdfCalendarDay): LiturgicalDayRecord {
  const title = formatDisplayTitle(day);
  const rank = normalizeRank(day.rank);
  const season = normalizeSeason(day.season);
  const colors = normalizeColors(day.colors, season, rank);

  return {
    id: `usccb-pdf-${day.date}`,
    title,
    slug: `${day.date}-${slugify(title)}`,
    description: getDescription(title, season, rank),
    category: "Liturgical Year",
    tags: ["usccb calendar", "liturgical calendar", season.toLowerCase(), rank],
    relatedResourceIds: ["res-daily-reflections"],
    status: "published",
    createdAt: "2026-05-31",
    updatedAt: "2026-05-31",
    visibility: "public",
    source: { system: "manual-import", externalId: day.sourceUrl },
    schemaVersion: 1,
    contentType: "liturgical-day",
    date: day.date,
    season,
    rank,
    colors,
    saintOrFeast: getSaintOrFeast(title, rank),
    massReadingsCitation: day.readings || "See the official USCCB daily readings.",
    dailyReadingsUrl: "https://bible.usccb.org/daily-bible-reading",
    suggestedPrayer: getSuggestedPrayer(season, title),
    suggestedDevotion: getSuggestedDevotion(title, season),
    seasonalPractice: getSeasonalPractice(season),
    fastingReminder: getFastingReminder(day.date, season, title),
    familyPrayerIdea: {
      title: "Pray with today's observance",
      description: "Name one grace from today's liturgical day and ask the Lord to help your home receive it.",
    },
    worksOfMercySuggestion: {
      title: "Choose one work of mercy",
      description: "Let today's prayer become one concrete act of charity.",
    },
    featuredResourceIds: ["res-daily-reflections"],
    localObservanceNote: buildLocalObservanceNote(day),
    relatedSaintIds: [],
  };
}

function formatDisplayTitle(day: PdfCalendarDay) {
  return day.subtitle ? `${day.title} ${day.subtitle}` : day.title;
}

function normalizeRank(value: string): LiturgicalRank {
  const normalized = value.toLowerCase().replace(/\s+/g, "-");
  if (normalized === "optional-memorial") return "optional-memorial";
  if (normalized === "memorial") return "memorial";
  if (normalized === "feast") return "feast";
  if (normalized === "solemnity") return "solemnity";
  if (normalized === "sunday") return "sunday";
  if (normalized === "holy-day") return "holy-day";
  return "weekday";
}

function normalizeSeason(value: string): LiturgicalSeasonName {
  if (value === "Advent" || value === "Christmas" || value === "Lent" || value === "Easter") return value;
  if (value === "Pentecost" || value === "Ordinary Time" || value === "Marian" || value === "All Year") return value;
  return "Ordinary Time";
}

function normalizeColors(values: string[], season: LiturgicalSeasonName, rank: LiturgicalRank): LiturgicalColor[] {
  const colors = Array.from(new Set(values)).filter(isLiturgicalColor);
  if (colors.length) return colors;
  if (season === "Advent" || season === "Lent") return ["violet"];
  if (season === "Easter" || season === "Christmas" || rank === "solemnity" || rank === "feast") return ["white", "gold"];
  return ["green"];
}

function isLiturgicalColor(value: string): value is LiturgicalColor {
  return ["violet", "white", "gold", "green", "red", "rose", "black", "blue"].includes(value);
}

function getSaintOrFeast(title: string, rank: LiturgicalRank) {
  return rank === "weekday" ? undefined : title;
}

function buildLocalObservanceNote(day: PdfCalendarDay) {
  const notes = [sourceNote];

  if (day.context) {
    notes.push(`Default row used: ${day.context}.`);
  }

  for (const alternate of day.regionalAlternates ?? []) {
    if (alternate.context) {
      notes.push(`Regional alternate: ${alternate.context} observes ${alternate.title}.`);
    }
  }

  return notes.join(" ");
}

function getDescription(title: string, season: LiturgicalSeasonName, rank: LiturgicalRank) {
  if (rank === "solemnity" || rank === "holy-day") return `${title}, observed in the liturgical calendar for the United States.`;
  if (rank === "feast" || rank === "memorial" || rank === "optional-memorial") return `${title}, with readings and observance details drawn from the USCCB calendar.`;
  return `${title} in the ${season} season.`;
}

function getSuggestedPrayer(season: LiturgicalSeasonName, title: string) {
  if (title.includes("Pentecost")) return { title: "Come, Holy Spirit", description: "Ask the Holy Spirit to renew your heart and guide your witness today." };
  if (season === "Lent") return { title: "Return to mercy", description: "Ask for contrition, conversion, and the grace to begin again." };
  if (season === "Easter") return { title: "Receive resurrection joy", description: "Thank Christ for the victory of His Resurrection and ask to live as His witness." };
  if (season === "Advent") return { title: "Come, Lord Jesus", description: "Pray with watchful hope and ask Christ to prepare your heart." };
  if (season === "Christmas") return { title: "Adore the Word made flesh", description: "Thank Jesus for coming near in humility and love." };
  return { title: "Begin in prayer", description: "Offer the day to the Lord and ask for grace to live faithfully." };
}

function getSuggestedDevotion(title: string, season: LiturgicalSeasonName) {
  if (title.includes("Body and Blood") || title.includes("Sacred Heart")) return { title: "Enter Adoration", description: "Spend time before the Lord in the Eucharist or make an act of spiritual communion.", href: "/adoration" };
  if (title.includes("Mary") || title.includes("Guadalupe") || season === "Advent") return { title: "Pray with Mary", description: "Ask Our Lady to teach you faithful attention to Christ.", href: "/rosary" };
  if (title.includes("Cross") || season === "Lent") return { title: "Pray before the Cross", description: "Remain with Christ in silence and ask for perseverance." };
  return { title: "Pray with the Church", description: "Open the official readings and keep one phrase with you today." };
}

function getSeasonalPractice(season: LiturgicalSeasonName) {
  if (season === "Lent") return { title: "Prayer, fasting, and mercy", description: "Choose one small act of repentance and one act of charity today." };
  if (season === "Easter") return { title: "Live resurrection joy", description: "Name one sign of new life and answer it with gratitude." };
  if (season === "Advent") return { title: "Prepare a quiet heart", description: "Make room for Christ through silence, patience, and hope." };
  if (season === "Christmas") return { title: "Keep Christmas as a season", description: "Let the joy of the Incarnation shape prayer, home, and mercy." };
  return { title: "Grow in virtue", description: "Practice one concrete act of humility, patience, or charity." };
}

function getFastingReminder(date: ISODateString, season: LiturgicalSeasonName, title: string) {
  if (title === "Ash Wednesday" || title === "Friday of the Passion of the Lord") {
    return {
      applies: true,
      title: "Universal day of fasting and abstinence",
      description: "Follow the Church's discipline for fasting and abstinence, according to your state in life.",
      severity: "required" as const,
    };
  }

  if (season === "Lent" && new Date(`${date}T12:00:00`).getDay() === 5) {
    return {
      applies: true,
      title: "Friday of Lent",
      description: "Observe abstinence according to the Church's discipline and your local pastoral guidance.",
      severity: "required" as const,
    };
  }

  return {
    applies: false,
    title: "Verify local observances",
    description: "Fasting, abstinence, and obligation details can vary by date, country, and local calendar.",
    severity: "pastoral-note" as const,
  };
}

function isGeneratedHolyDay(day: LiturgicalDayRecord) {
  const title = day.title.toLowerCase();
  return (
    title.includes("mary, the holy mother of god") ||
    title.includes("ascension of the lord") ||
    title.includes("assumption of the blessed virgin mary") ||
    title.includes("all saints") ||
    title.includes("immaculate conception of the blessed virgin mary") ||
    title.includes("nativity of the lord") ||
    title.includes("pentecost sunday") ||
    title.includes("most holy body and blood of christ")
  );
}

function getHolyDayRank(day: LiturgicalDayRecord): LiturgicalRank {
  const title = day.title.toLowerCase();
  if (
    title.includes("mary, the holy mother of god") ||
    title.includes("assumption of the blessed virgin mary") ||
    title.includes("all saints") ||
    title.includes("immaculate conception of the blessed virgin mary") ||
    title.includes("nativity of the lord")
  ) {
    return "holy-day";
  }

  return day.rank;
}

function getObligationNote(title: string, date: ISODateString) {
  const normalized = title.toLowerCase();
  if (normalized.includes("nativity of the lord")) return "Christmas is a holy day of obligation in the United States.";
  if (normalized.includes("ascension of the lord")) return "Ascension observance varies by ecclesiastical province in the United States.";
  if (normalized.includes("assumption of the blessed virgin mary") && isSaturdayOrMonday(date)) {
    return "When this solemnity falls on a Saturday or Monday, the obligation is abrogated in the United States.";
  }
  return "Verify obligation status with your diocese.";
}

function isSaturdayOrMonday(date: ISODateString) {
  const day = new Date(`${date}T12:00:00`).getDay();
  return day === 6 || day === 1;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
