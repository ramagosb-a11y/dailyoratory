export type DetachmentPracticeStep = {
  id: string;
  title: string;
  description: string;
  sortOrder: number;
};

export type DetachmentComparisonItem = {
  id: string;
  type: "is" | "is-not";
  text: string;
  sortOrder: number;
};

export type DetachmentFAQ = {
  id: string;
  question: string;
  answer: string;
  sortOrder: number;
};

export type SevenDayDetachmentPractice = {
  id: string;
  day: number;
  title: string;
  practice: string;
  prayerPrompt: string;
  sortOrder: number;
};

export type DetachmentPlan = {
  attachmentOrSin: string;
  nearOccasion: string;
  oppositeVirtue: string;
  temptationPrayer: string;
  sacramentalStep: string;
  indulgencedWork: string;
  charityOrPenance: string;
  createdAt: string;
};
