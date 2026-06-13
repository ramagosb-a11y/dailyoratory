export type ScriptureResourceSourceType =
  | "usccb"
  | "vatican"
  | "daily-oratory"
  | "public-domain"
  | "trusted-catholic-source"
  | "manual-of-indulgences";

export type ScriptureResource = {
  id: string;
  title: string;
  sourceName: string;
  url: string;
  description: string;
  sourceType: ScriptureResourceSourceType;
  official: boolean;
  sortOrder: number;
};

export type ScriptureReadingPath = {
  id: string;
  title: string;
  slug: string;
  description: string;
  suggestedBooks: string[];
  suggestedReferences: string[];
  bestFor: string;
  liturgicalSeason: string;
  sortOrder: number;
};

export type ScripturePrayerTheme = {
  id: string;
  title: string;
  slug: string;
  description: string;
  suggestedReferences: string[];
  prayerPrompt: string;
  relatedDailyOratoryLinks: Array<{ label: string; href: string }>;
  sortOrder: number;
};

export type ScripturePrayerPlan = {
  scriptureFocus: string;
  prayerStyle: string;
  intention: string;
  customPassage: string;
  createdAt: string;
};

export type ScripturePrayerFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};
