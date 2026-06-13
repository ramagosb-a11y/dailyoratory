export type SinTopic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  href: string;
  category: string;
  sortOrder: number;
};

export type SinFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type PredominantFault = {
  id: string;
  title: string;
  slug: string;
  description: string;
  signs: string[];
  oppositeVirtue: string;
  shortPrayer: string;
  sortOrder: number;
};

export type VirtueReplacement = {
  id: string;
  vice: string;
  virtue: string;
  description: string;
  practice: string;
  prayer: string;
  sortOrder: number;
};

export type TemptationPlan = {
  commonTemptation: string;
  warningSigns: string;
  firstResponse: string;
  accountabilityPerson: string;
  prayer: string;
  safePlace: string;
  oppositeVirtue: string;
  scriptureReference: string;
  confessionPlan: string;
  createdAt: string;
};

export type PredominantFaultReflection = {
  recurringSins: string;
  recurringEmotions: string;
  triggers: string;
  excuses: string;
  hardestVirtue: string;
  likelyRootFault: string;
  oppositeVirtue: string;
  weeklyPractice: string;
  confessionNote: string;
  createdAt: string;
};

export type NearOccasionAudit = {
  commonFall: string;
  place: string;
  people: string;
  deviceOrMedia: string;
  emotion: string;
  timeOfDay: string;
  safeguard: string;
  replacement: string;
  createdAt: string;
};

export type FreedomPlan = {
  pattern: string;
  oppositeVirtue: string;
  sacramentalStep: string;
  prayerStep: string;
  safeguard: string;
  workOfMercy: string;
  accountabilityStep: string;
  nextConfession: string;
  createdAt: string;
};
