export type LentTopic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  href: string;
  category: string;
  sortOrder: number;
};

export type LentenRoadmapItem = {
  id: string;
  title: string;
  description: string;
  sortOrder: number;
};

export type LentenPractice = {
  id: string;
  title: string;
  description: string;
  category: string;
  sortOrder: number;
};

export type FastingFAQ = {
  id: string;
  question: string;
  answer: string;
  sortOrder: number;
};

export type StationOfTheCross = {
  id: string;
  number: number;
  title: string;
  shortMeditation: string;
  prayer: string;
  sortOrder: number;
};

export type LentenPlan = {
  prayerPractice: string;
  fastingSacrifice: string;
  almsgivingWork: string;
  confessionPlan: string;
  scripturePlan: string;
  sinOrAttachment: string;
  virtue: string;
  personToServeOrForgive: string;
  holyWeekPlan: string;
  createdAt: string;
};
