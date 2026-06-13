export type GuideLink = {
  label: string;
  href: string;
};

export type GuideCard = {
  id: string;
  title: string;
  category: string;
  summary: string;
  firstStep: string;
  links: GuideLink[];
};
