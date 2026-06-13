import type { BaseContentRecord, ISODateString } from "./content";

export type AdorationStreamStatus = "live-now" | "scheduled" | "available-24-7" | "offline" | "needs-review";

export type AdorationStreamProvider = "youtube" | "vimeo";

export type AdorationStreamLanguage = "English" | "Spanish" | "Latin" | "French" | "Polish" | "Multilingual";

export type AdorationStreamAccess = "public" | "parish-managed" | "registration-required";

export type AdorationVerificationStatus = "verified" | "pending-review" | "unverified";

export type AdorationSchedule = {
  label: string;
  days: string[];
  startTime: string;
  endTime?: string;
  timezone: string;
  isPerpetual?: boolean;
};

export type AdorationLocation = {
  city: string;
  region?: string;
  country: string;
  timezone: string;
};

export type AdorationResourceSourceType =
  | "vatican"
  | "usccb"
  | "daily-oratory"
  | "parish"
  | "diocese"
  | "trusted-catholic-source";

export type PrayerPathNeed =
  | "peace"
  | "healing"
  | "forgiveness"
  | "trust"
  | "grief"
  | "anxiety"
  | "intercession"
  | "listening"
  | "eucharistic-love"
  | "exploring";

export type AdorationLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type LiveAdorationStreamRecord = BaseContentRecord & {
  contentType: "live-adoration-stream";
  chapelName: string;
  parishOrCommunityName: string;
  location: AdorationLocation;
  language: AdorationStreamLanguage;
  streamStatus: AdorationStreamStatus;
  provider: AdorationStreamProvider;
  streamUrl: string;
  embedUrl: string;
  isTwentyFourSeven: boolean;
  verificationStatus: AdorationVerificationStatus;
  access: AdorationStreamAccess;
  lastCheckedAt: ISODateString;
  lastVerifiedAt?: ISODateString;
  schedule: AdorationSchedule[];
  featured?: boolean;
  prayerFocus: string;
  reverenceGuidelines: string[];
  reportNotes: string[];
};

export type AdorationPrayer = {
  id: string;
  title: string;
  slug: string;
  body: string;
  category: string;
  whenToPray: string;
  sourceType: AdorationResourceSourceType;
  copyrightStatus: "original" | "public-domain" | "quoted-short";
  sortOrder: number;
  response?: string;
  sourceNote?: "Original Daily Oratory text" | "Public domain" | "Requires editorial review";
};

export type AdorationScripture = {
  id: string;
  title: string;
  reference: string;
  description: string;
  prayerPrompt: string;
  usccbUrl: string;
  category: string;
  sortOrder: number;
};

export type AdorationResource = {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  sourceType: AdorationResourceSourceType;
  badge: string;
  description: string;
  official: boolean;
  sortOrder: number;
};

export type AdorationFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type AdorationPrayerPath = {
  id: string;
  need: string;
  slug: PrayerPathNeed;
  description: string;
  scriptureReference: string;
  shortPrayer: string;
  relatedLinks: AdorationLink[];
  sortOrder: number;
};

export type HolyHourGuideBlock =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "breath"; inhale: string; exhale: string; repeat?: string }
  | { kind: "prayer"; title?: string; text: string }
  | { kind: "scripture"; reference: string; text: string }
  | { kind: "reflect"; title?: string; prompts: string[] }
  | { kind: "list"; title?: string; items: string[] }
  | { kind: "invocation"; title?: string; lines: string[] }
  | { kind: "pause"; text?: string };

export type HolyHourSegment = {
  id: string;
  startMinute: number;
  endMinute: number;
  title: string;
  description: string;
  prayerPrompt: string;
  sourceNote?: string;
  scripture?: {
    reference: string;
    text: string;
  };
  guide?: HolyHourGuideBlock[];
  sortOrder: number;
};

export type AdorationReportReason = "broken-stream" | "wrong-location" | "irreverent-content" | "privacy" | "other";

export type AdorationStreamReport = {
  id: string;
  streamId: string;
  reason: AdorationReportReason;
  note: string;
  createdAt: ISODateString;
};

export type AdorationStreamSubmission = {
  id: string;
  chapelName: string;
  parishOrCommunityName: string;
  location: string;
  country: string;
  language: AdorationStreamLanguage;
  streamUrl: string;
  submitterNote: string;
  createdAt: ISODateString;
};

export type AdorationLocalStore = {
  reports: AdorationStreamReport[];
  submissions: AdorationStreamSubmission[];
};
