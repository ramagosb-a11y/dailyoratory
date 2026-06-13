import { scripturePrayerFaqs, scriptureReadingPaths } from "@/data/scripturePrayer";
import { scriptureResources } from "@/data/scriptureResources";
import { scriptureThemes } from "@/data/scriptureThemes";
import type { ScripturePrayerPlan } from "@/types/scripturePrayer";

export function getScriptureResources() {
  return [...scriptureResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getOfficialScriptureResources() {
  return getScriptureResources().filter((resource) => resource.official);
}

export function getScriptureReadingPaths() {
  return [...scriptureReadingPaths].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getScriptureThemes() {
  return [...scriptureThemes].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getScriptureThemeBySlug(slug: string) {
  return getScriptureThemes().find((theme) => theme.slug === slug);
}

export function getScripturePrayerFaqs() {
  return [...scripturePrayerFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function buildScripturePrayerPlan(input: ScripturePrayerPlan) {
  const focusLabel = input.scriptureFocus === "custom-passage" && input.customPassage.trim()
    ? input.customPassage.trim()
    : input.scriptureFocus;

  return {
    title: "Your 30-Minute Scripture Prayer Plan",
    focusLabel,
    prayerStyle: input.prayerStyle,
    intention: input.intention,
    steps: [
      "5 minutes: Prepare and ask for grace",
      "15 minutes: Read slowly",
      "5 minutes: Meditate and listen",
      "3 minutes: Respond in prayer",
      "2 minutes: Choose one action",
    ],
    reminder:
      "Usual conditions: state of grace, sacramental confession, Holy Communion, prayer for the intentions of the Holy Father, detachment from sin, and at least 30 minutes of devout Scripture reading.",
  };
}

export function formatScripturePrayerPlanForCopy(input: ScripturePrayerPlan) {
  const plan = buildScripturePrayerPlan(input);
  return [
    plan.title,
    "",
    `Scripture focus: ${plan.focusLabel}`,
    `Prayer style: ${plan.prayerStyle}`,
    `Intention: ${plan.intention}`,
    "",
    "Opening prayer to the Holy Spirit:",
    "Come, Holy Spirit, open my heart to the Word of God and make me ready to listen with faith.",
    "",
    ...plan.steps,
    "",
    `Reminder: ${plan.reminder}`,
    "USCCB Bible: https://bible.usccb.org/bible",
    "Today's Readings: https://bible.usccb.org/",
  ].join("\n");
}

export function getSuggestedScripturePathForSeason(season: string) {
  const normalized = season.toLowerCase();
  if (normalized.includes("advent")) return getScriptureReadingPaths().find((path) => path.slug === "isaiah-during-advent");
  if (normalized.includes("lent")) return getScriptureReadingPaths().find((path) => path.slug === "passion-during-lent");
  if (normalized.includes("easter")) return getScriptureReadingPaths().find((path) => path.slug === "acts-during-easter");
  return getScriptureReadingPaths().find((path) => path.slug === "follow-the-mass-readings");
}

export function getRelatedScripturePrayerTools() {
  return [
    { label: "Bible", href: "/bible" },
    { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
    { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
    { label: "Liturgical Living Dashboard", href: "/today" },
    { label: "Church Fathers", href: "/church-fathers" },
    { label: "Rule of Life Builder", href: "/rule-of-life" },
    { label: "Daily Examen", href: "/daily-examen" },
    { label: "Spiritual Growth Pathways", href: "/pathways" },
    { label: "Rosary", href: "/rosary" },
    { label: "Indulgences Guide", href: "/indulgences" },
    { label: "Confession Guide", href: "/confession" },
    { label: "Eucharistic Adoration", href: "/adoration" },
  ];
}
