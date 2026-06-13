export type BibleLink = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  official?: boolean;
};

export enum BibleResourceSourceType {
  USCCB = "usccb",
  Vatican = "vatican",
  DailyOratory = "daily-oratory",
  TrustedCatholicSource = "trusted-catholic-source",
}

export enum BibleUseCase {
  Beginner = "beginner",
  MassReadings = "mass-readings",
  Study = "study",
  TraditionalLanguage = "traditional-language",
  Academic = "academic",
  Family = "family",
  Prayer = "prayer",
  Ocia = "ocia",
  Audio = "audio",
}

export interface BibleTranslation {
  id: string;
  title: string;
  abbreviation: string;
  slug: string;
  description: string;
  bestFor: string;
  readingLevel: string;
  catholicApprovedNote: string;
  regionNote: string;
  officialInfoUrl: string;
  sortOrder: number;
}

export interface BibleResource {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: BibleResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
}

export interface BibleReadingPlan {
  id: string;
  title: string;
  slug: string;
  description: string;
  audience: string[];
  days: number;
  references: string[];
  relatedLinks: BibleLink[];
  sortOrder: number;
}

export interface BibleFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
}

export interface BibleFinderRecommendation {
  need: BibleUseCase;
  recommendation: string;
  explanation: string;
  howToStart: string;
  relatedLinks: BibleLink[];
  officialLinks: BibleLink[];
}

export type BibleWordJournalInput = {
  reference: string;
  wordOrPhrase: string;
  stoodOut: string;
  invitation: string;
  action: string;
};

export type BibleCardItem = {
  title: string;
  description: string;
  note?: string;
  meta?: string;
  links?: BibleLink[];
};

export type BibleStep = {
  title: string;
  description: string;
};

export type BibleRelatedTool = {
  title: string;
  description: string;
  href: string;
  cta: string;
};
