import { massReadingsReflections, massReadingsReflectionMedia, massReadingsReflectionsCollection } from "@/data/massReadingsReflections";
import { getMassReadingsReflectionsSource } from "@/lib/massReadingsGoogleSheets";
import type {
  CycleYear,
  GroupedMassReadingsReflections,
  MassReadingsFacetOptions,
  MassReadingsReflection,
  MassReadingsReflectionFilters,
  MassReadingsReflectionSearchState,
  ReflectionType,
  WeekdayCycle,
} from "@/types/massReadingsReflections";

export function getMassReadingsReflections() {
  return sortReflections(massReadingsReflections);
}

export async function getMassReadingsReflectionsData() {
  return sortReflections((await getMassReadingsReflectionsSource()).reflections);
}

export function getPublishedMassReadingsReflections(referenceDate = getCurrentChicagoIsoDate()) {
  return sortReflections(
    massReadingsReflections.filter(
      (reflection) => isReflectionLive(reflection, referenceDate),
    ),
  );
}

export async function getPublishedMassReadingsReflectionsData(referenceDate = getCurrentChicagoIsoDate()) {
  return sortReflections(
    (await getMassReadingsReflectionsSource()).reflections.filter(
      (reflection) => isReflectionLive(reflection, referenceDate),
    ),
  );
}

export function getScheduledMassReadingsReflections(referenceDate = getCurrentChicagoIsoDate()) {
  return sortReflectionsAscending(
    massReadingsReflections.filter(
      (reflection) => reflection.status === "scheduled" && reflection.reflectionDate > referenceDate,
    ),
  );
}

export async function getScheduledMassReadingsReflectionsData(referenceDate = getCurrentChicagoIsoDate()) {
  return sortReflectionsAscending(
    (await getMassReadingsReflectionsSource()).reflections.filter(
      (reflection) => reflection.status === "scheduled" && reflection.reflectionDate > referenceDate,
    ),
  );
}

export function getTodayMassReadingsReflection(referenceDate = getCurrentChicagoIsoDate()) {
  const today = massReadingsReflections
    .filter((reflection) => isReflectionLive(reflection, referenceDate) && reflection.reflectionDate === referenceDate)
    .sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));

  return today[0];
}

export async function getTodayMassReadingsReflectionData(referenceDate = getCurrentChicagoIsoDate()) {
  const today = (await getMassReadingsReflectionsSource()).reflections
    .filter((reflection) => isReflectionLive(reflection, referenceDate) && reflection.reflectionDate === referenceDate)
    .sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));

  return today[0];
}

export function getMostRecentMassReadingsReflection(referenceDate = getCurrentChicagoIsoDate()) {
  return getPublishedMassReadingsReflections(referenceDate)[0];
}

export async function getMostRecentMassReadingsReflectionData(referenceDate = getCurrentChicagoIsoDate()) {
  return (await getPublishedMassReadingsReflectionsData(referenceDate))[0];
}

export function getUpcomingMassReadingsReflections(referenceDate = getCurrentChicagoIsoDate()) {
  return getScheduledMassReadingsReflections(referenceDate);
}

export async function getUpcomingMassReadingsReflectionsData(referenceDate = getCurrentChicagoIsoDate()) {
  return getScheduledMassReadingsReflectionsData(referenceDate);
}

export function getPastMassReadingsReflections(referenceDate = getCurrentChicagoIsoDate()) {
  return sortReflections(
    massReadingsReflections.filter(
      (reflection) => isReflectionLive(reflection, referenceDate) && reflection.reflectionDate < referenceDate,
    ),
  );
}

export async function getPastMassReadingsReflectionsData(referenceDate = getCurrentChicagoIsoDate()) {
  return sortReflections(
    (await getMassReadingsReflectionsSource()).reflections.filter(
      (reflection) => isReflectionLive(reflection, referenceDate) && reflection.reflectionDate < referenceDate,
    ),
  );
}

export function getSundayMassReflections(referenceDate = getCurrentChicagoIsoDate()) {
  return sortReflections(
    massReadingsReflections.filter(
      (reflection) =>
        reflection.reflectionType === "sunday-mass" &&
        (isReflectionLive(reflection, referenceDate) ||
          (reflection.status === "scheduled" && reflection.reflectionDate > referenceDate)),
    ),
  );
}

export async function getSundayMassReflectionsData(referenceDate = getCurrentChicagoIsoDate()) {
  return sortReflections(
    (await getMassReadingsReflectionsSource()).reflections.filter(
      (reflection) =>
        reflection.reflectionType === "sunday-mass" &&
        (isReflectionLive(reflection, referenceDate) ||
          (reflection.status === "scheduled" && reflection.reflectionDate > referenceDate)),
    ),
  );
}

export function getDailyMassReflections(referenceDate = getCurrentChicagoIsoDate()) {
  return sortReflections(
    massReadingsReflections.filter(
      (reflection) =>
        reflection.reflectionType === "daily-mass" &&
        (isReflectionLive(reflection, referenceDate) ||
          (reflection.status === "scheduled" && reflection.reflectionDate > referenceDate)),
    ),
  );
}

export async function getDailyMassReflectionsData(referenceDate = getCurrentChicagoIsoDate()) {
  return sortReflections(
    (await getMassReadingsReflectionsSource()).reflections.filter(
      (reflection) =>
        reflection.reflectionType === "daily-mass" &&
        (isReflectionLive(reflection, referenceDate) ||
          (reflection.status === "scheduled" && reflection.reflectionDate > referenceDate)),
    ),
  );
}

export function getReflectionBySlug(slug: string) {
  return massReadingsReflections.find((reflection) => reflection.slug === slug);
}

export async function getReflectionBySlugData(slug: string) {
  return (await getMassReadingsReflectionsSource()).reflections.find((reflection) => reflection.slug === slug);
}

export function getReflectionByDate(date: string) {
  const matches = massReadingsReflections
    .filter((reflection) => reflection.reflectionDate === date)
    .sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));

  return matches[0];
}

export async function getReflectionByDateData(date: string) {
  const matches = (await getMassReadingsReflectionsSource()).reflections
    .filter((reflection) => reflection.reflectionDate === date)
    .sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));

  return matches[0];
}

export function getNextReflection(currentDate: string) {
  return sortReflectionsAscending(
    massReadingsReflections.filter(
      (reflection) =>
        (reflection.status === "published" || reflection.status === "scheduled") &&
        reflection.reflectionDate > currentDate,
    ),
  )[0];
}

export async function getNextReflectionData(currentDate: string) {
  return sortReflectionsAscending(
    (await getMassReadingsReflectionsSource()).reflections.filter(
      (reflection) =>
        (reflection.status === "published" || reflection.status === "scheduled") &&
        reflection.reflectionDate > currentDate,
    ),
  )[0];
}

export function getPreviousReflection(currentDate: string) {
  return sortReflections(
    massReadingsReflections.filter(
      (reflection) => isReflectionLive(reflection, currentDate) && reflection.reflectionDate < currentDate,
    ),
  )[0];
}

export async function getPreviousReflectionData(currentDate: string) {
  return sortReflections(
    (await getMassReadingsReflectionsSource()).reflections.filter(
      (reflection) => isReflectionLive(reflection, currentDate) && reflection.reflectionDate < currentDate,
    ),
  )[0];
}

export function filterMassReadingsReflections(
  filters: MassReadingsReflectionFilters,
  options?: { includeScheduled?: boolean },
  reflections: MassReadingsReflection[] = getMassReadingsReflections(),
) {
  const query = normalize(filters.q);
  const scriptureQuery = normalize(filters.scriptureReference);

  return reflections.filter((reflection) => {
    const isVisible =
      reflection.status === "published" ||
      (options?.includeScheduled && reflection.status === "scheduled");

    if (!isVisible) return false;

    const matchesType = !filters.type || reflection.reflectionType === filters.type;
    const matchesSeason = !filters.season || reflection.liturgicalSeason === filters.season;
    const matchesCycle = !filters.cycleYear || reflection.cycleYear === filters.cycleYear;
    const matchesWeekday = !filters.weekdayCycle || reflection.weekdayCycle === filters.weekdayCycle;
    const matchesLectionary =
      !filters.lectionaryNumber || reflection.lectionaryNumber === filters.lectionaryNumber;
    const matchesScripture =
      !scriptureQuery ||
      reflection.readings.some((reading) =>
        `${reading.label} ${reading.reference}`.toLowerCase().includes(scriptureQuery),
      );

    const searchable = [
      reflection.title,
      reflection.liturgicalDay,
      reflection.theme,
      reflection.shortDescription,
      reflection.body.join(" "),
      reflection.theologicalInsights.join(" "),
      reflection.connectionBetweenReadings,
      reflection.spiritualInvitation,
      reflection.practicalApplication.join(" "),
      reflection.saintOfDay ?? "",
      reflection.saintWitness ?? "",
      ...reflection.tags,
      ...reflection.readings.map((reading) => `${reading.label} ${reading.reference}`),
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = !query || searchable.includes(query);

    return (
      matchesQuery &&
      matchesType &&
      matchesSeason &&
      matchesCycle &&
      matchesWeekday &&
      matchesLectionary &&
      matchesScripture
    );
  });
}

export async function filterMassReadingsReflectionsData(
  filters: MassReadingsReflectionFilters,
  options?: { includeScheduled?: boolean },
) {
  const reflections = await getMassReadingsReflectionsData();
  return filterMassReadingsReflections(filters, options, reflections);
}

export function groupReflectionsByMonth(
  reflections: MassReadingsReflection[] = getPublishedMassReadingsReflections(),
): GroupedMassReadingsReflections[] {
  const groups = new Map<string, MassReadingsReflection[]>();

  for (const reflection of reflections) {
    const key = formatMonth(reflection.reflectionDate);
    const current = groups.get(key) ?? [];
    current.push(reflection);
    groups.set(key, current);
  }

  return Array.from(groups.entries()).map(([month, items]) => ({
    month,
    reflections: sortReflections(items),
  }));
}

export function getReflectionTypeLabel(type: ReflectionType) {
  switch (type) {
    case "daily-mass":
      return "Daily Mass Reflection";
    case "sunday-mass":
      return "Sunday Mass Reflection";
    case "solemnity":
      return "Solemnity Reflection";
    case "feast-day":
      return "Feast Day Reflection";
    case "memorial":
      return "Memorial Reflection";
    case "optional-memorial":
      return "Optional Memorial Reflection";
    case "seasonal":
      return "Seasonal Reflection";
    default:
      return "Mass Reading Reflection";
  }
}

export function parseMassReadingsSearchParams(params: {
  q?: string | string[];
  type?: string | string[];
  season?: string | string[];
  cycleYear?: string | string[];
  weekdayCycle?: string | string[];
  lectionaryNumber?: string | string[];
  scriptureReference?: string | string[];
}): MassReadingsReflectionSearchState {
  const type = readOne(params.type);
  const cycleYear = readOne(params.cycleYear);
  const weekdayCycle = readOne(params.weekdayCycle);

  return {
    q: readOne(params.q),
    type: isReflectionType(type) ? type : "",
    season: readOne(params.season),
    cycleYear: isCycleYear(cycleYear) ? cycleYear : "",
    weekdayCycle: isWeekdayCycle(weekdayCycle) ? weekdayCycle : "",
    lectionaryNumber: readOne(params.lectionaryNumber),
    scriptureReference: readOne(params.scriptureReference),
  };
}

export function buildMassReadingsHref(
  path: string,
  state: MassReadingsReflectionSearchState,
  patch: Partial<MassReadingsReflectionSearchState>,
) {
  const next = { ...state, ...patch };
  const params = new URLSearchParams();

  if (next.q) params.set("q", next.q);
  if (next.type) params.set("type", next.type);
  if (next.season) params.set("season", next.season);
  if (next.cycleYear) params.set("cycleYear", next.cycleYear);
  if (next.weekdayCycle) params.set("weekdayCycle", next.weekdayCycle);
  if (next.lectionaryNumber) params.set("lectionaryNumber", next.lectionaryNumber);
  if (next.scriptureReference) params.set("scriptureReference", next.scriptureReference);

  const query = params.toString();
  return query ? `${path}?${query}` : path;
}

export function getMassReadingsFacetOptions(
  reflections: MassReadingsReflection[] = getMassReadingsReflections(),
): MassReadingsFacetOptions {
  return {
    seasons: Array.from(new Set(reflections.map((reflection) => reflection.liturgicalSeason))).sort(),
    cycleYears: ["A", "B", "C", "none"].filter((year) =>
      reflections.some((reflection) => reflection.cycleYear === year),
    ) as CycleYear[],
    weekdayCycles: ["I", "II", "none"].filter((cycle) =>
      reflections.some((reflection) => reflection.weekdayCycle === cycle),
    ) as WeekdayCycle[],
    lectionaryNumbers: Array.from(
      new Set(reflections.map((reflection) => reflection.lectionaryNumber).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })),
    scriptureReferences: Array.from(
      new Set(reflections.flatMap((reflection) => reflection.readings.map((reading) => reading.reference))),
    ).sort(),
    reflectionTypes: [
      "daily-mass",
      "sunday-mass",
      "solemnity",
      "feast-day",
      "memorial",
      "optional-memorial",
      "seasonal",
    ].filter((type) => reflections.some((reflection) => reflection.reflectionType === type)) as ReflectionType[],
  };
}

export async function getMassReadingsFacetOptionsData() {
  return getMassReadingsFacetOptions(await getMassReadingsReflectionsData());
}

export function getReflectionMedia(reflection: MassReadingsReflection) {
  return massReadingsReflectionMedia
    .filter((item) => item.reflectionId === reflection.id && item.status === "published")
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getReflectionMediaData(reflection: MassReadingsReflection) {
  return (await getMassReadingsReflectionsSource()).media
    .filter((item) => item.reflectionId === reflection.id && item.status === "published")
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getMassReadingsAdminSchema() {
  return massReadingsReflectionsCollection.backend;
}

function sortReflections(reflections: MassReadingsReflection[]) {
  return [...reflections].sort(
    (a, b) =>
      dateValue(b.reflectionDate) - dateValue(a.reflectionDate) ||
      Number(b.featured) - Number(a.featured) ||
      a.title.localeCompare(b.title),
  );
}

function sortReflectionsAscending(reflections: MassReadingsReflection[]) {
  return [...reflections].sort(
    (a, b) =>
      dateValue(a.reflectionDate) - dateValue(b.reflectionDate) ||
      Number(b.featured) - Number(a.featured) ||
      a.title.localeCompare(b.title),
  );
}

function isReflectionLive(reflection: MassReadingsReflection, referenceDate: string) {
  return (
    reflection.reflectionDate <= referenceDate &&
    (reflection.status === "published" || reflection.status === "scheduled")
  );
}

function formatMonth(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "America/Chicago",
  }).format(new Date(`${date}T12:00:00-05:00`));
}

function getCurrentChicagoIsoDate() {
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

function dateValue(value: string) {
  return new Date(`${value}T12:00:00Z`).getTime();
}

function normalize(value?: string) {
  return (value ?? "").trim().toLowerCase();
}

function readOne(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function isReflectionType(value: string): value is ReflectionType {
  return [
    "daily-mass",
    "sunday-mass",
    "solemnity",
    "feast-day",
    "memorial",
    "optional-memorial",
    "seasonal",
  ].includes(value);
}

function isCycleYear(value: string): value is CycleYear {
  return ["A", "B", "C", "none"].includes(value);
}

function isWeekdayCycle(value: string): value is WeekdayCycle {
  return ["I", "II", "none"].includes(value);
}
