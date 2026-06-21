import { cache } from "react";
import { mediaCategories as localMediaCategories } from "@/data/mediaCategories";
import { mediaCollections as localMediaCollections } from "@/data/mediaCollections";
import { mediaLibrary as localMediaLibrary } from "@/data/mediaLibrary";
import type { CopyrightStatus, MediaCategory, MediaCollection, MediaItem, MediaLink, MediaStatus, MediaType } from "@/types/media";

const DEFAULT_MEDIA_LIBRARY_SHEET_ID = "1NW-77lyZvbM7TmZT9xuR65b5HvPMLpK5Y-a-q8n9hHI";
const MEDIA_ITEMS_SHEET = "Media_Items";
const MEDIA_CATEGORIES_SHEET = "Media_Categories";
const FEATURED_COLLECTIONS_SHEET = "Featured_Collections";
const CACHE_TAG = "media-library-google-sheet";
const REVALIDATE_SECONDS = 60 * 5;

type SheetRow = Record<string, string>;

type MediaSource = {
  items: MediaItem[];
  categories: MediaCategory[];
  collections: MediaCollection[];
  sourceMode: "google-sheet" | "static-fallback" | "static-only";
  remoteSheetId: string;
};

export const getMediaSource = cache(async (): Promise<MediaSource> => {
  const remoteSheetId = getMediaLibrarySheetId();
  if (!remoteSheetId) {
    return {
      items: await hydrateMediaThumbnails(localMediaLibrary),
      categories: localMediaCategories,
      collections: localMediaCollections,
      sourceMode: "static-only",
      remoteSheetId: "",
    };
  }

  const [remoteItems, remoteCategories, remoteCollections] = await Promise.all([
    fetchMediaItemRows(remoteSheetId),
    fetchMediaCategoryRows(remoteSheetId),
    fetchMediaCollectionRows(remoteSheetId),
  ]);

  const items = await hydrateMediaThumbnails(mergeMediaItems(remoteItems, localMediaLibrary));
  const categories = mergeMediaCategories(remoteCategories, localMediaCategories);
  const collections = mergeMediaCollections(remoteCollections, localMediaCollections);

  return {
    items,
    categories,
    collections,
    sourceMode: remoteItems.length || remoteCategories.length || remoteCollections.length ? "google-sheet" : "static-fallback",
    remoteSheetId,
  };
});

export function getMediaLibrarySheetId() {
  return (
    process.env.GOOGLE_SHEETS_MEDIA_LIBRARY_SHEET_ID ||
    process.env.MEDIA_LIBRARY_SHEET_ID ||
    DEFAULT_MEDIA_LIBRARY_SHEET_ID
  ).trim();
}

export async function getApprovedMediaItems() {
  const { items } = await getMediaSource();
  return items.filter((item) => isMediaItemPublic(item)).sort(sortMediaItems);
}

export async function getFeaturedMediaItems() {
  return (await getApprovedMediaItems()).filter((item) => item.featured);
}

export async function getMediaItemBySlug(slug: string) {
  return (await getApprovedMediaItems()).find((item) => item.slug === slug);
}

export async function getMediaItemsByType(mediaType: MediaType) {
  return (await getApprovedMediaItems()).filter((item) => item.mediaType === mediaType);
}

export async function getMediaItemsByCategory(categorySlug: string) {
  return (await getApprovedMediaItems()).filter((item) => item.category === categorySlug);
}

export async function getMediaItemsByTag(tag: string) {
  const normalizedTag = normalize(tag);
  return (await getApprovedMediaItems()).filter((item) => item.tags.some((itemTag) => normalize(itemTag) === normalizedTag));
}

export async function getMediaCollections() {
  const { collections } = await getMediaSource();
  return collections.filter((collection) => collection.status === "approved").sort(sortMediaCollections);
}

export async function getFeaturedCollections() {
  return (await getMediaCollections()).filter((collection) => collection.featured);
}

export async function getMediaCollectionBySlug(slug: string) {
  return (await getMediaCollections()).find((collection) => collection.slug === slug);
}

export async function getRelatedMediaItems(item: MediaItem, limit = 3) {
  const approvedItems = await getApprovedMediaItems();
  const tagSet = new Set(item.tags.map(normalize));
  const normalizedAudience = item.audience.map(normalize);

  return approvedItems
    .filter((candidate) => candidate.id !== item.id)
    .map((candidate) => {
      const sharedTags = candidate.tags.map(normalize).filter((tag) => tagSet.has(tag)).length;
      const categoryMatch = candidate.category === item.category ? 2 : 0;
      const collectionMatch = candidate.collectionIds.some((id) => item.collectionIds.includes(id)) ? 2 : 0;
      const audienceMatch = candidate.audience.some((audience) => normalizedAudience.includes(normalize(audience))) ? 1 : 0;

      return {
        item: candidate,
        score: sharedTags + categoryMatch + collectionMatch + audienceMatch,
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || sortMediaItems(a.item, b.item))
    .slice(0, limit)
    .map((entry) => entry.item);
}

export async function getMediaCategories() {
  const { categories } = await getMediaSource();
  return categories.filter((category) => category.status === "approved").sort(sortMediaCategories);
}

export function getMediaItemsForCollection(collection: MediaCollection, approvedItems: MediaItem[]) {
  return collection.mediaItemIds
    .map((itemId) => approvedItems.find((item) => item.id === itemId))
    .filter((item): item is MediaItem => Boolean(item));
}

export function getMediaCategoryBySlug(slug: string, categories: MediaCategory[] = localMediaCategories) {
  return categories.find((category) => category.slug === slug);
}

export function buildYouTubeEmbedUrl(videoId?: string) {
  if (!videoId) return null;
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`;
}

export function buildYouTubePlaylistEmbedUrl(playlistId?: string) {
  if (!playlistId) return null;
  return `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&rel=0&modestbranding=1`;
}

export function buildGoogleSlidesEmbedUrl(slidesUrl?: string) {
  if (!slidesUrl) return null;

  try {
    const url = new URL(slidesUrl);
    if (url.hostname !== "docs.google.com") return null;
    if (url.pathname.includes("/embed")) return url.toString();

    const publishedMatch = url.pathname.match(/\/presentation\/d\/e\/([^/]+)/);
    if (publishedMatch?.[1]) {
      return `https://docs.google.com/presentation/d/e/${publishedMatch[1]}/embed?start=false&loop=false&delayms=3000`;
    }

    return null;
  } catch {
    return null;
  }
}

export function buildGoogleDrivePreviewUrl(fileId?: string) {
  if (!fileId) return null;
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export function extractYouTubeVideoId(urlOrId?: string) {
  if (!urlOrId) return null;
  if (/^[A-Za-z0-9_-]{6,64}$/.test(urlOrId)) return urlOrId;

  try {
    const url = new URL(urlOrId);
    const hostname = url.hostname.toLowerCase().replace(/^www\./, "");
    if (hostname === "youtu.be") return sanitizeId(url.pathname.split("/").filter(Boolean)[0]);
    if (hostname === "youtube.com" || hostname === "m.youtube.com" || hostname === "youtube-nocookie.com") {
      if (url.pathname === "/watch") return sanitizeId(url.searchParams.get("v") ?? "");
      const parts = url.pathname.split("/").filter(Boolean);
      const embedIndex = parts.findIndex((part) => part === "embed" || part === "live" || part === "shorts");
      return sanitizeId(embedIndex >= 0 ? parts[embedIndex + 1] : "");
    }
    return null;
  } catch {
    return null;
  }
}

export function extractYouTubePlaylistId(urlOrId?: string) {
  if (!urlOrId) return null;
  if (/^[A-Za-z0-9_-]{10,128}$/.test(urlOrId) && urlOrId.startsWith("PL")) return urlOrId;

  try {
    const url = new URL(urlOrId);
    return sanitizeId(url.searchParams.get("list") ?? "");
  } catch {
    return null;
  }
}

export function extractGoogleDriveFileId(urlOrId?: string) {
  if (!urlOrId) return null;
  if (/^[A-Za-z0-9_-]{10,}$/.test(urlOrId)) return urlOrId;

  try {
    const url = new URL(urlOrId);
    const idParam = url.searchParams.get("id");
    if (idParam) return sanitizeId(idParam);

    const fileMatch = url.pathname.match(/\/d\/([^/]+)/);
    if (fileMatch?.[1]) return sanitizeId(fileMatch[1]);

    return null;
  } catch {
    return null;
  }
}

export function isMediaItemPublic(item: MediaItem) {
  if (item.status !== "approved") return false;
  if (item.copyrightStatus === "do-not-publish" || item.copyrightStatus === "needs-review") return false;

  switch (item.mediaType) {
    case "youtube-video":
      return Boolean(item.youtubeVideoId ?? extractYouTubeVideoId(item.youtubeUrl));
    case "youtube-playlist":
      return Boolean(item.youtubePlaylistId ?? extractYouTubePlaylistId(item.youtubeUrl));
    case "audio":
    case "podcast":
    case "external-link":
      return Boolean(item.audioUrl || item.podcastUrl || item.sourceUrl);
    case "google-slides":
      return Boolean(item.googleSlidesEmbedUrl ?? buildGoogleSlidesEmbedUrl(item.googleSlidesUrl));
    case "google-drive-image":
    case "google-drive-file":
    case "pdf":
      return Boolean(item.googleDriveFileId ?? extractGoogleDriveFileId(item.googleDriveFileUrl));
    case "external-image":
      return Boolean(item.imageUrl);
    case "collection":
      return item.collectionIds.length > 0;
    default:
      return false;
  }
}

export function getMediaThumbnail(item: MediaItem) {
  if (item.thumbnailUrl) return item.thumbnailUrl;
  if (item.imageUrl) return item.imageUrl;

  const videoId = item.youtubeVideoId ?? extractYouTubeVideoId(item.youtubeUrl);
  if (videoId) return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return "/images/chapel-library-hero.png";
}

export function getMediaTypeLabel(mediaType: MediaType) {
  const labels: Record<MediaType, string> = {
    "youtube-video": "YouTube video",
    "youtube-playlist": "YouTube playlist",
    audio: "Audio",
    podcast: "Podcast",
    "google-slides": "Google Slides",
    "google-drive-image": "Drive image",
    "google-drive-file": "Drive file",
    "external-link": "External link",
    "external-image": "Image",
    pdf: "PDF",
    collection: "Collection",
  };

  return labels[mediaType];
}

export function getMediaFilterOptions(items: MediaItem[]) {
  return {
    mediaTypes: Array.from(new Set(items.map((item) => item.mediaType))).sort(),
    audiences: Array.from(new Set(items.flatMap((item) => item.audience))).sort(),
    topics: Array.from(new Set(items.map((item) => item.topic))).sort(),
    tags: Array.from(new Set(items.flatMap((item) => item.tags))).sort(),
  };
}

export function getMediaStatusLabel(status: MediaItem["status"] | MediaCategory["status"] | MediaCollection["status"]) {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getCopyrightStatusLabel(status: CopyrightStatus) {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function fetchMediaItemRows(sheetId: string) {
  try {
    const rows = await fetchGoogleSheetRows(sheetId, MEDIA_ITEMS_SHEET);
    return rows.map((row, index) => mapRowToMediaItem(row, index)).filter(Boolean) as MediaItem[];
  } catch {
    return [];
  }
}

async function fetchMediaCategoryRows(sheetId: string) {
  try {
    const rows = await fetchGoogleSheetRows(sheetId, MEDIA_CATEGORIES_SHEET);
    return rows.map(mapRowToMediaCategory).filter(Boolean) as MediaCategory[];
  } catch {
    return [];
  }
}

async function fetchMediaCollectionRows(sheetId: string) {
  try {
    const rows = await fetchGoogleSheetRows(sheetId, FEATURED_COLLECTIONS_SHEET);
    return rows.map(mapRowToMediaCollection).filter(Boolean) as MediaCollection[];
  } catch {
    return [];
  }
}

async function fetchGoogleSheetRows(sheetId: string, sheetName: string): Promise<SheetRow[]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
  });

  if (!response.ok) return [];

  const body = await response.text();
  const match = body.match(/setResponse\(([\s\S]+)\);/);
  if (!match?.[1]) return [];

  const parsed = JSON.parse(match[1]) as {
    table?: { cols?: Array<{ label?: string }>; rows?: Array<{ c?: Array<{ v?: unknown; f?: string | null } | null> }> };
  };

  const cols = parsed.table?.cols ?? [];
  const rows = parsed.table?.rows ?? [];
  const headers = cols.map((col) => String(col.label ?? "").trim());
  if (!headers.length) return [];

  return rows
    .map((row) => {
      const record: SheetRow = {};
      headers.forEach((header, index) => {
        if (!header) return;
        const cell = row.c?.[index];
        const value = cell?.f ?? cell?.v;
        record[header] = value == null ? "" : String(value).trim();
      });
      return record;
    })
    .filter((record) => Object.values(record).some((value) => value.trim() !== ""));
}

function mapRowToMediaItem(row: SheetRow, index: number): MediaItem | null {
  const id = pick(row, ["Media ID"]);
  const title = pick(row, ["Title"]);
  const slug = pick(row, ["Slug"]);
  const description = pick(row, ["Description"]) || pick(row, ["Short Description"]) || title;
  const shortDescription = pick(row, ["Short Description"]) || pick(row, ["Description"]) || title;
  const mediaType = normalizeMediaType(pick(row, ["Media Type"]));
  const mediaSubtype = emptyToUndefined(pick(row, ["Media Subtype"]));
  const category = pick(row, ["Category"]) || "formation";
  const topic = pick(row, ["Topic"]) || category || "Catholic media";
  const homilyTopic = emptyToUndefined(pick(row, ["Homily Topic"]));
  const liturgicalSeason = emptyToUndefined(pick(row, ["Liturgical Season"]));
  const liturgicalDay = emptyToUndefined(pick(row, ["Liturgical Day"]));
  const audience = splitList(pick(row, ["Audience"]));
  const altText = pick(row, ["Alt Text"]) || title;
  const sourceName = pick(row, ["Source Name"]);
  const creator = pick(row, ["Speaker / Creator", "Creator"]) || sourceName || "Daily Oratory";
  const copyrightStatus =
    normalizeCopyrightStatus(pick(row, ["Copyright Status"])) ?? (mediaType ? getDefaultCopyrightStatus(mediaType) : null);
  const status = normalizeMediaStatus(pick(row, ["Status"])) ?? "approved";
  const sortOrder = Number(pick(row, ["Sort Order"]) || `${index + 1}`) || index + 1;
  const today = new Date().toISOString().slice(0, 10);
  const publishedDate = normalizeDate(pick(row, ["Published Date"])) || today;
  const updatedDate = normalizeDate(pick(row, ["Updated Date"]) || publishedDate) || publishedDate;
  const normalizedAudience = audience.length > 0 ? audience : ["Catholics"];
  const normalizedSourceName = sourceName || (mediaType ? getDefaultSourceName(mediaType) : "Daily Oratory");

  if (
    !id ||
    !title ||
    !slug ||
    !description ||
    !shortDescription ||
    !mediaType ||
    !category ||
    !topic ||
    !altText ||
    !creator ||
    !copyrightStatus ||
    !status ||
    !publishedDate ||
    !updatedDate
  ) {
    return null;
  }

  const youtubeUrl = emptyToUndefined(pick(row, ["YouTube URL"]));
  const youtubeVideoId = emptyToUndefined(pick(row, ["YouTube Video ID"])) ?? nullToUndefined(extractYouTubeVideoId(youtubeUrl));
  const youtubePlaylistId =
    emptyToUndefined(pick(row, ["YouTube Playlist ID"])) ?? nullToUndefined(extractYouTubePlaylistId(youtubeUrl));
  const audioUrl = emptyToUndefined(pick(row, ["Audio URL"]));
  const podcastUrl = emptyToUndefined(pick(row, ["Podcast URL"]));
  const googleSlidesUrl = emptyToUndefined(pick(row, ["Google Slides URL"]));
  const googleSlidesEmbedUrl =
    emptyToUndefined(pick(row, ["Google Slides Embed URL"])) ?? buildGoogleSlidesEmbedUrl(googleSlidesUrl) ?? undefined;
  const googleDriveFileUrl = emptyToUndefined(pick(row, ["Google Drive File URL"]));
  const googleDriveFileId =
    emptyToUndefined(pick(row, ["Google Drive File ID"])) ?? nullToUndefined(extractGoogleDriveFileId(googleDriveFileUrl));
  const imageUrl = emptyToUndefined(pick(row, ["Image URL"]));
  const thumbnailUrl = emptyToUndefined(pick(row, ["Thumbnail URL"]));
  const sourceUrl = emptyToUndefined(pick(row, ["Source URL"])) ?? youtubeUrl ?? googleSlidesUrl ?? googleDriveFileUrl ?? imageUrl;

  return {
    id,
    title,
    slug,
    description,
    shortDescription,
    mediaType,
    mediaSubtype,
    category,
    tags: splitList(pick(row, ["Tags"])),
    topic,
    audience: normalizedAudience,
    homilyTopic,
    liturgicalSeason,
    liturgicalDay,
    scriptureReferences: splitList(pick(row, ["Scripture References"])),
    youtubeUrl,
    youtubeVideoId,
    youtubePlaylistId,
    audioUrl,
    podcastUrl,
    googleSlidesUrl,
    googleSlidesEmbedUrl,
    googleDriveFileUrl,
    googleDriveFileId,
    imageUrl,
    thumbnailUrl,
    altText,
    creator,
    duration: emptyToUndefined(pick(row, ["Duration"])),
    sourceName: normalizedSourceName,
    sourceUrl,
    copyrightStatus,
    licenseNotes: emptyToUndefined(pick(row, ["License Notes"])),
    featured: parseBoolean(pick(row, ["Featured"])),
    collectionIds: splitList(pick(row, ["Collection ID"])),
    relatedDailyOratoryLinks: buildMediaLinks(pick(row, ["Related Daily Oratory Links"])),
    relatedScriptureReferences: splitList(pick(row, ["Related Scripture References"])),
    relatedCatechismReferences: splitList(pick(row, ["Related Catechism References"])),
    status,
    sortOrder,
    publishedDate,
    updatedDate,
    notes: emptyToUndefined(pick(row, ["Notes"])),
  };
}

function mapRowToMediaCategory(row: SheetRow): MediaCategory | null {
  const id = pick(row, ["Category ID"]);
  const title = pick(row, ["Title"]);
  const slug = pick(row, ["Slug"]);
  const description = pick(row, ["Description"]);
  const iconName = pick(row, ["Icon Name"]) || "folder";
  const sortOrder = Number(pick(row, ["Sort Order"]) || "0") || 0;
  const status = normalizeMediaStatus(pick(row, ["Status"]));

  if (!id || !title || !slug || !description || !status) return null;

  return {
    id,
    title,
    slug,
    description,
    iconName,
    sortOrder,
    status,
  };
}

function mapRowToMediaCollection(row: SheetRow): MediaCollection | null {
  const id = pick(row, ["Collection ID"]);
  const title = pick(row, ["Title"]);
  const slug = pick(row, ["Slug"]);
  const description = pick(row, ["Description"]);
  const mediaItemIds = splitList(pick(row, ["Media IDs"]));
  const featured = parseBoolean(pick(row, ["Featured"]));
  const sortOrder = Number(pick(row, ["Sort Order"]) || "0") || 0;
  const status = normalizeMediaStatus(pick(row, ["Status"]));

  if (!id || !title || !slug || !description || !status) return null;

  return {
    id,
    title,
    slug,
    description,
    mediaItemIds,
    featured,
    sortOrder,
    status,
  };
}

function mergeMediaItems(remote: MediaItem[], local: MediaItem[]) {
  if (remote.length > 0) {
    return remote;
  }

  const byId = new Map<string, MediaItem>();
  for (const item of local) byId.set(item.id, item);
  for (const item of remote) byId.set(item.id, item);
  return Array.from(byId.values());
}

function mergeMediaCategories(remote: MediaCategory[], local: MediaCategory[]) {
  const bySlug = new Map<string, MediaCategory>();
  for (const category of local) bySlug.set(category.slug, category);
  for (const category of remote) bySlug.set(category.slug, category);
  return Array.from(bySlug.values());
}

function mergeMediaCollections(remote: MediaCollection[], local: MediaCollection[]) {
  const byId = new Map<string, MediaCollection>();
  for (const collection of local) byId.set(collection.id, collection);
  for (const collection of remote) byId.set(collection.id, collection);
  return Array.from(byId.values());
}

async function hydrateMediaThumbnails(items: MediaItem[]) {
  return Promise.all(
    items.map(async (item) => {
      if (item.thumbnailUrl || item.imageUrl) {
        return item;
      }

      if (item.mediaType === "youtube-video") {
        const videoId = item.youtubeVideoId ?? extractYouTubeVideoId(item.youtubeUrl);
        if (!videoId) return item;
        return {
          ...item,
          thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        };
      }

      return item;
    }),
  );
}

function buildMediaLinks(value: string): MediaLink[] {
  return splitList(value).map((href) => ({
    label: formatPathLabel(href),
    href,
    external: /^https?:\/\//i.test(href),
  }));
}

function formatPathLabel(href: string) {
  const trimmed = href.trim();
  if (!trimmed) return "Related link";
  if (/^https?:\/\//i.test(trimmed)) return new URL(trimmed).hostname.replace(/^www\./, "");

  return trimmed
    .replace(/^\//, "")
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.replace(/-/g, " "))
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" / ");
}

function normalizeMediaType(value: string): MediaType | null {
  const normalized = normalizeEnum(value);
  if (
    normalized === "youtube-video" ||
    normalized === "youtube-playlist" ||
    normalized === "audio" ||
    normalized === "podcast" ||
    normalized === "google-slides" ||
    normalized === "google-drive-image" ||
    normalized === "google-drive-file" ||
    normalized === "external-link" ||
    normalized === "external-image" ||
    normalized === "pdf" ||
    normalized === "collection"
  ) {
    return normalized;
  }
  return null;
}

function getDefaultSourceName(mediaType: MediaType) {
  switch (mediaType) {
    case "youtube-video":
    case "youtube-playlist":
      return "YouTube";
    case "audio":
    case "podcast":
      return "Audio";
    case "google-slides":
      return "Google Slides";
    case "google-drive-image":
    case "google-drive-file":
    case "pdf":
      return "Google Drive";
    case "external-link":
      return "External";
    case "external-image":
      return "External";
    case "collection":
      return "Daily Oratory";
    default:
      return "Daily Oratory";
  }
}

function getDefaultCopyrightStatus(mediaType: MediaType): CopyrightStatus {
  switch (mediaType) {
    case "collection":
      return "owned-by-daily-oratory";
    default:
      return "external-embed";
  }
}

function normalizeMediaStatus(value: string): MediaStatus | null {
  const normalized = normalizeEnum(value);
  if (
    normalized === "draft" ||
    normalized === "review" ||
    normalized === "approved" ||
    normalized === "hidden" ||
    normalized === "do-not-publish"
  ) {
    return normalized;
  }
  return null;
}

function normalizeCopyrightStatus(value: string): CopyrightStatus | null {
  const normalized = normalizeEnum(value);
  if (
    normalized === "original" ||
    normalized === "owned-by-daily-oratory" ||
    normalized === "permission-granted" ||
    normalized === "public-domain" ||
    normalized === "creative-commons" ||
    normalized === "external-embed" ||
    normalized === "needs-review" ||
    normalized === "do-not-publish"
  ) {
    return normalized;
  }
  return null;
}

function normalizeEnum(value: string) {
  return value.trim().toLowerCase().replace(/[ _]+/g, "-");
}

function normalizeDate(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const match = trimmed.match(/^\d{4}-\d{2}-\d{2}$/);
  return match ? match[0] : "";
}

function sortMediaItems(a: MediaItem, b: MediaItem) {
  return a.sortOrder - b.sortOrder || a.title.localeCompare(b.title);
}

function sortMediaCategories(a: MediaCategory, b: MediaCategory) {
  return a.sortOrder - b.sortOrder || a.title.localeCompare(b.title);
}

function sortMediaCollections(a: MediaCollection, b: MediaCollection) {
  return a.sortOrder - b.sortOrder || a.title.localeCompare(b.title);
}

function splitList(value: string) {
  if (!value) return [];
  return value
    .split(/[|,\n]/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

function pick(row: SheetRow, keys: string[]) {
  for (const key of keys) {
    if (row[key]?.trim()) return row[key].trim();
  }
  return "";
}

function parseBoolean(value: string) {
  return ["true", "yes", "1"].includes(value.trim().toLowerCase());
}

function emptyToUndefined(value: string) {
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

function nullToUndefined<T>(value: T | null) {
  return value == null ? undefined : value;
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function sanitizeId(value: string | undefined) {
  if (!value) return null;
  const candidate = value.trim();
  return /^[A-Za-z0-9_-]{6,128}$/.test(candidate) ? candidate : null;
}
