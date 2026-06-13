export type PenitentialPsalm = {
  id: string;
  psalmNumber: number;
  title: string;
  theme: string;
  reflection: string;
  heartQuestion: string;
  usccbUrl: string;
  sortOrder: number;
};

export type PenitentialPsalmJourneyDay = {
  id: string;
  dayNumber: number;
  psalmNumber: number;
  title: string;
  practice: string;
  sortOrder: number;
};

export type PenitentialPsalmRelatedLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  sortOrder: number;
};
