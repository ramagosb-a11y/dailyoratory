import { churchFatherReadingPlan } from "@/data/churchFatherReadingPlan";
import { churchFathers } from "@/data/churchFathers";
import { churchFatherTopics } from "@/data/churchFatherTopics";
import type {
  ChurchFather,
  ChurchFatherReadingPlanItem,
  ChurchFatherTopic,
  TraditionGroup,
} from "@/types/churchFathers";

export function getChurchFathers() {
  return [...churchFathers].sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));
}

export function getChurchFatherBySlug(slug: string) {
  return getChurchFathers().find((father) => father.slug === slug);
}

export function getChurchFathersByGroup(group: TraditionGroup) {
  return getChurchFathers().filter((father) => father.traditionGroup === group);
}

export function getGreatChurchFathers() {
  return getChurchFathers().filter((father) => father.isGreatFather);
}

export function getChurchFatherTopics() {
  return [...churchFatherTopics].sort((a, b) => a.sortOrder - b.sortOrder || a.title.localeCompare(b.title));
}

export function getChurchFatherTopicBySlug(slug: string) {
  return getChurchFatherTopics().find((topic) => topic.slug === slug);
}

export function getFathersByTopic(topicSlug: string) {
  const topic = getChurchFatherTopicBySlug(topicSlug);
  if (!topic) return [];

  const byId = new Map(getChurchFathers().map((father) => [father.id, father]));
  return topic.suggestedFatherIds
    .map((id) => byId.get(id))
    .filter((father): father is ChurchFather => Boolean(father));
}

export function getBeginnerReadingPlan() {
  return [...churchFatherReadingPlan].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFatherOfTheWeek(date = new Date()) {
  const fathers = getChurchFathers();
  if (fathers.length === 0) return undefined;

  const weekNumber = getWeekNumber(date);
  return fathers[weekNumber % fathers.length];
}

export function getRelatedDailyOratoryLinksForFather(fatherId: string) {
  return getChurchFathers().find((father) => father.id === fatherId)?.relatedDailyOratoryLinks ?? [];
}

export function getTraditionGroupLabel(group: TraditionGroup) {
  switch (group) {
    case "apostolic-fathers":
      return "Apostolic Fathers";
    case "greek-fathers":
      return "Greek Fathers";
    case "latin-fathers":
      return "Latin Fathers";
    case "syriac-eastern-witnesses":
      return "Syriac and Eastern Witnesses";
    default:
      return "Other";
  }
}

export function getTraditionGroupDescription(group: TraditionGroup) {
  switch (group) {
    case "apostolic-fathers":
      return "Earliest Christian writers associated with the generation after the apostles.";
    case "greek-fathers":
      return "Teachers whose theology and preaching helped shape the Greek-speaking Church and the wider Catholic tradition.";
    case "latin-fathers":
      return "Writers whose teaching, preaching, and pastoral leadership deeply formed the Latin West.";
    case "syriac-eastern-witnesses":
      return "Eastern witnesses whose poetry, ascetic teaching, and doctrinal insight widen the Catholic sense of the Fathers.";
    default:
      return "Additional early Christian witnesses for further study.";
  }
}

function getWeekNumber(date: Date) {
  const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const current = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const diff = current.getTime() - start.getTime();
  return Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
}
