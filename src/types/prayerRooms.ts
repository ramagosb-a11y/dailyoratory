import type { BaseContentRecord, ISODateString } from "./content";

export type PrayerRoomDevotionType =
  | "rosary"
  | "divine-mercy"
  | "liturgy-of-the-hours"
  | "way-of-the-cross"
  | "novena"
  | "scripture-reflection"
  | "general-prayer";

export type PrayerRoomStatus = "live" | "starting-soon" | "scheduled" | "paused" | "ended";

export type PrayerRoomAccess = "public" | "registration-required" | "private-group";

export type PrayerRoomLanguage = "English" | "Spanish" | "Bilingual";

export type PrayerRoomCadence = "daily" | "weekly" | "monthly" | "seasonal" | "one-time";

export type PrayerRoomModerationStatus = "open" | "host-review" | "reported" | "hidden" | "archived";

export type PrayerRoomSchedule = {
  cadence: PrayerRoomCadence;
  dayOfWeek?: string;
  startTimeLabel: string;
  timezone: string;
  nextOccurrence: ISODateString;
  durationMinutes: number;
  recurringNote: string;
};

export type PrayerRoomHost = {
  name: string;
  role: "prayer-host" | "moderator" | "clergy" | "formation-leader";
  parishOrCommunity?: string;
  verified: boolean;
};

export type PrayerRoomStep = {
  id: string;
  order: number;
  title: string;
  instruction: string;
  leaderText?: string;
  responseText?: string;
  intentionPrompt?: string;
  estimatedMinutes: number;
};

export type PrayerRoomGuideRecord = BaseContentRecord & {
  contentType: "prayer-room-guide";
  devotionType: PrayerRoomDevotionType;
  estimatedMinutes: number;
  openingNote: string;
  steps: PrayerRoomStep[];
  closingNote: string;
  sourceNote: "Original Daily Oratory guide" | "Use public-domain or approved liturgical text only after review";
};

export type LivePrayerRoomRecord = BaseContentRecord & {
  contentType: "live-prayer-room";
  roomId: string;
  devotionType: PrayerRoomDevotionType;
  roomStatus: PrayerRoomStatus;
  schedule: PrayerRoomSchedule;
  host: PrayerRoomHost;
  language: PrayerRoomLanguage;
  participantCount: number;
  capacity: number;
  access: PrayerRoomAccess;
  guideId: string;
  currentStepId?: string;
  intentionsEnabled: boolean;
  reportEnabled: boolean;
  meetingUrl?: string;
  hostControlsPlaceholder: string[];
  reverenceGuidelines: string[];
  safetyNotes: string[];
  moderationStatus: PrayerRoomModerationStatus;
  realtimeChannel: string;
  presenceKey: string;
};

export type PrayerRoomPresenceSnapshot = {
  roomId: string;
  participantCount: number;
  joinedLocally: boolean;
  localIntentions: string[];
  lastUpdatedAt: ISODateString;
};

export type PrayerRoomLocalReport = {
  id: string;
  roomId: string;
  reason: "safety" | "privacy" | "irreverent-conduct" | "technical" | "other";
  note: string;
  createdAt: ISODateString;
};

export type PrayerRoomLocalStore = {
  joinedRoomIds: string[];
  intentionsByRoom: Record<string, string[]>;
  reports: PrayerRoomLocalReport[];
  startedRoomDrafts: PrayerRoomStartDraft[];
};

export type PrayerRoomStartDraft = {
  id: string;
  title: string;
  devotionType: PrayerRoomDevotionType;
  language: PrayerRoomLanguage;
  startTimeLabel: string;
  privacy: PrayerRoomAccess;
  hostName: string;
  notes: string;
  createdAt: ISODateString;
};
