export type ResourceCategory =
  | "Prayer"
  | "Rosary"
  | "Daily Reflection"
  | "Liturgical Year"
  | "Sacraments"
  | "Saints & Devotions"
  | "Formation"
  | "Community"
  | "Scripture"
  | "Reference";

export type LiturgicalSeason =
  | "Advent"
  | "Christmas"
  | "Lent"
  | "Easter"
  | "Pentecost"
  | "Ordinary Time"
  | "Marian"
  | "All Year";

export type ResourceFormat =
  | "Guide"
  | "Prayer"
  | "Reflection"
  | "Devotion"
  | "Reading Plan"
  | "Checklist"
  | "Event"
  | "Reference";

export type ResourceBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] };

export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  format: ResourceFormat;
  season: LiturgicalSeason;
  tags: string[];
  featured?: boolean;
  minutes: number;
  updatedAt: string;
  status: "published" | "draft";
  related?: string[];
  body: ResourceBlock[];
};

export type Reflection = {
  slug: string;
  date: string;
  title: string;
  reference: string;
  excerpt: string;
  season: LiturgicalSeason;
};

export type FaithEvent = {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "Live Prayer" | "Local Group" | "Formation" | "Discussion";
  description: string;
};

export type SectionPage = {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  hero: string;
  primaryHref: string;
  primaryLabel: string;
  categories: ResourceCategory[];
  tags: string[];
};
