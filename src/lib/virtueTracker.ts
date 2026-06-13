import { viceDefinitions, virtueDefinitions, virtueVicePairs } from "@/data/virtueTracker";
import type { ViceName, VirtueName, VirtueTrackerCheckIn } from "@/types/virtueTracker";

export const virtueTrackerLinks = [
  { label: "Overview", href: "/virtue-tracker" },
  { label: "Dashboard", href: "/virtue-tracker/dashboard" },
  { label: "Check-in", href: "/virtue-tracker/check-in" },
  { label: "Virtues", href: "/virtue-tracker/virtues" },
  { label: "Vices", href: "/virtue-tracker/vices" },
  { label: "Patterns", href: "/virtue-tracker/patterns" },
  { label: "Daily Examen", href: "/daily-examen" },
  { label: "Confession prep", href: "/virtue-tracker/confession-prep" },
  { label: "Settings", href: "/virtue-tracker/settings" },
] as const;

export function getVirtueLabel(virtue: VirtueName) {
  return virtueDefinitions.find((item) => item.virtue === virtue)?.title ?? titleCase(virtue);
}

export function getViceLabel(vice: ViceName) {
  return viceDefinitions.find((item) => item.vice === vice)?.title ?? titleCase(vice);
}

export function getContraryVirtues(vice: ViceName) {
  return viceDefinitions.find((item) => item.vice === vice)?.contraryVirtues ?? [];
}

export function getRecentCheckIns(checkIns: VirtueTrackerCheckIn[], limit = 5) {
  return [...checkIns]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function summarizeVirtuePatterns(checkIns: VirtueTrackerCheckIn[]) {
  const virtueCounts = new Map<VirtueName, number>();
  const viceCounts = new Map<ViceName, number>();
  const confessionItems = checkIns.filter((checkIn) => checkIn.bringToConfession);

  checkIns.forEach((checkIn) => {
    checkIn.virtueFocus.forEach((virtue) => virtueCounts.set(virtue, (virtueCounts.get(virtue) ?? 0) + 1));
    checkIn.viceStruggles.forEach((vice) => viceCounts.set(vice, (viceCounts.get(vice) ?? 0) + 1));
  });

  return {
    totalCheckIns: checkIns.length,
    confessionItems: confessionItems.length,
    frequentVirtues: toSortedEntries(virtueCounts, getVirtueLabel),
    frequentStruggles: toSortedEntries(viceCounts, getViceLabel),
    nextSteps: getRecentCheckIns(checkIns, 7)
      .map((checkIn) => checkIn.nextStep)
      .filter(Boolean),
  };
}

export function exportVirtueTrackerText(checkIns: VirtueTrackerCheckIn[]) {
  const patterns = summarizeVirtuePatterns(checkIns);

  return [
    "Daily Oratory Virtue and Vice Tracker",
    "",
    "Private local reflection. This is not a holiness score and is not sent to a server.",
    "",
    `Check-ins: ${patterns.totalCheckIns}`,
    `Marked for confession prep: ${patterns.confessionItems}`,
    "",
    "Frequent virtue focus",
    ...(patterns.frequentVirtues.length
      ? patterns.frequentVirtues.map((item) => `- ${item.label}: ${item.count} check-in${item.count === 1 ? "" : "s"}`)
      : ["- None yet"]),
    "",
    "Frequent struggles noticed",
    ...(patterns.frequentStruggles.length
      ? patterns.frequentStruggles.map((item) => `- ${item.label}: ${item.count} check-in${item.count === 1 ? "" : "s"}`)
      : ["- None yet"]),
    "",
    "Recent check-ins",
    ...getRecentCheckIns(checkIns, 12).map((checkIn) =>
      [
        `- ${checkIn.date}`,
        `  Virtues: ${checkIn.virtueFocus.map(getVirtueLabel).join(", ") || "None selected"}`,
        `  Struggles: ${checkIn.viceStruggles.map(getViceLabel).join(", ") || "None selected"}`,
        checkIn.graceReceived ? `  Grace: ${checkIn.graceReceived}` : "",
        checkIn.nextStep ? `  Next step: ${checkIn.nextStep}` : "",
        checkIn.confessionPrepNote ? `  Confession prep: ${checkIn.confessionPrepNote}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    ),
  ].join("\n");
}

export function getVicePairings() {
  return virtueVicePairs.map((pair) => ({
    ...pair,
    viceLabel: getViceLabel(pair.opposingVice),
    virtueLabels: [pair.virtue, ...(pair.alternateVirtues ?? [])].map(getVirtueLabel),
  }));
}

function toSortedEntries<T extends string>(map: Map<T, number>, labeler: (value: T) => string) {
  return Array.from(map.entries())
    .map(([value, count]) => ({ value, label: labeler(value), count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

function titleCase(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
