export type MediaType =
  | "youtube-video"
  | "youtube-playlist"
  | "audio"
  | "podcast"
  | "google-slides"
  | "google-drive-image"
  | "google-drive-file"
  | "external-link"
  | "external-image"
  | "pdf"
  | "collection";

export type MediaStatus =
  | "draft"
  | "review"
  | "approved"
  | "hidden"
  | "do-not-publish";

export type CopyrightStatus =
  | "original"
  | "owned-by-daily-oratory"
  | "permission-granted"
  | "public-domain"
  | "creative-commons"
  | "external-embed"
  | "needs-review"
  | "do-not-publish";

export type MediaLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type MediaItem = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  mediaType: MediaType;
  mediaSubtype?: string;
  category: string;
  tags: string[];
  topic: string;
  audience: string[];
  homilyTopic?: string;
  liturgicalSeason?: string;
  liturgicalDay?: string;
  scriptureReferences?: string[];
  youtubeUrl?: string;
  youtubeVideoId?: string;
  youtubePlaylistId?: string;
  audioUrl?: string;
  podcastUrl?: string;
  googleSlidesUrl?: string;
  googleSlidesEmbedUrl?: string;
  googleDriveFileUrl?: string;
  googleDriveFileId?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  altText: string;
  creator: string;
  duration?: string;
  sourceName: string;
  sourceUrl?: string;
  copyrightStatus: CopyrightStatus;
  licenseNotes?: string;
  featured: boolean;
  collectionIds: string[];
  relatedDailyOratoryLinks: MediaLink[];
  relatedScriptureReferences: string[];
  relatedCatechismReferences: string[];
  status: MediaStatus;
  sortOrder: number;
  publishedDate: string;
  updatedDate: string;
  notes?: string;
  directExternalOnly?: boolean;
};

export type MediaCategory = {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  sortOrder: number;
  status: MediaStatus;
};

export type MediaCollection = {
  id: string;
  title: string;
  slug: string;
  description: string;
  mediaItemIds: string[];
  featured: boolean;
  sortOrder: number;
  status: MediaStatus;
};
