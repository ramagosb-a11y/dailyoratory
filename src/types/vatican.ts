export type VaticanResourceSourceType =
  | "vatican"
  | "vatican-news"
  | "holy-see-press-office"
  | "vatican-media"
  | "st-peters-basilica"
  | "vatican-museums"
  | "youtube"
  | "daily-oratory"
  | "trusted-catholic-source";

export type VaticanVideoCategory =
  | "live"
  | "mass"
  | "basilica"
  | "museum"
  | "sistine-chapel"
  | "papal-audience"
  | "angelus"
  | "history"
  | "sacred-art"
  | "jubilee"
  | "other";

export type VaticanResource = {
  id: string;
  title: string;
  slug: string;
  url: string;
  sourceName: string;
  sourceType: VaticanResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type VaticanVideo = {
  id: string;
  title: string;
  slug: string;
  youtubeUrl: string;
  embedUrl?: string;
  sourceName: string;
  category: VaticanVideoCategory;
  description: string;
  official: boolean;
  live: boolean;
  sortOrder: number;
};

export type VaticanVirtualTour = {
  id: string;
  title: string;
  slug: string;
  url: string;
  sourceName: string;
  description: string;
  official: boolean;
  category: string;
  sortOrder: number;
};

export type VaticanTimelineItem = {
  id: string;
  title: string;
  description: string;
  approximatePeriod: string;
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
};

export type VaticanFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};
