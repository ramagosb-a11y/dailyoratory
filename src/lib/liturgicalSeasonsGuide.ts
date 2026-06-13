import {
  familyLiturgicalIdeas,
  relatedLiturgicalTools,
  seasonalPrayerSuggestions,
  seasonalPracticePresets,
  seasonalWorksOfMercy,
} from "@/data/liturgicalSeasonPractices";
import { liturgicalSeasonGuides } from "@/data/liturgicalSeasonsGuide";
import { liturgicalSpecialDays } from "@/data/liturgicalSpecialDays";
import { liturgicalCustoms } from "@/data/liturgicalCustoms";
import { getLiturgicalDashboardModel } from "@/lib/liturgicalLiving";
import type {
  BuiltSeasonalPracticePlan,
  LiturgicalCustom,
  LiturgicalSeasonGuide,
  SeasonalPracticePlan,
  SeasonGuideSlug,
} from "@/types/liturgicalSeasonsGuide";

export function getLiturgicalSeasonGuides() {
  return [...liturgicalSeasonGuides].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSeasonGuideBySlug(slug: LiturgicalSeasonGuide["slug"]) {
  return liturgicalSeasonGuides.find((guide) => guide.slug === slug);
}

export function getSpecialDaysBySeason(season: SeasonGuideSlug) {
  return liturgicalSpecialDays
    .filter((day) => day.season === season || day.season === "all")
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCustomsBySeason(season: SeasonGuideSlug) {
  return liturgicalCustoms
    .filter((custom) => custom.associatedSeason === season || custom.associatedSeason === "all")
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPrayerSuggestionsBySeason(season: SeasonGuideSlug) {
  return seasonalPrayerSuggestions.find((group) => group.season === season)?.suggestions ?? [];
}

export function getWorksOfMercyBySeason(season: SeasonGuideSlug) {
  return seasonalWorksOfMercy.find((group) => group.season === season)?.suggestions ?? [];
}

export function buildSeasonalPracticePlan(input: SeasonalPracticePlan): BuiltSeasonalPracticePlan {
  const seasonLabel = formatSeasonLabel(input.season);
  const preset = seasonalPracticePresets[input.season] ?? [];

  return {
    ...input,
    title: `${seasonLabel} practice plan`,
    introduction: `A simple ${seasonLabel.toLowerCase()} rhythm for ${input.householdType.toLowerCase()} life.`,
    suggestedSteps: [
      `Give ${input.timeAvailable.toLowerCase()} each day or each week to ${input.prayerFocus.toLowerCase()} prayer.`,
      `Keep ${input.sacramentalFocus.toLowerCase()} in view as this season's sacramental anchor.`,
      `Choose this work of mercy: ${input.workOfMercy}.`,
      `Use this home practice: ${input.homePractice}.`,
      ...preset,
    ],
    encouragement:
      "Let the season shape the heart gently. The goal is fidelity with the Church, not pressure or perfection.",
  };
}

export function formatSeasonalPracticePlanForCopy(plan: BuiltSeasonalPracticePlan) {
  return [
    `Your Seasonal Practice Plan`,
    ``,
    `Season: ${formatSeasonLabel(plan.season)}`,
    `Time available: ${plan.timeAvailable}`,
    `Household: ${plan.householdType}`,
    `Prayer focus: ${plan.prayerFocus}`,
    `Sacramental focus: ${plan.sacramentalFocus}`,
    `Work of mercy: ${plan.workOfMercy}`,
    `Home practice: ${plan.homePractice}`,
    ``,
    `${plan.introduction}`,
    ``,
    ...plan.suggestedSteps.map((step, index) => `${index + 1}. ${step}`),
    ``,
    plan.encouragement,
  ].join("\n");
}

export function getCurrentSeasonSuggestion(date = new Date()): LiturgicalSeasonGuide {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 12 && day >= 25) || month === 1) return getSeasonGuideBySlug("christmas") ?? liturgicalSeasonGuides[0];
  if (month === 12 || month === 11) return getSeasonGuideBySlug("advent") ?? liturgicalSeasonGuides[0];
  if (month === 2 || month === 3) return getSeasonGuideBySlug("lent") ?? liturgicalSeasonGuides[0];
  if (month === 4 && day <= 15) return getSeasonGuideBySlug("holy-week") ?? liturgicalSeasonGuides[0];
  if (month === 4 || month === 5) return getSeasonGuideBySlug("easter") ?? liturgicalSeasonGuides[0];
  return getSeasonGuideBySlug("ordinary-time") ?? liturgicalSeasonGuides[0];
}

export function getSeasonsPageAnchorForSlug(slug: string) {
  switch (slug) {
    case "advent":
      return "advent";
    case "christmas":
      return "christmas";
    case "lent":
      return "lent";
    case "easter-triduum":
      return "triduum";
    case "easter-season":
      return "easter";
    case "ordinary-time":
      return "ordinary-time";
    default:
      return "what-is-the-liturgical-year";
  }
}

export function getCurrentSeasonsPageHref(date = new Date()) {
  const dashboardSeasonSlug = getLiturgicalDashboardModel(date).season.slug;
  const anchor = getSeasonsPageAnchorForSlug(dashboardSeasonSlug);
  return `/liturgical-living/seasons#${anchor}`;
}

export function getRelatedToolsForSeason(season: SeasonGuideSlug) {
  const preferred = new Set(
    getSeasonGuideBySlug(season === "ordinary-time-after-pentecost" ? "ordinary-time" : season)?.relatedLinks.map(
      (link) => link.href,
    ) ?? [],
  );

  return relatedLiturgicalTools
    .filter((tool) => preferred.has(tool.href))
    .concat(relatedLiturgicalTools.filter((tool) => !preferred.has(tool.href)).slice(0, 3));
}

function formatSeasonLabel(season: SeasonGuideSlug) {
  return season
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getFamilyIdeasForSeason(season: SeasonGuideSlug) {
  return familyLiturgicalIdeas.filter((idea) => idea.season === season || idea.season === "all");
}

export function getHighlightCustoms(customIds: string[]) {
  const byId = new Map(liturgicalCustoms.map((custom) => [custom.id, custom] as const));
  return customIds.map((id) => byId.get(id)).filter((item): item is LiturgicalCustom => Boolean(item));
}
