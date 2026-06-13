import type { BaseContentRecord } from "./content";

export type TheologicalVirtue = "faith" | "hope" | "charity";

export type CardinalVirtue = "prudence" | "justice" | "fortitude" | "temperance";

export type VirtueName =
  | TheologicalVirtue
  | CardinalVirtue
  | "humility"
  | "generosity"
  | "gratitude"
  | "kindness"
  | "patience"
  | "chastity"
  | "diligence"
  | "meekness"
  | "zeal";

export type ViceName =
  | "pride"
  | "greed"
  | "avarice"
  | "lust"
  | "envy"
  | "gluttony"
  | "anger"
  | "sloth"
  | "despair"
  | "presumption";

export type VirtueFamily = "theological" | "cardinal" | "contrary";

export type PatternTenderness = "light" | "noticeable" | "recurring";

export type VirtuePractice = {
  id: string;
  title: string;
  description: string;
  cadence: "daily" | "weekly" | "when-tempted";
};

export type VirtueDefinitionRecord = BaseContentRecord & {
  contentType: "virtue-definition";
  virtue: VirtueName;
  family: VirtueFamily;
  shortPrayer: string;
  reflectionPrompt: string;
  practices: VirtuePractice[];
};

export type ViceDefinitionRecord = BaseContentRecord & {
  contentType: "vice-definition";
  vice: ViceName;
  contraryVirtues: VirtueName[];
  gentleDescription: string;
  warningSigns: string[];
  graceFilledNextSteps: string[];
  confessionPrepPrompts: string[];
};

export type VirtueVicePairRecord = BaseContentRecord & {
  contentType: "virtue-vice-pair";
  virtue: VirtueName;
  opposingVice: ViceName;
  alternateVirtues?: VirtueName[];
  signsOfGrowth: string[];
  warningSigns: string[];
  practices: VirtuePractice[];
  examenQuestions: string[];
};

export type VirtueTrackerTemplateRecord = BaseContentRecord & {
  contentType: "virtue-tracker-template";
  trackedVirtues: VirtueName[];
  reviewCadence: "daily" | "weekly";
  prompts: string[];
};

export type VirtueTrackerCheckIn = {
  id: string;
  date: string;
  virtueFocus: VirtueName[];
  viceStruggles: ViceName[];
  patternTenderness: PatternTenderness;
  graceReceived: string;
  struggleNotes: string;
  nextStep: string;
  prayer: string;
  confessionPrepNote: string;
  bringToConfession: boolean;
  createdAt: string;
  updatedAt: string;
};

export type VirtueTrackerSettings = {
  defaultVirtueFocus: VirtueName[];
  reviewCadence: "daily" | "weekly" | "monthly";
  includeConfessionPrepReminder: boolean;
};

export type VirtueTrackerStore = {
  version: 1;
  checkIns: VirtueTrackerCheckIn[];
  settings: VirtueTrackerSettings;
};
