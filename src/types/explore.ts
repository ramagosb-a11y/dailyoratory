export type ExploreLink = {
  label: string;
  href: string;
};

export type ExploreStartingPoint = {
  id: string;
  title: string;
  slug: string;
  description: string;
  recommendedLinks: ExploreLink[];
  firstStep: string;
  prayer: string;
  sortOrder: number;
};

export type ExploreBeliefCard = {
  id: string;
  title: string;
  slug: string;
  plainExplanation: string;
  relatedLinks: ExploreLink[];
  sortOrder: number;
};

export type MisunderstandingCard = {
  id: string;
  topic: string;
  catholicsBelieve: string;
  catholicsDoNotBelieve: string;
  relatedLinks: ExploreLink[];
  sortOrder: number;
};

export type ExploreFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  relatedLinks: ExploreLink[];
  sortOrder: number;
};

export type GlossaryTerm = {
  id: string;
  term: string;
  slug: string;
  definition: string;
  category: string;
  relatedLinks: ExploreLink[];
  sortOrder: number;
};
