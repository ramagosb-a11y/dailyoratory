import type { BaseContentRecord, ISODateString, LiturgicalSeasonName } from "./content";

export type LiturgicalColor =
  | "violet"
  | "white"
  | "gold"
  | "green"
  | "red"
  | "rose"
  | "black"
  | "blue";

export type LiturgicalRank =
  | "weekday"
  | "optional-memorial"
  | "memorial"
  | "feast"
  | "solemnity"
  | "sunday"
  | "holy-day";

export type LiturgicalPractice = {
  title: string;
  description: string;
  audience: "individual" | "family" | "group" | "parish";
};

export type DailyReadingReference = {
  label: "First Reading" | "Responsorial Psalm" | "Second Reading" | "Gospel" | "Optional Reading" | "Office";
  citation: string;
};

export type LiturgicalLivingAction = {
  title: string;
  description: string;
  href?: string;
  resourceId?: string;
};

export type FastingAbstinenceReminder = {
  applies: boolean;
  title: string;
  description: string;
  severity: "none" | "pastoral-note" | "required";
};

export type LiturgicalHolyDayRecord = {
  id: string;
  title: string;
  date: ISODateString;
  season: LiturgicalSeasonName;
  rank: LiturgicalRank;
  colors: LiturgicalColor[];
  description: string;
  obligationNote?: string;
  localObservanceNote?: string;
};

export type LiturgicalSeasonRecord = BaseContentRecord & {
  contentType: "liturgical-season";
  season: LiturgicalSeasonName;
  colors: LiturgicalColor[];
  startsWith?: string;
  endsWith?: string;
  spiritualFocus: string[];
  practices: LiturgicalPractice[];
};

export type LiturgicalDayRecord = BaseContentRecord & {
  contentType: "liturgical-day";
  date: ISODateString;
  season: LiturgicalSeasonName;
  rank: LiturgicalRank;
  colors: LiturgicalColor[];
  massReadingsCitation?: string;
  gospelCitation?: string;
  fastingOrAbstinence?: string;
  domesticChurchPractice?: string;
  saintOrFeast?: string;
  readings?: DailyReadingReference[];
  dailyReadingsUrl?: string;
  suggestedPrayer?: LiturgicalLivingAction;
  suggestedDevotion?: LiturgicalLivingAction;
  seasonalPractice?: LiturgicalLivingAction;
  fastingReminder?: FastingAbstinenceReminder;
  familyPrayerIdea?: LiturgicalLivingAction;
  worksOfMercySuggestion?: LiturgicalLivingAction;
  featuredResourceIds?: string[];
  localObservanceNote?: string;
  relatedSaintIds: string[];
};

export type LiturgicalLivingSettings = {
  id: string;
  country: string;
  diocese: string;
  timeZone: string;
  dayRolloverHour: number;
  calendarSource: "usccb" | "diocesan" | "manual";
  preferredLanguage: "English" | "Spanish";
  ascensionObservance: "Thursday" | "Sunday" | "Verify locally";
  showFamilyIdeas: boolean;
  showFastingReminders: boolean;
  showWorksOfMercy: boolean;
};

export type GoogleSheetsAdminColumn = {
  key: string;
  label: string;
  type: "text" | "date" | "boolean" | "select" | "multi-select" | "url" | "json";
  required: boolean;
  notes?: string;
};

export type GoogleSheetsAdminTab = {
  sheetName: string;
  description: string;
  columns: GoogleSheetsAdminColumn[];
};
