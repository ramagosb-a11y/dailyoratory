export type ApostolicPardonFAQ = {
  id: string;
  question: string;
  answer: string;
  sortOrder: number;
};

export type EndOfLifeChecklistItem = {
  id: string;
  label: string;
  description: string;
  sortOrder: number;
};

export type ApostolicPardonRelatedLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  sortOrder: number;
};
