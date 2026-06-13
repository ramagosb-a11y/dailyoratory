export type PrayerSourceType =
  | "traditional"
  | "original"
  | "usccb"
  | "vatican"
  | "daily-oratory"
  | "public-domain"
  | "external-resource";

export type PrayerResourceSourceType =
  | "official-church"
  | "catholic-media"
  | "liturgy-of-the-hours"
  | "scripture"
  | "prayer-library"
  | "trusted-catholic-resource";

export type CopyrightStatus =
  | "original"
  | "public-domain"
  | "traditional"
  | "short-quotation"
  | "needs-review"
  | "do-not-publish";

export interface PrayerLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface PrayerPagePrayer {
  id: string;
  title: string;
  slug: string;
  body: string;
  category: string;
  whenToPray: string;
  sourceType: PrayerSourceType;
  copyrightStatus: CopyrightStatus;
  sortOrder: number;
  subtitle?: string;
  note?: string;
  paragraphs?: string[];
  bullets?: string[];
  closing?: string;
}

export interface PrayerLevel {
  id: string;
  title: string;
  slug: string;
  description: string;
  bestFor: string[];
  relatedLinks: PrayerLink[];
  sortOrder: number;
}

export interface PrayerType {
  id: string;
  title: string;
  slug: string;
  description: string;
  simpleExample: string;
  relatedLinks: PrayerLink[];
  sortOrder: number;
}

export interface PrayerNeedRecommendation {
  id: string;
  need: string;
  slug: string;
  description: string;
  recommendedPrayerIds: string[];
  recommendedLinks: PrayerLink[];
  sortOrder: number;
}

export interface PrayerRhythmPlan {
  timeAvailable: string;
  timeOfDay: string;
  prayerStyle: string;
  generatedPlan: string[];
  relatedLinks: PrayerLink[];
  createdAt: string;
}

export interface PrayerExternalResource {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: PrayerResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
}

export interface PrayerFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
}

export interface PrayerToolCard {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  timeNeeded?: string;
  external?: boolean;
}

export interface PrayerObstacle {
  id: string;
  obstacle: string;
  nextStep: string;
}
