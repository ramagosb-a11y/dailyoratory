export type RelicClassType = "first-class" | "second-class" | "third-class";

export type RelicResourceSourceType =
  | "vatican"
  | "canon-law"
  | "shrine"
  | "catholic-encyclopedia"
  | "catholic-apologetics"
  | "daily-oratory"
  | "trusted-catholic-source";

export type RelicPrayerCategory =
  | "veneration"
  | "intercession"
  | "reverence"
  | "healing"
  | "conversion";

export type RelicClass = {
  id: string;
  title: string;
  slug: RelicClassType;
  description: string;
  examples: string[];
  reverenceNote: string;
  cautionNote: string;
  sortOrder: number;
};

export type RelicTopic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  keyPoints: string[];
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
};

export type RelicPrayer = {
  id: string;
  title: string;
  slug: string;
  body: string;
  category: RelicPrayerCategory;
  sourceType: RelicResourceSourceType;
  copyrightStatus: "original-summary";
  sortOrder: number;
};

export type RelicResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: RelicResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type RelicSite = {
  id: string;
  title: string;
  slug: string;
  location: string;
  description: string;
  url: string;
  official: boolean;
  saintOrRelicFocus: string;
  sortOrder: number;
};

export type RelicFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type RelicVisitNeed =
  | "visit-saints-relic"
  | "visit-shrine"
  | "bring-family"
  | "praying-for-healing"
  | "praying-for-conversion"
  | "exploring-catholicism"
  | "unsure-what-to-do";

export type RelicVisitRecommendation = {
  need: RelicVisitNeed;
  steps: string[];
  prayer: string;
  reflectionQuestion: string;
  relatedLinks: { label: string; href: string }[];
};
