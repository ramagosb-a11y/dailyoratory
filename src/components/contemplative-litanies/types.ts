export type LitanyCategory = 'christ' | 'mary-saints' | 'spiritual-formation';
export type LitanyStatus = 'available' | 'coming-soon' | 'planned';

export interface InvocationItem {
  prompt: string; // or prayer
  response: string;
}

export interface ContemplativeSection {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  reflection: string; // contemplation text
  image: string;
  imageAlt: string;
  invocations: InvocationItem[];
}

export interface OpeningSection {
  title: string;
  kyrie: InvocationItem[];
  trinity: InvocationItem[];
}

export interface ClosingSection {
  title: string;
  agnusDei: InvocationItem[];
  versicle: {
    prompt: string;
    response: string;
  };
  collect: {
    heading: string;
    prayer: string;
    amen: string;
  };
}

export interface LitanyColorTheme {
  primary: string; // e.g. '#7A2533', '#3A533E', '#1F4E79'
  secondary: string;
  goldAccent: string;
  responseVariant: 'burgundy' | 'olive' | 'blue' | 'navy' | 'gold';
  badgeBg: string;
  badgeText: string;
  cardBorder: string;
  iconBg: string;
}

export interface LitanyData {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  category: LitanyCategory;
  colorTheme: LitanyColorTheme;
  heroImage?: string;
  heroImageAlt?: string;
  eyebrow: string;
  introduction: string;
  opening: OpeningSection;
  sections: ContemplativeSection[];
  closing: ClosingSection;
  finalMeditation?: string;
  silenceTitle?: string;
  silenceSubtitle?: string;
  
  // Source metadata
  source: string;
  sourceName?: string;
  sourceUrl?: string;
  copyrightStatus: string;
  editorialNote?: string;
  indulgenceNote?: string;
}

export interface LitanyCardInfo {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  category: LitanyCategory;
  status: LitanyStatus;
  movementsCount: number;
  route: string;
  image?: string;
  iconType: 'heart' | 'cross' | 'monogram' | 'chalice' | 'lily' | 'marian' | 'crown' | 'hands' | 'basin';
  colorTheme: LitanyColorTheme;
}

