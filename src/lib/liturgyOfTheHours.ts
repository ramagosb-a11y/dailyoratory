import {
  liturgyHours,
  liturgyHoursFaqs,
  liturgyHoursResources,
  prayerRhythms,
  worldPrayerLocations,
} from "@/data/liturgyOfTheHours";
import type { LiturgyHour, PrayerRhythm } from "@/types/liturgyOfTheHours";

export function getLiturgyHours() {
  return [...liturgyHours].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getLiturgyHourBySlug(slug: string) {
  return getLiturgyHours().find((hour) => hour.slug === slug);
}

export function getMajorHours() {
  return getLiturgyHours().filter((hour) =>
    ["morning-prayer", "evening-prayer", "night-prayer", "office-of-readings"].includes(hour.id),
  );
}

export function getDaytimeHours() {
  return getLiturgyHours().filter((hour) =>
    ["midmorning-prayer", "midday-prayer", "midafternoon-prayer"].includes(hour.id),
  );
}

export function getBeginnerFriendlyHours() {
  return getLiturgyHours().filter((hour) => hour.beginnerFriendly);
}

export function getPrayerRhythms() {
  return [...prayerRhythms].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPrayerRhythmBySlug(slug: string) {
  return getPrayerRhythms().find((rhythm) => rhythm.slug === slug);
}

export function getLiturgyHoursFaqs() {
  return [...liturgyHoursFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getLiturgyHoursResources() {
  return [...liturgyHoursResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getWorldPrayerLocations() {
  return [...worldPrayerLocations].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSuggestedHourForCurrentTime(date: Date): LiturgyHour {
  const totalMinutes = date.getHours() * 60 + date.getMinutes();

  if (totalMinutes >= 300 && totalMinutes < 600) return getLiturgyHourBySlug("morning-prayer")!;
  if (totalMinutes >= 600 && totalMinutes < 690) return getLiturgyHourBySlug("midmorning-prayer")!;
  if (totalMinutes >= 690 && totalMinutes < 810) return getLiturgyHourBySlug("midday-prayer")!;
  if (totalMinutes >= 810 && totalMinutes < 1020) return getLiturgyHourBySlug("midafternoon-prayer")!;
  if (totalMinutes >= 1020 && totalMinutes < 1230) return getLiturgyHourBySlug("evening-prayer")!;
  return getLiturgyHourBySlug("night-prayer")!;
}

export function getCurrentPrayerRhythmSuggestion(date: Date): PrayerRhythm {
  const suggestedHour = getSuggestedHourForCurrentTime(date).id;

  if (suggestedHour === "morning-prayer") return getPrayerRhythmBySlug("morning-and-night")!;
  if (suggestedHour === "midmorning-prayer" || suggestedHour === "midday-prayer" || suggestedHour === "midafternoon-prayer") {
    return getPrayerRhythmBySlug("workday-rhythm")!;
  }
  if (suggestedHour === "evening-prayer") return getPrayerRhythmBySlug("classic-lay-rhythm")!;
  return getPrayerRhythmBySlug("beginner-night-prayer")!;
}

export function formatExternalPrayerLink(hour: LiturgyHour) {
  return {
    label: hour.title,
    url: hour.divineOfficeUrl,
    note: `Open ${hour.title} on DivineOffice.org`,
  };
}
