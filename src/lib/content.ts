import { liveAdorationStreams } from "@/data/adoration";
import { confessionGuideTopics } from "@/data/confession";
import {
  confessionGuides,
  contentResources,
  divineMercyGuides,
  prayers,
  reflections,
  rosaryGuides,
} from "@/data/contentRecords";
import { events, groupDiscussionTopics, localFaithGroups } from "@/data/community";
import { examinationsOfConscience } from "@/data/examination";
import { liturgicalDayRecords, liturgicalSeasonRecords } from "@/data/liturgicalLiving";
import { spiritualGrowthPathways } from "@/data/pathways";
import { prayerChainRequests } from "@/data/prayerChain";
import { prayerIntentions } from "@/data/prayerIntentions";
import { dailyReflectionRecords } from "@/data/reflections";
import { livePrayerRooms, prayerRoomGuides } from "@/data/prayerRooms";
import { ruleOfLifeBuilderSteps, ruleOfLifeTemplates } from "@/data/ruleOfLife";
import { sacramentCompanions } from "@/data/sacramentCompanion";
import { saints } from "@/data/saints";
import { viceDefinitions, virtueDefinitions, virtueTrackerTemplates, virtueVicePairs } from "@/data/virtueTracker";
import { resources as legacyResources } from "@/content/resources";
import type { LiveAdorationStreamRecord } from "@/types/adoration";
import type { ConfessionGuideTopicRecord } from "@/types/confession";
import type { GroupDiscussionTopicRecord } from "@/types/community";
import type {
  BaseContentRecord,
  ContentBlock,
  ConfessionGuideRecord,
  ContentCategory,
  ContentStatus,
  DivineMercyGuideRecord,
  EventRecord,
  LocalFaithGroupRecord,
  PrayerRecord,
  ReflectionRecord,
  ResourceRecord,
  RosaryGuideRecord,
} from "@/types/content";
import type { ExaminationOfConscienceRecord } from "@/types/examination";
import type { LiturgicalDayRecord, LiturgicalSeasonRecord } from "@/types/liturgicalLiving";
import type { SpiritualGrowthPathwayRecord } from "@/types/pathways";
import type { PrayerChainRequestRecord } from "@/types/prayerChain";
import type { PrayerIntentionRecord } from "@/types/prayerIntentions";
import type { DailyReflectionRecord } from "@/types/reflections";
import type { LivePrayerRoomRecord, PrayerRoomGuideRecord } from "@/types/prayerRooms";
import type { RuleOfLifeBuilderStepRecord, RuleOfLifeTemplateRecord } from "@/types/ruleOfLife";
import type { SacramentCompanionRecord } from "@/types/sacramentCompanion";
import type { SaintRecord } from "@/types/saints";
import type { ViceDefinitionRecord, VirtueDefinitionRecord, VirtueTrackerTemplateRecord, VirtueVicePairRecord } from "@/types/virtueTracker";
import type { Resource as LegacyResource, ResourceCategory as LegacyResourceCategory, ResourceFormat as LegacyResourceFormat } from "@/content/types";

export type DailyOratoryContentRecord =
  | ResourceRecord
  | PrayerRecord
  | RosaryGuideRecord
  | DivineMercyGuideRecord
  | ConfessionGuideRecord
  | ConfessionGuideTopicRecord
  | DailyReflectionRecord
  | ReflectionRecord
  | LiturgicalSeasonRecord
  | LiturgicalDayRecord
  | SacramentCompanionRecord
  | SaintRecord
  | SpiritualGrowthPathwayRecord
  | RuleOfLifeTemplateRecord
  | RuleOfLifeBuilderStepRecord
  | VirtueDefinitionRecord
  | ViceDefinitionRecord
  | VirtueVicePairRecord
  | VirtueTrackerTemplateRecord
  | ExaminationOfConscienceRecord
  | PrayerIntentionRecord
  | PrayerChainRequestRecord
  | LivePrayerRoomRecord
  | PrayerRoomGuideRecord
  | LiveAdorationStreamRecord
  | EventRecord
  | LocalFaithGroupRecord
  | GroupDiscussionTopicRecord;

const authoredResourceSlugs = new Set(contentResources.map((resource) => resource.slug));
const canonicalConfessionTopicSlugs = new Set<string>(confessionGuideTopics.map((topic) => topic.slug));
const contentIdAliases: Record<string, string> = {
  "legacy-sins": "confession-topic-sins",
  "legacy-habitual-sin": "confession-topic-habitual-sin",
  "legacy-resisting-temptation": "confession-topic-resisting-temptation",
  "legacy-predominant-fault": "confession-topic-predominant-fault",
};

export const convertedLegacyResources: ResourceRecord[] = legacyResources
  .filter((resource) => resource.status === "published")
  .filter((resource) => !authoredResourceSlugs.has(resource.slug))
  .filter((resource) => !canonicalConfessionTopicSlugs.has(resource.slug))
  .map(convertLegacyResource);

export const contentCollections = {
  resources: [...contentResources, ...convertedLegacyResources],
  prayers,
  rosaryGuides,
  divineMercyGuides,
  confessionGuides,
  confessionTopics: confessionGuideTopics,
  dailyReflections: dailyReflectionRecords,
  reflections,
  liturgicalSeasons: liturgicalSeasonRecords,
  liturgicalDays: liturgicalDayRecords,
  sacramentCompanions,
  saints,
  devotions: [...rosaryGuides, ...divineMercyGuides],
  spiritualGrowthPathways,
  ruleOfLifeTemplates,
  ruleOfLifeBuilderSteps,
  virtueDefinitions,
  viceDefinitions,
  virtueVicePairs,
  virtueTrackerTemplates,
  examinationsOfConscience,
  prayerIntentions,
  prayerChainRequests,
  livePrayerRooms,
  prayerRoomGuides,
  liveAdorationStreams,
  events,
  localFaithGroups,
  groupDiscussionTopics,
} satisfies Record<string, readonly DailyOratoryContentRecord[]>;

export type ContentCollectionKey = keyof typeof contentCollections;

export const allContentRecords: DailyOratoryContentRecord[] = [
  ...contentResources,
  ...convertedLegacyResources,
  ...prayers,
  ...rosaryGuides,
  ...divineMercyGuides,
  ...confessionGuides,
  ...confessionGuideTopics,
  ...dailyReflectionRecords,
  ...reflections,
  ...liturgicalSeasonRecords,
  ...liturgicalDayRecords,
  ...sacramentCompanions,
  ...saints,
  ...spiritualGrowthPathways,
  ...ruleOfLifeTemplates,
  ...ruleOfLifeBuilderSteps,
  ...virtueDefinitions,
  ...viceDefinitions,
  ...virtueVicePairs,
  ...virtueTrackerTemplates,
  ...examinationsOfConscience,
  ...prayerIntentions,
  ...prayerChainRequests,
  ...livePrayerRooms,
  ...prayerRoomGuides,
  ...liveAdorationStreams,
  ...events,
  ...localFaithGroups,
  ...groupDiscussionTopics,
];

export type ContentSearchFilters = {
  query?: string;
  category?: ContentCategory;
  status?: ContentStatus;
  tags?: string[];
  contentType?: DailyOratoryContentRecord["contentType"];
  season?: string;
};

export function getLibraryContentRecords() {
  return dailyReflectionRecords.filter(
    (record) => record.status === "published" && record.visibility !== "private",
  );
}

export const contentBackendMap = {
  resources: { sheetName: "Resources", supabaseTable: "resources" },
  prayers: { sheetName: "Prayers", supabaseTable: "prayers" },
  rosaryGuides: { sheetName: "Rosary", supabaseTable: "rosary_guides" },
  divineMercyGuides: { sheetName: "Divine Mercy", supabaseTable: "divine_mercy_guides" },
  devotions: { sheetName: "Devotions", supabaseTable: "devotions" },
  confessionGuides: { sheetName: "Confession Guides", supabaseTable: "confession_guides" },
  confessionTopics: { sheetName: "Confession Topics", supabaseTable: "confession_topics" },
  dailyReflections: { sheetName: "Mass Readings Reflections", supabaseTable: "daily_reflections" },
  reflections: { sheetName: "Reflections", supabaseTable: "reflections" },
  liturgicalSeasons: { sheetName: "Liturgical Seasons", supabaseTable: "liturgical_seasons" },
  liturgicalDays: { sheetName: "Liturgical Days", supabaseTable: "liturgical_days" },
  sacramentCompanions: { sheetName: "Sacraments", supabaseTable: "sacrament_companions" },
  saints: { sheetName: "Saints", supabaseTable: "saints" },
  spiritualGrowthPathways: { sheetName: "Pathways", supabaseTable: "spiritual_growth_pathways" },
  ruleOfLifeTemplates: { sheetName: "Rule Templates", supabaseTable: "rule_of_life_templates" },
  ruleOfLifeBuilderSteps: { sheetName: "Rule Builder Steps", supabaseTable: "rule_of_life_builder_steps" },
  virtueDefinitions: { sheetName: "Virtues", supabaseTable: "virtue_definitions" },
  viceDefinitions: { sheetName: "Vices", supabaseTable: "vice_definitions" },
  virtueVicePairs: { sheetName: "Virtue Vice Pairs", supabaseTable: "virtue_vice_pairs" },
  virtueTrackerTemplates: { sheetName: "Virtue Trackers", supabaseTable: "virtue_tracker_templates" },
  examinationsOfConscience: { sheetName: "Examinations", supabaseTable: "examinations" },
  prayerIntentions: { sheetName: "Prayer Intentions", supabaseTable: "prayer_intentions" },
  prayerChainRequests: { sheetName: "Prayer Chain", supabaseTable: "prayer_chain_requests" },
  livePrayerRooms: { sheetName: "Prayer Rooms", supabaseTable: "live_prayer_rooms" },
  prayerRoomGuides: { sheetName: "Prayer Room Guides", supabaseTable: "prayer_room_guides" },
  liveAdorationStreams: { sheetName: "Adoration Streams", supabaseTable: "live_adoration_streams" },
  events: { sheetName: "Events", supabaseTable: "events" },
  localFaithGroups: { sheetName: "Local Faith Groups", supabaseTable: "local_faith_groups" },
  groupDiscussionTopics: { sheetName: "Group Discussion Topics", supabaseTable: "group_discussion_topics" },
} as const;

export function getContentCollection<K extends ContentCollectionKey>(key: K): (typeof contentCollections)[K] {
  return contentCollections[key];
}

export function getPublishedRecords<T extends BaseContentRecord>(records: readonly T[]): T[] {
  return records.filter((record) => record.status === "published");
}

export function getContentById(id: string) {
  const resolvedId = contentIdAliases[id] ?? id;
  return allContentRecords.find((record) => record.id === resolvedId);
}

export function getContentBySlug(slug: string) {
  return allContentRecords.find((record) => record.slug === slug);
}

export function getPublishedContentBySlug(slug: string) {
  return getLibraryContentRecords().find((record) => record.slug === slug);
}

export function getContentHref(record: DailyOratoryContentRecord) {
  if ("canonicalPath" in record && typeof record.canonicalPath === "string" && record.canonicalPath) {
    return record.canonicalPath;
  }
  if (record.contentType === "spiritual-growth-pathway") return `/pathways/${record.slug}`;
  if (record.contentType === "sacrament-companion") return `/sacraments/${record.slug}`;
  if (record.contentType === "saint") return `/saints/${record.slug}`;
  if (record.contentType === "rosary") return "/devotions/holy-rosary";
  if (record.contentType === "prayer-intention") return `/prayer-intentions/${record.slug}`;
  if (record.contentType === "prayer-chain-request") return `/ask-for-prayer/requests/${record.requestId}`;
  if (record.contentType === "live-prayer-room") {
    if (record.devotionType === "rosary") return "/rosary";
    return `/community/prayer-rooms/${record.roomId}`;
  }
  if (record.contentType === "prayer-room-guide") {
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
  if (record.contentType === "confession-topic") return record.path;
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

export function getRecordsByCategory(category: ContentCategory) {
  return allContentRecords.filter((record) => record.category === category);
}

export function getRecordsByTag(tag: string) {
  const normalizedTag = tag.trim().toLowerCase();

  return allContentRecords.filter((record) =>
    record.tags.some((recordTag) => recordTag.toLowerCase() === normalizedTag),
  );
}

export function searchContent(filters: ContentSearchFilters = {}) {
  const normalizedQuery = filters.query?.trim().toLowerCase();
  const normalizedTags = filters.tags?.map((tag) => tag.toLowerCase()) ?? [];

  return allContentRecords.filter((record) => {
    const matchesQuery =
      !normalizedQuery ||
      [record.title, record.description, record.category, record.contentType, ...record.tags]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    const matchesCategory = !filters.category || record.category === filters.category;
    const matchesStatus = !filters.status || record.status === filters.status;
    const matchesContentType = !filters.contentType || record.contentType === filters.contentType;
    const matchesTags =
      normalizedTags.length === 0 ||
      normalizedTags.every((tag) => record.tags.map((recordTag) => recordTag.toLowerCase()).includes(tag));
    const matchesSeason = !filters.season || getRecordSeason(record) === filters.season;

    return matchesQuery && matchesCategory && matchesStatus && matchesContentType && matchesTags && matchesSeason;
  });
}

export function getRelatedContent(record: BaseContentRecord, limit = 4) {
  const explicit = record.relatedResourceIds
    .map((id) => getContentById(id))
    .filter((item): item is DailyOratoryContentRecord => Boolean(item));

  if (explicit.length) {
    return explicit.slice(0, limit);
  }

  return allContentRecords
    .filter((candidate) => candidate.id !== record.id)
    .map((candidate) => ({
      candidate,
      score:
        (candidate.category === record.category ? 2 : 0) +
        candidate.tags.filter((tag) => record.tags.includes(tag)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.candidate);
}

export function getContentStats() {
  return {
    total: allContentRecords.length,
    published: allContentRecords.filter((record) => record.status === "published").length,
    needsReview: allContentRecords.filter((record) => record.status === "needs-review").length,
    draft: allContentRecords.filter((record) => record.status === "draft").length,
    collections: Object.fromEntries(
      Object.entries(contentCollections).map(([key, records]) => [key, records.length]),
    ) as Record<ContentCollectionKey, number>,
  };
}

export function toPortableContentRow(record: DailyOratoryContentRecord) {
  const row: Record<string, string | number | boolean | null> = {};

  for (const [key, value] of Object.entries(record)) {
    row[key] = serializeCell(value);
  }

  return row;
}

export function getBackendTarget(collection: ContentCollectionKey) {
  return contentBackendMap[collection as keyof typeof contentBackendMap];
}

function getRecordSeason(record: DailyOratoryContentRecord) {
  if ("season" in record && typeof record.season === "string") return record.season;
  if ("liturgicalSeason" in record && typeof record.liturgicalSeason === "string") return record.liturgicalSeason;
  return undefined;
}

export function getContentSeason(record: DailyOratoryContentRecord) {
  return getRecordSeason(record);
}

function convertLegacyResource(resource: LegacyResource): ResourceRecord {
  return {
    id: `legacy-${resource.slug}`,
    title: resource.title,
    slug: resource.slug,
    description: resource.description,
    category: mapLegacyCategory(resource.category),
    tags: resource.tags,
    relatedResourceIds: resource.related?.map((slug) => `legacy-${slug}`) ?? [],
    status: resource.status,
    createdAt: resource.updatedAt,
    updatedAt: resource.updatedAt,
    visibility: "public",
    source: { system: "static", externalId: resource.slug },
    schemaVersion: 1,
    contentType: "resource",
    format: mapLegacyFormat(resource.format),
    season: resource.season,
    audience: ["all"],
    estimatedMinutes: resource.minutes,
    featured: resource.featured,
    canonicalPath: `/library/${resource.slug}`,
    body: resource.body as ContentBlock[],
  };
}

function mapLegacyCategory(category: LegacyResourceCategory): ContentCategory {
  const categoryMap: Record<LegacyResourceCategory, ContentCategory> = {
    Prayer: "Prayer",
    Rosary: "Rosary",
    "Daily Reflection": "Reflection",
    "Liturgical Year": "Liturgical Year",
    Sacraments: "Sacraments",
    "Saints & Devotions": "Devotions",
    Formation: "Formation",
    Community: "Community",
    Scripture: "Scripture",
    Reference: "Reference",
  };

  return categoryMap[category];
}

function mapLegacyFormat(format: LegacyResourceFormat): ResourceRecord["format"] {
  const formatMap: Record<LegacyResourceFormat, ResourceRecord["format"]> = {
    Guide: "guide",
    Prayer: "prayer",
    Reflection: "reflection",
    Devotion: "devotion",
    "Reading Plan": "guide",
    Checklist: "checklist",
    Event: "event",
    Reference: "reference",
  };

  return formatMap[format];
}

function serializeCell(value: unknown): string | number | boolean | null {
  if (value === undefined || value === null) return null;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return value;
  return JSON.stringify(value);
}
