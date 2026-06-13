import {
  prayerIntentionGoogleSheetsWorkflow,
  prayerIntentionModerationStatusOptions,
  prayerIntentions,
  prayerIntentionSupabaseSchema,
  prayerIntentionTypeOptions,
  prayerIntentionVisibilityOptions,
} from "@/data/prayerIntentions";
import type {
  PrayerIntentionModerationStatus,
  PrayerIntentionRecord,
  PrayerIntentionType,
  PrayerIntentionVisibility,
} from "@/types/prayerIntentions";

export const prayerIntentionLinks = [
  { label: "Overview", href: "/prayer-intentions" },
  { label: "Submit", href: "/prayer-intentions/submit" },
  { label: "Urgent", href: "/prayer-intentions/urgent" },
  { label: "Thanksgivings", href: "/prayer-intentions/thanksgivings" },
  { label: "Guidelines", href: "/prayer-intentions/guidelines" },
] as const;

export function getApprovedPrayerIntentions() {
  return prayerIntentions
    .filter(isPubliclyVisibleIntention)
    .sort((a, b) => new Date(b.approvedAt ?? b.updatedAt).getTime() - new Date(a.approvedAt ?? a.updatedAt).getTime());
}

export function getUrgentPrayerIntentions() {
  return getApprovedPrayerIntentions().filter((intention) => intention.isUrgent || intention.intentionType === "urgent");
}

export function getThanksgivingIntentions() {
  return getApprovedPrayerIntentions().filter(
    (intention) => intention.isThanksgiving || intention.intentionType === "thanksgiving" || intention.intentionStatus === "answered",
  );
}

export function getPrayerIntentionBySlug(slug: string) {
  return getApprovedPrayerIntentions().find((intention) => intention.slug === slug);
}

export function getPrayerIntentionById(id: string) {
  return prayerIntentions.find((intention) => intention.id === id);
}

export function isPubliclyVisibleIntention(intention: PrayerIntentionRecord) {
  return (
    intention.status === "published" &&
    intention.moderationStatus === "approved" &&
    intention.visibility !== "private" &&
    (intention.intentionVisibility === "public" || intention.intentionVisibility === "anonymous-public")
  );
}

export function getPrayerIntentionStats() {
  const approved = getApprovedPrayerIntentions();

  return {
    total: prayerIntentions.length,
    approved: approved.length,
    urgent: approved.filter((intention) => intention.isUrgent || intention.intentionType === "urgent").length,
    thanksgivings: approved.filter((intention) => intention.isThanksgiving || intention.intentionStatus === "answered").length,
    pendingReview: prayerIntentions.filter((intention) => intention.moderationStatus === "pending-review").length,
    needsAttention: prayerIntentions.filter((intention) => intention.moderationStatus === "needs-attention").length,
    prayedCount: approved.reduce((sum, intention) => sum + intention.prayedCount, 0),
  };
}

export function getDisplayRequester(intention: PrayerIntentionRecord) {
  if (intention.isAnonymous || intention.intentionVisibility === "anonymous-public") return "Anonymous";
  return intention.requesterDisplayName || "Daily Oratory community";
}

export function getIntentionTypeLabel(type: PrayerIntentionType) {
  return prayerIntentionTypeOptions.find((option) => option.value === type)?.label ?? titleCase(type);
}

export function getVisibilityLabel(visibility: PrayerIntentionVisibility) {
  return prayerIntentionVisibilityOptions.find((option) => option.value === visibility)?.label ?? titleCase(visibility);
}

export function getModerationStatusLabel(status: PrayerIntentionModerationStatus) {
  return prayerIntentionModerationStatusOptions.find((option) => option.value === status)?.label ?? titleCase(status);
}

export function formatIntentionDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function getPrayerIntentionAdminSchemaRows() {
  return prayerIntentionSupabaseSchema;
}

export function getPrayerIntentionGoogleSheetsWorkflow() {
  return prayerIntentionGoogleSheetsWorkflow;
}

export function getPrayerIntentionTypeOptions() {
  return prayerIntentionTypeOptions;
}

export function getPrayerIntentionVisibilityOptions() {
  return prayerIntentionVisibilityOptions;
}

function titleCase(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
