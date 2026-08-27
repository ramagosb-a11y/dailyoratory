export type CompanionGuideId =
  | "ten-commandments"
  | "young-adults"
  | "single-people"
  | "married-persons"
  | "children"
  | "catholic-social-teaching"
  | "public-square";

export type CompanionPromptStatus = "confess" | "clear";

export type CompanionSinFrequency =
  | "once"
  | "few-times"
  | "several-times"
  | "habitual"
  | "daily"
  | "unsure";

export type CompanionSinDetails = {
  frequency: CompanionSinFrequency;
  graveMatter: boolean;
};

export type CompanionCustomReflection = {
  id: string;
  text: string;
  status?: CompanionPromptStatus;
};

export type CompanionHistoryEntry = {
  id: string;
  completedAt: string;
  itemCount: number;
  guideTitles: string[];
};

export type ExaminationCompanionStore = {
  version: 1;
  activeGuideId: CompanionGuideId;
  lastConfessionDate: string;
  statusByPromptId: Record<string, CompanionPromptStatus>;
  sinDetailsByPromptId: Record<string, CompanionSinDetails>;
  noteByPromptId: Record<string, string>;
  customReflections: CompanionCustomReflection[];
  history: CompanionHistoryEntry[];
  updatedAt: string;
};
