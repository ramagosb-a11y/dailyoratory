import { audioHomilyResources } from "@/data/audioHomilyResources";
import { homilyCollections } from "@/data/homilyCollections";
import { homilyResources } from "@/data/homilyResources";
import {
  buildYouTubeEmbedUrl,
  buildYouTubePlaylistEmbedUrl,
  getApprovedMediaItems,
  getMediaThumbnail,
} from "@/lib/media";
import type { HomilyCollection, HomilyItem } from "@/types/homilies";
import type { MediaItem } from "@/types/media";

const HOMILY_TOPIC_CHIPS = [
  "Sunday Gospel",
  "Daily Mass",
  "Eucharist",
  "Confession",
  "Prayer",
  "Mercy",
  "Hope",
  "Suffering",
  "Family",
  "Saints",
  "Mary",
  "Holy Spirit",
  "Virtue",
  "Lent",
  "Advent",
  "Easter",
  "Ordinary Time",
  "OCIA",
  "Returning Catholics",
  "Catholic Basics",
] as const;

const HOMILY_SEASONS = [
  "Advent",
  "Christmas",
  "Lent",
  "Holy Week",
  "Easter",
  "Ordinary Time",
  "Marian Feasts",
  "Saints and Solemnities",
] as const;

export async function getApprovedHomilies(): Promise<HomilyItem[]> {
  const items = await getApprovedMediaItems();
  return mergeStaticAudioHomilies(items.filter(isHomilyMediaItem)).sort(sortHomilies);
}

export async function getFeaturedHomilies() {
  const items = await getApprovedHomilies();
  const pinned = items.find((item) => item.slug === "mass-homilies");
  const rest = items.filter((item) => item.slug !== "mass-homilies" && item.featured);
  return pinned ? [pinned, ...rest] : items.filter((item) => item.featured);
}

export async function getHomilyBySlug(slug: string) {
  return (await getApprovedHomilies()).find((item) => item.slug === slug);
}

export async function getHomiliesByTopic(topic: string) {
  const normalized = normalize(topic);
  return (await getApprovedHomilies()).filter((item) =>
    [item.homilyTopic, item.topic, ...item.tags].some((value) => normalize(value).includes(normalized)),
  );
}

export async function getHomiliesBySeason(season: string) {
  const normalized = normalize(season);
  return (await getApprovedHomilies()).filter((item) =>
    normalize(item.liturgicalSeason).includes(normalized) ||
    item.tags.some((tag) => normalize(tag).includes(normalized)),
  );
}

export async function getHomiliesBySpeaker(speaker: string) {
  const normalized = normalize(speaker);
  return (await getApprovedHomilies()).filter(
    (item) => normalize(item.creator).includes(normalized) || normalize(item.sourceName).includes(normalized),
  );
}

export function getHomilyCollections(): HomilyCollection[] {
  return [...homilyCollections].filter((item) => item.status === "approved").sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFeaturedHomilyCollections() {
  return getHomilyCollections().filter((item) => item.featured);
}

export async function getRelatedHomilies(homily: HomilyItem, limit = 3) {
  const items = await getApprovedHomilies();
  return items
    .filter((item) => item.id !== homily.id)
    .map((item) => ({
      item,
      score:
        Number(item.liturgicalSeason === homily.liturgicalSeason) * 2 +
        Number(item.creator === homily.creator) * 2 +
        item.tags.filter((tag) => homily.tags.includes(tag)).length,
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || sortHomilies(a.item, b.item))
    .slice(0, limit)
    .map((entry) => entry.item);
}

export function buildHomilyYouTubeEmbedUrl(videoId?: string) {
  return buildYouTubeEmbedUrl(videoId);
}

export function buildHomilyPlaylistEmbedUrl(playlistId?: string) {
  return buildYouTubePlaylistEmbedUrl(playlistId);
}

export function getHomilyThumbnail(homily: HomilyItem) {
  return getMediaThumbnail(homily);
}

export function formatHomilyReflectionPromptsForCopy() {
  return [
    "After Listening: Reflection Prompts",
    "",
    "- What word or phrase stayed with me?",
    "- What did this teach me about Jesus?",
    "- What Scripture passage was connected to the homily?",
    "- Where do I need conversion?",
    "- What virtue is God inviting me to practice?",
    "- Who should I pray for after hearing this?",
    "- What is one action I can take today?",
  ].join("\n");
}

export function getHomilyTopicOptions() {
  return [...HOMILY_TOPIC_CHIPS];
}

export function getHomilySeasonOptions() {
  return [...HOMILY_SEASONS];
}

export function getHomilyResources() {
  return [...homilyResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getHomilyActionLabel(item: HomilyItem) {
  if (isAudioHomily(item)) return "Listen";
  if (item.mediaType === "youtube-playlist") return "View Playlist";
  if (item.mediaType === "youtube-video") return "Watch";
  return "Open";
}

export function isAudioHomily(item: HomilyItem) {
  return Boolean(
    item.audioUrl ||
      item.podcastUrl ||
      item.mediaType === "audio" ||
      item.mediaType === "podcast" ||
      (item.mediaType === "external-link" && item.sourceUrl),
  );
}

export function isPlaylistHomily(item: HomilyItem) {
  return item.mediaType === "youtube-playlist";
}

export function isVideoHomily(item: HomilyItem) {
  return item.mediaType === "youtube-video";
}

function isHomilyMediaItem(item: MediaItem): item is HomilyItem {
  const haystack = [
    item.mediaSubtype ?? "",
    item.category,
    item.topic,
    item.title,
    item.description,
    item.shortDescription,
    item.slug,
    ...item.tags,
  ]
    .join(" ")
    .toLowerCase();

  return (
    item.mediaSubtype === "homily" ||
    item.category === "homilies-talks" ||
    item.slug === "mass-homilies" ||
    /\bhomil(y|ies)\b/.test(haystack)
  );
}

function mergeStaticAudioHomilies(items: HomilyItem[]) {
  const merged = [...items];
  const seen = new Set(merged.flatMap(getHomilyResourceKeys));

  for (const item of audioHomilyResources) {
    const keys = getHomilyResourceKeys(item);
    if (keys.some((key) => seen.has(key))) continue;

    merged.push(item);
    keys.forEach((key) => seen.add(key));
  }

  return merged;
}

function getHomilyResourceKeys(item: HomilyItem) {
  return [item.id, item.slug, item.sourceUrl, item.audioUrl, item.podcastUrl].filter((value): value is string => Boolean(value));
}

function sortHomilies(a: HomilyItem, b: HomilyItem) {
  if (a.slug === "mass-homilies") return -1;
  if (b.slug === "mass-homilies") return 1;
  return Number(b.featured) - Number(a.featured) || a.sortOrder - b.sortOrder || a.title.localeCompare(b.title);
}

function normalize(value?: string) {
  return (value ?? "").trim().toLowerCase();
}
