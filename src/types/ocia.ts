export type OciaResourceSourceType =
  | "vatican"
  | "usccb"
  | "parish"
  | "diocese"
  | "daily-oratory"
  | "trusted-catholic-source";

export type OciaLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type OciaStage = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  whatHappens: string[];
  discernmentQuestions: string[];
  prayerFocus: string;
  sortOrder: number;
};

export type OciaAudiencePath = {
  id: string;
  title: string;
  slug: string;
  description: string;
  likelyPath: string;
  cautionNote: string;
  relatedLinks: OciaLink[];
  sortOrder: number;
};

export type OciaTopic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  relatedLinks: OciaLink[];
  sortOrder: number;
};

export type OciaQuestion = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type OciaGlossaryTerm = {
  id: string;
  term: string;
  slug: string;
  definition: string;
  relatedLinks: OciaLink[];
  sortOrder: number;
};

export type OciaResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: OciaResourceSourceType;
  description: string;
  official: boolean;
  sortOrder: number;
  badge: string;
};

export type OciaNextStepPlan = {
  interests: string[];
  nextSteps: string[];
  relatedLinks: OciaLink[];
  createdAt: string;
};
