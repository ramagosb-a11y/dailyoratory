import { commonIndulgencedWorks } from "@/data/commonIndulgencedWorks";
import { detachmentPracticeSteps, morningRoutineSteps } from "@/data/indulgenceDetachment";
import { indulgenceFaqs } from "@/data/indulgenceFaqs";
import { indulgenceOpportunities, spiritualPracticeCards } from "@/data/indulgenceOpportunities";
import { indulgencePrayers } from "@/data/indulgencePrayers";
import { indulgenceResources, specialIndulgenceYears } from "@/data/indulgenceResources";
import type {
  ActiveSpecialIndulgenceCallout,
  CommonIndulgencedWork,
  IndulgenceFAQ,
  IndulgenceOfferingTarget,
  IndulgencePlan,
  IndulgencePrayer,
  IndulgenceRelatedTool,
  IndulgenceResource,
  IndulgenceOpportunity,
  SpecialIndulgenceYear,
} from "@/types/indulgences";

export function getIndulgenceResources(): IndulgenceResource[] {
  return [...indulgenceResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getOfficialIndulgenceResources() {
  return getIndulgenceResources().filter((resource) => resource.official);
}

export function getHelpfulIndulgenceGuides() {
  return getIndulgenceResources().filter((resource) => !resource.official);
}

export function getIndulgenceFaqs(): IndulgenceFAQ[] {
  return [...indulgenceFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getIndulgencePrayers(): IndulgencePrayer[] {
  return [...indulgencePrayers].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getTodaysIndulgenceOpportunity(date = new Date()) {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "America/Chicago",
  }).format(date) as IndulgenceOpportunity["recommendedDay"];

  return indulgenceOpportunities.find((item) => item.recommendedDay === weekday) ?? indulgenceOpportunities[0];
}

export function getCommonIndulgencedWorks(): CommonIndulgencedWork[] {
  return [...commonIndulgencedWorks].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSpecialIndulgenceYears(): SpecialIndulgenceYear[] {
  return [...specialIndulgenceYears].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function isWithinJubilee2025(date = new Date()) {
  return isDateWithinRange(date, "2024-12-24", "2026-01-06");
}

export function isWithinYearOfSaintFrancis2026(date = new Date()) {
  return isDateWithinRange(date, "2026-01-10", "2027-01-10");
}

export function getActiveSpecialIndulgenceCallouts(date = new Date()): ActiveSpecialIndulgenceCallout[] {
  const callouts: ActiveSpecialIndulgenceCallout[] = [];

  if (isWithinJubilee2025(date)) {
    callouts.push({
      id: "callout-jubilee-2025",
      title: "Jubilee 2025 opportunity",
      description: "Consider a Jubilee pilgrimage, sacred visit, Eucharistic adoration, a work of mercy, or another indulgenced act named in the decree.",
      href: "#jubilee-2025",
    });
  }

  if (isWithinYearOfSaintFrancis2026(date)) {
    callouts.push({
      id: "callout-year-of-saint-francis",
      title: "Year of Saint Francis opportunity",
      description: "Consider visiting a Franciscan church, conventual church, or place of worship connected to Saint Francis, if available, and pray according to the decree.",
      href: "#year-of-saint-francis-2026",
    });
  }

  return callouts;
}

export function buildIndulgencePlanText(plan: IndulgencePlan) {
  const work = getCommonIndulgencedWorks().find((item) => item.slug === plan.selectedWork);
  const prayers = getIndulgencePrayers();
  const intention = formatIntentionLabel(plan.intentionType, plan.intentionName);
  const conditionLines = [
    `Confession: ${plan.confessionPlannedOrCompleted ? "planned or completed" : "not yet planned"}`,
    `Holy Communion: ${plan.communionPlannedOrCompleted ? "planned or completed" : "not yet planned"}`,
    `Prayer for the Holy Father's intentions: ${plan.prayedForPopeIntentions ? "yes" : "not yet"}`,
    `Prayer for detachment from sin: ${plan.prayedForDetachment ? "yes" : "not yet"}`,
    `Indulgenced work: ${plan.workCompletedOrPlanned ? "planned or completed" : "not yet planned"}`,
  ];

  return [
    "Your Indulgence Plan for Today",
    "",
    `Work: ${work?.title ?? "Other indulgenced work"}`,
    `For: ${intention}`,
    "",
    "Usual conditions checklist:",
    ...conditionLines.map((line) => `- ${line}`),
    "",
    "Daily intention prayer:",
    formatPrayerForCopy(prayers.find((item) => item.id === "daily-indulgence-intention")),
    "",
    "Detachment prayer:",
    formatPrayerForCopy(prayers.find((item) => item.id === "prayer-for-detachment-from-sin")),
    "",
    "Prayer for the Holy Father's intentions:",
    formatPrayerForCopy(prayers.find((item) => item.id === "holy-father-and-priests")),
    "",
    "Reminder: This tool helps you prepare. It does not determine or guarantee whether a plenary indulgence has been gained.",
  ].join("\n");
}

export function validateIndulgencePlan(plan: IndulgencePlan) {
  const errors: string[] = [];

  if (!plan.selectedWork) errors.push("Choose an indulgenced work.");
  if (!plan.intentionType) errors.push("Choose for whom you intend to offer it.");

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function formatPrayerForCopy(prayer?: IndulgencePrayer) {
  return prayer?.body ?? "";
}

export function getRelatedDailyOratoryTools(): IndulgenceRelatedTool[] {
  return [
    {
      id: "tool-confession-guide",
      title: "Confession Guide",
      href: "/confession",
      description: "Prepare for sacramental mercy with simplicity and peace.",
    },
    {
      id: "tool-guided-examination",
      title: "Guided Examination of Conscience",
      href: "/confession/examination",
      description: "Review your heart before confession without anxiety.",
    },
    {
      id: "tool-adoration",
      title: "Eucharistic Adoration",
      href: "/adoration",
      description: "Remain with Christ in a quiet Eucharistic room.",
    },
    {
      id: "tool-rule-of-life",
      title: "Daily Rule of Life",
      href: "/rule-of-life",
      description: "Build a simple rhythm of prayer, Scripture, and mercy.",
    },
    {
      id: "tool-prayer-library",
      title: "Prayer Library",
      href: "/library",
      description: "Find prayers and devotional resources for daily Catholic life.",
    },
    {
      id: "tool-rosary",
      title: "Rosary",
      href: "/rosary",
      description: "Pray the mysteries of Christ with Mary.",
    },
    {
      id: "tool-ask-for-prayer",
      title: "Ask for Prayer",
      href: "/prayer-intentions/submit",
      description: "Share a prayer intention through the moderated prayer intention form.",
    },
    {
      id: "tool-today",
      title: "Liturgical Living Dashboard",
      href: "/today",
      description: "Follow the day, season, and Church rhythm in prayer.",
    },
    {
      id: "tool-reflections",
      title: "Daily Mass Reflections",
      href: "/reflections/mass-readings",
      description: "Pray with the daily readings through original reflections.",
    },
    {
      id: "tool-works-of-mercy",
      title: "Works of Mercy Pathway",
      href: "/pathways/works-of-mercy-and-service",
      description: "Turn indulgence practice into concrete charity.",
    },
    {
      id: "tool-saints-finder",
      title: "Saint Companion Finder",
      href: "/saints/finder",
      description: "Find a saint companion for the path of conversion.",
    },
    {
      id: "tool-saint-francis",
      title: "Saint Francis of Assisi",
      href: "/saints/saint-francis-assisi",
      description: "Read about Saint Francis and pray for his intercession.",
    },
  ];
}

export function getDetachmentPracticeSteps() {
  return [...detachmentPracticeSteps].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSpiritualPracticeCards() {
  return [...spiritualPracticeCards].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getMorningRoutineSteps() {
  return [...morningRoutineSteps];
}

function isDateWithinRange(date: Date, startDate: string, endDate: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value ?? "0000";
  const month = parts.find((part) => part.type === "month")?.value ?? "00";
  const day = parts.find((part) => part.type === "day")?.value ?? "00";
  const chicagoDate = `${year}-${month}-${day}`;

  return chicagoDate >= startDate && chicagoDate <= endDate;
}

function formatIntentionLabel(type: IndulgenceOfferingTarget, name: string) {
  const label = {
    "my-own-soul": "my own soul",
    "deceased-loved-one": "a deceased loved one",
    "holy-souls-in-purgatory": "the holy souls in purgatory",
    "soul-most-in-need": "the soul most in need of mercy",
  }[type];

  return name.trim() ? `${label} (${name.trim()})` : label;
}
