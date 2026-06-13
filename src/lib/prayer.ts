import { prayerFaqs } from "@/data/prayerFaqs";
import {
  beginnerTips,
  communityPrayerCards,
  familyPrayerIdeas,
  maryAndSaintsLinks,
  prayerAndSacramentsCards,
  prayerAndScriptureLinks,
  prayerLevels,
  prayerLibraryCategories,
  prayerObstacles,
  prayerPathSteps,
  prayerToolCards,
  relatedPrayerTools,
  topPrayers,
  weeklyRhythm,
  aspirations,
} from "@/data/prayerPage";
import { prayerNeeds } from "@/data/prayerNeeds";
import { prayerExternalResources } from "@/data/prayerResources";
import { prayerTypes } from "@/data/prayerTypes";
import type {
  PrayerExternalResource,
  PrayerFAQ,
  PrayerLevel,
  PrayerNeedRecommendation,
  PrayerPagePrayer,
  PrayerRhythmPlan,
  PrayerToolCard,
  PrayerType,
} from "@/types/prayer";

type RhythmInput = {
  timeAvailable: string;
  timeOfDay: string;
  prayerStyle: string;
  createdAt: string;
};

const defaultRelatedLinks = [
  { label: "Rule of Life", href: "/rule-of-life" },
  { label: "Scripture Prayer", href: "/library/scripture-prayer" },
];

const rhythmTemplates: Record<string, string[]> = {
  "2 minutes": [
    "Make the Sign of the Cross.",
    "Pray a Morning Offering or one simple prayer of surrender.",
    "Name one intention and entrust it to God.",
  ],
  "5 minutes": [
    "Pray the Our Father, Hail Mary, and Glory Be.",
    "Read one short Scripture verse or stay in silence for one minute.",
    "Offer the day or the night to God.",
  ],
  "10 minutes": [
    "Read a short Scripture passage.",
    "Notice one word or phrase that stays with you.",
    "Respond to God in personal prayer.",
  ],
  "15 minutes": [
    "Pray one decade of the Rosary or a short devotion.",
    "Read a short Scripture passage or the daily Gospel.",
    "End with a brief examen or act of thanksgiving.",
  ],
  "30 minutes": [
    "Pray the Rosary, Lectio Divina, or one Hour from the Divine Office.",
    "Spend time in silent prayer or intercession.",
    "Choose one concrete grace to live today.",
  ],
  "60 minutes": [
    "Keep a simple Holy Hour pattern: Scripture, silence, Rosary, and intercession.",
    "Include thanksgiving, repentance, and prayer for others.",
    "End with a clear intention for daily life.",
  ],
};

const styleAdjustments: Record<string, string[]> = {
  "traditional prayers": ["Use familiar Catholic prayers when you need stable words."],
  Scripture: ["Let the Word of God guide the whole time of prayer."],
  Rosary: ["Meditate on one mystery or a full set, depending on the time available."],
  silence: ["Keep one part of the time free from many words and simply remain before God."],
  "Liturgy of the Hours": ["If possible, use the Hour that matches the time of day."],
  "family prayer": ["Keep the rhythm short, peaceful, and consistent for everyone involved."],
  adoration: ["If you can, place the time before the Eucharist or make a spiritual visit to Jesus."],
  mixed: ["Blend memorized prayer, Scripture, silence, and one personal intention."],
};

export function getTopPrayers(): PrayerPagePrayer[] {
  return [...topPrayers].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPrayerLevels(): PrayerLevel[] {
  return [...prayerLevels].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPrayerTypes(): PrayerType[] {
  return [...prayerTypes].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPrayerNeedRecommendations(): PrayerNeedRecommendation[] {
  return [...prayerNeeds].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRecommendationByNeed(needSlug: string) {
  return getPrayerNeedRecommendations().find((recommendation) => recommendation.slug === needSlug);
}

export function buildPrayerRhythmPlan(input: RhythmInput): PrayerRhythmPlan {
  const baseSteps = rhythmTemplates[input.timeAvailable] ?? rhythmTemplates["5 minutes"];
  const adjustments = styleAdjustments[input.prayerStyle] ?? styleAdjustments.mixed;
  const generatedPlan = [
    `${input.timeOfDay}: begin by recollecting yourself before God.`,
    ...baseSteps,
    ...adjustments,
  ];

  return {
    ...input,
    generatedPlan,
    relatedLinks: defaultRelatedLinks,
  };
}

export function formatPrayerRhythmPlanForCopy(plan: PrayerRhythmPlan) {
  return [
    "Daily Oratory Prayer Rhythm",
    "",
    `Time available: ${plan.timeAvailable}`,
    `Time of day: ${plan.timeOfDay}`,
    `Prayer style: ${plan.prayerStyle}`,
    "",
    ...plan.generatedPlan.map((step, index) => `${index + 1}. ${step}`),
  ].join("\n");
}

export function getPrayerExternalResources(): PrayerExternalResource[] {
  return [...prayerExternalResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPrayerFaqs(): PrayerFAQ[] {
  return [...prayerFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRelatedPrayerTools(): PrayerToolCard[] {
  return relatedPrayerTools;
}

export function copyPrayerText(prayer: PrayerPagePrayer) {
  return prayer.body;
}

export {
  aspirations,
  beginnerTips,
  communityPrayerCards,
  familyPrayerIdeas,
  maryAndSaintsLinks,
  prayerAndSacramentsCards,
  prayerAndScriptureLinks,
  prayerLibraryCategories,
  prayerObstacles,
  prayerPathSteps,
  prayerToolCards,
  weeklyRhythm,
};
