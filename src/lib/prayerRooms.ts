import {
  livePrayerRooms,
  prayerRoomDevotionOptions,
  prayerRoomGuides,
  prayerRoomRlsPolicies,
  prayerRoomSafetyChecklist,
  prayerRoomSupabaseSchema,
} from "@/data/prayerRooms";
import type { LivePrayerRoomRecord, PrayerRoomDevotionType, PrayerRoomGuideRecord, PrayerRoomStatus } from "@/types/prayerRooms";

export const prayerRoomsLinks = [
  { label: "Rooms", href: "/community/prayer-rooms" },
  { label: "Start a room", href: "/community/prayer-rooms/start" },
  { label: "Schedule", href: "/community/prayer-rooms/schedule" },
  { label: "Rosary", href: "/rosary" },
  { label: "Divine Mercy", href: "/community/prayer-rooms/divine-mercy" },
] as const;

export function getPublishedPrayerRooms() {
  return livePrayerRooms.filter((room) => room.status === "published" && room.visibility !== "private");
}

export function getPrayerRoomById(roomId: string) {
  return getPublishedPrayerRooms().find((room) => room.roomId === roomId || room.slug === roomId || room.id === roomId);
}

export function getPrayerRoomsByDevotion(devotionType: PrayerRoomDevotionType) {
  return getPublishedPrayerRooms().filter((room) => room.devotionType === devotionType);
}

export function getLivePrayerRooms() {
  return getPublishedPrayerRooms().filter((room) => ["live", "starting-soon"].includes(room.roomStatus));
}

export function getPrayerRoomGuides() {
  return prayerRoomGuides.filter((guide) => guide.status === "published");
}

export function getPrayerRoomGuideById(guideId: string) {
  return getPrayerRoomGuides().find((guide) => guide.id === guideId || guide.slug === guideId);
}

export function getPrayerRoomGuideForDevotion(devotionType: PrayerRoomDevotionType) {
  return getPrayerRoomGuides().find((guide) => guide.devotionType === devotionType);
}

export function getPrayerRoomGuideForRoom(room: LivePrayerRoomRecord) {
  return getPrayerRoomGuideById(room.guideId) ?? getPrayerRoomGuideForDevotion(room.devotionType);
}

export function getPrayerRoomCurrentStep(room: LivePrayerRoomRecord, guide?: PrayerRoomGuideRecord) {
  const roomGuide = guide ?? getPrayerRoomGuideForRoom(room);
  if (!roomGuide) return undefined;
  return roomGuide.steps.find((step) => step.id === room.currentStepId) ?? roomGuide.steps[0];
}

export function getPrayerRoomNextStep(room: LivePrayerRoomRecord, guide?: PrayerRoomGuideRecord) {
  const roomGuide = guide ?? getPrayerRoomGuideForRoom(room);
  const current = getPrayerRoomCurrentStep(room, roomGuide);
  if (!roomGuide || !current) return undefined;
  return roomGuide.steps.find((step) => step.order === current.order + 1);
}

export function getPrayerRoomStatusMeta(status: PrayerRoomStatus) {
  const meta: Record<PrayerRoomStatus, { label: string; className: string; description: string }> = {
    live: {
      label: "Live now",
      className: "border-success text-success",
      description: "Open for prayer with simulated presence in this version.",
    },
    "starting-soon": {
      label: "Starting soon",
      className: "border-gold text-gold",
      description: "The host is preparing the room.",
    },
    scheduled: {
      label: "Scheduled",
      className: "border-navy text-navy",
      description: "This room is on the calendar.",
    },
    paused: {
      label: "Paused",
      className: "border-stone text-muted",
      description: "This room is not open right now.",
    },
    ended: {
      label: "Ended",
      className: "border-stone text-muted",
      description: "This room has ended.",
    },
  };

  return meta[status];
}

export function getPrayerRoomDevotionLabel(devotionType: PrayerRoomDevotionType) {
  return prayerRoomDevotionOptions.find((option) => option.value === devotionType)?.label ?? titleCase(devotionType);
}

export function getPrayerRoomDevotionDescription(devotionType: PrayerRoomDevotionType) {
  return prayerRoomDevotionOptions.find((option) => option.value === devotionType)?.description ?? "";
}

export function getPrayerRoomHref(room: LivePrayerRoomRecord) {
  if (room.devotionType === "rosary") return "/rosary";
  return `/community/prayer-rooms/${room.roomId}`;
}

export function formatPrayerRoomDateTime(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(value));
}

export function getPrayerRoomStats() {
  const rooms = getPublishedPrayerRooms();

  return {
    total: rooms.length,
    live: rooms.filter((room) => room.roomStatus === "live").length,
    startingSoon: rooms.filter((room) => room.roomStatus === "starting-soon").length,
    scheduled: rooms.filter((room) => room.roomStatus === "scheduled").length,
    participants: rooms.reduce((sum, room) => sum + room.participantCount, 0),
    devotionTypes: new Set(rooms.map((room) => room.devotionType)).size,
  };
}

export function getPrayerRoomScheduleGroups() {
  const rooms = getPublishedPrayerRooms().slice().sort((a, b) => {
    return new Date(a.schedule.nextOccurrence).getTime() - new Date(b.schedule.nextOccurrence).getTime();
  });

  return {
    live: rooms.filter((room) => room.roomStatus === "live"),
    upcoming: rooms.filter((room) => ["starting-soon", "scheduled"].includes(room.roomStatus)),
    paused: rooms.filter((room) => ["paused", "ended"].includes(room.roomStatus)),
  };
}

export function getPrayerRoomBackendPlan() {
  return {
    schema: prayerRoomSupabaseSchema,
    rlsPolicies: prayerRoomRlsPolicies,
    safetyChecklist: prayerRoomSafetyChecklist,
  };
}

function titleCase(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
