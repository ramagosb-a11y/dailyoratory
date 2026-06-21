import type { DailyOratoryContentRecord } from "@/lib/content";

export const libraryCategoryOptions = [
  "Prayer",
  "Rosary",
  "Divine Mercy",
  "Confession",
  "Reflection",
  "Liturgy",
  "Sacraments",
  "Saints",
  "Devotions",
  "Formation",
  "Liturgical Year",
  "Community",
  "Events",
] as const;

export const librarySortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "featured", label: "Featured" },
  { value: "recent", label: "Recently updated" },
  { value: "alpha", label: "Alphabetical" },
] as const;

export type LibraryCategory = (typeof libraryCategoryOptions)[number];
export type LibrarySort = (typeof librarySortOptions)[number]["value"];

export type LibrarySearchState = {
  q: string;
  category: string;
  type: string;
  season: string;
  tags: string[];
  sort: LibrarySort;
};

export type LibrarySearchResult = {
  record: DailyOratoryContentRecord;
  excerpt: string;
  typeLabel: string;
  season?: string;
  score: number;
};

export function parseLibrarySearchParams(params: {
  q?: string | string[] | null;
  category?: string | string[] | null;
  type?: string | string[] | null;
  season?: string | string[] | null;
  tags?: string | string[] | null;
  sort?: string | string[] | null;
}): LibrarySearchState {
  const sort = readOne(params.sort);

  return {
    q: readOne(params.q),
    category: readOne(params.category),
    type: readOne(params.type),
    season: readOne(params.season),
    tags: readMany(params.tags),
    sort: isLibrarySort(sort) ? sort : "recommended",
  };
}

export function filterLibraryResults(results: LibrarySearchResult[], state: LibrarySearchState) {
  const query = normalize(state.q);
  const tags = state.tags.map(normalize);

  const filtered = results
    .map((result) => {
      const record = result.record;
      const searchableText = [
        record.title,
        record.description,
        record.category,
        result.typeLabel,
        result.season,
        result.excerpt,
        ...record.tags,
      ]
        .join(" ")
        .toLowerCase();
      const score = getSearchScore(record, query, searchableText);

      return { ...result, score };
    })
    .filter((result) => {
      const record = result.record;
      const searchableText = [
        record.title,
        record.description,
        record.category,
        result.typeLabel,
        result.season,
        result.excerpt,
        ...record.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = !query || searchableText.includes(query);
      const matchesCategory = !state.category || matchesLibraryCategory(record, state.category);
      const matchesType = !state.type || result.typeLabel === state.type;
      const matchesSeason = !state.season || result.season === state.season;
      const matchesTags =
        tags.length === 0 || tags.every((tag) => record.tags.map(normalize).includes(tag));

      return matchesQuery && matchesCategory && matchesType && matchesSeason && matchesTags;
    });

  return sortLibraryResults(filtered, state.sort);
}

export function buildLibraryHref(state: LibrarySearchState, patch: Partial<LibrarySearchState>) {
  const next: LibrarySearchState = { ...state, ...patch };
  const params = new URLSearchParams();

  if (next.q) params.set("q", next.q);
  if (next.category) params.set("category", next.category);
  if (next.type) params.set("type", next.type);
  if (next.season) params.set("season", next.season);
  if (next.sort && next.sort !== "recommended") params.set("sort", next.sort);
  next.tags.forEach((tag) => params.append("tags", tag));

  const query = params.toString();
  return query ? `/library?${query}` : "/library";
}

export function removeTag(state: LibrarySearchState, tag: string) {
  return buildLibraryHref(state, { tags: state.tags.filter((item) => item !== tag) });
}

export function getLibraryResultHref(record: DailyOratoryContentRecord) {
  if ("canonicalPath" in record && typeof record.canonicalPath === "string" && record.canonicalPath) {
    return record.canonicalPath;
  }
  if (record.contentType === "spiritual-growth-pathway") return `/pathways/${record.slug}`;
  if (record.contentType === "sacrament-companion") return `/sacraments/${record.slug}`;
  if (record.contentType === "saint") return `/saints/${record.slug}`;
  if (record.contentType === "rosary") return "/devotions/holy-rosary";
  if (record.contentType === "prayer-intention") return `/prayer-intentions/${record.slug}`;
  if (record.contentType === "prayer-chain-request" && "requestId" in record) {
    return `/ask-for-prayer/requests/${record.requestId}`;
  }
  if (record.contentType === "live-prayer-room" && "devotionType" in record && "roomId" in record) {
    if (record.devotionType === "rosary") return "/rosary";
    return `/community/prayer-rooms/${record.roomId}`;
  }
  if (record.contentType === "prayer-room-guide" && "devotionType" in record) {
    if (record.devotionType === "rosary") return "/rosary";
    if (record.devotionType === "divine-mercy") return "/community/prayer-rooms/divine-mercy";
    return "/community/prayer-rooms";
  }
  if (record.contentType === "live-adoration-stream") return `/adoration/${record.slug}`;
  if (record.contentType === "event") return `/community/events/${record.slug}`;
  if (record.contentType === "reflection") return `/reflections/mass-readings/${record.slug}`;
  if (record.contentType === "local-faith-group") return `/community/local-faith-groups#${record.slug}`;
  if (record.contentType === "group-discussion-topic") return `/community/group-discussion-topics#${record.slug}`;
  if (record.contentType === "examination-of-conscience") return "/confession/examination";
  if (record.contentType === "confession-guide") return "/confession";
  if (record.contentType === "confession-topic" && "path" in record) return record.path;
  if (record.contentType === "daily-reflection") return `/reflections/mass-readings/${record.slug}`;
  if (record.contentType === "virtue-definition") return "/virtue-tracker/virtues";
  if (record.contentType === "vice-definition") return "/virtue-tracker/vices";
  if (record.contentType === "virtue-vice-pair" || record.contentType === "virtue-tracker-template") return "/virtue-tracker";
  if (record.slug === "confession-guide") return "/confession";
  if (record.slug === "sins") return "/confession/sins";
  if (record.slug === "habitual-sin") return "/confession/habitual-sin";
  if (record.slug === "holy-rosary") return "/devotions/holy-rosary";
  if (record.slug === "latin-rosary") return "/rosary/latin-rosary";
  if (record.slug === "daily-mass-reflections") return "/reflections/mass-readings";
  if (record.slug === "sunday-gospel-reflections") return "/reflections/mass-readings?type=sunday-mass";
  if (record.slug === "resisting-temptation") return "/confession/resisting-temptation";
  if (record.slug === "predominant-fault") return "/confession/predominant-fault";

  return `/library/${record.slug}`;
}

function sortLibraryResults(results: LibrarySearchResult[], sort: LibrarySort) {
  return [...results].sort((a, b) => {
    if (sort === "alpha") return a.record.title.localeCompare(b.record.title);
    if (sort === "recent") return dateValue(b.record.updatedAt) - dateValue(a.record.updatedAt);
    if (sort === "featured") {
      return Number(isFeatured(b.record)) - Number(isFeatured(a.record)) || dateValue(b.record.updatedAt) - dateValue(a.record.updatedAt);
    }

    return (
      b.score - a.score ||
      Number(isFeatured(b.record)) - Number(isFeatured(a.record)) ||
      dateValue(b.record.updatedAt) - dateValue(a.record.updatedAt) ||
      a.record.title.localeCompare(b.record.title)
    );
  });
}

function matchesLibraryCategory(record: DailyOratoryContentRecord, category: string) {
  if (category === "Liturgy") {
    return record.category === "Liturgical Year" || record.contentType === "liturgical-day" || record.contentType === "liturgical-season";
  }
  if (category === "Saints") return record.category === "Saints";
  if (category === "Events") return record.category === "Events" || record.contentType === "event";
  if (category === "Community") {
    return ["Community", "Prayer Intention", "Prayer Chain", "Prayer Room", "Local Faith Groups"].includes(record.category);
  }

  return record.category === category;
}

function getSearchScore(record: DailyOratoryContentRecord, query: string, searchableText: string) {
  if (!query) return getRecommendedWeight(record);

  const title = normalize(record.title);
  const description = normalize(record.description);
  const tags = record.tags.map(normalize);

  return (
    (title.includes(query) ? 12 : 0) +
    (description.includes(query) ? 5 : 0) +
    (tags.some((tag) => tag.includes(query)) ? 7 : 0) +
    (searchableText.toLowerCase().includes(query) ? 2 : 0) +
    getRecommendedWeight(record)
  );
}

function getRecommendedWeight(record: DailyOratoryContentRecord) {
  return (
    (isFeatured(record) ? 12 : 0) +
    (record.category === "Prayer" ? 4 : 0) +
    (record.category === "Reflection" ? 3 : 0) +
    (record.category === "Sacraments" ? 2 : 0)
  );
}

function isFeatured(record: DailyOratoryContentRecord) {
  return "featured" in record && Boolean(record.featured);
}

function readOne(value: string | string[] | null | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function readMany(value: string | string[] | null | undefined) {
  if (!value) return [];
  return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
}

function isLibrarySort(value: string): value is LibrarySort {
  return librarySortOptions.some((option) => option.value === value);
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function dateValue(value: string) {
  return new Date(value).getTime();
}
