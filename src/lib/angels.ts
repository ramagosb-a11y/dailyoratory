import { angelFaqs } from "@/data/angelFaqs";
import { angelPrayers } from "@/data/angelPrayers";
import { angelResources } from "@/data/angelResources";
import { angelChoirs, angelEpisodes, angelTopics, angelsStudyPath, archangels } from "@/data/angelsPage";

export function getAngelTopics() {
  return [...angelTopics].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAngelChoirs() {
  return [...angelChoirs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getArchangels() {
  return [...archangels].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAngelEpisodes() {
  return [...angelEpisodes].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAngelPrayers() {
  return [...angelPrayers].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAngelFaqs() {
  return [...angelFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAngelResources() {
  return [...angelResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function formatAngelPrayerForCopy(prayer: { title: string; body: string }) {
  return `${prayer.title}\n\n${prayer.body}`;
}

export function formatAngelStudyPathForCopy() {
  return angelsStudyPath.map((step, index) => `${index + 1}. ${step}`).join("\n");
}

export function getRelatedAngelTools() {
  return [
    { label: "Catechism", href: "/catechism" },
    { label: "The Holy Mass", href: "/mass" },
    { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
    { label: "Prayer", href: "/pray" },
    { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    { label: "Saints", href: "/saints" },
    { label: "Devotions", href: "/devotions" },
    { label: "Family and Domestic Church", href: "/family" },
    { label: "Formation", href: "/formation" },
    { label: "Explore the Catholic Faith", href: "/explore" },
    { label: "Confession Guide", href: "/confession" },
    { label: "Eucharistic Adoration", href: "/adoration" },
  ];
}
