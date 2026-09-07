import content from "./fasting-retreat.json";

export type RetreatBlock = { kind: string; text: string };
export type RetreatStep = {
  id: string;
  chapter: string;
  title: string;
  period: string;
  image: string;
  imageAlt: string;
  intro: string;
  blocks: RetreatBlock[];
  companion?: string;
  scripture?: string;
  silence?: boolean;
  prayer?: boolean;
  optional?: boolean;
  dayEnd?: boolean;
  links?: { label: string; href: string }[];
};
export type RetreatChapter = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  grace: string;
  refrain: string;
  image: string;
  imageAlt: string;
  description: string;
};
export const chapters: RetreatChapter[] = content.chapters;
export const steps: RetreatStep[] = content.steps;
export const stepById = new Map(steps.map((step) => [step.id, step]));
export const chapterById = new Map(
  chapters.map((chapter) => [chapter.id, chapter]),
);

export const companions: Record<
  string,
  {
    title: string;
    action: string;
    href: string;
    image: string;
    description: string;
    icon: string;
  }
> = {
  rosary: {
    title: "Holy Rosary",
    action: "Pray the Rosary",
    href: "/rosary/visual-meditation",
    image: "15-rosary",
    description: "Enter the mysteries with Mary.",
    icon: "rosary",
  },
  adoration: {
    title: "Adoration",
    action: "Open Adoration Companion",
    href: "/adoration/companion",
    image: "14-eucharistic-adoration",
    description: "Remain before the Blessed Sacrament.",
    icon: "sun",
  },
  examination: {
    title: "Examination",
    action: "Begin Examination",
    href: "/confession/examination-companion",
    image: "04-confession-and-examination",
    description: "Prepare your heart with honesty and hope.",
    icon: "book",
  },
  saints: {
    title: "Litany of the Saints",
    action: "Pray the Litany of the Saints",
    href: "/prayers/litanies/saints",
    image: "03-preparation-communion-of-saints",
    description: "Ask the saints to accompany you.",
    icon: "cross",
  },
  "sacred-heart": {
    title: "Litany of the Sacred Heart",
    action: "Pray the Sacred Heart Litany",
    href: "/prayers/litanies/sacred-heart",
    image: "16-litany-sacred-heart",
    description: "Draw near to the Heart of Jesus.",
    icon: "heart",
  },
  loreto: {
    title: "Litany of Loreto",
    action: "Pray the Litany of Loreto",
    href: "/prayers/litanies/loreto",
    image: "17-litany-loreto",
    description: "Pray with the Blessed Virgin Mary.",
    icon: "flower",
  },
  "saint-joseph": {
    title: "Litany of St. Joseph",
    action: "Pray the Litany of St. Joseph",
    href: "/prayers/litanies/saint-joseph",
    image: "18-litany-saint-joseph",
    description: "Ask for faithful work and patient love.",
    icon: "flower",
  },
  angelus: {
    title: "Angelus",
    action: "Pray the Angelus",
    href: "/prayers/angelus",
    image: "12-angelus",
    description: "Remember the mystery of the Incarnation.",
    icon: "sun",
  },
  "divine-mercy": {
    title: "Divine Mercy",
    action: "Pray the Divine Mercy Chaplet",
    href: "/divine-mercy/chaplet",
    image: "24-divine-mercy",
    description: "Intercede for souls in need of mercy.",
    icon: "heart",
  },
};
export function dailyLitany(chapter: string) {
  return chapter === "day-1"
    ? "sacred-heart"
    : chapter === "day-2"
      ? "loreto"
      : chapter === "day-3" || chapter === "closing"
        ? "saint-joseph"
        : "saints";
}
export function retreatUrl(chapter: string, step?: string) {
  return (
    "/fasting-retreat#" +
    new URLSearchParams({ day: chapter, ...(step ? { step } : {}) }).toString()
  );
}
export const sourceDocument =
  "https://docs.google.com/document/d/1LErqoZoh6CqF2OGTMtruZZvy2jy1n7bOLFc065VM5Lg/edit";
