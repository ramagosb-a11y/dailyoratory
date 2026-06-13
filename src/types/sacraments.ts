export type SacramentGroupType = "initiation" | "healing" | "service-communion";

export type SacramentResourceSourceType =
  | "vatican"
  | "usccb"
  | "catechism"
  | "diocese"
  | "parish"
  | "daily-oratory"
  | "trusted-catholic-source";

export type SacramentPrayer = {
  id: string;
  title: string;
  body: string;
  sourceNote: string;
};

export type SacramentRelatedLink = {
  label: string;
  href: string;
  description?: string;
};

export type Sacrament = {
  id: string;
  name: string;
  slug: string;
  formalName: string;
  aliases: string[];
  group: SacramentGroupType;
  shortDescription: string;
  longDescription: string;
  graceFocus: string;
  visibleSign: string;
  biblicalRoots: string[];
  catechismReferences: string[];
  whoReceives: string[];
  ordinaryMinister: string;
  howCelebrated: string[];
  howToPrepare: string[];
  familyGuidance: string[];
  sponsorGuidance: string[];
  commonQuestions: Array<{ question: string; answer: string }>;
  commonMisunderstandings: string[];
  prayers: SacramentPrayer[];
  trustedResourceIds: string[];
  relatedSacramentIds: string[];
  relatedDailyOratoryLinks: SacramentRelatedLink[];
  preparationCompanionSlug: string;
  featured: boolean;
  sortOrder: number;
  sourceNotes?: string;
};

export type SacramentGroup = {
  id: string;
  title: string;
  slug: string;
  description: string;
  sacramentIds: string[];
  sortOrder: number;
};

export type SacramentResource = {
  id: string;
  sacramentId: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: SacramentResourceSourceType;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type SacramentFAQ = {
  id: string;
  sacramentId: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type SacramentalJourneyPromptOption = {
  id: string;
  label: string;
  recommendedSacramentIds: string[];
  recommendedLinks: SacramentRelatedLink[];
};

export type SacramentalJourneyPrompt = {
  id: string;
  question: string;
  options: SacramentalJourneyPromptOption[];
  recommendedSacramentIds: string[];
  recommendedLinks: SacramentRelatedLink[];
  sortOrder: number;
};

export type SacramentalJourneyAnswers = {
  baptized?: boolean;
  firstCommunion?: boolean;
  confirmed?: boolean;
  returningToConfession?: boolean;
  preparingForMarriage?: boolean;
  discerningVocation?: boolean;
  supportingChildOrCandidate?: boolean;
};

export type SacramentNeedRecommendation = {
  id: string;
  title: string;
  slug: string;
  description: string;
  suggestedSacramentIds: string[];
  relatedLinks: SacramentRelatedLink[];
};
