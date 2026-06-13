import { catholicNewsResources } from "@/data/catholicNewsResources";
import { newsFaqs } from "@/data/newsFaqs";
import { newsPrayerPrompts } from "@/data/newsPrayerPrompts";
import type { CatholicNewsResource, NewsCategory, NewsFAQ, NewsPrayerPrompt, NewsSourceType } from "@/types/news";

const relatedNewsTools = [
  {
    title: "Today in the Church",
    description: "Keep the Church year and today's observance close to your reading.",
    href: "/today",
    cta: "Open Today",
  },
  {
    title: "Mass Readings Reflections",
    description: "Let Scripture anchor the way you read the world's headlines.",
    href: "/reflections/mass-readings",
    cta: "Read Reflections",
  },
  {
    title: "Journal",
    description: "Continue with Daily Oratory reflections, formation, and spiritual reading.",
    href: "/reflections/mass-readings",
    cta: "Open the Journal",
  },
  {
    title: "Scripture Prayer",
    description: "Return to the Word of God after difficult or distracting news.",
    href: "/library/scripture-prayer",
    cta: "Pray with Scripture",
  },
  {
    title: "Prayer Intentions",
    description: "Turn concern into intercession for the Church and the world.",
    href: "/prayer-intentions",
    cta: "Pray for Others",
  },
  {
    title: "Ask for Prayer",
    description: "Request prayer when the needs of the Church weigh on your heart.",
    href: "/prayer-intentions/submit",
    cta: "Ask for Prayer",
  },
  {
    title: "Formation",
    description: "Grow in prudence, charity, and Catholic discernment.",
    href: "/formation",
    cta: "Grow in Formation",
  },
  {
    title: "Church Fathers",
    description: "Read older voices of the Church when modern headlines feel loud.",
    href: "/church-fathers",
    cta: "Meet the Fathers",
  },
  {
    title: "Saints",
    description: "Remember the witnesses who lived through trials with hope and courage.",
    href: "/saints",
    cta: "Explore the Saints",
  },
  {
    title: "The Pope",
    description: "Read a calm, beginner-friendly guide to the papacy alongside official Vatican sources.",
    href: "/pope",
    cta: "Understand the Pope",
  },
  {
    title: "The Vatican",
    description: "Visit a peaceful guide to Vatican City, Saint Peter's Basilica, live broadcasts, and sacred art.",
    href: "/vatican",
    cta: "Explore the Vatican",
  },
  {
    title: "Liturgical Seasons",
    description: "Let the calendar of the Church shape what feels urgent and what lasts.",
    href: "/liturgical-living/seasons",
    cta: "Explore Seasons",
  },
  {
    title: "Indulgences",
    description: "Learn about prayer, mercy, and the Church's treasury of grace.",
    href: "/indulgences",
    cta: "Learn More",
  },
  {
    title: "Devotions",
    description: "Keep your heart steady with devotions ordered to Christ and the sacraments.",
    href: "/devotions",
    cta: "Explore Devotions",
  },
] as const;

export function getCatholicNewsResources(): CatholicNewsResource[] {
  return [...catholicNewsResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getOfficialNewsResources(): CatholicNewsResource[] {
  return getCatholicNewsResources().filter((resource) => resource.official || resource.sourceType === "official-church");
}

export function getNewsResourcesByCategory(category: NewsCategory): CatholicNewsResource[] {
  return getCatholicNewsResources().filter((resource) => resource.category === category);
}

export function getNewsResourcesBySourceType(sourceType: NewsSourceType): CatholicNewsResource[] {
  return getCatholicNewsResources().filter((resource) => resource.sourceType === sourceType);
}

export function getFeaturedNewsResources(): CatholicNewsResource[] {
  return getCatholicNewsResources();
}

export function getNewsPrayerPrompts(): NewsPrayerPrompt[] {
  return [...newsPrayerPrompts].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getNewsFaqs(): NewsFAQ[] {
  return [...newsFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRelatedNewsTools() {
  return [...relatedNewsTools];
}
