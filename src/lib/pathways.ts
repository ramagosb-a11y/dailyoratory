import { spiritualGrowthPathways } from "@/data/pathways";
import type { SpiritualGrowthPathwayRecord, PathwaySettingsRecord, PathwayStep } from "@/types/pathways";

export const pathwayRoot = "/pathways";

export const pathwayBasePages = [
  { label: "Overview", href: "/pathways" },
  { label: "Start", href: "/pathways/start" },
  { label: "My Pathways", href: "/pathways/my-pathways" },
  { label: "Recommended", href: "/pathways/recommended" },
  { label: "Settings", href: "/pathways/settings" },
] as const;

export function getPublishedPathways() {
  return spiritualGrowthPathways
    .filter((pathway) => pathway.status === "published" && pathway.visibility !== "private")
    .sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));
}

export function getFeaturedPathways(limit = 6) {
  return getPublishedPathways().filter((pathway) => pathway.featured).slice(0, limit);
}

export function getPathwayBySlug(slug: string) {
  return getPublishedPathways().find((pathway) => pathway.slug === slug);
}

export function getPathwayStep(pathway: SpiritualGrowthPathwayRecord, stepSlug: string) {
  return pathway.modules.find((step) => step.slug === stepSlug);
}

export function getNextPathwayStep(pathway: SpiritualGrowthPathwayRecord, step: PathwayStep) {
  return pathway.modules.find((item) => item.order === step.order + 1);
}

export function getPreviousPathwayStep(pathway: SpiritualGrowthPathwayRecord, step: PathwayStep) {
  return pathway.modules.find((item) => item.order === step.order - 1);
}

export function getPathwayHref(pathway: Pick<SpiritualGrowthPathwayRecord, "slug">) {
  return `${pathwayRoot}/${pathway.slug}`;
}

export function getPathwayStepHref(pathway: Pick<SpiritualGrowthPathwayRecord, "slug">, step: Pick<PathwayStep, "slug">) {
  return `${getPathwayHref(pathway)}/steps/${step.slug}`;
}

export function getRelatedPathways(pathway: SpiritualGrowthPathwayRecord, limit = 3) {
  const tags = new Set(pathway.tags.map(normalize));

  return getPublishedPathways()
    .filter((candidate) => candidate.slug !== pathway.slug)
    .map((candidate) => ({
      candidate,
      score:
        (candidate.stage === pathway.stage ? 4 : 0) +
        (candidate.pace === pathway.pace ? 2 : 0) +
        candidate.tags.filter((tag) => tags.has(normalize(tag))).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title))
    .slice(0, limit)
    .map((item) => item.candidate);
}

export function getRecommendedPathways(settings: PathwaySettingsRecord, limit = 6) {
  const focusTags = new Set(settings.focusTags.map(normalize));

  return getPublishedPathways()
    .map((pathway) => ({
      pathway,
      score:
        (settings.spiritualSeason !== "not-sure" && pathway.stage === settings.spiritualSeason ? 10 : 0) +
        (pathway.pace === settings.availablePace ? 4 : 0) +
        getHouseholdScore(pathway, settings.household) +
        pathway.tags.filter((tag) => focusTags.has(normalize(tag))).length * 3 +
        (pathway.featured ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.pathway.title.localeCompare(b.pathway.title))
    .slice(0, limit)
    .map((item) => item.pathway);
}

export function getDefaultRecommendedPathways(limit = 6) {
  return [
    "beginning-again-in-prayer",
    "returning-to-confession",
    "learning-the-rosary",
    "understanding-the-mass",
    "living-the-liturgical-year",
    "growing-in-virtue",
  ]
    .map(getPathwayBySlug)
    .filter((pathway): pathway is SpiritualGrowthPathwayRecord => Boolean(pathway))
    .slice(0, limit);
}

export function getPathwayProgressPercent(pathway: SpiritualGrowthPathwayRecord, completedStepSlugs: string[]) {
  if (pathway.modules.length === 0) return 0;
  const completed = new Set(completedStepSlugs);
  const count = pathway.modules.filter((step) => completed.has(step.slug)).length;
  return Math.round((count / pathway.modules.length) * 100);
}

function getHouseholdScore(pathway: SpiritualGrowthPathwayRecord, household: PathwaySettingsRecord["household"]) {
  if (household === "family") return pathway.audience.includes("families") ? 5 : 0;
  if (household === "group") {
    return pathway.audience.some((audience) => ["parish-groups", "prayer-communities", "formation-teams"].includes(audience)) ? 5 : 0;
  }
  if (household === "individual") return pathway.audience.includes("individuals") ? 3 : 0;

  return 0;
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}
