import type { LiturgicalSeason } from "./types";

export const liturgicalSeasons: {
  slug: string;
  name: LiturgicalSeason;
  color: string;
  summary: string;
  practices: string[];
}[] = [
  {
    slug: "advent",
    name: "Advent",
    color: "Violet",
    summary: "Watchful hope, repentance, and longing for the coming of Christ.",
    practices: ["Daily silence", "Works of mercy", "Family Advent prayer"],
  },
  {
    slug: "christmas",
    name: "Christmas",
    color: "White",
    summary: "Joy in the Incarnation and the nearness of God made visible.",
    practices: ["Bless the home", "Pray the Angelus", "Visit the Christ child"],
  },
  {
    slug: "lent",
    name: "Lent",
    color: "Violet",
    summary: "Prayer, fasting, and almsgiving ordered toward conversion.",
    practices: ["Confession", "Stations of the Cross", "Friday fasting"],
  },
  {
    slug: "easter",
    name: "Easter",
    color: "White and Gold",
    summary: "Fifty days of resurrection joy, baptismal renewal, and mission.",
    practices: ["Renew baptismal promises", "Pray Acts", "Practice visible joy"],
  },
  {
    slug: "pentecost",
    name: "Pentecost",
    color: "Red",
    summary: "The fire of the Holy Spirit and the courage of the Church.",
    practices: ["Novena to the Holy Spirit", "Discern gifts", "Pray for mission"],
  },
  {
    slug: "ordinary-time",
    name: "Ordinary Time",
    color: "Green",
    summary: "Steady growth in discipleship, virtue, and daily fidelity.",
    practices: ["Rule of life", "Sunday Gospel review", "Works of charity"],
  },
];
