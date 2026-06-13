import { communityContactOptions, events, groupDiscussionTopics, localFaithGroups } from "@/data/community";
import type { EventRecord, LocalFaithGroupRecord } from "@/types/content";

export function getPublishedEvents() {
  return events.filter((event) => event.status === "published");
}

export function getUpcomingEvents(referenceDate = new Date()) {
  return getPublishedEvents()
    .filter((event) => new Date(event.startsAt).getTime() >= referenceDate.getTime())
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
}

export function getFeaturedEvents(limit = 3) {
  return getUpcomingEvents()
    .filter((event) => event.featured)
    .slice(0, limit);
}

export function getLivePrayerEvents() {
  return getUpcomingEvents().filter((event) => event.eventType === "Live Prayer" || event.eventType === "Adoration");
}

export function getEventBySlug(slug: string) {
  return getPublishedEvents().find((event) => event.slug === slug);
}

export function getPublishedLocalFaithGroups() {
  return localFaithGroups.filter((group) => group.status === "published");
}

export function getPublishedDiscussionTopics() {
  return groupDiscussionTopics.filter((topic) => topic.status === "published");
}

export function getCommunityContactOptions() {
  return communityContactOptions;
}

export function getEventHref(event: EventRecord) {
  return `/community/events/${event.slug}`;
}

export function getEventLocationLabel(event: EventRecord) {
  if (event.locationType === "online") return "Online";
  if (event.locationType === "hybrid") return "Hybrid";
  return "In person";
}

export function getGroupLocationLabel(group: LocalFaithGroupRecord) {
  if (group.meetingLocationType === "online") return "Online";
  if (group.meetingLocationType === "hybrid") return "Hybrid";
  return "In person";
}

export function formatEventDate(event: EventRecord) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: event.timezone,
  }).format(new Date(event.startsAt));
}

export function formatEventTimeRange(event: EventRecord) {
  const start = new Date(event.startsAt);
  const end = event.endsAt ? new Date(event.endsAt) : undefined;
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: event.timezone,
    timeZoneName: "short",
  });

  if (!end) return formatter.format(start);

  return `${formatter.format(start)} to ${formatter.format(end)}`;
}

export function formatEventDateTime(event: EventRecord) {
  return `${formatEventDate(event)} at ${formatEventTimeRange(event)}`;
}

export function formatRecurrence(event: EventRecord) {
  if (!event.recurrence || event.recurrence.frequency === "none") return "One-time gathering";
  return event.recurrence.label;
}
