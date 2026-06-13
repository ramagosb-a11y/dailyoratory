import type { ExamenResource } from "@/types/dailyExamen";

export const dailyExamenResources: ExamenResource[] = [
  {
    id: "ignatian-spirituality-examen",
    title: "Ignatian Spirituality: The Daily Examen",
    url: "https://www.ignatianspirituality.com/ignatian-prayer/the-examen/",
    sourceName: "Ignatian Spirituality",
    sourceType: "ignatian-spirituality",
    description:
      "A trusted Catholic introduction to the Examen and its place within Ignatian prayer.",
    official: false,
    sortOrder: 10,
  },
  {
    id: "jesuits-examen",
    title: "Jesuits.org: The Examen",
    url: "https://www.jesuits.org/spirituality/the-ignatian-examen/",
    sourceName: "Jesuits.org",
    sourceType: "jesuits",
    description:
      "A Jesuit overview of the Ignatian Examen and its use as a daily prayer of awareness and review.",
    official: false,
    sortOrder: 20,
  },
  {
    id: "vatican-catechism-prayer",
    title: "Vatican Catechism of the Catholic Church",
    url: "https://www.vatican.va/archive/ENG0015/_INDEX.HTM",
    sourceName: "The Vatican",
    sourceType: "vatican",
    description:
      "The official Catechism, especially its teaching on prayer, conversion, contrition, and the Christian life.",
    official: true,
    sortOrder: 30,
  },
  {
    id: "usccb-catholic-prayers",
    title: "USCCB Catholic Prayers",
    url: "https://www.usccb.org/catholic-prayers",
    sourceName: "USCCB",
    sourceType: "usccb",
    description:
      "Official U.S. bishops' prayer resources that can pair naturally with the Examen and night prayer.",
    official: true,
    sortOrder: 40,
  },
];

