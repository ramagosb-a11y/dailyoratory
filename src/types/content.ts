export type ISODateString = string;
export type Slug = string;

export type ContentStatus = "draft" | "needs-review" | "scheduled" | "published" | "archived";

export type ContentVisibility = "public" | "unlisted" | "private";

export type ContentCategory =
  | "Resource"
  | "Prayer"
  | "Rosary"
  | "Divine Mercy"
  | "Confession"
  | "Reflection"
  | "Liturgical Year"
  | "Sacraments"
  | "Saints"
  | "Devotions"
  | "Formation"
  | "Rule of Life"
  | "Virtue"
  | "Examination"
  | "Community"
  | "Prayer Intention"
  | "Prayer Chain"
  | "Prayer Room"
  | "Adoration"
  | "Events"
  | "Local Faith Groups"
  | "Scripture"
  | "Reference";

export type ContentAudience =
  | "individuals"
  | "families"
  | "parish-groups"
  | "prayer-communities"
  | "formation-teams"
  | "all";

export type LiturgicalSeasonName =
  | "Advent"
  | "Christmas"
  | "Lent"
  | "Easter"
  | "Pentecost"
  | "Ordinary Time"
  | "Marian"
  | "All Year";

export type ContentSourceSystem = "static" | "google-sheets" | "google-calendar" | "supabase" | "manual-import";

export type CopyrightStatus =
  | "original"
  | "public-domain-us"
  | "licensed"
  | "used-with-permission"
  | "short-quotation"
  | "needs-owner-confirmation"
  | "needs-review"
  | "replace-recommended"
  | "replace-required"
  | "do-not-publish";

export type ContentReviewStatus =
  | "reviewed"
  | "needs-review"
  | "replace-recommended"
  | "replace-required"
  | "do-not-publish";

export type ContentProvenance = {
  sourceType?: "original" | "public-domain" | "licensed" | "permission" | "short-quotation" | "legacy" | "external-link" | "embedded-media" | "unknown";
  sourceName?: string;
  sourceUrl?: string;
  author?: string;
  creator?: string;
  license?: string;
  licenseUrl?: string;
  copyrightStatus?: CopyrightStatus;
  attributionText?: string;
  attributionRequired?: boolean;
  reviewStatus?: ContentReviewStatus;
  reviewedBy?: string;
  reviewedAt?: ISODateString;
  notes?: string;
};

export type ScriptureProvenance = {
  scriptureTranslation?: string;
  scriptureSource?: string;
  scriptureCopyrightStatus?: CopyrightStatus;
  scriptureAttribution?: string;
};

export type ContentSourceReference = {
  system: ContentSourceSystem;
  externalId?: string;
  sheetName?: string;
  tableName?: string;
  lastSyncedAt?: ISODateString;
};

export type BaseContentRecord = {
  id: string;
  title: string;
  slug: Slug;
  description: string;
  category: ContentCategory;
  tags: string[];
  relatedResourceIds: string[];
  status: ContentStatus;
  createdAt: ISODateString;
  updatedAt: ISODateString;
  visibility?: ContentVisibility;
  source?: ContentSourceReference;
  provenance?: ContentProvenance;
  sourceNotes?: string;
  copyrightStatus?: CopyrightStatus;
  attributionText?: string;
  contentAuthor?: string;
  contentReviewer?: string;
  schemaVersion?: number;
};

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; cite?: string; sourceNote?: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "prayer"; text: string; response?: string };

export type ResourceFormat =
  | "guide"
  | "prayer"
  | "devotion"
  | "reflection"
  | "checklist"
  | "reference"
  | "event"
  | "pathway"
  | "tool";

export type ResourceRecord = BaseContentRecord & {
  contentType: "resource";
  format: ResourceFormat;
  season: LiturgicalSeasonName;
  audience: ContentAudience[];
  estimatedMinutes: number;
  featured?: boolean;
  canonicalPath?: string;
  body: ContentBlock[];
};

export type PrayerType =
  | "daily"
  | "adoration"
  | "rosary"
  | "mercy"
  | "confession"
  | "family"
  | "liturgical"
  | "saint"
  | "intercession";

export type PrayerRecord = BaseContentRecord & {
  contentType: "prayer";
  prayerType: PrayerType;
  season: LiturgicalSeasonName;
  audience: ContentAudience[];
  text: string;
  response?: string;
  posture?: "standing" | "kneeling" | "seated" | "any";
  timeOfDay?: "morning" | "midday" | "evening" | "night" | "any";
  sourceNote: "Original Daily Oratory text" | "Public domain" | "Excerpt requires review";
};

export type RosaryMysterySet = "Joyful" | "Luminous" | "Sorrowful" | "Glorious";

export type RosaryMystery = {
  id: string;
  set: RosaryMysterySet;
  order: number;
  title: string;
  scriptureCitation?: string;
  scriptureProvenance?: ScriptureProvenance;
  meditationPrompt: string;
  fruitOfTheMystery?: string;
};

export type RosaryGuideRecord = BaseContentRecord & {
  contentType: "rosary";
  season: LiturgicalSeasonName;
  mysteries: RosaryMystery[];
  openingSteps: string[];
  closingSteps: string[];
  estimatedMinutes: number;
  supportsLatin?: boolean;
};

export type DivineMercyGuideRecord = BaseContentRecord & {
  contentType: "divine-mercy";
  season: LiturgicalSeasonName;
  chapletSteps: string[];
  recommendedTime?: string;
  sourceNote: "Use official/public-domain text only after editorial review" | "Original Daily Oratory text";
};

export type ConfessionGuideRecord = BaseContentRecord & {
  contentType: "confession-guide";
  season: LiturgicalSeasonName;
  preparationSteps: string[];
  examinationResourceIds: string[];
  actOfContritionNote: string;
  pastoralNote: string;
};

export type ReflectionCadence = "daily-mass" | "sunday-gospel" | "seasonal" | "group";

export type ReflectionRecord = BaseContentRecord & {
  contentType: "reflection";
  cadence: ReflectionCadence;
  date: ISODateString;
  scriptureCitation: string;
  season: LiturgicalSeasonName;
  excerpt: string;
  prompts: string[];
  body: ContentBlock[];
};

export type EventType = "Live Prayer" | "Local Group" | "Formation" | "Discussion" | "Adoration";
export type EventRecurrenceFrequency = "none" | "daily" | "weekly" | "monthly" | "seasonal";

export type EventRecord = BaseContentRecord & {
  contentType: "event";
  eventType: EventType;
  startsAt: ISODateString;
  endsAt?: ISODateString;
  timezone: string;
  locationName: string;
  locationType: "online" | "parish" | "home" | "hybrid";
  registrationUrl?: string;
  hostName?: string;
  language?: string;
  venueAddress?: string;
  body?: ContentBlock[];
  preparationNotes?: string[];
  recurrence?: {
    frequency: EventRecurrenceFrequency;
    label: string;
    until?: ISODateString;
  };
  featured?: boolean;
};

export type LocalFaithGroupRecord = BaseContentRecord & {
  contentType: "local-faith-group";
  city: string;
  region: string;
  country: string;
  meetingCadence: string;
  meetingLocationType: "parish" | "home" | "online" | "hybrid";
  contactEmail?: string;
  focusAreas: string[];
  acceptingNewMembers: boolean;
};
