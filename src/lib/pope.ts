import {
  currentPope,
  monthlyIntentionsResource,
  papalInfallibilityCards,
  papalReadingMethod,
  peterReferences,
  popeDailyLifeCards,
  popeRelatedTools,
  popeRoles,
} from "@/data/popePage";
import { papalDocumentTypes, papalDocuments, papalThemes } from "@/data/papalDocuments";
import { popeFaqs } from "@/data/popeFaqs";
import { popeResources } from "@/data/popeResources";
import { recentPopes } from "@/data/recentPopes";
import type { PapalDocumentTypeEnum } from "@/types/pope";

export function getCurrentPope() {
  return currentPope;
}

export function getRecentPopes() {
  return [...recentPopes].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRecentPopeBySlug(slug: string) {
  return getRecentPopes().find((pope) => pope.slug === slug);
}

export function getPapalDocuments() {
  return [...papalDocuments].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPapalDocumentBySlug(slug: string) {
  return getPapalDocuments().find((document) => document.slug === slug);
}

export function getPapalDocumentsByType(type: PapalDocumentTypeEnum) {
  return getPapalDocuments().filter((document) => document.documentType === type);
}

export function getPapalDocumentsByPope(popeId: string) {
  return getPapalDocuments().filter((document) => document.popeId === popeId);
}

export function getPapalDocumentsByTheme(themeSlug: string) {
  const theme = papalThemes.find((item) => item.slug === themeSlug);
  if (!theme) return [];
  const ids = new Set(theme.documentIds);
  return getPapalDocuments().filter((document) => ids.has(document.id));
}

export function getPapalDocumentTypes() {
  return [...papalDocumentTypes].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFeaturedPapalDocuments() {
  return getPapalDocuments().slice(0, 10);
}

export function getPapalThemes() {
  return [...papalThemes].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPopeFaqs() {
  return [...popeFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPopeResources() {
  return [...popeResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRelatedPopeTools() {
  return [...popeRelatedTools];
}

export function formatPapalReadingMethodForCopy() {
  return [
    "How to Read a Papal Document",
    "",
    ...papalReadingMethod.map((step, index) => `${index + 1}. ${step}`),
  ].join("\n");
}

export function formatPrayerForPopeForCopy() {
  return currentPopePrayer;
}

export function getPopeRoles() {
  return [...popeRoles];
}

export function getPeterReferences() {
  return [...peterReferences];
}

export function getPapalInfallibilityCards() {
  return papalInfallibilityCards;
}

export function getPapalReadingMethod() {
  return [...papalReadingMethod];
}

export function getPopeDailyLifeCards() {
  return [...popeDailyLifeCards];
}

export function getMonthlyIntentionsResource() {
  return { ...monthlyIntentionsResource };
}

const currentPopePrayer = `Lord Jesus Christ,
watch over our Holy Father, the Pope.

Give him wisdom to teach,
courage to shepherd,
humility to serve,
and charity to lead Your Church in truth and peace.

Strengthen him by the Holy Spirit,
protect him from harm,
and help him guide the faithful closer to You.

Amen.`;
