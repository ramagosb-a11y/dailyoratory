import type { MediaItem } from "@/types/media";

export type HomilyMediaType =
  | "youtube-video"
  | "youtube-playlist"
  | "audio"
  | "podcast"
  | "external-link";

export type HomilyStatus = "draft" | "review" | "approved" | "hidden" | "do-not-publish";

export type HomilyLiturgicalSeason =
  | "advent"
  | "christmas"
  | "lent"
  | "holy-week"
  | "easter"
  | "ordinary-time"
  | "solemnities"
  | "saints"
  | "marian";

export type HomilyItem = MediaItem & {
  mediaSubtype?: "homily" | string;
};

export type HomilyCollection = {
  id: string;
  title: string;
  slug: string;
  description: string;
  homilyIds: string[];
  playlistIds: string[];
  featured: boolean;
  sortOrder: number;
  status: HomilyStatus;
};

export type HomilyResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: "official" | "trusted-catholic-source" | "daily-oratory" | "external";
  description: string;
  official: boolean;
  sortOrder: number;
};
