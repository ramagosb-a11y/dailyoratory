import {
  latinRosarySteps,
  rosaryClosingSteps,
  rosaryDecadeSteps,
  rosaryMysterySets,
  rosaryOpeningSteps,
  rosaryPrayers,
} from "@/data/rosary";
import {
  rosaryMysteries,
  rosaryMysteryGroups,
  rosaryMysteryRouteAliases,
  traditionalRosaryDaySchedule,
} from "@/data/rosaryMysteries";
import type {
  RosaryMystery,
  RosaryMysteryGroup,
  RosaryMysteryGroupSlug,
  RosaryMysterySetSlug,
} from "@/types/rosary";

export const rosaryLinks = [
  { label: "Overview", href: "/rosary" },
  { label: "Joyful", href: "/rosary/joyful-mysteries" },
  { label: "Sorrowful", href: "/rosary/sorrowful-mysteries" },
  { label: "Glorious", href: "/rosary/glorious-mysteries" },
  { label: "Luminous", href: "/rosary/luminous-mysteries" },
  { label: "Latin Rosary", href: "/rosary/latin-rosary" },
] as const;

const mysteryGroups = rosaryMysteryGroups.slice().sort((first, second) => first.sortOrder - second.sortOrder);
const mysteryGroupsBySlug = new Map<RosaryMysteryGroupSlug, RosaryMysteryGroup>(
  mysteryGroups.map((group) => [group.slug, group]),
);
const mysteries = rosaryMysteries.slice().sort((first, second) => {
  if (first.groupSlug === second.groupSlug) return first.sortOrder - second.sortOrder;
  return mysteryGroups.findIndex((group) => group.slug === first.groupSlug) -
    mysteryGroups.findIndex((group) => group.slug === second.groupSlug);
});
const mysteriesByGroup = new Map<RosaryMysteryGroupSlug, RosaryMystery[]>(
  mysteryGroups.map((group) => [
    group.slug,
    mysteries
      .filter((mystery) => mystery.groupSlug === group.slug)
      .sort((first, second) => first.sortOrder - second.sortOrder),
  ]),
);
const mysteriesByCompositeSlug = new Map<string, RosaryMystery>(
  mysteries.map((mystery) => [`${mystery.groupSlug}:${mystery.slug}`, mystery]),
);

const scheduleByDay = Object.fromEntries(
  traditionalRosaryDaySchedule.map((entry) => [entry.day.toLowerCase(), entry.groupSlug]),
) as Record<string, RosaryMysteryGroupSlug>;

function getChicagoWeekday(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "America/Chicago",
  }).format(date);
}

export function getRosaryMysteryGroups() {
  return mysteryGroups;
}

export function getRosaryMysteryGroup(groupSlug: string) {
  return mysteryGroupsBySlug.get(groupSlug as RosaryMysteryGroupSlug);
}

export function getRosaryMysteries() {
  return mysteries;
}

export function getMysteriesByGroup(groupSlug: string) {
  return mysteriesByGroup.get(groupSlug as RosaryMysteryGroupSlug) ?? [];
}

export function getMysteryBySlug(groupSlug: string, mysterySlug: string) {
  return mysteriesByCompositeSlug.get(`${groupSlug}:${mysterySlug}`);
}

export function getNextMystery(groupSlug: string, mysterySlug: string) {
  const mystery = getMysteryBySlug(groupSlug, mysterySlug);
  if (!mystery?.nextMysterySlug) return undefined;
  return getMysteryBySlug(groupSlug, mystery.nextMysterySlug);
}

export function getPreviousMystery(groupSlug: string, mysterySlug: string) {
  const mystery = getMysteryBySlug(groupSlug, mysterySlug);
  if (!mystery?.previousMysterySlug) return undefined;
  return getMysteryBySlug(groupSlug, mystery.previousMysterySlug);
}

export function getMysteriesForToday(date = new Date()) {
  const day = getChicagoWeekday(date);
  const groupSlug = scheduleByDay[day.toLowerCase()] ?? "joyful-mysteries";
  return getMysteriesByGroup(groupSlug);
}

export function getTraditionalRosaryDaySchedule() {
  return traditionalRosaryDaySchedule;
}

export function getRosaryMysteryRouteAliases() {
  return rosaryMysteryRouteAliases;
}

export function formatMysteryPrayerForCopy(mystery: RosaryMystery) {
  return [
    mystery.title,
    mystery.decadeLabel,
    `Scripture: ${mystery.scriptureReference}`,
    `Fruit of the mystery: ${mystery.fruitOfMystery}`,
    `Grace to ask: ${mystery.graceToAsk}`,
    "",
    mystery.decadePrayer,
  ].join("\n");
}

export function formatDecadeGuideForCopy(mystery: RosaryMystery) {
  return [
    `${mystery.title} (${mystery.decadeLabel})`,
    "",
    ...mystery.howToPrayThisDecade.map((step, index) => `${index + 1}. ${step.title}: ${step.instruction}`),
    "",
    `For this decade, ask for the grace ${mystery.graceToAsk.toLowerCase()}.`,
  ].join("\n");
}

export function formatReflectionQuestionsForCopy(mystery: RosaryMystery) {
  return [
    `Reflection Questions for ${mystery.title}`,
    "",
    ...mystery.reflectionQuestions.map((question, index) => `${index + 1}. ${question}`),
  ].join("\n");
}

export function getRosaryMysterySets() {
  return rosaryMysterySets;
}

export function getRosaryMysterySet(slug: string) {
  return rosaryMysterySets.find((set) => set.slug === slug);
}

export function getRosaryPrayers() {
  return rosaryPrayers;
}

export function getLatinRosarySteps() {
  return latinRosarySteps;
}

export function getRosaryHowToPray() {
  return {
    openingSteps: rosaryOpeningSteps,
    decadeSteps: rosaryDecadeSteps,
    closingSteps: rosaryClosingSteps,
  };
}

export function getRecommendedMysterySetForDate(date = new Date()) {
  return getRecommendedMysterySetForDay(getChicagoWeekday(date));
}

export function getRecommendedMysterySetForDay(day: string) {
  const normalized = day.trim().toLowerCase();
  return (
    getRosaryMysterySet((scheduleByDay[normalized] ?? "joyful-mysteries") as RosaryMysterySetSlug) ??
    rosaryMysterySets[0]
  );
}

export function getRosaryRelatedLinks() {
  return [
    {
      title: "Rosary Prayer Room",
      description: "Join the Daily Oratory Rosary Prayer Room and pray the mysteries of Christ with others.",
      href: "/rosary",
      cta: "Enter the Rosary Prayer Room",
    },
    {
      title: "Holy Rosary Guide",
      description: "Return to the full Rosary overview, mystery groups, and daily rhythm.",
      href: "/devotions/holy-rosary",
      cta: "Open the Holy Rosary Guide",
    },
    {
      title: "Bible",
      description: "Read Sacred Scripture with the Church and follow the mysteries back into the Gospel.",
      href: "/bible",
      cta: "Learn the Bible",
    },
    {
      title: "Scripture Prayer",
      description: "Pray with the Word of God before or after a decade of the Rosary.",
      href: "/library/scripture-prayer",
      cta: "Pray with Scripture",
    },
    {
      title: "Devotions",
      description: "Explore Marian and Christ-centered devotions that deepen prayer and fidelity.",
      href: "/devotions",
      cta: "Browse Devotions",
    },
    {
      title: "Prayer",
      description: "Return to Daily Oratory prayer guides, suggested prayer, and daily Catholic rhythm.",
      href: "/pray",
      cta: "Begin in Prayer",
    },
    {
      title: "Saints",
      description: "Meet holy men and women who loved Jesus and the Blessed Mother with fidelity.",
      href: "/saints",
      cta: "Meet the Saints",
    },
    {
      title: "Family Prayer",
      description: "Bring the Rosary into a simple, patient, and prayerful family rhythm.",
      href: "/family",
      cta: "Build Family Prayer",
    },
  ];
}
