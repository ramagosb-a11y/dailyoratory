export type BurialDispositionOption = {
  id: string;
  title: string;
  description: string;
  catholicGuidance: string;
  href?: string;
  sortOrder: number;
};

export type CatholicFuneralRite = {
  id: string;
  title: string;
  description: string;
  purpose: string;
  sortOrder: number;
};

export type CatholicBurialFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type FuneralPlanningChecklistItem = {
  id: string;
  label: string;
  description: string;
  sortOrder: number;
};

export type PrayerForDead = {
  id: string;
  title: string;
  prayer: string;
  category: string;
  sortOrder: number;
};

export type CatholicBurialReference = {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  sortOrder: number;
};

export type CatholicBurialRelatedLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  sortOrder: number;
};

export type CatholicFuneralPlanningNotes = {
  parishContact: string;
  priestOrDeaconContact: string;
  funeralHomeContact: string;
  cemeteryOrColumbarium: string;
  burialOrCremationNotes: string;
  vigilDetails: string;
  funeralMassDetails: string;
  committalDetails: string;
  scriptureIdeas: string;
  musicNotes: string;
  massIntentions: string;
  familyTasks: string;
  createdAt: string;
};
