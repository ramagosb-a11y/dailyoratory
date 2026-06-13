import type {
  BaseContentRecord,
  ContentStatus,
  CopyrightStatus,
  LiturgicalSeasonName,
} from "@/types/content";

export type ReflectionType =
  | "daily-mass"
  | "sunday-mass"
  | "solemnity"
  | "feast-day"
  | "memorial"
  | "optional-memorial"
  | "seasonal";

export type ReflectionStatus = "draft" | "scheduled" | "published" | "archived";
export type CycleYear = "A" | "B" | "C" | "none";
export type WeekdayCycle = "I" | "II" | "none";

export type MassReadingReference = {
  label: string;
  reference: string;
};

export type ReflectionPrayer = {
  title: string;
  body: string;
};

export type ReflectionMediaType = "image" | "gallery" | "pdf" | "powerpoint" | "download";

export type ReflectionMediaRecord = {
  id: string;
  reflectionId: string;
  mediaType: ReflectionMediaType;
  title: string;
  description: string;
  fileUrl?: string;
  embedUrl?: string;
  thumbnailUrl?: string;
  altText?: string;
  creator?: string;
  sourceUrl?: string;
  license?: string;
  copyrightStatus?: CopyrightStatus;
  sortOrder: number;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
  notes?: string;
};

export type MassReadingsReflection = BaseContentRecord & {
  contentType: "mass-readings-reflection";
  reflectionDate: string;
  reflectionType: ReflectionType;
  liturgicalDay: string;
  liturgicalSeason: LiturgicalSeasonName;
  lectionaryNumber: string;
  cycleYear: CycleYear;
  weekdayCycle: WeekdayCycle;
  readings: MassReadingReference[];
  firstReadingReference?: string;
  psalmReference?: string;
  secondReadingReference?: string;
  gospelReference?: string;
  theme: string;
  shortDescription: string;
  featuredImageUrl?: string;
  featuredImageAlt?: string;
  body: string[];
  theologicalInsights: string[];
  connectionBetweenReadings: string;
  spiritualInvitation: string;
  prayers: ReflectionPrayer[];
  liturgyPoints: string[];
  practicalApplication: string[];
  liturgicalInsight: string;
  saintOfDay?: string;
  saintWitness?: string;
  mediaIds: string[];
  featured: boolean;
  externalReadingsUrl: string;
  canonicalPath: string;
  status: ReflectionStatus;
};

export type MassReadingsReflectionFilters = {
  q?: string;
  type?: ReflectionType | "";
  season?: string;
  cycleYear?: CycleYear | "";
  weekdayCycle?: WeekdayCycle | "";
  lectionaryNumber?: string;
  scriptureReference?: string;
};

export type MassReadingsReflectionSearchState = {
  q: string;
  type: "" | ReflectionType;
  season: string;
  cycleYear: "" | CycleYear;
  weekdayCycle: "" | WeekdayCycle;
  lectionaryNumber: string;
  scriptureReference: string;
};

export type MassReadingsFacetOptions = {
  seasons: string[];
  cycleYears: CycleYear[];
  weekdayCycles: WeekdayCycle[];
  lectionaryNumbers: string[];
  scriptureReferences: string[];
  reflectionTypes: ReflectionType[];
};

export type GroupedMassReadingsReflections = {
  month: string;
  reflections: MassReadingsReflection[];
};

export type MassReadingsAdminTab = {
  name: string;
  headers: string[];
};

export type MassReadingsReflectionCollection = {
  reflections: MassReadingsReflection[];
  media: ReflectionMediaRecord[];
  backend: {
    sheetName: string;
    tabs: MassReadingsAdminTab[];
  };
};
