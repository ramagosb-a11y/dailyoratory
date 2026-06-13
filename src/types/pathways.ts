import type { BaseContentRecord, ContentAudience } from "./content";

export type PathwayStage =
  | "begin"
  | "return"
  | "learn"
  | "practice"
  | "heal"
  | "discern"
  | "serve"
  | "persevere";

export type PathwayPace = "gentle" | "steady" | "focused";

export type PathwayStep = {
  id: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  timeframe: string;
  teaching: string;
  scriptureReference: string;
  prayerPrompt: string;
  practice: string;
  reflectionQuestions: string[];
  relatedResourceIds: string[];
};

export type SpiritualGrowthPathwayRecord = BaseContentRecord & {
  contentType: "spiritual-growth-pathway";
  stage: PathwayStage;
  pace: PathwayPace;
  audience: ContentAudience[];
  overview: string;
  spiritualGoal: string;
  bestFor: string[];
  estimatedDuration: string;
  estimatedWeeks: number;
  outcomes: string[];
  stepTimeline: string[];
  modules: PathwayStep[];
  featured?: boolean;
};

export type PathwayProgressRecord = {
  slug: string;
  startedAt: string;
  updatedAt: string;
  completedStepSlugs: string[];
  currentStepSlug?: string;
};

export type PathwaySettingsRecord = {
  version: 1;
  spiritualSeason: PathwayStage | "not-sure";
  availablePace: PathwayPace;
  household: "individual" | "family" | "group" | "not-sure";
  focusTags: string[];
  updatedAt: string;
};

export type PathwayProgressStore = {
  version: 1;
  pathways: Record<string, PathwayProgressRecord>;
  settings: PathwaySettingsRecord;
};
