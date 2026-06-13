export type EschatologyRelatedLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  sortOrder: number;
};

export type EschatologyScriptureReference = {
  id: string;
  reference: string;
  description: string;
  usccbUrl: string;
  sortOrder: number;
};

export type EschatologyFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type EschatologyTopic = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  href: string;
  category: string;
  scriptureReferences: EschatologyScriptureReference[];
  catechismReferences: string[];
  reflectionQuestions: string[];
  relatedLinks: EschatologyRelatedLink[];
  sortOrder: number;
};
