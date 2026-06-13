export type CatholicAnswerLink = {
  id: string;
  label: string;
  href: string;
  description: string;
  sortOrder: number;
};

export type CatholicAnswer = {
  id: string;
  question: string;
  slug: string;
  shortAnswer: string;
  category: string;
  tags: string[];
  learnMoreLabel: string;
  learnMoreHref: string;
  relatedLinks: CatholicAnswerLink[];
  sortOrder: number;
};

export type CatholicAnswerCategory = {
  id: string;
  title: string;
  slug: string;
  description: string;
  sortOrder: number;
};
