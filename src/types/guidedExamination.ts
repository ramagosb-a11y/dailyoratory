export type GuidedExaminationPathId =
  | "ten-commandments"
  | "beatitudes"
  | "state-of-life"
  | "virtues"
  | "relationships-duties"
  | "prayer-sacramental-life"
  | "works-of-mercy";

export type GuidedPrompt = {
  id: string;
  text: string;
};

export type GuidedExaminationSection = {
  id: string;
  title: string;
  scripture?: string;
  reflection: string;
  prompts: GuidedPrompt[];
};

export type GuidedExaminationPath = {
  id: GuidedExaminationPathId;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  storageKey: string;
  openingPrayer: string;
  reviewEncouragement: string;
  sections: GuidedExaminationSection[];
  actOfContrition: string;
};

export type StateOfLifeCategory = GuidedExaminationSection & {
  id:
    | "general-christian-duties"
    | "married-life"
    | "parenthood"
    | "children-and-teens"
    | "single-life"
    | "work-and-professional-life"
    | "student-life"
    | "caregiving"
    | "clergy-and-religious-life"
    | "civic-and-parish-responsibilities";
};

export type GuidedExamenStore = {
  version: 1;
  lastConfessionDate?: string;
  selectedCategoryIds?: string[];
  markedPromptIds: string[];
  notesByPromptId: Record<string, string>;
  updatedAt: string;
};
