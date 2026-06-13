export type FamilyStage =
  | "single-person-home"
  | "married-couple"
  | "young-children"
  | "teens"
  | "blended-family"
  | "single-parent"
  | "grandparents"
  | "empty-nest"
  | "caregiving"
  | "homebound"
  | "mixed-faith"
  | "returning"
  | "exploring";

export type FamilyResourceSourceType =
  | "vatican"
  | "usccb"
  | "daily-oratory"
  | "parish"
  | "diocese"
  | "trusted-catholic-source";

export type FamilyLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FamilyResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: FamilyResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type FamilyPrayer = {
  id: string;
  title: string;
  slug: string;
  body: string;
  category: string;
  whenToPray: string;
  sourceType: FamilyResourceSourceType;
  copyrightStatus: "original" | "public-domain" | "quoted-short";
  sortOrder: number;
};

export type FamilyVirtue = {
  id: string;
  title: string;
  slug: string;
  description: string;
  practice: string;
  conversationQuestion: string;
  prayer: string;
  relatedSaint: string;
  relatedLinks: FamilyLink[];
  sortOrder: number;
};

export type FamilyRuleOfLifePlan = {
  familyStage: FamilyStage;
  timeAvailable: string;
  focus: string;
  dailyPrayerPractice: string;
  weeklyPractice: string;
  familyVirtue: string;
  mercyPractice: string;
  homePractice: string;
  conversationPrompt: string;
  blessingPrayer: string;
  createdAt: string;
};

export type FamilyFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};
