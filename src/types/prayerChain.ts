import type { BaseContentRecord, ISODateString } from "./content";

export type PrayerChainUrgency = "ordinary" | "time-sensitive" | "urgent";

export type PrayerChainCategory =
  | "healing"
  | "grief"
  | "family"
  | "discernment"
  | "conversion"
  | "thanksgiving"
  | "parish"
  | "youth"
  | "sacramental"
  | "urgent"
  | "other";

export type PrayerChainPrivacy =
  | "share-with-team"
  | "anonymous-to-team"
  | "coordinator-only"
  | "pastoral-referral-only";

export type PrayerChainContactPreference = "none" | "email" | "phone" | "group-leader";

export type PrayerChainTeamId =
  | "general"
  | "urgent"
  | "rosary"
  | "divine-mercy"
  | "adoration"
  | "parish"
  | "family"
  | "youth-safe"
  | "pastoral-referral";

export type PrayerChainModerationStatus =
  | "new"
  | "pending-review"
  | "approved"
  | "routed"
  | "needs-attention"
  | "hidden"
  | "closed"
  | "archived";

export type PrayerChainAlertCadence = "immediate" | "same-day-digest" | "daily-digest" | "no-alert";

export type PrayerChainAlertType = "urgent-alert" | "team-alert" | "daily-digest" | "thanksgiving-update";

export type PrayerChainThanksgivingUpdate = {
  id: string;
  requestId: string;
  note: string;
  submittedAt: ISODateString;
  moderationStatus: PrayerChainModerationStatus;
};

export type PrayerChainTeamRecord = {
  id: PrayerChainTeamId;
  name: string;
  slug: string;
  description: string;
  charism: string;
  defaultAlertCadence: PrayerChainAlertCadence;
  coordinatorRole: string;
  privacyNote: string;
  tags: string[];
};

export type PrayerChainRoutingResult = {
  assignedTeamIds: PrayerChainTeamId[];
  routingReasons: string[];
  alertCadence: PrayerChainAlertCadence;
  pastoralReferralRecommended: boolean;
  youthSafe: boolean;
  moderationStatus: PrayerChainModerationStatus;
};

export type PrayerChainRequestRecord = BaseContentRecord & {
  contentType: "prayer-chain-request";
  requestId: string;
  category: "Prayer Chain";
  requestCategory: PrayerChainCategory;
  urgency: PrayerChainUrgency;
  privacy: PrayerChainPrivacy;
  requestedBy: string;
  requesterEmail?: string;
  requestSummary: string;
  privateCoordinatorNote?: string;
  consentToShare: boolean;
  consentToContact: boolean;
  contactPreference: PrayerChainContactPreference;
  assignedTeamIds: PrayerChainTeamId[];
  routingReasons: string[];
  moderationStatus: PrayerChainModerationStatus;
  alertCadence: PrayerChainAlertCadence;
  prayedCount: number;
  isThanksgiving: boolean;
  youthSafe: boolean;
  pastoralReferralRecommended: boolean;
  submittedAt: ISODateString;
  approvedAt?: ISODateString;
  routedAt?: ISODateString;
  expiresAt?: ISODateString;
  thanksgivingUpdates: PrayerChainThanksgivingUpdate[];
};

export type LocalPrayerChainSubmission = {
  id: string;
  title: string;
  requestSummary: string;
  requestCategory: PrayerChainCategory;
  urgency: PrayerChainUrgency;
  privacy: PrayerChainPrivacy;
  requestedBy: string;
  contactEmail: string;
  contactPreference: PrayerChainContactPreference;
  consentToShare: boolean;
  consentToContact: boolean;
  hasYouthInvolved: boolean;
  requestedTeamId: PrayerChainTeamId | "auto";
  assignedTeamIds: PrayerChainTeamId[];
  routingReasons: string[];
  alertCadence: PrayerChainAlertCadence;
  pastoralReferralRecommended: boolean;
  moderationStatus: PrayerChainModerationStatus;
  submittedAt: ISODateString;
  updatedAt: ISODateString;
};

export type PrayerChainPrayerCommitment = {
  requestId: string;
  teamId: PrayerChainTeamId;
  prayedAt: ISODateString;
};

export type PrayerChainCoordinatorDecision = {
  requestId: string;
  moderationStatus: PrayerChainModerationStatus;
  assignedTeamIds: PrayerChainTeamId[];
  coordinatorNote: string;
  decidedAt: ISODateString;
};

export type PrayerChainAlertDelivery = {
  id: string;
  requestId: string;
  teamId: PrayerChainTeamId;
  alertType: PrayerChainAlertType;
  sentAt: ISODateString;
};

export type PrayerChainStore = {
  version: 1;
  submissions: LocalPrayerChainSubmission[];
  prayerCommitments: PrayerChainPrayerCommitment[];
  thanksgivingUpdates: PrayerChainThanksgivingUpdate[];
  coordinatorDecisions: PrayerChainCoordinatorDecision[];
  alertDeliveries: PrayerChainAlertDelivery[];
};
