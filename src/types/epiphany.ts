export type EpiphanyGift = {
  id: string;
  title: string;
  meaning: string;
  reflection: string;
  prayer: string;
  sortOrder: number;
};

export type EpiphanyJourneyStep = {
  id: string;
  title: string;
  description: string;
  reflectionQuestion: string;
  sortOrder: number;
};

export type HouseBlessingPlan = {
  year: string;
  householdName: string;
  homeIntention: string;
  rooms: string;
  peopleToPrayFor: string;
  giftToOfferChrist: string;
  createdAt: string;
};

export type EpiphanyRelatedLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  sortOrder: number;
};
