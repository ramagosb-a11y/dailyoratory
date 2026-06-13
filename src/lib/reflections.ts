import { dailyReflectionRecords } from "@/data/reflections";
import {
  getMassReadingsFacetOptions,
  getMostRecentMassReadingsReflection,
  getPublishedMassReadingsReflections,
  getReflectionBySlug as getMassReflectionBySlug,
  getSundayMassReflections,
  getTodayMassReadingsReflection,
  parseMassReadingsSearchParams,
} from "@/lib/massReadingsReflections";
import type { DailyReflectionKind, DailyReflectionRecord, ReflectionFacetOptions, ReflectionSearchState } from "@/types/reflections";

export function getPublishedReflections(kind?: DailyReflectionKind) {
  return sortReflections(
    dailyReflectionRecords.filter(
      (reflection) =>
        reflection.status === "published" &&
        (!kind || reflection.reflectionKind === kind),
    ),
  );
}

export function getReflectionBySlug(slug: string) {
  return getPublishedReflections().find((reflection) => reflection.slug === slug) ?? dailyReflectionRecords.find((reflection) => reflection.slug === slug);
}

export function getTodayReflection(referenceDate = getCurrentIsoDate()) {
  return (
    getPublishedReflections("daily").find((reflection) => reflection.date === referenceDate) ??
    getPublishedReflections("daily").find((reflection) => reflection.date <= referenceDate) ??
    getMostRecentMassReadingsReflection(referenceDate) ??
    getPublishedReflections()[0]
  );
}

export function getSundayReflection(referenceDate = getCurrentIsoDate()) {
  const sundays = getSundayMassReflections(referenceDate)
    .map((reflection) => getReflectionBySlug(reflection.slug))
    .filter((reflection): reflection is DailyReflectionRecord => Boolean(reflection));

  return sundays[0] ?? getPublishedReflections("sunday")[0];
}

export function getUpcomingReflection(kind?: DailyReflectionKind, referenceDate = getCurrentIsoDate()) {
  const reflections = getPublishedReflections(kind).sort((a, b) => dateValue(a.date) - dateValue(b.date));
  const upcoming = reflections.find((reflection) => reflection.date >= referenceDate);

  return upcoming ?? reflections[reflections.length - 1];
}

export function getRecentReflections(limit = 6, kind?: DailyReflectionKind) {
  return getPublishedReflections(kind).slice(0, limit);
}

export function parseReflectionSearchParams(params: {
  q?: string | string[];
  date?: string | string[];
  season?: string | string[];
  topic?: string | string[];
  kind?: string | string[];
}): ReflectionSearchState {
  const parsed = parseMassReadingsSearchParams({
    q: params.q,
    type: params.kind,
    season: params.season,
  });

  return {
    q: parsed.q,
    date: readOne(params.date),
    season: parsed.season,
    topic: readOne(params.topic),
    kind:
      parsed.type === "daily-mass"
        ? "daily"
        : parsed.type === "sunday-mass"
          ? "sunday"
          : "",
  };
}

export function searchReflections(state: ReflectionSearchState, forcedKind?: DailyReflectionKind) {
  const query = normalize(state.q);
  const topic = normalize(state.topic);
  const kind = forcedKind ?? state.kind;

  return getPublishedReflections(kind || undefined).filter((reflection) => {
    const searchable = [
      reflection.title,
      reflection.description,
      reflection.liturgicalDay,
      reflection.season,
      reflection.excerpt,
      reflection.body.join(" "),
      reflection.prayer,
      reflection.scriptureReferences.map((reference) => `${reference.label} ${reference.citation}`).join(" "),
      reflection.reflectionQuestions.join(" "),
      ...reflection.tags,
      ...reflection.topics,
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = !query || searchable.includes(query);
    const matchesDate = !state.date || reflection.date === state.date;
    const matchesSeason = !state.season || reflection.season === state.season;
    const matchesTopic =
      !topic ||
      reflection.topics.map(normalize).includes(topic) ||
      reflection.tags.map(normalize).includes(topic);

    return matchesQuery && matchesDate && matchesSeason && matchesTopic;
  });
}

export function getReflectionFacetOptions(reflections: DailyReflectionRecord[] = getPublishedReflections()): ReflectionFacetOptions {
  const facets = getMassReadingsFacetOptions(
    reflections
      .map((reflection) => getMassReflectionBySlug(reflection.slug))
      .filter((item): item is NonNullable<typeof item> => Boolean(item)),
  );

  return {
    seasons: facets.seasons,
    topics: Array.from(new Set(reflections.flatMap((reflection) => reflection.topics))).sort(),
  };
}

export function buildReflectionHref(
  path: string,
  state: ReflectionSearchState,
  patch: Partial<ReflectionSearchState>,
) {
  const next = { ...state, ...patch };
  const params = new URLSearchParams();

  if (next.q) params.set("q", next.q);
  if (next.date) params.set("date", next.date);
  if (next.season) params.set("season", next.season);
  if (next.topic) params.set("topic", next.topic);
  if (next.kind) params.set("kind", next.kind);

  const query = params.toString();
  return query ? `${path}?${query}` : path;
}

export function getReflectionKindLabel(kind: DailyReflectionKind) {
  return kind === "sunday" ? "Sunday Mass Reflection" : "Daily Mass Reflection";
}

export function getReflectionPrimaryScripture(reflection: DailyReflectionRecord) {
  return reflection.scriptureReferences.at(-1)?.citation ?? reflection.scriptureReferences[0]?.citation ?? "Scripture";
}

function sortReflections(reflections: DailyReflectionRecord[]) {
  return [...reflections].sort((a, b) => dateValue(b.date) - dateValue(a.date) || a.title.localeCompare(b.title));
}

function getCurrentIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function dateValue(value: string) {
  return new Date(`${value}T00:00:00Z`).getTime();
}

function readOne(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}
