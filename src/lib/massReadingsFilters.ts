import type {
  CycleYear,
  MassReadingsFacetOptions,
  MassReadingsReflection,
  MassReadingsReflectionFilters,
  MassReadingsReflectionSearchState,
  ReflectionType,
  WeekdayCycle,
} from "@/types/massReadingsReflections";

export function filterMassReadingsReflections(
  filters: MassReadingsReflectionFilters,
  options: { includeScheduled?: boolean } | undefined,
  reflections: MassReadingsReflection[],
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

export function parseMassReadingsSearchParams(params: {
  q?: string | string[] | null;
  type?: string | string[] | null;
  season?: string | string[] | null;
  cycleYear?: string | string[] | null;
  weekdayCycle?: string | string[] | null;
  lectionaryNumber?: string | string[] | null;
  scriptureReference?: string | string[] | null;
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

export function getEmptyMassReadingsSearchState(): MassReadingsReflectionSearchState {
  return {
    q: "",
    type: "",
    season: "",
    cycleYear: "",
    weekdayCycle: "",
    lectionaryNumber: "",
    scriptureReference: "",
  };
}

export function hasMassReadingsFilters(state: MassReadingsReflectionSearchState) {
  return Boolean(
    state.q ||
      state.type ||
      state.season ||
      state.cycleYear ||
      state.weekdayCycle ||
      state.lectionaryNumber ||
      state.scriptureReference,
  );
}

export function getMassReadingsFacetOptions(
  reflections: MassReadingsReflection[],
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

function normalize(value?: string) {
  return (value ?? "").trim().toLowerCase();
}

function readOne(value: string | string[] | null | undefined) {
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
