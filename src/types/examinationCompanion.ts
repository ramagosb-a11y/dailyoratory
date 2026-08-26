import type { GuidedExaminationPathId } from "./guidedExamination";

export type CompanionPromptStatus = "confess" | "clear";

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
  activeGuideId: GuidedExaminationPathId;
  lastConfessionDate: string;
  statusByPromptId: Record<string, CompanionPromptStatus>;
  noteByPromptId: Record<string, string>;
  customReflections: CompanionCustomReflection[];
  history: CompanionHistoryEntry[];
  updatedAt: string;
};
