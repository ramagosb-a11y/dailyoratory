export type DevotionCategoryType =
  | "marian"
  | "eucharistic"
  | "jesus"
  | "mercy-reparation"
  | "saints"
  | "seasonal"
  | "family"
  | "novenas-litanies"
  | "dead"
  | "daily-rhythm";

export type BeginnerFriendly = "yes" | "moderate" | "advanced";
export type DevotionCopyrightStatus =
  | "original"
  | "public-domain"
  | "licensed"
  | "short-quotation"
  | "needs-review"
  | "do-not-publish";
export type DevotionReviewStatus = "draft" | "needs-review" | "approved" | "do-not-publish";

export type TrustedDevotionSourceType =
  | "vatican"
  | "usccb"
  | "diocese"
  | "religious-order"
  | "shrine"
  | "official-apostolate"
  | "daily-oratory"
  | "public-domain-reference"
  | "other-trusted";

export type DevotionCategory = {
  id: string;
  title: string;
  slug: DevotionCategoryType;
  description: string;
  iconName: string;
  sortOrder: number;
  featured: boolean;
};

export type TrustedDevotionLink = {
  id: string;
  devotionId: string;
  label: string;
  url: string;
  sourceName: string;
  sourceType: TrustedDevotionSourceType;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type Devotion = {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  shortDescription: string;
  longDescription: string;
  spiritualFruits: string[];
  theologicalFocus: string[];
  whyPractice: string[];
  howToBegin: string[];
  whenToPractice: string[];
  suggestedRhythm: string[];
  timeNeeded: string;
  beginnerFriendly: BeginnerFriendly;
  liturgicalSeason: string[];
  relatedSacraments: string[];
  relatedDailyOratoryLinks: Array<{ label: string; href: string }>;
  relatedDevotionIds: string[];
  trustedLinkIds: string[];
  prayerGuide: string[];
  commonMisunderstandings: string[];
  sourceNotes: string;
  copyrightStatus: DevotionCopyrightStatus;
  reviewStatus: DevotionReviewStatus;
  featured: boolean;
  devotionOfMonth: boolean;
  sortOrder: number;
  spiritualNeedTags: string[];
  familyFriendly: boolean;
  devotionType: string;
  status: "approved" | "draft";
};

export type DevotionRecommendationNeed = {
  id: string;
  title: string;
  slug: string;
  description: string;
  suggestedDevotionIds: string[];
  relatedLinks: Array<{ label: string; href: string }>;
};

export type DevotionFilterState = {
  q?: string;
  category?: string;
  beginnerFriendly?: string;
  liturgicalSeason?: string;
  spiritualNeed?: string;
  relatedSacrament?: string;
  devotionType?: string;
  marian?: boolean;
  eucharistic?: boolean;
  reparation?: boolean;
  familyFriendly?: boolean;
  timeNeeded?: string;
};

export type DevotionSortOption =
  | "featured"
  | "beginner-friendly"
  | "time-needed"
  | "alphabetical"
  | "seasonal";
