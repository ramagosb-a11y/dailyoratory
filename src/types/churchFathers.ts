export type TraditionGroup =
  | "apostolic-fathers"
  | "greek-fathers"
  | "latin-fathers"
  | "syriac-eastern-witnesses"
  | "other";

export type ChurchFatherExternalLink = {
  label: string;
  url: string;
  sourceName: string;
  notes?: string;
};

export type ChurchFather = {
  id: string;
  name: string;
  slug: string;
  century: string;
  region: string;
  traditionGroup: TraditionGroup;
  shortDescription: string;
  keyThemes: string[];
  recommendedStartingWork: string;
  notableWorks: string[];
  externalLinks: ChurchFatherExternalLink[];
  relatedDailyOratoryLinks: Array<{ label: string; href: string }>;
  feastDay?: string;
  isGreatFather: boolean;
  sortOrder: number;
  sourceNotes?: string;
};

export type ChurchFatherTopic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  suggestedFatherIds: string[];
  relatedDailyOratoryLinks: Array<{ label: string; href: string }>;
  sortOrder: number;
  sourceNotes?: string;
};

export type ChurchFatherReadingPlanItem = {
  id: string;
  title: string;
  fatherId?: string;
  workTitle: string;
  description: string;
  externalLink: string;
  sortOrder: number;
};
