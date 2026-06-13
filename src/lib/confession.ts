import {
  confessionGuideCards,
  confessionGuideTopics,
  confessionNavigationLinks,
  confessionPreparationSteps,
  confessionPrayers,
  confessionRelatedLinks,
} from "@/data/confession";
import type { ConfessionTopicSlug } from "@/types/confession";

export const confessionNavLinks = confessionNavigationLinks;

export function getConfessionGuideCards() {
  return confessionGuideCards;
}

export function getConfessionPreparationSteps() {
  return confessionPreparationSteps;
}

export function getConfessionRelatedLinks() {
  return confessionRelatedLinks;
}

export function getConfessionPrayers() {
  return confessionPrayers;
}

export function getConfessionTopics() {
  return confessionGuideTopics;
}

export function getConfessionTopic(slug: ConfessionTopicSlug) {
  return confessionGuideTopics.find((topic) => topic.slug === slug);
}
