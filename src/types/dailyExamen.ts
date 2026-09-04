export type DailyExamenLink = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  official?: boolean;
};

export type ExamenResourceSourceType =
  | "ignatian-spirituality"
  | "jesuits"
  | "vatican"
  | "usccb"
  | "daily-oratory";

export interface DailyExamenStep {
  id: string;
  title: string;
  slug: string;
  guide: string;
  prayer: string;
  sortOrder: number;
}

export interface ExamenSituation {
  id: string;
  title: string;
  slug: string;
  focus: string;
  prayerLine: string;
  relatedLinks: DailyExamenLink[];
  sortOrder: number;
}

export interface ExamenFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
}

export interface ExamenResource {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: ExamenResourceSourceType;
  description: string;
  official: boolean;
  sortOrder: number;
}

export interface ExamenJournalEntry {
  gratitude: string;
  godsPresence: string;
  mercy: string;
  graceForTomorrow: string;
  surrender: string;
}

export type NightlyExamenPace = "rest" | "review" | "discern";

export type NightlyExamenDraft = {
  localDate: string;
  startedAt: string;
  pace: NightlyExamenPace;
  writingEnabled: boolean;
  stepIndex: number;
  gratitude: string;
  gratitudeArea: string;
  significantMoment: string;
  movementTags: string[];
  mercy: string;
  tomorrowGrace: string;
};

export type NightlyExamenSession = Omit<NightlyExamenDraft, "stepIndex"> & {
  id: string;
  completedAt: string;
  durationMinutes: number;
};

export type NightlyExamenStore = {
  version: 1;
  draft: NightlyExamenDraft | null;
  sessions: NightlyExamenSession[];
};

export type ExamenRelatedTool = {
  title: string;
  description: string;
  href: string;
  cta: string;
};
