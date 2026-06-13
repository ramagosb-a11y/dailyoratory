import { sacramentCompanions } from "@/data/sacramentCompanion";
import { sacramentFaqs } from "@/data/sacramentFaqs";
import { sacramentalJourneyPrompts, sacramentLearningNeeds } from "@/data/sacramentJourney";
import { sacramentResources } from "@/data/sacramentResources";
import { sacramentGroups, sacraments } from "@/data/sacraments";
import type { SacramentCompanionRecord } from "@/types/sacramentCompanion";
import type {
  Sacrament,
  SacramentFAQ,
  SacramentGroupType,
  SacramentRelatedLink,
  SacramentResource,
  SacramentalJourneyAnswers,
} from "@/types/sacraments";

export const sacramentBasePages = [
  { label: "Overview", href: "/sacraments" },
  { label: "Companion", href: "/sacraments/companion" },
  { label: "Prepare", href: "/sacraments/prepare" },
  { label: "My Preparation", href: "/sacraments/my-preparation" },
  { label: "Print", href: "/sacraments/print" },
] as const;

export const sacramentStaticPages = [
  "/sacraments",
  "/sacraments/baptism",
  "/sacraments/confirmation",
  "/sacraments/eucharist",
  "/sacraments/reconciliation",
  "/sacraments/anointing",
  "/sacraments/matrimony",
  "/sacraments/holy-orders",
  "/sacraments/ocia",
  "/sacraments/sponsor-godparent",
] as const;

export function getSacraments() {
  return [...sacraments].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSacramentBySlug(slug: string) {
  const normalized = slug.trim().toLowerCase();
  return getSacraments().find(
    (sacrament) =>
      sacrament.slug === normalized ||
      sacrament.aliases.some((alias) => normalize(alias) === normalized),
  );
}

export function getSacramentsByGroup(group: SacramentGroupType) {
  return getSacraments().filter((sacrament) => sacrament.group === group);
}

export function getSacramentGroups() {
  return [...sacramentGroups].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSacramentResources(sacramentId: string) {
  return sacramentResources
    .filter((resource) => resource.sacramentId === "all" || resource.sacramentId === sacramentId)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSacramentFaqs(sacramentId: string) {
  return sacramentFaqs
    .filter((faq) => faq.sacramentId === "all" || faq.sacramentId === sacramentId)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRelatedSacraments(sacramentId: string) {
  const sacrament = sacraments.find((item) => item.id === sacramentId);
  if (!sacrament) return [];
  return sacrament.relatedSacramentIds
    .map((id) => sacraments.find((candidate) => candidate.id === id))
    .filter((item): item is Sacrament => Boolean(item));
}

export function getRelatedDailyOratoryTools(sacramentId: string) {
  const links = sacraments.find((sacrament) => sacrament.id === sacramentId)?.relatedDailyOratoryLinks ?? [];
  const withExplore = links.some((link) => link.href === "/explore")
    ? links
    : [...links, { label: "Explore the Catholic Faith", href: "/explore", description: "A welcoming starting place for anyone learning Catholic belief and sacramental life." }];
  const withTemple =
    ["baptism", "eucharist", "reconciliation"].includes(sacramentId) && !withExplore.some((link) => link.href === "/body-soul-spirit")
      ? [
          ...withExplore,
          {
            label: "Body, Soul, and Spirit",
            href: "/body-soul-spirit",
            description: "Understand grace, sin, mercy, the body as temple, and the soul as an interior temple of God.",
          },
        ]
      : withExplore;
  return withTemple.some((link) => link.href === "/councils")
    ? withTemple
    : [...withTemple, { label: "Councils of the Church", href: "/councils" }];
}

export function getPreparationCompanionForSacrament(sacramentId: string) {
  const sacrament = sacraments.find((item) => item.id === sacramentId);
  if (!sacrament) return undefined;
  return sacramentCompanions.find((companion) => companion.slug === sacrament.preparationCompanionSlug);
}

export function getSacramentalJourneyRecommendations(answers: SacramentalJourneyAnswers) {
  const recommendations = new Map<string, Sacrament>();
  const links = new Map<string, SacramentRelatedLink>();

  if (!answers.baptized) addSacrament("baptism");
  if (answers.baptized && !answers.firstCommunion) addSacrament("eucharist");
  if (answers.baptized && !answers.confirmed) addSacrament("confirmation");
  if (answers.returningToConfession) addSacrament("reconciliation");
  if (answers.preparingForMarriage) addSacrament("matrimony");
  if (answers.discerningVocation) addSacrament("holy-orders");
  if (answers.supportingChildOrCandidate) {
    addLink({ label: "Sponsor and Godparent Guide", href: "/sacraments/sponsor-godparent" });
    addLink({ label: "Preparation Companion", href: "/sacraments/prepare" });
  }

  if (!answers.baptized) addLink({ label: "OCIA", href: "/sacraments/ocia" });
  if (recommendations.size === 0) addLink({ label: "Sacrament Companion", href: "/sacraments/companion" });

  return {
    sacraments: Array.from(recommendations.values()),
    links: Array.from(links.values()),
    disclaimer:
      "This tool suggests learning paths only. For sacramental readiness or eligibility, contact your parish.",
  };

  function addSacrament(id: string) {
    const sacrament = sacraments.find((item) => item.id === id);
    if (sacrament) recommendations.set(sacrament.id, sacrament);
  }

  function addLink(link: SacramentRelatedLink) {
    links.set(`${link.label}:${link.href}`, link);
  }
}

export function getSacramentGroupLabel(group: SacramentGroupType) {
  return (
    getSacramentGroups().find((item) => item.slug === group || item.id.endsWith(group))?.title ??
    "Sacraments"
  );
}

export function getSacramentDetailMetadata(sacrament: Sacrament) {
  return {
    title: `${sacrament.name} | Catholic Sacraments | Daily Oratory`,
    description: `Learn about ${sacrament.name}, its grace, meaning, biblical roots, preparation, prayers, common questions, and trusted Catholic resources.`,
    path: `/sacraments/${sacrament.slug}`,
    keywords: [
      sacrament.name,
      ...sacrament.aliases,
      "Catholic sacrament",
      "Catholic teaching",
      "sacrament preparation",
    ],
  };
}

export function getPublishedSacramentCompanions() {
  return sacramentCompanions
    .filter((companion) => companion.status === "published" && companion.visibility !== "private")
    .sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));
}

export function getFeaturedSacramentCompanions(limit = 6) {
  return getPublishedSacramentCompanions().filter((companion) => companion.featured).slice(0, limit);
}

export function getSacramentCompanionBySlug(slug: string) {
  return getPublishedSacramentCompanions().find((companion) => companion.slug === slug);
}

export function getRelatedSacramentCompanions(companion: SacramentCompanionRecord, limit = 3) {
  const tags = new Set(companion.tags.map(normalize));

  return getPublishedSacramentCompanions()
    .filter((candidate) => candidate.slug !== companion.slug)
    .map((candidate) => ({
      candidate,
      score:
        candidate.tags.filter((tag) => tags.has(normalize(tag))).length +
        (candidate.audience.some((audience) => companion.audience.includes(audience)) ? 2 : 0) +
        (candidate.featured ? 1 : 0),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title))
    .slice(0, limit)
    .map((item) => item.candidate);
}

export function getSacramentProgressPercent(
  companion: SacramentCompanionRecord,
  completedStepIds: string[],
  completedChecklistItemIds: string[],
) {
  const total = companion.preparationSteps.length + companion.roleChecklists.length;
  if (total === 0) return 0;
  const completedSteps = new Set(completedStepIds);
  const completedChecklist = new Set(completedChecklistItemIds);
  const completed =
    companion.preparationSteps.filter((step) => completedSteps.has(step.id)).length +
    companion.roleChecklists.filter((item) => completedChecklist.has(item.id)).length;

  return Math.round((completed / total) * 100);
}

export function getDefaultSacramentCompanion() {
  return getSacramentCompanionBySlug("reconciliation") ?? getPublishedSacramentCompanions()[0];
}

export function getSacramentLearningNeeds() {
  return sacramentLearningNeeds;
}

export function getSacramentalJourneyPrompts() {
  return sacramentalJourneyPrompts;
}

export function getCommonParishChecklist() {
  return [
    "What preparation is required?",
    "What documents are needed?",
    "Who should I contact?",
    "Are there classes or meetings?",
    "Are sponsors or godparents required?",
    "What dates are available?",
    "Are there diocesan forms?",
    "What should I bring?",
    "What should I pray before beginning?",
  ];
}

export function getGeneralSacramentFaqs() {
  return getSacramentFaqs("all");
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}
