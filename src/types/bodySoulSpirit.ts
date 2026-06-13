export type BodySoulSpiritLink = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  official?: boolean;
};

export enum TempleCareCategory {
  Prayer = "prayer",
  Confession = "confession",
  Eucharist = "eucharist",
  Scripture = "scripture",
  Virtue = "virtue",
  Silence = "silence",
  Fasting = "fasting",
  Mercy = "mercy",
  Technology = "technology",
  Forgiveness = "forgiveness",
}

export enum BodySoulSpiritResourceSourceType {
  Vatican = "vatican",
  USCCB = "usccb",
  DailyOratory = "daily-oratory",
  TrustedCatholicSource = "trusted-catholic-source",
}

export interface InteriorTempleImage {
  id: string;
  title: string;
  slug: string;
  imagePart: string;
  spiritualMeaning: string;
  reflectionQuestion: string;
  relatedPractice: string;
  relatedLinks: BodySoulSpiritLink[];
  sortOrder: number;
}

export interface TempleCarePractice {
  id: string;
  title: string;
  slug: string;
  description: string;
  practice: string;
  relatedLinks: BodySoulSpiritLink[];
  sortOrder: number;
}

export interface BodySoulSpiritPrayer {
  id: string;
  title: string;
  slug: string;
  body: string;
  category: string;
  whenToPray: string;
  sourceType: "daily-oratory" | "traditional";
  copyrightStatus: "original" | "traditional";
  sortOrder: number;
}

export interface BodySoulSpiritFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
}

export interface BodySoulSpiritResource {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: BodySoulSpiritResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
}

export interface InteriorTempleCheckupResult {
  gratitude: string;
  mercyArea: string;
  virtue: string;
  nextStep: string;
}

export type InteriorTempleCheckupSelection =
  | "steady-light"
  | "needs-mercy"
  | "needs-strengthening"
  | "not-sure";

export type InteriorTempleCheckupInput = Record<string, InteriorTempleCheckupSelection>;

export interface InteriorTempleCheckupQuestion {
  id: string;
  question: string;
  gratitudePrompt: string;
  mercyPrompt: string;
  virtue: string;
  nextStep: string;
  sortOrder: number;
}

export type BodySoulSpiritRelatedTool = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

