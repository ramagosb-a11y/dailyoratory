import {
  explorerPath,
  sacredArtPrayerCards,
  stPetersHighlights,
  sistineChapelHighlights,
  vaticanDefinitionCards,
  vaticanMassHighlights,
  vaticanMuseumHighlights,
  vaticanRelatedTools,
  vaticanTimeline,
  virtualPilgrimagePrayer,
  virtualPilgrimageSteps,
  visitPlanningTips,
  whyVaticanMattersCards,
} from "@/data/vaticanPage";
import { vaticanFaqs } from "@/data/vaticanFaqs";
import { vaticanResources } from "@/data/vaticanResources";
import { vaticanVideos } from "@/data/vaticanVideos";
import { vaticanVirtualTours } from "@/data/vaticanVirtualTours";

export function getVaticanResources() {
  return [...vaticanResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getOfficialVaticanResources() {
  return getVaticanResources().filter((resource) => resource.official);
}

export function getVaticanVideos() {
  return [...vaticanVideos].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getLiveVaticanVideos() {
  return getVaticanVideos().filter((video) => video.live);
}

export function getFeaturedVaticanVideos() {
  return getVaticanVideos().slice(0, 4);
}

export function getVaticanVirtualTours() {
  return [...vaticanVirtualTours].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getVaticanTimeline() {
  return [...vaticanTimeline].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getVaticanFaqs() {
  return [...vaticanFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRelatedVaticanTools() {
  return [...vaticanRelatedTools];
}

export function getVaticanDefinitionCards() {
  return [...vaticanDefinitionCards];
}

export function getWhyVaticanMattersCards() {
  return [...whyVaticanMattersCards];
}

export function getStPetersHighlights() {
  return [...stPetersHighlights];
}

export function getSistineChapelHighlights() {
  return [...sistineChapelHighlights];
}

export function getVaticanMuseumHighlights() {
  return [...vaticanMuseumHighlights];
}

export function getVaticanMassHighlights() {
  return [...vaticanMassHighlights];
}

export function getSacredArtPrayerCards() {
  return [...sacredArtPrayerCards];
}

export function getVirtualPilgrimageSteps() {
  return [...virtualPilgrimageSteps];
}

export function getVaticanExplorerPath() {
  return [...explorerPath];
}

export function getVisitPlanningTips() {
  return [...visitPlanningTips];
}

export function formatVirtualPilgrimageForPrint() {
  return [
    "Make a Virtual Pilgrimage",
    "",
    ...virtualPilgrimageSteps.map((step, index) => `${index + 1}. ${step}`),
    "",
    "Prayer for a Virtual Pilgrimage",
    "",
    virtualPilgrimagePrayer,
  ].join("\n");
}

export function formatVirtualPilgrimagePrayerForCopy() {
  return virtualPilgrimagePrayer;
}
