export type TraditionSourceType =
  | "vatican"
  | "usccb"
  | "church-fathers"
  | "daily-oratory"
  | "trusted-catholic-source";

export type TraditionCategoryType =
  | "sacred-tradition"
  | "doctrine"
  | "discipline"
  | "devotion"
  | "custom"
  | "mixed";

export type TraditionLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type TraditionConcept = {
  id: string;
  title: string;
  slug: string;
  description: string;
  examples: string[];
  relatedLinks: TraditionLink[];
  sortOrder: number;
};

export type TraditionCategory = {
  id: string;
  title: string;
  slug: TraditionCategoryType | string;
  description: string;
  examples: string[];
  cautionNote?: string;
  relatedLinks: TraditionLink[];
  sortOrder: number;
};

export type TraditionResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: TraditionSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type TraditionFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type TraditionTimelineItem = {
  id: string;
  title: string;
  description: string;
  approximatePeriod: string;
  relatedLinks: TraditionLink[];
  sortOrder: number;
};

export type TraditionClassifierItem = {
  id: string;
  title: string;
  slug: string;
  category: TraditionCategoryType;
  explanation: string;
  relatedLinks: TraditionLink[];
  sortOrder: number;
};
