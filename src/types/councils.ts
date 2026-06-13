export type CouncilEra =
  | "early-church"
  | "medieval"
  | "reformation-era"
  | "modern";

export type CouncilTopicType =
  | "trinity"
  | "christology"
  | "mary"
  | "scripture-tradition"
  | "eucharist"
  | "sacraments"
  | "liturgy"
  | "reform"
  | "church-authority"
  | "papacy"
  | "mission"
  | "modern-world";

export type CouncilResourceSourceType =
  | "vatican"
  | "usccb"
  | "catechism"
  | "catholic-encyclopedia"
  | "daily-oratory"
  | "trusted-catholic-source";

export type CouncilLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ChurchCouncil = {
  id: string;
  number: number;
  name: string;
  slug: string;
  years: string;
  location: string;
  era: CouncilEra;
  majorIssue: string;
  simpleTakeaway: string;
  description: string;
  keyTeachings: string[];
  whyItMattersToday: string;
  relatedTopics: CouncilTopicType[];
  relatedDailyOratoryLinks: CouncilLink[];
  officialResourceLinks: CouncilLink[];
  sortOrder: number;
};

export type CouncilTopic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  relatedCouncilIds: string[];
  relatedDailyOratoryLinks: CouncilLink[];
  sortOrder: number;
};

export type CouncilResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: CouncilResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type CouncilFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type CouncilTimelineFilter = {
  id: string;
  title: string;
  slug: string;
  description: string;
  councilIds: string[];
  sortOrder: number;
};
