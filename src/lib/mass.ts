import { churchSacredSpaces } from "@/data/churchSacredSpaces";
import { massFaqs } from "@/data/massFaqs";
import { massObjects } from "@/data/massObjects";
import { massParts, massSections } from "@/data/massParts";
import { massVideos } from "@/data/massVideos";
import type { MassObjectType, MassSectionType } from "@/types/mass";

export function getMassSections() {
  return [...massSections].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getMassParts() {
  return [...massParts].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getMassPartBySlug(slug: string) {
  return massParts.find((part) => part.slug === slug);
}

export function getMassPartsBySection(section: MassSectionType) {
  return getMassParts().filter((part) => part.section === section);
}

export function getSacredSpaces() {
  return [...churchSacredSpaces].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSacredSpaceBySlug(slug: string) {
  return churchSacredSpaces.find((space) => space.slug === slug);
}

export function getMassObjects() {
  return [...massObjects].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getMassObjectsByType(type: MassObjectType) {
  return getMassObjects().filter((item) => item.objectType === type);
}

export function getMassFaqs() {
  return [...massFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getMassVideos() {
  return [...massVideos].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFeaturedMassVideos() {
  return getMassVideos().slice(0, 2);
}

export function getRelatedMassTools() {
  return [
    { label: "The Eucharist and Grace", href: "/formation/grace/sacramental-grace", description: "See how sacramental grace, especially in the Eucharist, strengthens charity and communion with Christ." },
    { label: "The Bible", href: "/bible", description: "Learn how Catholics read Scripture with the Church, the Mass, and daily prayer." },
    { label: "Explore the Catholic Faith", href: "/explore", description: "A gentle starting point for seekers, visitors, and anyone trying to understand Catholic worship." },
    { label: "Angels and the Invisible World", href: "/angels", description: "See how the Mass joins earthly worship to the praise of angels and saints before God." },
    { label: "Sacraments: Eucharist", href: "/sacraments/eucharist", description: "Understand the Eucharist as sacrifice, banquet, and Real Presence." },
    { label: "Eucharistic Adoration", href: "/adoration", description: "Spend time quietly before Christ truly present in the Blessed Sacrament." },
    { label: "Scripture Prayer", href: "/library/scripture-prayer", description: "Pray with the Word proclaimed at Mass." },
    { label: "Mass Readings Reflections", href: "/reflections/mass-readings", description: "Reflect on daily and Sunday readings with prayer and application." },
    { label: "Liturgical Seasons", href: "/liturgical-living/seasons", description: "See how the Church year shapes the celebration of the Mass." },
    { label: "Sacred Tradition", href: "/tradition", description: "See how apostolic worship, Scripture, and Eucharistic faith are handed on in the Church." },
    { label: "Councils of the Church", href: "/councils", description: "See how the Creed, liturgy, and Eucharistic teaching were clarified across history." },
    { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours", description: "Extend the prayer of the Church through the day." },
    { label: "Church Fathers", href: "/church-fathers", description: "Learn how early Christians understood the Eucharist and worship." },
    { label: "The Vatican", href: "/vatican", description: "See how major papal liturgies and sacred spaces reveal the Church at prayer." },
    { label: "Devotions", href: "/devotions", description: "Deepen reverence for Christ through prayer and devotion." },
    { label: "Indulgences", href: "/indulgences", description: "Learn how the Church speaks about grace, mercy, and holy works." },
    { label: "Confession", href: "/confession", description: "Prepare for the sacrament of mercy and return to the altar with peace." },
    { label: "Rule of Life", href: "/rule-of-life", description: "Let Sunday worship shape the rest of the week." },
    { label: "Formation", href: "/formation", description: "Grow in doctrine, virtue, prayer, and daily discipleship." },
  ];
}
