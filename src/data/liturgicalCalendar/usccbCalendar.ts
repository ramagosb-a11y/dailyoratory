import type { ISODateString, LiturgicalSeasonName } from "@/types/content";
import type { LiturgicalColor, LiturgicalDayRecord, LiturgicalHolyDayRecord, LiturgicalRank } from "@/types/liturgicalLiving";

type CalendarYear = 2026 | 2027 | 2028;

type CalendarEvent = {
  date: ISODateString;
  title: string;
  rank: LiturgicalRank;
  colors: LiturgicalColor[];
  season?: LiturgicalSeasonName;
  saintOrFeast?: string;
  tags?: string[];
  localObservanceNote?: string;
  obligationNote?: string;
};

const sourceByYear: Record<CalendarYear, string> = {
  2026: "https://www.usccb.org/resources/2026cal.pdf",
  2027: "https://www.usccb.org/resources/2027cal.pdf",
  2028: "https://www.usccb.org/resources/2028cal.pdf",
};

const yearConfig: Record<CalendarYear, { easter: ISODateString; adventStart: ISODateString }> = {
  2026: { easter: "2026-04-05", adventStart: "2026-11-29" },
  2027: { easter: "2027-03-28", adventStart: "2027-11-28" },
  2028: { easter: "2028-04-16", adventStart: "2028-12-03" },
};

const sourceNote =
  "Based on the USCCB Liturgical Calendar for the Dioceses of the United States of America. Verify local observances with your diocese.";

export const usccbCalendarSourceUrls = sourceByYear;

export const usccbLiturgicalDayRecords: LiturgicalDayRecord[] = ([2026, 2027, 2028] as const).flatMap((year) =>
  buildUsCalendarYear(year),
);

export const usccbGeneratedHolyDays: LiturgicalHolyDayRecord[] = usccbLiturgicalDayRecords
  .filter((day) => day.rank === "solemnity" || day.rank === "holy-day")
  .filter((day) =>
    [
      "Mary, the Holy Mother of God",
      "The Ascension of the Lord",
      "The Assumption of the Blessed Virgin Mary",
      "All Saints",
      "The Immaculate Conception of the Blessed Virgin Mary",
      "The Nativity of the Lord",
      "Pentecost Sunday",
      "The Most Holy Body and Blood of Christ",
    ].includes(day.title),
  )
  .map((day) => ({
    id: `holy-${day.slug}`,
    title: day.title,
    date: day.date,
    season: day.season,
    rank: day.title === "The Nativity of the Lord" ? "holy-day" : day.rank,
    colors: day.colors,
    description: day.description,
    obligationNote: getObligationNote(day.title, day.date),
    localObservanceNote: day.localObservanceNote,
  }));

function buildUsCalendarYear(year: CalendarYear) {
  const config = yearConfig[year];
  const start = `${year}-01-01`;
  const end = `${year}-12-31`;
  const events = new Map<string, CalendarEvent>();

  // Movable Paschal-cycle celebrations take precedence over fixed observances on the same date.
  for (const event of [...buildFixedEvents(year), ...buildMovableEvents(year, config.easter)]) {
    events.set(event.date, event);
  }

  return eachDate(start, end).map((date) => toLiturgicalDayRecord(year, date, events.get(date), config));
}

function buildMovableEvents(year: CalendarYear, easter: ISODateString): CalendarEvent[] {
  const ashWednesday = addDays(easter, -46);
  const palmSunday = addDays(easter, -7);
  const holyThursday = addDays(easter, -3);
  const goodFriday = addDays(easter, -2);
  const holySaturday = addDays(easter, -1);
  const ascensionThursday = addDays(easter, 39);
  const ascensionSunday = addDays(easter, 42);
  const pentecost = addDays(easter, 49);
  const trinitySunday = addDays(easter, 56);
  const corpusChristi = addDays(easter, 63);
  const sacredHeart = addDays(easter, 68);
  const christKing = addDays(yearConfig[year].adventStart, -7);

  return [
    event(ashWednesday, "Ash Wednesday", "weekday", ["violet"], "Lent"),
    event(palmSunday, "Palm Sunday of the Passion of the Lord", "sunday", ["red"], "Lent"),
    event(holyThursday, "Thursday of the Lord's Supper", "solemnity", ["white", "gold"], "Lent"),
    event(goodFriday, "Friday of the Passion of the Lord", "solemnity", ["red"], "Lent"),
    event(holySaturday, "Holy Saturday", "weekday", ["violet"], "Lent"),
    event(easter, "Easter Sunday of the Resurrection of the Lord", "solemnity", ["white", "gold"], "Easter"),
    event(ascensionThursday, "The Ascension of the Lord", "solemnity", ["white", "gold"], "Easter", {
      localObservanceNote:
        "Observed on Thursday in the ecclesiastical provinces of Boston, Hartford, New York, Omaha, and Philadelphia; transferred to Sunday in most other U.S. provinces.",
    }),
    event(ascensionSunday, "The Ascension of the Lord", "solemnity", ["white", "gold"], "Easter", {
      localObservanceNote:
        "Transferred to this Sunday in most U.S. ecclesiastical provinces. Verify your local diocesan calendar.",
    }),
    event(pentecost, "Pentecost Sunday", "solemnity", ["red"], "Pentecost"),
    event(trinitySunday, "The Most Holy Trinity", "solemnity", ["white", "gold"], "Ordinary Time"),
    event(corpusChristi, "The Most Holy Body and Blood of Christ", "solemnity", ["white", "gold"], "Ordinary Time", {
      localObservanceNote: "Local Eucharistic processions and parish observances vary.",
    }),
    event(sacredHeart, "The Most Sacred Heart of Jesus", "solemnity", ["white", "gold"], "Ordinary Time"),
    event(christKing, "Our Lord Jesus Christ, King of the Universe", "solemnity", ["white", "gold"], "Ordinary Time"),
  ];
}

function buildFixedEvents(year: CalendarYear): CalendarEvent[] {
  const fixed: Array<Omit<CalendarEvent, "date"> & { monthDay: string }> = [
    { monthDay: "01-01", title: "Mary, the Holy Mother of God", rank: "holy-day", colors: ["white", "gold"], season: "Christmas" },
    { monthDay: "01-04", title: "Saint Elizabeth Ann Seton, Religious", rank: "memorial", colors: ["white"], saintOrFeast: "Saint Elizabeth Ann Seton" },
    { monthDay: "01-05", title: "Saint John Neumann, Bishop", rank: "memorial", colors: ["white"], saintOrFeast: "Saint John Neumann" },
    { monthDay: "01-22", title: "Day of Prayer for the Legal Protection of Unborn Children", rank: "weekday", colors: ["violet"], season: "Ordinary Time" },
    { monthDay: "02-02", title: "The Presentation of the Lord", rank: "feast", colors: ["white", "gold"], saintOrFeast: "The Presentation of the Lord" },
    { monthDay: "03-19", title: "Saint Joseph, Spouse of the Blessed Virgin Mary", rank: "solemnity", colors: ["white", "gold"], saintOrFeast: "Saint Joseph" },
    { monthDay: "03-25", title: "The Annunciation of the Lord", rank: "solemnity", colors: ["white", "gold"], saintOrFeast: "The Annunciation of the Lord" },
    { monthDay: "05-03", title: "Saints Philip and James, Apostles", rank: "feast", colors: ["red"], saintOrFeast: "Saints Philip and James" },
    { monthDay: "05-14", title: "Saint Matthias, Apostle", rank: "feast", colors: ["red"], saintOrFeast: "Saint Matthias" },
    { monthDay: "05-15", title: "Saint Isidore", rank: "optional-memorial", colors: ["white"], saintOrFeast: "Saint Isidore" },
    { monthDay: "05-31", title: "The Visitation of the Blessed Virgin Mary", rank: "feast", colors: ["white"], saintOrFeast: "The Visitation" },
    { monthDay: "06-24", title: "The Nativity of Saint John the Baptist", rank: "solemnity", colors: ["white", "gold"], saintOrFeast: "Saint John the Baptist" },
    { monthDay: "06-29", title: "Saints Peter and Paul, Apostles", rank: "solemnity", colors: ["red"], saintOrFeast: "Saints Peter and Paul" },
    { monthDay: "07-04", title: "Independence Day", rank: "weekday", colors: ["green"], season: "Ordinary Time" },
    { monthDay: "08-06", title: "The Transfiguration of the Lord", rank: "feast", colors: ["white", "gold"], saintOrFeast: "The Transfiguration" },
    { monthDay: "08-15", title: "The Assumption of the Blessed Virgin Mary", rank: "holy-day", colors: ["white", "gold"], saintOrFeast: "The Assumption" },
    { monthDay: "09-14", title: "The Exaltation of the Holy Cross", rank: "feast", colors: ["red"], saintOrFeast: "The Exaltation of the Holy Cross" },
    { monthDay: "09-29", title: "Saints Michael, Gabriel, and Raphael, Archangels", rank: "feast", colors: ["white"], saintOrFeast: "The Archangels" },
    { monthDay: "10-04", title: "Saint Francis of Assisi", rank: "memorial", colors: ["white"], saintOrFeast: "Saint Francis of Assisi" },
    { monthDay: "11-01", title: "All Saints", rank: "holy-day", colors: ["white", "gold"], saintOrFeast: "All Saints" },
    { monthDay: "11-02", title: "The Commemoration of All the Faithful Departed", rank: "weekday", colors: ["black", "violet"], saintOrFeast: "All Souls" },
    { monthDay: "11-09", title: "The Dedication of the Lateran Basilica", rank: "feast", colors: ["white"], saintOrFeast: "The Dedication of the Lateran Basilica" },
    { monthDay: "11-30", title: "Saint Andrew, Apostle", rank: "feast", colors: ["red"], saintOrFeast: "Saint Andrew" },
    { monthDay: "12-08", title: "The Immaculate Conception of the Blessed Virgin Mary", rank: "holy-day", colors: ["white", "gold"], saintOrFeast: "The Immaculate Conception" },
    { monthDay: "12-12", title: "Our Lady of Guadalupe", rank: "feast", colors: ["white", "gold"], saintOrFeast: "Our Lady of Guadalupe" },
    { monthDay: "12-25", title: "The Nativity of the Lord", rank: "holy-day", colors: ["white", "gold"], season: "Christmas", saintOrFeast: "Christmas Day" },
    { monthDay: "12-26", title: "Saint Stephen, the First Martyr", rank: "feast", colors: ["red"], saintOrFeast: "Saint Stephen" },
    { monthDay: "12-27", title: "Saint John, Apostle and Evangelist", rank: "feast", colors: ["white"], saintOrFeast: "Saint John" },
    { monthDay: "12-28", title: "The Holy Innocents, Martyrs", rank: "feast", colors: ["red"], saintOrFeast: "The Holy Innocents" },
  ];

  return fixed.map((item) => ({
    ...item,
    date: `${year}-${item.monthDay}`,
  }));
}

function toLiturgicalDayRecord(
  year: CalendarYear,
  date: ISODateString,
  calendarEvent: CalendarEvent | undefined,
  config: { easter: ISODateString; adventStart: ISODateString },
): LiturgicalDayRecord {
  const season = calendarEvent?.season ?? getSeasonForDate(date, config);
  const title = calendarEvent?.title ?? getDefaultTitleForDate(date, season);
  const rank = calendarEvent?.rank ?? (isSunday(date) ? "sunday" : "weekday");
  const colors = calendarEvent?.colors ?? getDefaultColors(season, rank);
  const saintOrFeast = calendarEvent?.saintOrFeast ?? (rank === "sunday" ? title : undefined);

  return {
    id: `usccb-${date}`,
    title,
    slug: `${date}-${slugify(title)}`,
    description: getDescription(title, season, rank),
    category: "Liturgical Year",
    tags: ["usccb calendar", "liturgical calendar", season.toLowerCase(), ...(calendarEvent?.tags ?? [])],
    relatedResourceIds: ["res-daily-reflections"],
    status: "published",
    createdAt: "2026-05-15",
    updatedAt: "2026-05-15",
    visibility: "public",
    source: { system: "manual-import", externalId: sourceByYear[year] },
    schemaVersion: 1,
    contentType: "liturgical-day",
    date,
    season,
    rank,
    colors,
    saintOrFeast,
    massReadingsCitation: "See the official USCCB daily readings.",
    dailyReadingsUrl: "https://bible.usccb.org/daily-bible-reading",
    suggestedPrayer: getSuggestedPrayer(season, title),
    suggestedDevotion: getSuggestedDevotion(title, season),
    seasonalPractice: getSeasonalPractice(season),
    fastingReminder: getFastingReminder(date, season, title),
    familyPrayerIdea: {
      title: "Pray with today's observance",
      description: "Name one grace from today's liturgical day and ask the Lord to help your home receive it.",
    },
    worksOfMercySuggestion: {
      title: "Choose one work of mercy",
      description: "Let today's prayer become one concrete act of charity.",
    },
    featuredResourceIds: ["res-daily-reflections"],
    localObservanceNote: calendarEvent?.localObservanceNote ?? sourceNote,
    relatedSaintIds: [],
  };
}

function getSeasonForDate(date: ISODateString, config: { easter: ISODateString; adventStart: ISODateString }): LiturgicalSeasonName {
  const year = Number(date.slice(0, 4)) as CalendarYear;
  const christmasEnd = `${year}-01-11`;
  const ashWednesday = addDays(config.easter, -46);
  const holyThursday = addDays(config.easter, -3);
  const pentecost = addDays(config.easter, 49);

  if (date <= christmasEnd) return "Christmas";
  if (date >= ashWednesday && date < holyThursday) return "Lent";
  if (date >= holyThursday && date <= pentecost) return "Easter";
  if (date >= config.adventStart && date < `${year}-12-25`) return "Advent";
  if (date >= `${year}-12-25`) return "Christmas";
  return "Ordinary Time";
}

function getDefaultTitleForDate(date: ISODateString, season: LiturgicalSeasonName) {
  if (isSunday(date)) {
    if (season === "Advent") return "Sunday of Advent";
    if (season === "Christmas") return "Sunday in the Christmas Season";
    if (season === "Lent") return "Sunday of Lent";
    if (season === "Easter") return "Sunday of Easter";
    return "Sunday in Ordinary Time";
  }

  if (season === "Advent") return "Advent Weekday";
  if (season === "Christmas") return "Christmas Weekday";
  if (season === "Lent") return "Lenten Weekday";
  if (season === "Easter") return "Easter Weekday";
  return "Weekday in Ordinary Time";
}

function getDefaultColors(season: LiturgicalSeasonName, rank: LiturgicalRank): LiturgicalColor[] {
  if (season === "Advent" || season === "Lent") return ["violet"];
  if (season === "Easter" || season === "Christmas" || rank === "solemnity" || rank === "feast") return ["white", "gold"];
  if (season === "Pentecost") return ["red"];
  return ["green"];
}

function getDescription(title: string, season: LiturgicalSeasonName, rank: LiturgicalRank) {
  if (rank === "solemnity" || rank === "holy-day") return `${title}, observed in the liturgical calendar for the United States.`;
  if (rank === "feast" || rank === "memorial" || rank === "optional-memorial") return `${title}, with local observances verified against the official calendar.`;
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

function getObligationNote(title: string, date: ISODateString) {
  if (title === "The Nativity of the Lord") return "Christmas is a holy day of obligation in the United States.";
  if (title === "The Ascension of the Lord") return "Ascension observance varies by ecclesiastical province in the United States.";
  if (title === "The Assumption of the Blessed Virgin Mary" && isSaturdayOrMonday(date)) {
    return "When this solemnity falls on a Saturday or Monday, the obligation is abrogated in the United States.";
  }
  return "Verify obligation status with your diocese.";
}

function event(
  date: ISODateString,
  title: string,
  rank: LiturgicalRank,
  colors: LiturgicalColor[],
  season: LiturgicalSeasonName,
  extra: Partial<CalendarEvent> = {},
): CalendarEvent {
  return { date, title, rank, colors, season, ...extra };
}

function eachDate(start: ISODateString, end: ISODateString) {
  const dates: ISODateString[] = [];
  const current = new Date(`${start}T12:00:00`);
  const final = new Date(`${end}T12:00:00`);

  while (current <= final) {
    dates.push(toIsoDate(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

function addDays(date: ISODateString, days: number) {
  const value = new Date(`${date}T12:00:00`);
  value.setDate(value.getDate() + days);
  return toIsoDate(value);
}

function toIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function isSunday(date: ISODateString) {
  return new Date(`${date}T12:00:00`).getDay() === 0;
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
