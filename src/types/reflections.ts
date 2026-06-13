import type { BaseContentRecord, LiturgicalSeasonName } from "@/types/content";

export type DailyReflectionKind = "daily" | "sunday";

export type ScriptureReference = {
  label: string;
  citation: string;
};

export type DailyReflectionRecord = BaseContentRecord & {
  contentType: "daily-reflection";
  reflectionKind: DailyReflectionKind;
  date: string;
  liturgicalDay: string;
  season: LiturgicalSeasonName;
  scriptureReferences: ScriptureReference[];
  excerpt: string;
  body: string[];
  reflectionQuestions: string[];
  prayer: string;
  topics: string[];
  externalReadingsUrl: string;
  canonicalPath: string;
};

export type ReflectionSearchState = {
  q: string;
  date: string;
  season: string;
  topic: string;
  kind: "" | DailyReflectionKind;
};

export type ReflectionFacetOptions = {
  seasons: string[];
  topics: string[];
};

export type ReflectionExternalResourceSourceType =
  | "official-church"
  | "trusted-catholic-reflection"
  | "university"
  | "audio-video"
  | "email-devotion";

export type ReflectionExternalResource = {
  id: string;
  title: string;
  slug: string;
  url: string;
  description: string;
  badge: string;
  sourceType: ReflectionExternalResourceSourceType;
  official: boolean;
  sortOrder: number;
};
