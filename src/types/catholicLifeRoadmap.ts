export type CatholicLifeLink = {
  id: string;
  label: string;
  href: string;
  description: string;
  sortOrder: number;
};

export type CatholicLifeSection = {
  id: string;
  title: string;
  slug: string;
  description: string;
  startHereLabel: string;
  startHereHref: string;
  supportingLinks: CatholicLifeLink[];
  suggestedNextStep: string;
  category: string;
  sortOrder: number;
};

export type CatholicLifeTrack = {
  id: string;
  title: string;
  description: string;
  steps: string[];
  links: CatholicLifeLink[];
  sortOrder: number;
};

export type CatholicWeeklyRhythm = {
  id: string;
  frequency: string;
  practices: string[];
  sortOrder: number;
};

export type CatholicLifeRoadmapStage = {
  id: string;
  title: string;
  description: string;
  sortOrder: number;
};
