import type { CopyrightStatus } from "@/types/content";

export type IndulgenceResourceCategory =
  | "official"
  | "jubilee-2025"
  | "year-of-saint-francis-2026"
  | "doctrine"
  | "manual"
  | "guide"
  | "diocesan";

export type IndulgencePrayerCategory =
  | "indulgence-intention"
  | "detachment-from-sin"
  | "holy-father-intentions"
  | "before-indulgenced-work";

export type IndulgencePracticeCategory =
  | "practice"
  | "detachment-from-sin"
  | "holy-souls"
  | "spiritual-routine";

export type IndulgenceOfferingTarget =
  | "my-own-soul"
  | "deceased-loved-one"
  | "holy-souls-in-purgatory"
  | "soul-most-in-need";

export type IndulgencedWorkSlug =
  | "rosary"
  | "eucharistic-adoration"
  | "scripture-reading"
  | "stations-of-the-cross"
  | "works-of-mercy"
  | "prayer-for-the-dead"
  | "visit-a-church"
  | "jubilee-pilgrimage"
  | "saint-francis-pilgrimage"
  | "spiritual-retreat"
  | "other";

export type SpecialIndulgenceYearSlug = "jubilee-2025" | "year-of-saint-francis-2026";

export type IndulgenceResource = {
  id: string;
  title: string;
  slug: string;
  sourceName: string;
  sourceType: "official" | "guide" | "manual" | "diocesan";
  url: string;
  description: string;
  category: IndulgenceResourceCategory;
  official: boolean;
  sortOrder: number;
};

export type IndulgenceFAQ = {
  id: string;
  question: string;
  answer: string;
  category: "basics" | "conditions" | "application" | "jubilee" | "saint-francis";
  sortOrder: number;
};

export type IndulgencePractice = {
  id: string;
  title: string;
  description: string;
  category: IndulgencePracticeCategory;
  relatedLink?: string;
  sortOrder: number;
};

export type IndulgencePrayer = {
  id: string;
  title: string;
  slug: string;
  category: IndulgencePrayerCategory;
  body: string;
  note?: string;
  sortOrder: number;
  sourceType: "original" | "traditional";
  copyrightStatus: CopyrightStatus;
};

export type IndulgenceOpportunity = {
  id: string;
  title: string;
  slug: string;
  description: string;
  recommendedDay:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  category: "weekly-rhythm";
  relatedLink: string;
  usualConditionsReminder: string;
  sourceNote: string;
  sortOrder: number;
};

export type CommonIndulgencedWork = {
  id: string;
  title: string;
  slug: IndulgencedWorkSlug;
  description: string;
  howToDoPrayerfully: string;
  relatedDailyOratoryLink: string;
  officialSourceNote: string;
  sortOrder: number;
};

export type IndulgencePlan = {
  selectedWork: IndulgencedWorkSlug;
  intentionType: IndulgenceOfferingTarget;
  intentionName: string;
  confessionPlannedOrCompleted: boolean;
  communionPlannedOrCompleted: boolean;
  prayedForPopeIntentions: boolean;
  prayedForDetachment: boolean;
  workCompletedOrPlanned: boolean;
  createdAt: string;
};

export type SpecialIndulgenceYear = {
  id: string;
  title: string;
  slug: SpecialIndulgenceYearSlug;
  startDate: string;
  endDate: string;
  description: string;
  officialSourceUrl: string;
  usualConditions: string[];
  eligibleParticipants: string[];
  indulgencedWorks: string[];
  unableToTravelProvision: string;
  relatedPrayers: string[];
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
};

export type IndulgenceRelatedTool = {
  id: string;
  title: string;
  href: string;
  description: string;
};

export type ActiveSpecialIndulgenceCallout = {
  id: string;
  title: string;
  description: string;
  href: string;
};
