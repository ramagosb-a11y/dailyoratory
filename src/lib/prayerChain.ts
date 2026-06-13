import {
  prayerChainAppsScriptPlan,
  prayerChainCategoryOptions,
  prayerChainGoogleSheetsWorkflow,
  prayerChainPrivacyOptions,
  prayerChainRequests,
  prayerChainRlsPolicies,
  prayerChainSupabaseSchema,
  prayerChainTeams,
  prayerChainUrgencyOptions,
} from "@/data/prayerChain";
import type {
  LocalPrayerChainSubmission,
  PrayerChainAlertDelivery,
  PrayerChainAlertType,
  PrayerChainCategory,
  PrayerChainPrivacy,
  PrayerChainRequestRecord,
  PrayerChainRoutingResult,
  PrayerChainTeamId,
  PrayerChainUrgency,
} from "@/types/prayerChain";

export const askForPrayerLinks = [
  { label: "Overview", href: "/ask-for-prayer" },
  { label: "Submit", href: "/ask-for-prayer/submit" },
  { label: "Confirmation", href: "/ask-for-prayer/confirmation" },
  { label: "Teams", href: "/ask-for-prayer/teams" },
  { label: "Team dashboard", href: "/ask-for-prayer/team-dashboard" },
  { label: "Thanksgivings", href: "/ask-for-prayer/thanksgivings" },
  { label: "Guidelines", href: "/ask-for-prayer/guidelines" },
  { label: "Admin", href: "/ask-for-prayer/admin" },
] as const;

export type PrayerChainAlertPlanItem = {
  requestId: string;
  teamId: PrayerChainTeamId;
  alertType: PrayerChainAlertType;
  shouldSend: boolean;
  reason: string;
  dedupeKey: string;
  suppressedByDeliveryId?: string;
};

export function getPrayerChainTeams() {
  return prayerChainTeams;
}

export function getPrayerChainTeamById(teamId: PrayerChainTeamId) {
  return prayerChainTeams.find((team) => team.id === teamId);
}

export function getPrayerChainRequests() {
  return prayerChainRequests.sort(
    (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime(),
  );
}

export function getPrayerChainRequestById(requestId: string) {
  return prayerChainRequests.find((request) => request.requestId === requestId || request.id === requestId);
}

export function getRoutedPrayerChainRequests() {
  return getPrayerChainRequests().filter((request) => request.moderationStatus === "routed" || request.moderationStatus === "approved");
}

export function getPrayerChainRequestsForTeam(teamId: PrayerChainTeamId) {
  return getRoutedPrayerChainRequests().filter((request) => request.assignedTeamIds.includes(teamId));
}

export function getPrayerChainStats() {
  const routed = getRoutedPrayerChainRequests();

  return {
    teams: prayerChainTeams.length,
    routed: routed.length,
    urgent: routed.filter((request) => request.urgency === "urgent" || request.urgency === "time-sensitive").length,
    needsAttention: prayerChainRequests.filter((request) => request.moderationStatus === "needs-attention").length,
    thanksgivings: prayerChainRequests.reduce((sum, request) => sum + request.thanksgivingUpdates.length, 0),
    prayerCommitments: routed.reduce((sum, request) => sum + request.prayedCount, 0),
  };
}

export function routePrayerChainRequest(input: {
  requestCategory: PrayerChainCategory;
  urgency: PrayerChainUrgency;
  privacy: PrayerChainPrivacy;
  hasYouthInvolved?: boolean;
  requestedTeamId?: PrayerChainTeamId | "auto";
  requestSummary?: string;
}): PrayerChainRoutingResult {
  const assignedTeamIds = new Set<PrayerChainTeamId>();
  const routingReasons: string[] = [];
  const summary = input.requestSummary?.toLowerCase() ?? "";

  assignedTeamIds.add("general");
  routingReasons.push("General team keeps steady prayer unless privacy limits routing.");

  if (input.requestedTeamId && input.requestedTeamId !== "auto") {
    assignedTeamIds.add(input.requestedTeamId);
    routingReasons.push(`Requester or coordinator preference: ${formatTeamName(input.requestedTeamId)}.`);
  }

  if (input.urgency === "urgent" || input.urgency === "time-sensitive" || input.requestCategory === "urgent") {
    assignedTeamIds.add("urgent");
    routingReasons.push("Urgent or time-sensitive need.");
  }

  if (input.requestCategory === "family" || input.requestCategory === "grief") {
    assignedTeamIds.add("family");
    routingReasons.push("Family or grief category.");
  }

  if (input.requestCategory === "conversion") {
    assignedTeamIds.add("divine-mercy");
    routingReasons.push("Conversion requests fit the Divine Mercy team.");
  }

  if (input.requestCategory === "parish" || input.requestCategory === "sacramental") {
    assignedTeamIds.add("parish");
    routingReasons.push("Parish or sacramental category.");
  }

  if (summary.includes("rosary") || summary.includes("mary") || summary.includes("marian")) {
    assignedTeamIds.add("rosary");
    routingReasons.push("Request language suggests Rosary or Marian intercession.");
  }

  if (summary.includes("adoration") || summary.includes("eucharist")) {
    assignedTeamIds.add("adoration");
    routingReasons.push("Request language suggests Adoration.");
  }

  if (input.hasYouthInvolved || input.requestCategory === "youth") {
    assignedTeamIds.add("youth-safe");
    assignedTeamIds.add("pastoral-referral");
    routingReasons.push("Youth-safe review required before broad routing.");
  }

  const pastoralReferralRecommended =
    input.privacy === "pastoral-referral-only" ||
    input.privacy === "coordinator-only" ||
    summary.includes("danger") ||
    summary.includes("abuse") ||
    summary.includes("self-harm") ||
    Boolean(input.hasYouthInvolved);

  if (pastoralReferralRecommended) {
    assignedTeamIds.add("pastoral-referral");
    routingReasons.push("Coordinator or pastoral referral review recommended.");
  }

  if (input.privacy === "coordinator-only" || input.privacy === "pastoral-referral-only") {
    assignedTeamIds.forEach((teamId) => {
      if (teamId !== "pastoral-referral" && teamId !== "youth-safe") assignedTeamIds.delete(teamId);
    });
    assignedTeamIds.add("pastoral-referral");
    routingReasons.push("Privacy choice limits broad team routing.");
  }

  const youthSafe = Boolean(input.hasYouthInvolved || input.requestCategory === "youth");
  const moderationStatus = youthSafe || pastoralReferralRecommended ? "needs-attention" : "pending-review";
  const alertCadence = getAlertCadence(input.urgency, input.privacy, youthSafe);

  return {
    assignedTeamIds: Array.from(assignedTeamIds),
    routingReasons,
    alertCadence,
    pastoralReferralRecommended,
    youthSafe,
    moderationStatus,
  };
}

export function buildPrayerChainAlertPlan(
  requests: readonly PrayerChainRequestRecord[],
  deliveries: readonly PrayerChainAlertDelivery[] = [],
  now = new Date(),
): PrayerChainAlertPlanItem[] {
  return requests.flatMap((request) =>
    request.assignedTeamIds.map((teamId) => {
      const alertType = getAlertType(request);
      const windowMinutes = getSuppressionWindowMinutes(alertType);
      const dedupeKey = buildAlertDedupeKey(request.requestId, teamId, alertType, now, windowMinutes);
      const recentDelivery = deliveries.find(
        (delivery) =>
          delivery.requestId === request.requestId &&
          delivery.teamId === teamId &&
          delivery.alertType === alertType &&
          minutesBetween(new Date(delivery.sentAt), now) <= windowMinutes,
      );
      const eligible =
        (request.moderationStatus === "approved" || request.moderationStatus === "routed") &&
        request.alertCadence !== "no-alert" &&
        !recentDelivery;

      return {
        requestId: request.requestId,
        teamId,
        alertType,
        shouldSend: eligible,
        reason: recentDelivery
          ? "Suppressed because a matching alert was already sent inside the duplicate window."
          : eligible
            ? "Ready for approved team alert or digest."
            : "Held until moderation approves routing or alert cadence allows sending.",
        dedupeKey,
        suppressedByDeliveryId: recentDelivery?.id,
      };
    }),
  );
}

export function getPrayerChainThanksgivings() {
  return prayerChainRequests.flatMap((request) =>
    request.thanksgivingUpdates
      .filter((update) => update.moderationStatus === "approved")
      .map((update) => ({ request, update })),
  );
}

export function getPrayerChainCategoryLabel(category: PrayerChainCategory) {
  return prayerChainCategoryOptions.find((option) => option.value === category)?.label ?? titleCase(category);
}

export function getPrayerChainPrivacyLabel(privacy: PrayerChainPrivacy) {
  return prayerChainPrivacyOptions.find((option) => option.value === privacy)?.label ?? titleCase(privacy);
}

export function getPrayerChainUrgencyLabel(urgency: PrayerChainUrgency) {
  return prayerChainUrgencyOptions.find((option) => option.value === urgency)?.label ?? titleCase(urgency);
}

export function formatPrayerChainDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function getPrayerChainBackendDocs() {
  return {
    supabaseSchema: prayerChainSupabaseSchema,
    rlsPolicies: prayerChainRlsPolicies,
    googleSheetsWorkflow: prayerChainGoogleSheetsWorkflow,
    appsScriptPlan: prayerChainAppsScriptPlan,
  };
}

export function normalizeLocalSubmissionToRequest(submission: LocalPrayerChainSubmission): PrayerChainRequestRecord {
  return {
    id: submission.id,
    requestId: submission.id,
    title: submission.title,
    slug: submission.id,
    description: "Local mock prayer chain submission pending coordinator review.",
    category: "Prayer Chain",
    tags: [submission.requestCategory, submission.urgency, "local submission"],
    relatedResourceIds: [],
    status: "needs-review",
    createdAt: submission.submittedAt,
    updatedAt: submission.updatedAt,
    visibility: "private",
    source: { system: "static" },
    schemaVersion: 1,
    contentType: "prayer-chain-request",
    requestCategory: submission.requestCategory,
    urgency: submission.urgency,
    privacy: submission.privacy,
    requestedBy: submission.requestedBy || "Anonymous",
    requesterEmail: submission.contactEmail,
    requestSummary: submission.requestSummary,
    consentToShare: submission.consentToShare,
    consentToContact: submission.consentToContact,
    contactPreference: submission.contactPreference,
    assignedTeamIds: submission.assignedTeamIds,
    routingReasons: submission.routingReasons,
    moderationStatus: submission.moderationStatus,
    alertCadence: submission.alertCadence,
    prayedCount: 0,
    isThanksgiving: false,
    youthSafe: submission.hasYouthInvolved,
    pastoralReferralRecommended: submission.pastoralReferralRecommended,
    submittedAt: submission.submittedAt,
    thanksgivingUpdates: [],
  };
}

function getAlertCadence(
  urgency: PrayerChainUrgency,
  privacy: PrayerChainPrivacy,
  youthSafe: boolean,
) {
  if (privacy === "coordinator-only" || privacy === "pastoral-referral-only" || youthSafe) return "no-alert";
  if (urgency === "urgent") return "immediate";
  if (urgency === "time-sensitive") return "same-day-digest";
  return "daily-digest";
}

function getAlertType(request: PrayerChainRequestRecord): PrayerChainAlertType {
  if (request.urgency === "urgent" || request.alertCadence === "immediate") return "urgent-alert";
  if (request.alertCadence === "daily-digest" || request.alertCadence === "same-day-digest") return "daily-digest";
  return "team-alert";
}

function getSuppressionWindowMinutes(alertType: PrayerChainAlertType) {
  if (alertType === "urgent-alert") return 90;
  if (alertType === "thanksgiving-update") return 360;
  return 24 * 60;
}

function buildAlertDedupeKey(
  requestId: string,
  teamId: PrayerChainTeamId,
  alertType: PrayerChainAlertType,
  now: Date,
  windowMinutes: number,
) {
  const windowStart = Math.floor(now.getTime() / (windowMinutes * 60 * 1000));
  return `${requestId}:${teamId}:${alertType}:${windowStart}`;
}

function minutesBetween(start: Date, end: Date) {
  return Math.abs(end.getTime() - start.getTime()) / 60000;
}

function formatTeamName(teamId: PrayerChainTeamId) {
  return getPrayerChainTeamById(teamId)?.name ?? titleCase(teamId);
}

function titleCase(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
