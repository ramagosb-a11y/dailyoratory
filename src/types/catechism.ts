export type CatechismSourceType =
  | "vatican"
  | "usccb"
  | "daily-oratory"
  | "trusted-catholic-source";

export type CatechismLink = {
  label: string;
  href: string;
};

export type CatechismPillar = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  paragraphRange: string;
  relatedLinks: CatechismLink[];
  sortOrder: number;
};

export type CatechismTopic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  paragraphRanges: string[];
  relatedDailyOratoryLinks: CatechismLink[];
  officialResourceUrl: string;
  sortOrder: number;
};

export type CatechismPathway = {
  id: string;
  title: string;
  slug: string;
  audience: string;
  description: string;
  startingSections: string[];
  reflectionPrompt: string;
  relatedLinks: CatechismLink[];
  sortOrder: number;
};

export type CatechismResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: CatechismSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type CatechismFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type CatechismStudyPlan = {
  selectedTopic: string;
  recommendedParagraphs: string[];
  relatedLinks: CatechismLink[];
  createdAt: string;
};
