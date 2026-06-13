import type { DailyOratoryContentRecord } from "@/lib/content";
import { getContentSeason, getLibraryContentRecords } from "@/lib/content";
import { catholicGlossary } from "@/data/catholicGlossary";
import { staticSearchIndex, popularSearches, searchCategories } from "@/data/searchIndex";
import { contentResources, confessionGuides, divineMercyGuides, prayers, rosaryGuides } from "@/data/contentRecords";
import { getApprovedDevotions } from "@/lib/devotions";
import { getApprovedMediaItems } from "@/lib/media";
import { getPublishedMassReadingsReflectionsData } from "@/lib/massReadingsReflections";
import { getPublishedSaints } from "@/lib/saints";
import { isInternalHref, normalizeInternalHref } from "@/lib/url";
import type { ContentBlock } from "@/types/content";
import type { SearchCategory, SearchItem, SearchItemType, SearchOptions } from "@/types/search";
import type { ContentAudience, LiturgicalSeasonName, ResourceRecord } from "@/types/content";

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
  q?: string | string[];
  category?: string | string[];
  type?: string | string[];
  season?: string | string[];
  tags?: string | string[];
  sort?: string | string[];
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

export async function searchLibraryContent(state: LibrarySearchState): Promise<LibrarySearchResult[]> {
  const query = normalize(state.q);
  const tags = state.tags.map(normalize);
  const records = await getSearchLibraryRecords();

  const results = records
    .map((record) => {
      const excerpt = getContentExcerpt(record);
      const typeLabel = getContentTypeLabel(record);
      const season = getContentSeason(record);
      const searchableText = [
        record.title,
        record.description,
        record.category,
        typeLabel,
        season,
        excerpt,
        ...record.tags,
      ]
        .filter(Boolean)
        .join(" ");
      const score = getSearchScore(record, query, searchableText);

      return { record, excerpt, typeLabel, season, score };
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

  return sortLibraryResults(results, state.sort);
}

export async function getLibraryFacetOptions(records?: DailyOratoryContentRecord[]) {
  const resolvedRecords = records ?? (await getSearchLibraryRecords());
  const results = resolvedRecords.map((record) => ({
    record,
    excerpt: getContentExcerpt(record),
    typeLabel: getContentTypeLabel(record),
    season: getContentSeason(record),
    score: 0,
  }));

  const seasons = results.reduce<string[]>((items, result) => {
    if (result.season) items.push(result.season);
    return items;
  }, []);

  return {
    categories: libraryCategoryOptions,
    types: Array.from(new Set(results.map((result) => result.typeLabel))).sort(),
    seasons: Array.from(new Set(seasons)).sort(),
    tags: Array.from(new Set(resolvedRecords.flatMap((record) => record.tags))).sort(),
  };
}

async function getSearchLibraryRecords(): Promise<DailyOratoryContentRecord[]> {
  const baseRecords = getLibraryContentRecords();
  const [mediaItems, massReadingsReflections] = await Promise.all([
    getApprovedMediaItems(),
    getPublishedMassReadingsReflectionsData(),
  ]);

  const synthesizedMedia = mediaItems.map(mapMediaItemToLibraryRecord);
  const synthesizedMassReadings = massReadingsReflections.map(mapMassReflectionToLibraryRecord);

  return [...baseRecords, ...synthesizedMedia, ...synthesizedMassReadings];
}

function mapMediaItemToLibraryRecord(item: Awaited<ReturnType<typeof getApprovedMediaItems>>[number]): ResourceRecord {
  const mediaTypeLabel = titleCase(item.mediaType);
  const category = inferLibraryCategoryFromMedia(item.category);
  const body: ContentBlock[] = [];

  if ((item.description || item.shortDescription).trim()) {
    body.push({ type: "paragraph", text: item.description || item.shortDescription });
  }

  if (item.relatedScriptureReferences.length > 0) {
    body.push({ type: "list", items: item.relatedScriptureReferences });
  }

  return {
    id: `library-media-${item.id}`,
    title: item.title,
    slug: `media-${item.slug}`,
    description: item.shortDescription || item.description,
    category,
    tags: Array.from(new Set(["Media", mediaTypeLabel, ...item.tags])),
    relatedResourceIds: [],
    status: "published",
    createdAt: item.publishedDate,
    updatedAt: item.updatedDate,
    visibility: "public",
    contentType: "resource",
    format: "reference",
    season: "All Year",
    audience: inferAudience(item.audience),
    estimatedMinutes: 10,
    featured: item.featured,
    canonicalPath: `/media/${item.slug}`,
    body,
  };
}

function mapMassReflectionToLibraryRecord(
  reflection: Awaited<ReturnType<typeof getPublishedMassReadingsReflectionsData>>[number],
): ResourceRecord {
  const referenceSummary = reflection.readings.map((reading) => `${reading.label}: ${reading.reference}`).join(" | ");
  const body: ContentBlock[] = [];

  if (reflection.connectionBetweenReadings.trim()) {
    body.push({ type: "paragraph", text: reflection.connectionBetweenReadings });
  }

  if (reflection.spiritualInvitation.trim()) {
    body.push({ type: "paragraph", text: reflection.spiritualInvitation });
  }

  if (referenceSummary.trim()) {
    body.push({ type: "paragraph", text: referenceSummary });
  }

  return {
    id: `library-mass-reading-${reflection.id}`,
    title: reflection.title,
    slug: `mass-reading-${reflection.slug}`,
    description: reflection.shortDescription,
    category: "Reflection",
    tags: Array.from(
      new Set([
        "Mass Readings",
        reflection.reflectionType === "sunday-mass" ? "Sunday Mass" : "Daily Mass",
        reflection.liturgicalSeason,
        ...reflection.tags,
      ]),
    ),
    relatedResourceIds: [],
    status: "published",
    createdAt: reflection.createdAt,
    updatedAt: reflection.updatedAt,
    visibility: "public",
    contentType: "resource",
    format: "reflection",
    season: normalizeSeason(reflection.liturgicalSeason),
    audience: ["all"],
    estimatedMinutes: 8,
    featured: reflection.featured,
    canonicalPath: `/reflections/mass-readings/${reflection.slug}`,
    body,
  };
}

function inferLibraryCategoryFromMedia(categorySlug: string): DailyOratoryContentRecord["category"] {
  switch (categorySlug) {
    case "prayer":
    case "adoration":
    case "rosary":
      return "Prayer";
    case "mass":
    case "sacraments":
      return "Sacraments";
    case "saints":
      return "Saints";
    case "scripture":
      return "Scripture";
    default:
      return "Formation";
  }
}

function inferAudience(audience: string[]): ContentAudience[] {
  const normalized = audience.map((item) => normalize(item));
  if (normalized.some((item) => item.includes("famil"))) return ["families"];
  if (normalized.some((item) => item.includes("parish") || item.includes("group"))) return ["parish-groups"];
  if (normalized.some((item) => item.includes("prayer"))) return ["prayer-communities"];
  if (normalized.some((item) => item.includes("formation") || item.includes("ocia"))) return ["formation-teams"];
  return ["all"];
}

function normalizeSeason(season: string): LiturgicalSeasonName {
  if (season === "Advent" || season === "Christmas" || season === "Lent" || season === "Easter" || season === "Pentecost" || season === "Ordinary Time" || season === "Marian" || season === "All Year") {
    return season;
  }

  return "All Year";
}

export function getContentTypeLabel(record: DailyOratoryContentRecord) {
  if (record.contentType === "resource") return titleCase(record.format);
  if (record.contentType === "divine-mercy") return "Divine Mercy";
  if (record.contentType === "confession-guide") return "Confession Guide";
  if (record.contentType === "confession-topic") return "Confession Guide";
  if (record.contentType === "daily-reflection") {
    return record.reflectionKind === "sunday" ? "Sunday Mass Reflection" : "Daily Mass Reflection";
  }
  if (record.contentType === "liturgical-day") return "Liturgical Day";
  if (record.contentType === "liturgical-season") return "Liturgical Season";
  if (record.contentType === "sacrament-companion") return "Sacrament Companion";
  if (record.contentType === "spiritual-growth-pathway") return "Pathway";
  if (record.contentType === "rule-of-life-template") return "Rule of Life";
  if (record.contentType === "rule-of-life-builder-step") return "Rule Builder";
  if (record.contentType === "virtue-definition") return "Virtue";
  if (record.contentType === "vice-definition") return "Vice";
  if (record.contentType === "virtue-vice-pair") return "Virtue Tracker";
  if (record.contentType === "virtue-tracker-template") return "Virtue Tracker";
  if (record.contentType === "examination-of-conscience") return "Examination";
  if (record.contentType === "prayer-intention") return "Prayer Intention";
  if (record.contentType === "prayer-chain-request") return "Prayer Chain";
  if (record.contentType === "live-prayer-room") return "Prayer Room";
  if (record.contentType === "prayer-room-guide") return "Prayer Room Guide";
  if (record.contentType === "live-adoration-stream") return "Adoration Stream";
  if (record.contentType === "local-faith-group") return "Local Faith Group";
  if (record.contentType === "group-discussion-topic") return "Group Discussion Topic";

  return titleCase(record.contentType);
}

export function getContentExcerpt(record: DailyOratoryContentRecord) {
  if (record.contentType === "daily-reflection") {
    return [
      record.excerpt,
      record.body.join(" "),
      record.prayer,
      record.reflectionQuestions.join(" "),
      record.scriptureReferences.map((reference) => `${reference.label} ${reference.citation}`).join(" "),
    ].join(" ");
  }
  if ("excerpt" in record) return record.excerpt;
  if ("text" in record) return record.text;
  if ("body" in record && Array.isArray(record.body)) return getBlockExcerpt(record.body);
  if (record.contentType === "group-discussion-topic") {
    return [
      record.openingPrayer,
      record.scriptureReference,
      record.questions.join(" "),
      record.facilitatorNotes.join(" "),
    ]
      .filter(Boolean)
      .join(" ");
  }
  if (record.contentType === "confession-topic") {
    return [
      record.summary,
      record.pastoralNote,
      ...record.sections.map((section) => `${section.title} ${section.body} ${(section.items ?? []).join(" ")}`),
      ...record.practices.map((practice) => `${practice.title} ${practice.description}`),
    ].join(" ");
  }
  if ("shortBiography" in record) {
    return [record.shortBiography, record.prayerPrompt, record.patronage.join(" "), record.virtueFocus.join(" ")].join(" ");
  }
  if ("requestSummary" in record) return record.requestSummary;
  if ("modules" in record) {
    return record.modules
      .map((module) =>
        [
          module.title,
          module.description,
          module.teaching,
          module.scriptureReference,
          module.prayerPrompt,
          module.practice,
          ...module.reflectionQuestions,
        ].join(" "),
      )
      .join(" ");
  }
  if ("spiritualFocus" in record) return record.spiritualFocus.join(", ");
  if ("practices" in record && Array.isArray(record.practices)) {
    return record.practices.map((practice) => `${practice.title} ${practice.description}`).join(" ");
  }
  if ("preparationSteps" in record) {
    const preparationText = record.preparationSteps
      .map((step) => (typeof step === "string" ? step : step.description))
      .join(" ");
    const checklistText = "roleChecklists" in record ? record.roleChecklists.map((item) => `${item.title} ${item.description}`).join(" ") : "";
    const promptText = "reflectionPrompts" in record ? record.reflectionPrompts.map((item) => item.prompt).join(" ") : "";
    return [preparationText, checklistText, promptText].filter(Boolean).join(" ");
  }
  if ("shortPrayer" in record) return `${record.shortPrayer} ${record.reflectionPrompt}`;
  if ("gentleDescription" in record) return `${record.gentleDescription} ${record.warningSigns.join(" ")} ${record.graceFilledNextSteps.join(" ")}`;
  if ("focusAreas" in record) return record.focusAreas.join(", ");
  if ("guidelines" in record && Array.isArray(record.guidelines)) {
    return record.guidelines.filter((item): item is string => typeof item === "string").join(" ");
  }
  if ("reverenceGuidelines" in record) return record.reverenceGuidelines.join(" ");
  if ("steps" in record) {
    return record.steps.map((step) => `${step.title} ${step.instruction}`).join(" ");
  }

  return record.description;
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

function getBlockExcerpt(blocks: ContentBlock[]) {
  return blocks
    .map((block) => {
      if (block.type === "list") return block.items.join(" ");
      if (block.type === "callout") return `${block.title} ${block.text}`;
      if (block.type === "prayer") return `${block.text} ${block.response ?? ""}`;
      return block.text;
    })
    .join(" ");
}

function readOne(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function readMany(value: string | string[] | undefined) {
  if (!value) return [];
  return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
}

function isLibrarySort(value: string): value is LibrarySort {
  return librarySortOptions.some((option) => option.value === value);
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function titleCase(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function dateValue(value: string) {
  return new Date(value).getTime();
}

export function getStaticSearchItems() {
  return sanitizeSearchItems(staticSearchIndex.filter((item) => item.status === "approved"));
}

export async function getReflectionSearchItems(): Promise<SearchItem[]> {
  const reflections = await getPublishedMassReadingsReflectionsData();

  return reflections.map((reflection) => ({
    id: `search-reflection-${reflection.id}`,
    title: reflection.title,
    slug: reflection.slug,
    href: `/reflections/mass-readings/${reflection.slug}`,
    description: reflection.shortDescription,
    content: [
      reflection.theme,
      reflection.liturgicalDay,
      reflection.connectionBetweenReadings,
      reflection.spiritualInvitation,
      reflection.practicalApplication.join(" "),
      reflection.body.join(" "),
      reflection.theologicalInsights.join(" "),
      reflection.readings.map((reading) => `${reading.label} ${reading.reference}`).join(" "),
    ]
      .filter(Boolean)
      .join(" "),
    category: "Reflect",
    type: "reflection",
    tags: Array.from(
      new Set([
        "Mass Readings",
        reflection.liturgicalSeason,
        reflection.reflectionType.replace(/-/g, " "),
        ...reflection.tags,
      ]),
    ),
    audience: ["Catholics", "Explorers", "Families"],
    section: "Reflect",
    priority: reflection.reflectionDate === getCurrentSearchDate() ? 105 : 80,
    status: "approved",
    updatedAt: reflection.updatedAt,
  }));
}

export async function getMediaSearchItems(): Promise<SearchItem[]> {
  const mediaItems = await getApprovedMediaItems();

  return mediaItems.map((item) => ({
    id: `search-media-${item.id}`,
    title: item.title,
    slug: item.slug,
    href: `/media/${item.slug}`,
    description: item.shortDescription || item.description,
    content: [
      item.description,
      item.topic,
      item.creator,
      item.sourceName,
      item.relatedScriptureReferences.join(" "),
      item.relatedCatechismReferences.join(" "),
    ]
      .filter(Boolean)
      .join(" "),
    category: "Media",
    type: "media",
    tags: Array.from(new Set([getMediaTypeSearchLabel(item.mediaType), ...item.tags])),
    audience: item.audience,
    section: "Media",
    priority: item.featured ? 92 : 68,
    status: "approved",
    image: item.thumbnailUrl || item.imageUrl,
    updatedAt: item.updatedDate,
  }));
}

export async function getSaintSearchItems(): Promise<SearchItem[]> {
  return getPublishedSaints().map((saint) => ({
    id: `search-saint-${saint.id}`,
    title: saint.name,
    slug: saint.slug,
    href: `/saints/${saint.slug}`,
    description: saint.shortDescription,
    content: [
      saint.title,
      saint.biography,
      saint.whyMatters,
      saint.patronages.join(" "),
      saint.keyVirtues.join(" "),
      saint.categories.join(" "),
    ]
      .filter(Boolean)
      .join(" "),
    category: "Saints",
    type: "saint",
    tags: Array.from(new Set(["Saint", ...saint.keyVirtues, ...saint.patronages])),
    audience: ["Catholics", "Explorers", "Families"],
    section: "Saints",
    priority: saint.featured ? 88 : 64,
    status: "approved",
    image: saint.imageUrl,
    updatedAt: saint.updatedAt,
  }));
}

export async function getDevotionSearchItems(): Promise<SearchItem[]> {
  return getApprovedDevotions().map((devotion) => ({
    id: `search-devotion-${devotion.id}`,
    title: devotion.title,
    slug: devotion.slug,
    href: `/devotions/${devotion.slug}`,
    description: devotion.shortDescription,
    content: [
      devotion.longDescription,
      devotion.theologicalFocus.join(" "),
      devotion.spiritualFruits.join(" "),
      devotion.relatedSacraments.join(" "),
      devotion.spiritualNeedTags.join(" "),
      devotion.howToBegin,
    ]
      .filter(Boolean)
      .join(" "),
    category: "Devotions",
    type: "devotion",
    tags: Array.from(new Set([devotion.devotionType, ...devotion.spiritualNeedTags])),
    audience: ["Catholics", "Explorers", devotion.familyFriendly ? "Families" : "Individuals"],
    section: "Pray",
    priority: devotion.featured ? 84 : 62,
    status: "approved",
  }));
}

export function getPrayerSearchItems(): SearchItem[] {
  const records = [...contentResources, ...prayers, ...rosaryGuides, ...divineMercyGuides, ...confessionGuides].filter(
    (record) => record.status === "published" && record.visibility !== "private",
  );

  return records.map((record) => ({
    id: `search-content-${record.id}`,
    title: record.title,
    slug: record.slug,
    href: getContentHrefForSearch(record),
    description: record.description,
    content: getContentExcerpt(record),
    category: record.category,
    type: mapContentRecordToSearchType(record.contentType),
    tags: record.tags,
    audience: mapContentAudience(record),
    section: inferSectionFromCategory(record.category),
    priority: "featured" in record && record.featured ? 78 : 52,
    status: "approved",
    updatedAt: record.updatedAt,
  }));
}

export function getGlossarySearchItems(): SearchItem[] {
  return catholicGlossary.map((term) => ({
    id: `search-glossary-${term.id}`,
    title: term.term,
    slug: term.slug,
    href: "/glossary",
    description: term.definition,
    content: `${term.term} ${term.definition} ${term.category} ${term.relatedLinks.map((link) => link.label).join(" ")}`,
    category: "Glossary",
    type: "resource",
    tags: [term.category, "Glossary"],
    audience: ["Explorers", "Catholics"],
    section: "Explore",
    priority: 40,
    status: "approved",
    updatedAt: "2026-05-18",
  }));
}

export async function getAllSearchItems(): Promise<SearchItem[]> {
  const [reflections, media, saints, devotions] = await Promise.all([
    getReflectionSearchItems(),
    getMediaSearchItems(),
    getSaintSearchItems(),
    getDevotionSearchItems(),
  ]);

  const combined = [
    ...getStaticSearchItems(),
    ...getPrayerSearchItems(),
    ...getGlossarySearchItems(),
    ...reflections,
    ...media,
    ...saints,
    ...devotions,
  ].filter((item) => item.status === "approved");

  return dedupeSearchItems(sanitizeSearchItems(combined));
}

export async function searchSite(query: string, options: SearchOptions = {}) {
  const items = await getAllSearchItems();
  const normalizedQuery = normalizeSearchText(query);
  const filtered = items
    .filter((item) => {
      if (options.category && normalizeSearchText(item.category) !== normalizeSearchText(options.category)) {
        return false;
      }

      if (options.type && item.type !== options.type) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return scoreSearchItem(item, normalizedQuery) > 0;
    })
    .map((item) => ({
      item,
      score: normalizedQuery ? scoreSearchItem(item, normalizedQuery) : item.priority,
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.item.priority - a.item.priority || a.item.title.localeCompare(b.item.title))
    .slice(0, options.limit ?? 60)
    .map((entry) => entry.item);

  return filtered;
}

export function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function scoreSearchItem(item: SearchItem, query: string) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return item.priority;

  const title = normalizeSearchText(item.title);
  const description = normalizeSearchText(item.description);
  const content = normalizeSearchText(item.content);
  const category = normalizeSearchText(item.category);
  const type = normalizeSearchText(item.type);
  const tags = item.tags.map(normalizeSearchText);
  const words = normalizedQuery.split(" ").filter(Boolean);

  let score = 0;

  if (title === normalizedQuery) score += 120;
  if (title.includes(normalizedQuery)) score += 80;
  if (tags.some((tag) => tag === normalizedQuery)) score += 70;
  if (tags.some((tag) => tag.includes(normalizedQuery))) score += 40;
  if (category.includes(normalizedQuery)) score += 25;
  if (type.includes(normalizedQuery)) score += 25;
  if (description.includes(normalizedQuery)) score += 20;
  if (content.includes(normalizedQuery)) score += 10;

  for (const word of words) {
    if (title.includes(word)) score += 24;
    if (tags.some((tag) => tag.includes(word))) score += 18;
    if (description.includes(word)) score += 10;
    if (content.includes(word)) score += 6;
  }

  return score + item.priority * 0.12;
}

export function highlightSearchSnippet(text: string, query: string) {
  const normalizedQuery = normalizeSearchText(query);
  const normalizedText = normalizeSearchText(text);

  if (!normalizedQuery || !normalizedText) {
    return text.slice(0, 180);
  }

  const firstWord = normalizedQuery.split(" ")[0];
  const index = normalizedText.indexOf(firstWord);
  if (index < 0) return text.slice(0, 180);

  const start = Math.max(0, index - 60);
  const end = Math.min(text.length, start + 200);
  const prefix = start > 0 ? "... " : "";
  const suffix = end < text.length ? " ..." : "";
  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
}

export function getPopularSearches() {
  return [...popularSearches];
}

export async function getSearchSuggestions(query: string) {
  const normalizedQuery = normalizeSearchText(query);
  if (normalizedQuery.length < 2) return [];

  const items = await getAllSearchItems();
  return items
    .map((item) => ({
      item,
      score: scoreSearchItem(item, normalizedQuery),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.item.priority - a.item.priority)
    .slice(0, 5)
    .map((entry) => entry.item);
}

export function getSearchCategories(): SearchCategory[] {
  return [...searchCategories].sort((a, b) => a.sortOrder - b.sortOrder);
}

function dedupeSearchItems(items: SearchItem[]) {
  const byHref = new Map<string, SearchItem>();

  for (const item of items) {
    const key = normalizeInternalHref(item.href);
    const existing = byHref.get(key);
    if (!existing || item.priority > existing.priority) {
      byHref.set(key, { ...item, href: key });
    }
  }

  return Array.from(byHref.values());
}

function sanitizeSearchItems(items: SearchItem[]) {
  return items.flatMap((item) => {
    try {
      if (!isInternalHref(item.href)) {
        console.warn(`[search] Skipping external search href for ${item.id}: ${item.href}`);
        return [];
      }

      return [{ ...item, href: normalizeInternalHref(item.href) }];
    } catch (error) {
      const message = error instanceof Error ? error.message : "unknown error";
      console.warn(`[search] Skipping malformed search href for ${item.id}: ${item.href} (${message})`);
      return [];
    }
  });
}

function getCurrentSearchDate() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value ?? "0000";
  const month = parts.find((part) => part.type === "month")?.value ?? "00";
  const day = parts.find((part) => part.type === "day")?.value ?? "00";
  return `${year}-${month}-${day}`;
}

function getContentHrefForSearch(record: ResourceRecord | DailyOratoryContentRecord) {
  if ("canonicalPath" in record && typeof record.canonicalPath === "string" && record.canonicalPath) {
    return record.canonicalPath;
  }

  if ("path" in record && typeof record.path === "string" && record.path) {
    return record.path;
  }

  if (record.contentType === "prayer") return "/pray";
  if (record.contentType === "rosary") return "/devotions/holy-rosary";
  if (record.contentType === "divine-mercy") return "/divine-mercy";
  if (record.contentType === "confession-guide") return "/confession";

  return "/library";
}

function mapContentRecordToSearchType(contentType: DailyOratoryContentRecord["contentType"]): SearchItemType {
  if (contentType === "prayer" || contentType === "rosary" || contentType === "divine-mercy") return "prayer";
  if (contentType === "confession-guide") return "guide";
  if (contentType === "resource") return "resource";
  return "page";
}

function mapContentAudience(record: ResourceRecord | DailyOratoryContentRecord) {
  if ("audience" in record && Array.isArray(record.audience)) {
    return record.audience.map((value) => value.replace(/-/g, " "));
  }

  return ["Catholics"];
}

function inferSectionFromCategory(category: string) {
  if (["Prayer", "Rosary", "Divine Mercy", "Confession", "Adoration"].includes(category)) return "Pray";
  if (["Reflection"].includes(category)) return "Reflect";
  if (["Saints"].includes(category)) return "Saints";
  if (["Sacraments", "Formation", "Scripture", "Reference", "Devotions"].includes(category)) return "Learn";
  return "Resources";
}

function getMediaTypeSearchLabel(mediaType: string) {
  return mediaType.replace(/-/g, " ");
}
