import {
  exploreBeliefCards,
  exploreStartingPoints,
  firstWeekPlan,
  misunderstandingCards,
} from "@/data/explorePage";
import { exploreFaqs } from "@/data/exploreFaqs";
import { catholicGlossary } from "@/data/catholicGlossary";

export function getExploreStartingPoints() {
  return [...exploreStartingPoints].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getExploreRecommendation(slug: string) {
  return getExploreStartingPoints().find((item) => item.slug === slug) ?? getExploreStartingPoints()[0];
}

export function getExploreBeliefCards() {
  return [...exploreBeliefCards].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getMisunderstandingCards() {
  return [...misunderstandingCards].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getExploreFaqs() {
  return [...exploreFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getExploreFaqsByCategory(category: string) {
  return getExploreFaqs().filter((faq) => faq.category === category);
}

export function getGlossaryTerms() {
  return [...catholicGlossary].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function searchGlossaryTerms(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return getGlossaryTerms();

  return getGlossaryTerms().filter(
    (term) =>
      term.term.toLowerCase().includes(normalized) ||
      term.definition.toLowerCase().includes(normalized) ||
      term.category.toLowerCase().includes(normalized),
  );
}

export function formatFirstWeekPlanForCopy() {
  return ["A Gentle First Week", "", ...firstWeekPlan.map((item) => `- ${item}`)].join("\n");
}
