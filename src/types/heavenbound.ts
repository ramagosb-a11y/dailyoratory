export type HeavenboundCategory =
  | "scripture"
  | "prayer"
  | "examen"
  | "confession"
  | "adoration"
  | "virtue"
  | "liturgy"
  | "saints"
  | "rosary"
  | "creativity";

export type HeavenboundTimeOfDay =
  | "morning"
  | "midday"
  | "evening"
  | "before-confession"
  | "before-adoration"
  | "before-rosary"
  | "sunday"
  | "feast-days";

export type HeavenboundNeed = "five-minutes" | "scripture-prayer" | "conversion-growth";

export type HeavenboundRelatedLink = {
  label: string;
  href: string;
};

export type HeavenboundPath = {
  id: string;
  number: number;
  title: string;
  slug: string;
  description: string;
  bestFor: string[];
  recommendedTime: HeavenboundTimeOfDay[];
  category: HeavenboundCategory;
  starterPrompt: string;
  advancedPrompt: string;
  relatedDailyOratoryLinks: HeavenboundRelatedLink[];
};

export type HeavenboundRecommendationGroup = {
  id: HeavenboundNeed;
  title: string;
  recommendedPathSlugs: string[];
};
