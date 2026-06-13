import { formationChallenge } from "@/data/formationChallenges";
import { formationObstacles, formationPillars, spiritualGrowthPractices, virtueFormationItems } from "@/data/formation";
import { formationPathRecommendations } from "@/data/formationPathways";
import { formationTopics } from "@/data/formationTopics";
import type { FormationCategory, FormationPlanSelection } from "@/types/formation";

export function getFormationPillars() {
  return [...formationPillars].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFormationTopics() {
  return [...formationTopics].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFormationTopicsByCategory(category: FormationCategory) {
  return getFormationTopics().filter((topic) => topic.category === category);
}

export function getVirtueFormationItems() {
  return [...virtueFormationItems].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSpiritualGrowthPractices() {
  return [...spiritualGrowthPractices].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFormationPathRecommendations() {
  return [...formationPathRecommendations].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFormationRecommendationByNeed(need: string) {
  return getFormationPathRecommendations().find((recommendation) => recommendation.userNeed === need);
}

export function getFormationChallenge() {
  return formationChallenge;
}

export function getFormationObstacles() {
  return [...formationObstacles].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function buildFormationPlan(selection: FormationPlanSelection) {
  const recommendation = getFormationRecommendationByNeed(selection.userNeed);
  if (!recommendation) return null;

  return {
    title: recommendation.title,
    description: recommendation.description,
    firstStep: recommendation.firstStep,
    weeklyPractice: recommendation.weeklyPractice,
    links: recommendation.recommendedLinks,
  };
}

export function formatFormationPlanForCopy(selection: FormationPlanSelection) {
  const plan = buildFormationPlan(selection);
  if (!plan) return "No formation recommendation selected.";

  return [
    "My Formation Plan",
    "",
    `Path: ${plan.title}`,
    plan.description,
    "",
    `First step: ${plan.firstStep}`,
    `Weekly practice: ${plan.weeklyPractice}`,
    "",
    "Recommended Daily Oratory tools:",
    ...plan.links.map((link) => `- ${link.label}: ${link.href}`),
  ].join("\n");
}

export function getRelatedFormationTools() {
  return [
    { label: "Grace", href: "/formation/grace" },
    { label: "Catholic Eschatology", href: "/formation/eschatology" },
    { label: "Bible", href: "/bible" },
    { label: "Body, Soul, and Spirit", href: "/body-soul-spirit" },
    { label: "Explore the Catholic Faith", href: "/explore" },
    { label: "Angels and the Invisible World", href: "/angels" },
    { label: "Catechism", href: "/catechism" },
    { label: "Sacred Tradition", href: "/tradition" },
    { label: "Church Councils", href: "/councils" },
    { label: "The Domestic Church", href: "/family" },
    { label: "The Pope", href: "/pope" },
    { label: "The Vatican", href: "/vatican" },
    { label: "Sacraments", href: "/sacraments" },
    { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    { label: "Church Fathers", href: "/church-fathers" },
    { label: "Devotions", href: "/devotions" },
    { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
    { label: "Liturgical Living", href: "/liturgical-living/seasons" },
    { label: "Rule of Life Builder", href: "/rule-of-life" },
    { label: "Daily Examen", href: "/daily-examen" },
    { label: "Virtue and Vice Tracker", href: "/virtue-tracker" },
    { label: "Confession Guide", href: "/confession" },
    { label: "Guided Examination", href: "/confession/examination" },
    { label: "Eucharistic Adoration", href: "/adoration" },
    { label: "Rosary", href: "/rosary" },
    { label: "Pathways", href: "/pathways" },
  ];
}
