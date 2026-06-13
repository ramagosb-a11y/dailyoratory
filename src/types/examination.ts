import type { BaseContentRecord, LiturgicalSeasonName } from "./content";

export type ExaminationMode = "quick" | "standard" | "thorough" | "returning";

export type ExaminationStateOfLife =
  | "adult"
  | "young-adult"
  | "teen"
  | "married"
  | "parent"
  | "single"
  | "clergy-religious"
  | "student"
  | "worker-professional";

export type ExaminationPath =
  | "ten-commandments"
  | "beatitudes"
  | "state-of-life"
  | "virtues"
  | "relationships-duties"
  | "prayer-sacramental-life"
  | "works-of-mercy";

export type ExaminationPrompt = {
  id: string;
  text: string;
  path: ExaminationPath;
  mode: ExaminationMode[];
  stateOfLife: ExaminationStateOfLife[] | "all";
  relatedVirtue?: string;
  relatedVice?: string;
  pastoralNote?: string;
  tags: string[];
};

export type ExaminationSection = {
  id: string;
  title: string;
  description: string;
  path: ExaminationPath;
  prompts: ExaminationPrompt[];
};

export type ExaminationOfConscienceRecord = BaseContentRecord & {
  contentType: "examination-of-conscience";
  season: LiturgicalSeasonName;
  audience: "general" | "families" | "youth" | "leaders" | "before-confession";
  modes: ExaminationMode[];
  paths: ExaminationPath[];
  privacyNote: string;
  pastoralDisclaimer: string;
  sections: ExaminationSection[];
  closingPrayer: string;
};

export type ExaminationSessionSettings = {
  mode: ExaminationMode;
  stateOfLife: ExaminationStateOfLife;
  selectedPaths: ExaminationPath[];
};

export type ExaminationSession = {
  version: 1;
  startedAt: string;
  updatedAt: string;
  settings: ExaminationSessionSettings;
  markedPromptIds: string[];
  noteByPromptId: Record<string, string>;
  generalNotes: string;
};
