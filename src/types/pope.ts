export type PapalDocumentTypeEnum =
  | "encyclical"
  | "apostolic-exhortation"
  | "apostolic-letter"
  | "motu-proprio"
  | "apostolic-constitution"
  | "bull"
  | "homily"
  | "general-audience"
  | "angelus-regina-caeli"
  | "message"
  | "speech"
  | "prayer"
  | "other";

export type PopeResourceSourceType =
  | "vatican"
  | "vatican-news"
  | "holy-see-press-office"
  | "catechism"
  | "daily-oratory"
  | "trusted-catholic-source";

export type CurrentPope = {
  id: string;
  papalName: string;
  slug: string;
  ordinal: string;
  secularName?: string;
  title: string;
  pontificateStart: string;
  pontificateEnd?: string;
  birthplace?: string;
  shortDescription: string;
  officialVaticanUrl: string;
  documentLinks: { label: string; href: string }[];
  sourceNotes: string;
  sortOrder: number;
};

export type RecentPope = {
  id: string;
  papalName: string;
  slug: string;
  ordinal?: string;
  pontificateStart: string;
  pontificateEnd?: string;
  shortTheme: string;
  shortDescription: string;
  officialVaticanUrl?: string;
  notableDocumentIds: string[];
  canonizationStatus?: string;
  sortOrder: number;
};

export type PapalDocument = {
  id: string;
  title: string;
  slug: string;
  popeId: string;
  documentType: PapalDocumentTypeEnum;
  date?: string;
  theme: string;
  shortDescription: string;
  officialUrl: string;
  recommendedFor: string;
  relatedDailyOratoryLinks: { label: string; href: string }[];
  sortOrder: number;
};

export type PapalDocumentType = {
  id: string;
  title: string;
  slug: PapalDocumentTypeEnum;
  description: string;
  authorityNote: string;
  exampleDocumentIds: string[];
  sortOrder: number;
};

export type PopeFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type PopeResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: PopeResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type PapalTheme = {
  id: string;
  title: string;
  slug: string;
  description: string;
  documentIds: string[];
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
};
