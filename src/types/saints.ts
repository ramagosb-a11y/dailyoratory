import type { BaseContentRecord, ContentAudience, LiturgicalSeasonName } from "@/types/content";

export type CanonizationStatus =
  | "saint"
  | "blessed"
  | "venerable"
  | "servant-of-god"
  | "candidate"
  | "traditional"
  | "biblical";

export type StateOfLife =
  | "mary"
  | "apostle"
  | "martyr"
  | "pope"
  | "bishop"
  | "priest"
  | "deacon"
  | "religious"
  | "monk"
  | "nun"
  | "married"
  | "parent"
  | "single"
  | "child"
  | "youth"
  | "layperson"
  | "missionary"
  | "scholar"
  | "mystic"
  | "worker"
  | "convert";

export type SaintResourceSourceType =
  | "vatican"
  | "vatican-news"
  | "usccb"
  | "dicastery"
  | "franciscan-media"
  | "catholic-saints-info"
  | "my-catholic-life"
  | "daily-oratory"
  | "trusted-catholic-source";

export type SaintVocation =
  | "apostle"
  | "martyr"
  | "doctor"
  | "monastic"
  | "missionary"
  | "mystic"
  | "scholar"
  | "teacher"
  | "penitent"
  | "married"
  | "parent"
  | "worker"
  | "student"
  | "pope"
  | "priest"
  | "religious"
  | "lay";

export type SaintLifeSituation =
  | "conversion"
  | "prayer"
  | "discernment"
  | "suffering"
  | "family-life"
  | "grief"
  | "anxiety"
  | "study"
  | "work"
  | "friendship"
  | "technology"
  | "mercy"
  | "mission"
  | "courage"
  | "purity"
  | "perseverance"
  | "eucharistic-devotion"
  | "marian-devotion";

export type SaintCompanionType =
  | "beginner"
  | "witness"
  | "scholar"
  | "mystic"
  | "missionary"
  | "penitent"
  | "martyr"
  | "family";

export type Saint = BaseContentRecord & {
  contentType: "saint";
  name: string;
  feastDay: string;
  feastDayDisplay: string;
  birthYear?: number;
  deathYear?: number;
  century: string;
  region: string;
  country: string;
  stateOfLife: StateOfLife;
  traditionGroup: string;
  categories: string[];
  patronages: string[];
  keyVirtues: string[];
  shortDescription: string;
  biography: string;
  whyMatters: string;
  imitateToday: string[];
  prayer: string;
  scriptureReferences: string[];
  sacramentConnections: string[];
  devotionConnections: string[];
  relatedSaintIds: string[];
  relatedDailyOratoryLinks: { label: string; href: string }[];
  externalResourceIds: string[];
  imageUrl?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageLicense?: string;
  sourceNotes?: string;
  canonizationStatus: CanonizationStatus;
  featured?: boolean;
  modernSaint?: boolean;
  doctorOfChurch?: boolean;
  martyr?: boolean;
  sortOrder: number;
  status: BaseContentRecord["status"];
  liturgicalSeason?: LiturgicalSeasonName;
  patronage: string[];
  vocation: SaintVocation;
  saintTypes: SaintCompanionType[];
  lifeSituations: SaintLifeSituation[];
  era: string;
  shortBiography: string;
  virtueFocus: string[];
  encouragement: string;
  prayerPrompt: string;
  audience?: ContentAudience[];
};

export type SaintRecord = Saint;

export type SaintCategory = {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName?: string;
  saintIds: string[];
  sortOrder: number;
};

export type SaintVirtue = {
  id: string;
  title: string;
  slug: string;
  description: string;
  oppositeVice: string;
  practice: string;
  prayerPrompt: string;
  exampleSaintIds: string[];
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
};

export type Patronage = {
  id: string;
  title: string;
  slug: string;
  description: string;
  saintIds: string[];
  notes?: string;
  sortOrder: number;
};

export type SaintResource = {
  id: string;
  saintId: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: SaintResourceSourceType;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type SaintFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type SaintReadingPlanItem = {
  id: string;
  week: number;
  day: number;
  title: string;
  saintId: string;
  theme: string;
  prompt: string;
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
};

export type SaintCompanionRecommendation = {
  id: string;
  needSlug: string;
  userNeed: string;
  primarySaintId: string;
  companionSaintId: string;
  stretchSaintId: string;
  explanation: string;
  virtuePractice: string;
  prayerPrompt: string;
  relatedLinks: { label: string; href: string }[];
};

export type SaintFinderPreferences = {
  lifeSituation: SaintLifeSituation;
  virtue: string;
  stateOfLife: StateOfLife;
  saintType: SaintCompanionType;
};

export type SavedSaintCompanion = {
  saintId: string;
  savedAt: string;
  note?: string;
};

export type SavedSaintCompanionStore = {
  version: number;
  companions: SavedSaintCompanion[];
};

export type SaintCompanionInput = {
  needSlug: string;
  stateSlug?: string;
  createdAt?: string;
};

export type SaintCompanionPlan = {
  recommendation: SaintCompanionRecommendation;
  primarySaint: Saint;
  companionSaint: Saint;
  stretchSaint: Saint;
  stateLabel?: string;
  createdAt: string;
};

export type SaintOfDay = {
  id: string;
  name: string;
  slug: string;
  feastDay: string;
  feastRank: string;
  title: string;
  shortDescription: string;
  whyThisSaintMatters: string;
  keyVirtue: string;
  fruitOfTheSpirit?: string;
  patronage?: string;
  imitateToday: string;
  shortPrayer: string;
  relatedDailyOratoryLinks: { label: string; href: string }[];
  externalResourceLinks: { label: string; href: string }[];
  sourceNotes: string;
};
