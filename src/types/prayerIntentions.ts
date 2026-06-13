import type { BaseContentRecord, ISODateString } from "./content";

export type PrayerIntentionType =
  | "healing"
  | "grief"
  | "family"
  | "discernment"
  | "conversion"
  | "thanksgiving"
  | "work"
  | "vocation"
  | "peace"
  | "souls"
  | "parish"
  | "urgent"
  | "other";

export type PrayerIntentionVisibility =
  | "public"
  | "anonymous-public"
  | "prayer-team-only"
  | "hidden-summary";

export type PrayerIntentionModerationStatus =
  | "pending-review"
  | "approved"
  | "needs-attention"
  | "hidden"
  | "archived"
  | "reported";

export type PrayerIntentionStatus = "open" | "prayed" | "answered" | "closed";

export type PrayerIntentionReportReason =
  | "personal-information"
  | "unsafe-or-emergency"
  | "uncharitable"
  | "spam"
  | "other";

export type PrayerIntentionRecord = BaseContentRecord & {
  contentType: "prayer-intention";
  intentionType: PrayerIntentionType;
  intentionVisibility: PrayerIntentionVisibility;
  requesterDisplayName: string;
  isAnonymous: boolean;
  submittedAt: ISODateString;
  approvedAt?: ISODateString;
  intentionStatus: PrayerIntentionStatus;
  moderationStatus: PrayerIntentionModerationStatus;
  prayedCount: number;
  reportCount: number;
  isUrgent: boolean;
  isThanksgiving: boolean;
  excerpt: string;
  prayerPrompt: string;
  moderationFlags: string[];
  moderationNote?: string;
  pastoralNote?: string;
};

export type LocalPrayerIntentionSubmission = {
  id: string;
  title: string;
  description: string;
  intentionType: PrayerIntentionType;
  intentionVisibility: PrayerIntentionVisibility;
  requesterDisplayName: string;
  contactEmail: string;
  consentToModeration: boolean;
  createdAt: ISODateString;
  updatedAt: ISODateString;
  moderationStatus: "pending-review";
};

export type LocalPrayerIntentionReport = {
  intentionId: string;
  reason: PrayerIntentionReportReason;
  note: string;
  reportedAt: ISODateString;
};

export type PrayerIntentionStore = {
  version: 1;
  prayedIntentionIds: string[];
  reportedIntentions: LocalPrayerIntentionReport[];
  submissions: LocalPrayerIntentionSubmission[];
};
