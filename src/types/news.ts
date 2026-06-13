export type NewsSourceType =
  | "official-church"
  | "diocese"
  | "catholic-news"
  | "catholic-media"
  | "spiritual-news-aggregation"
  | "commentary"
  | "daily-readings"
  | "secular-context"
  | "other-trusted";

export type NewsCategory =
  | "official"
  | "vatican"
  | "us-church"
  | "world-church"
  | "daily-readings"
  | "reflections"
  | "pro-life"
  | "persecuted-christians"
  | "faith-culture"
  | "spiritual"
  | "local";

export type CatholicNewsResource = {
  id: string;
  title: string;
  slug: string;
  url: string;
  description: string;
  sourceName: string;
  sourceType: NewsSourceType;
  category: NewsCategory;
  official: boolean;
  region: string;
  badge: string;
  sortOrder: number;
};

export type NewsPrayerPrompt = {
  id: string;
  title: string;
  slug: string;
  situation: string;
  prayer: string;
  actionStep: string;
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
};

export type NewsFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};
