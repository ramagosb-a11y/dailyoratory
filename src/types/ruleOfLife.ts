import type { BaseContentRecord } from "./content";

export type RuleOfLifePillar =
  | "daily-prayer"
  | "sacramental-life"
  | "scripture"
  | "virtue"
  | "service"
  | "community"
  | "study"
  | "rest";

export type RuleOfLifeCadence = "daily" | "weekly" | "monthly" | "seasonal";

export type RuleOfLifeSpiritualSeason =
  | "beginning-again"
  | "steady-growth"
  | "returning-to-prayer"
  | "busy-family-life"
  | "discernment"
  | "healing-and-mercy";

export type RuleOfLifeAvailableTime = "5-minutes" | "10-minutes" | "20-minutes" | "30-minutes" | "45-minutes";

export type RuleOfLifeReviewRhythm = "nightly" | "weekly" | "monthly" | "seasonal";

export type RuleOfLifePracticeKind =
  | "prayer"
  | "scripture"
  | "virtue"
  | "sacrament"
  | "reflection"
  | "devotion"
  | "mercy"
  | "family";

export type RuleOfLifePractice = {
  id: string;
  pillar: RuleOfLifePillar;
  title: string;
  cadence: RuleOfLifeCadence;
  suggestedDurationMinutes?: number;
  description: string;
  kind?: RuleOfLifePracticeKind;
  timeOfDay?: "morning" | "midday" | "evening" | "night" | "any";
  gentleNote?: string;
};

export type RuleOfLifeOption = {
  id: string;
  label: string;
  description: string;
};

export type RuleOfLifeTimeOption = RuleOfLifeOption & {
  minutes: number;
  dailyPracticeLimit: number;
};

export type RuleOfLifeVirtueFocus = RuleOfLifeOption & {
  virtue: string;
  opposingVice: string;
  prayerPrompt: string;
};

export type RuleOfLifeBuilderDraft = {
  spiritualSeason: RuleOfLifeSpiritualSeason;
  availableTime: RuleOfLifeAvailableTime;
  dailyPracticeIds: string[];
  periodicPracticeIds: string[];
  virtueFocusId: string;
  reviewRhythm: RuleOfLifeReviewRhythm;
};

export type SavedRuleOfLife = RuleOfLifeBuilderDraft & {
  version: 1;
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type RuleOfLifeBuilderTemplate = {
  id: string;
  title: string;
  description: string;
  audience: "individual" | "family" | "group";
  spiritualSeason: RuleOfLifeSpiritualSeason;
  availableTime: RuleOfLifeAvailableTime;
  dailyPracticeIds: string[];
  periodicPracticeIds: string[];
  virtueFocusId: string;
  reviewRhythm: RuleOfLifeReviewRhythm;
};

export type DailyExamenStep = {
  id: string;
  title: string;
  prompt: string;
  prayer?: string;
};

export type RuleOfLifeTemplateRecord = BaseContentRecord & {
  contentType: "rule-of-life-template";
  audience: "individual" | "family" | "group" | "formation-team";
  difficulty: "beginner" | "steady" | "deepening";
  practices: RuleOfLifePractice[];
  reviewQuestions: string[];
};

export type RuleOfLifeBuilderStepRecord = BaseContentRecord & {
  contentType: "rule-of-life-builder-step";
  stepOrder: number;
  prompt: string;
  helperText: string;
  recommendedPracticeIds: string[];
};
