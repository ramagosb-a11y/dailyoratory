import type { BaseContentRecord, ContentAudience } from "./content";

export type SacramentName =
  | "Baptism"
  | "First Reconciliation"
  | "First Communion"
  | "Confirmation"
  | "Anointing of the Sick"
  | "Matrimony"
  | "Holy Orders"
  | "OCIA"
  | "Sponsor/Godparent"
  | "Returning Catholic";

export type SacramentPreparationRole =
  | "candidate"
  | "parent"
  | "family"
  | "sponsor"
  | "godparent"
  | "spouse"
  | "discernment"
  | "caregiver"
  | "returning-catholic"
  | "parish-team"
  | "all";

export type SacramentPreparationStep = {
  id: string;
  title: string;
  description: string;
  timeframe: string;
  resourceIds: string[];
};

export type SacramentChecklistItem = {
  id: string;
  title: string;
  description: string;
  role: SacramentPreparationRole;
  category: "parish" | "prayer" | "formation" | "document" | "conversation" | "service";
};

export type SacramentReflectionPrompt = {
  id: string;
  prompt: string;
  context: string;
  role: SacramentPreparationRole;
};

export type SacramentPrayer = {
  id: string;
  title: string;
  text: string;
  sourceNote: "Original Daily Oratory text" | "Public domain";
};

export type SacramentCompanionRecord = BaseContentRecord & {
  contentType: "sacrament-companion";
  sacrament: SacramentName;
  route: `/sacraments/${string}`;
  audience: ContentAudience[];
  preparationFor: string[];
  overview: string;
  bestFor: string[];
  preparationSteps: SacramentPreparationStep[];
  roleChecklists: SacramentChecklistItem[];
  reflectionPrompts: SacramentReflectionPrompt[];
  prayers: SacramentPrayer[];
  parishChecklist: string[];
  prayerPractice: string;
  pastoralNote: string;
  parishReminder: string;
  decisionBoundary: string;
  printSections: string[];
  featured?: boolean;
};

export type SacramentPreparationProgress = {
  companionSlug: string;
  startedAt: string;
  updatedAt: string;
  currentStepId?: string;
  completedStepIds: string[];
  completedChecklistItemIds: string[];
  reflectionAnswers: Record<string, string>;
};

export type SacramentPreparationSettings = {
  version: 1;
  selectedCompanionSlug?: string;
  role: SacramentPreparationRole;
  preparingFor: "myself" | "child" | "family-member" | "couple" | "parish-group" | "not-sure";
  parishName?: string;
  updatedAt: string;
};

export type SacramentPreparationStore = {
  version: 1;
  settings: SacramentPreparationSettings;
  preparations: Record<string, SacramentPreparationProgress>;
};
