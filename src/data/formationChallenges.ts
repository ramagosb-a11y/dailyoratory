import type { FormationChallenge } from "@/types/formation";

export const formationChallenge: FormationChallenge = {
  id: "challenge-30-day-formation",
  title: "30-Day Catholic Formation Challenge",
  slug: "30-day-catholic-formation",
  description:
    "A simple month-long path to begin growing in doctrine, virtue, and prayer.",
  durationDays: 30,
  weeks: [
    {
      title: "Week 1",
      theme: "Foundations",
      tasks: [
        "Read one Catechism summary",
        "Pray the Our Father slowly",
        "Attend Sunday Mass intentionally",
        "Read one Gospel passage",
      ],
    },
    {
      title: "Week 2",
      theme: "Prayer",
      tasks: [
        "Morning Offering",
        "One decade of the Rosary",
        "Five minutes of silence",
        "Scripture prayer",
      ],
    },
    {
      title: "Week 3",
      theme: "Virtue",
      tasks: [
        "Choose one virtue",
        "Practice one work of mercy",
        "Make an examen",
        "Avoid one near occasion of sin",
      ],
    },
    {
      title: "Week 4",
      theme: "Sacramental life",
      tasks: [
        "Prepare for confession",
        "Spend time in adoration if possible",
        "Reflect on the Eucharist",
        "Create a simple Rule of Life",
      ],
    },
  ],
  relatedLinks: [
    { label: "Rule of Life", href: "/rule-of-life" },
    { label: "Confession Guide", href: "/confession" },
    { label: "Adoration", href: "/adoration" },
  ],
};
