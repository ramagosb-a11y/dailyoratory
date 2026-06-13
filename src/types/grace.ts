export type GraceTopic = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  href: string;
  category: string;
  catechismReferences: string[];
  scriptureReferences: string[];
  reflectionQuestions: string[];
  relatedLinks: Array<{ label: string; href: string }>;
  sortOrder: number;
};

export type GraceForm = {
  id: string;
  title: string;
  description: string;
  examples: string[];
  href: string;
  catechismReferences: string[];
  sortOrder: number;
};

export type SacramentalGraceCard = {
  id: string;
  sacrament: string;
  description: string;
  href: string;
  sortOrder: number;
};

export type GraceScriptureReference = {
  id: string;
  reference: string;
  description: string;
  usccbUrl: string;
  sortOrder: number;
};

export type GraceCatechismReference = {
  id: string;
  reference: string;
  title: string;
  description: string;
  url: string;
  sortOrder: number;
};

export type GraceReflection = {
  needGraceToday: string;
  temptationOrWeakness: string;
  goodAction: string;
  sacramentOrPrayerStep: string;
  virtueToPractice: string;
  personToServe: string;
  graceToAskFor: string;
  createdAt: string;
};

export type GraceCooperationPlan = {
  graceAskedFor: string;
  temptationToResist: string;
  virtueToPractice: string;
  sacramentOrPrayerStep: string;
  actOfCharity: string;
  promptNotToIgnore: string;
  createdAt: string;
};
