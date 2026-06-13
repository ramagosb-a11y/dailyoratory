export type AngelResourceSourceType =
  | "vatican"
  | "usccb"
  | "daily-oratory"
  | "trusted-catholic-source";

export type AngelPrayerCategory =
  | "guardian-angels"
  | "archangels"
  | "protection"
  | "worship"
  | "family";

export type AngelTopic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  keyPoints: string[];
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
};

export type AngelEpisode = {
  id: string;
  title: string;
  slug: string;
  description: string;
  youtubeVideoId: string;
  speaker: string;
  sourceName: string;
  tags: string[];
  sortOrder: number;
};

export type AngelChoir = {
  id: string;
  name: string;
  slug: string;
  triad: "Highest Triad" | "Middle Triad" | "Lowest Triad";
  description: string;
  spiritualReflection: string;
  sortOrder: number;
};

export type Archangel = {
  id: string;
  name: string;
  slug: string;
  role: string;
  description: string;
  scriptureReferences: string[];
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
};

export type AngelPrayer = {
  id: string;
  title: string;
  slug: string;
  body: string;
  category: AngelPrayerCategory;
  sourceType: AngelResourceSourceType;
  copyrightStatus: "traditional-prayer" | "original-summary";
  sortOrder: number;
};

export type AngelFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type AngelResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: AngelResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
};
