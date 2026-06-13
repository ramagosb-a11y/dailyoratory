export type MassSectionType =
  | "before-mass"
  | "introductory-rites"
  | "liturgy-of-the-word"
  | "liturgy-of-the-eucharist"
  | "communion-rite"
  | "concluding-rites"
  | "after-mass";

export type SacredSpaceType =
  | "altar"
  | "tabernacle"
  | "ambo"
  | "sanctuary"
  | "nave"
  | "font"
  | "confessional"
  | "sacristy"
  | "devotional-space";

export type MassObjectType =
  | "vessel"
  | "linen"
  | "vestment"
  | "book"
  | "candle"
  | "incense"
  | "oil"
  | "other";

export interface MassPart {
  id: string;
  title: string;
  slug: string;
  order: number;
  section: MassSectionType;
  shortDescription: string;
  whatHappens: string;
  spiritualMeaning: string;
  howToParticipate: string;
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
}

export interface MassSection {
  id: string;
  title: string;
  slug: string;
  description: string;
  partIds: string[];
  sortOrder: number;
}

export interface SacredSpace {
  id: string;
  title: string;
  slug: string;
  locationType: SacredSpaceType;
  shortDescription: string;
  detailedDescription: string;
  whyItMatters: string;
  whatToNotice: string;
  reverencePractice: string;
  relatedLinks: { label: string; href: string }[];
  sortOrder: number;
}

export interface MassObject {
  id: string;
  title: string;
  slug: string;
  objectType: MassObjectType;
  shortDescription: string;
  howUsed: string;
  whyItMatters: string;
  sortOrder: number;
}

export interface MassFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
}

export interface MassVideo {
  id: string;
  title: string;
  url: string;
  embedUrl: string;
  sourceName: string;
  description: string;
  external: boolean;
  sortOrder: number;
}
