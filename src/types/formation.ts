export type FormationCategory =
  | "doctrine"
  | "virtue"
  | "spiritual-growth"
  | "sacraments"
  | "scripture"
  | "prayer"
  | "liturgy"
  | "devotions"
  | "saints"
  | "family"
  | "service";

export type VirtueType = "theological" | "cardinal" | "growth";

export type FormationPillar = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  relatedLinks: Array<{ label: string; href: string }>;
  sortOrder: number;
};

export type FormationTopic = {
  id: string;
  title: string;
  slug: string;
  category: FormationCategory;
  summary: string;
  beginnerQuestion: string;
  catechismReferences: string;
  relatedLinks: Array<{ label: string; href: string }>;
  sourceNotes: string;
  sortOrder: number;
};

export type VirtueFormationItem = {
  id: string;
  title: string;
  slug: string;
  virtueType: VirtueType;
  description: string;
  oppositeVice: string;
  practice: string;
  prayerPrompt: string;
  relatedLinks: Array<{ label: string; href: string }>;
  sortOrder: number;
};

export type SpiritualGrowthPractice = {
  id: string;
  title: string;
  slug: string;
  purpose: string;
  howToStart: string;
  timeNeeded: string;
  relatedLinks: Array<{ label: string; href: string }>;
  sortOrder: number;
};

export type FormationPathRecommendation = {
  id: string;
  userNeed: string;
  title: string;
  description: string;
  firstStep: string;
  weeklyPractice: string;
  recommendedLinks: Array<{ label: string; href: string }>;
  sortOrder: number;
};

export type FormationChallengeWeek = {
  title: string;
  theme: string;
  tasks: string[];
};

export type FormationChallenge = {
  id: string;
  title: string;
  slug: string;
  description: string;
  durationDays: number;
  weeks: FormationChallengeWeek[];
  relatedLinks: Array<{ label: string; href: string }>;
};

export type FormationObstacle = {
  id: string;
  title: string;
  slug: string;
  encouragement: string;
  nextStep: string;
  relatedLinks: Array<{ label: string; href: string }>;
  sortOrder: number;
};

export type FormationPlanSelection = {
  userNeed: string;
  createdAt: string;
};
