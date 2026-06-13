export type SacramentalCategory =
  | "holy-water"
  | "crucifix"
  | "rosary"
  | "medals"
  | "scapulars"
  | "candles"
  | "sacred-images"
  | "blessed-salt"
  | "liturgical-items"
  | "prayer-cards"
  | "relics"
  | "blessings";

export type SacramentalResourceSourceType =
  | "vatican"
  | "usccb"
  | "daily-oratory"
  | "catholic-store"
  | "parish"
  | "shrine"
  | "monastery"
  | "trusted-catholic-source";

export type PurchaseLinkStatus = "approved" | "review" | "hidden";

export type SacramentalItem = {
  id: string;
  title: string;
  slug: string;
  description: string;
  howToUse: string;
  blessingNote?: string;
  cautionNote?: string;
  category: SacramentalCategory;
  relatedLinks: Array<{ label: string; href: string }>;
  purchaseCategory: string;
  sortOrder: number;
};

export type SacramentalPrayer = {
  id: string;
  title: string;
  slug: string;
  body: string;
  category: SacramentalCategory | "general";
  whenToPray: string;
  sourceType: "daily-oratory" | "traditional";
  copyrightStatus: "original" | "traditional";
  sortOrder: number;
};

export type SacramentalPurchaseLink = {
  id: string;
  title: string;
  slug: string;
  url: string;
  sourceName: string;
  description: string;
  category: string;
  external: boolean;
  affiliate: boolean;
  disclosure?: string;
  sortOrder: number;
  status: PurchaseLinkStatus;
};

export type SacramentalFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type SacramentalResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: SacramentalResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type SacramentalFinderNeed =
  | "daily-prayer"
  | "remember-baptism"
  | "pray-with-mary"
  | "spiritual-protection"
  | "prayerful-home"
  | "teach-children"
  | "reverence-for-cross"
  | "liturgical-year"
  | "new-to-catholicism";

export type SacramentalFinderRecommendation = {
  need: SacramentalFinderNeed;
  sacramentalId: string;
  explanation: string;
  prayer: string;
  relatedLinks: Array<{ label: string; href: string }>;
  purchaseGuidance: string;
  blessingNote?: string;
};
