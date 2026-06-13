import {
  adorationAppsScriptExporterPlan,
  adorationGoogleSheetsSchema,
  liveAdorationStreams,
} from "@/data/adoration";
import {
  adorationAnchorLinks,
  adorationAndMassCards,
  adorationExplorerSteps,
  adorationEtiquette,
  adorationFirstTimeSteps,
  adorationPrayerMethods,
  adorationPrayerPaths,
  eucharisticSaints,
  familyAdorationIdeas,
  findAdorationNearYou,
  holyHourGuide,
  relatedAdorationTools,
  shortAdorationVisitGuides,
} from "@/data/adorationPage";
import { adorationFaqs } from "@/data/adorationFaqs";
import { adorationPrayers } from "@/data/adorationPrayers";
import { adorationResources } from "@/data/adorationResources";
import { adorationScriptures } from "@/data/adorationScripture";
import type {
  AdorationFAQ,
  AdorationPrayerPath,
  AdorationResource,
  AdorationScripture,
  AdorationStreamLanguage,
  AdorationStreamProvider,
  AdorationStreamStatus,
  HolyHourSegment,
  HolyHourGuideBlock,
  PrayerPathNeed,
  LiveAdorationStreamRecord,
} from "@/types/adoration";

export const adorationLinks = [
  { label: "Portal", href: "/adoration" },
  { label: "Live", href: "/adoration/live" },
  { label: "Prayers", href: "/adoration/prayers" },
  { label: "Submit stream", href: "/adoration/submit-stream" },
] as const;

export type AdorationStreamFilters = {
  query?: string;
  status?: "all" | AdorationStreamStatus;
  language?: "all" | AdorationStreamLanguage;
  country?: "all" | string;
  verifiedOnly?: boolean;
  twentyFourSevenOnly?: boolean;
};

export type SafeAdorationEmbed = {
  provider: AdorationStreamProvider;
  embedUrl: string;
  videoId: string;
};

export function getPublishedAdorationStreams() {
  return liveAdorationStreams.filter((stream) => stream.status === "published" && stream.visibility !== "private");
}

export function getFeaturedAdorationStream() {
  return getPublishedAdorationStreams().find((stream) => stream.featured && isStreamAvailable(stream)) ?? getLiveAdorationStreams()[0];
}

export function getLiveAdorationStreams() {
  return getPublishedAdorationStreams().filter((stream) => ["live-now", "available-24-7"].includes(stream.streamStatus));
}

export function getTwentyFourSevenAdorationStreams() {
  return getPublishedAdorationStreams().filter((stream) => stream.isTwentyFourSeven);
}

export function getVerifiedAdorationStreams() {
  return getPublishedAdorationStreams().filter((stream) => stream.verificationStatus === "verified");
}

export function getAdorationStreamBySlug(slug: string) {
  return getPublishedAdorationStreams().find((stream) => stream.slug === slug || stream.id === slug);
}

export function getAdorationPrayers() {
  return [...adorationPrayers].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAdorationScriptures(): AdorationScripture[] {
  return [...adorationScriptures].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAdorationResources(): AdorationResource[] {
  return [...adorationResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAdorationFaqs(): AdorationFAQ[] {
  return [...adorationFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAdorationPrayerPaths(): AdorationPrayerPath[] {
  return [...adorationPrayerPaths].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPrayerPathByNeed(need: PrayerPathNeed) {
  return getAdorationPrayerPaths().find((path) => path.slug === need);
}

export function getHolyHourGuide(): HolyHourSegment[] {
  return [...holyHourGuide].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function formatHolyHourGuideForCopy() {
  return [
    "A Simple Holy Hour Guide",
    "",
    ...getHolyHourGuide().map((segment) =>
      [
        `${segment.startMinute}-${segment.endMinute} minutes: ${segment.title}`,
        segment.sourceNote,
        segment.scripture ? `${segment.scripture.reference}\n"${segment.scripture.text}"` : undefined,
        segment.description,
        `Prayer: ${segment.prayerPrompt}`,
        ...(segment.guide ?? []).map(formatHolyHourGuideBlockForCopy),
      ]
        .filter(Boolean)
        .join("\n\n"),
    ),
  ].join("\n\n");
}

export function formatHolyHourGuideForPrint() {
  return formatHolyHourGuideForCopy();
}

function formatHolyHourGuideBlockForCopy(block: HolyHourGuideBlock) {
  switch (block.kind) {
    case "heading":
      return block.text;
    case "paragraph":
      return block.text;
    case "breath":
      return [`Inhale: "${block.inhale}"`, `Exhale: "${block.exhale}"`, block.repeat].filter(Boolean).join("\n");
    case "prayer":
      return [block.title ?? "Prayer", block.text].join("\n");
    case "scripture":
      return `${block.reference}\n"${block.text}"`;
    case "reflect":
      return [block.title ?? "Reflect", ...block.prompts.map((prompt) => `- ${prompt}`)].join("\n");
    case "list":
      return [block.title, ...block.items.map((item) => `- ${item}`)].filter(Boolean).join("\n");
    case "invocation":
      return [block.title, ...block.lines.map((line) => `"${line}"`)].filter(Boolean).join("\n");
    case "pause":
      return block.text ?? "Pause in silence.";
  }
}

export function formatShortVisitGuideForCopy() {
  return [
    "Short Adoration Visit Guide",
    "",
    ...shortAdorationVisitGuides.map((guide) => `${guide.title}\n${guide.steps.map((step) => `- ${step}`).join("\n")}`),
  ].join("\n\n");
}

export function getRelatedAdorationTools() {
  return [...relatedAdorationTools];
}

export function filterAdorationStreams(filters: AdorationStreamFilters = {}) {
  const query = filters.query?.trim().toLowerCase() ?? "";

  return getPublishedAdorationStreams().filter((stream) => {
    const searchable = [
      stream.title,
      stream.description,
      stream.chapelName,
      stream.parishOrCommunityName,
      stream.location.city,
      stream.location.region,
      stream.location.country,
      stream.language,
      stream.streamStatus,
      stream.prayerFocus,
      ...stream.tags,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesQuery = !query || searchable.includes(query);
    const matchesStatus = !filters.status || filters.status === "all" || stream.streamStatus === filters.status;
    const matchesLanguage = !filters.language || filters.language === "all" || stream.language === filters.language;
    const matchesCountry = !filters.country || filters.country === "all" || stream.location.country === filters.country;
    const matchesVerified = !filters.verifiedOnly || stream.verificationStatus === "verified";
    const matchesTwentyFourSeven = !filters.twentyFourSevenOnly || stream.isTwentyFourSeven;

    return matchesQuery && matchesStatus && matchesLanguage && matchesCountry && matchesVerified && matchesTwentyFourSeven;
  });
}

export function getAdorationFacetOptions() {
  const streams = getPublishedAdorationStreams();

  return {
    countries: Array.from(new Set(streams.map((stream) => stream.location.country))).sort(),
    languages: Array.from(new Set(streams.map((stream) => stream.language))).sort(),
    statuses: Array.from(new Set(streams.map((stream) => stream.streamStatus))).sort(),
  };
}

export function getAdorationStatusMeta(status: AdorationStreamStatus) {
  const meta: Record<AdorationStreamStatus, { label: string; className: string; description: string }> = {
    "live-now": {
      label: "Live now",
      className: "border-success text-success",
      description: "The stream is currently listed as live.",
    },
    "available-24-7": {
      label: "24/7",
      className: "border-gold text-gold",
      description: "A perpetual or always-available Adoration stream.",
    },
    scheduled: {
      label: "Scheduled",
      className: "border-navy text-navy",
      description: "The stream is usually available at scheduled times.",
    },
    offline: {
      label: "Offline",
      className: "border-stone text-muted",
      description: "The stream may be offline or awaiting editor follow-up.",
    },
    "needs-review": {
      label: "Needs review",
      className: "border-burgundy text-burgundy",
      description: "Editors should verify this stream before featuring it.",
    },
  };

  return meta[status];
}

export function getAdorationVerificationLabel(stream: LiveAdorationStreamRecord) {
  if (stream.verificationStatus === "verified") return "Verified";
  if (stream.verificationStatus === "pending-review") return "Pending review";
  return "Unverified";
}

export function getAdorationLocationLabel(stream: LiveAdorationStreamRecord) {
  return [stream.location.city, stream.location.region, stream.location.country].filter(Boolean).join(", ");
}

export function formatAdorationDateTime(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(value));
}

export function getAdorationStreamHref(stream: LiveAdorationStreamRecord) {
  return `/adoration/${stream.slug}`;
}

export function getSafeAdorationEmbed(stream: LiveAdorationStreamRecord) {
  return sanitizeAdorationEmbedUrl(stream.embedUrl) ?? sanitizeAdorationEmbedUrl(stream.streamUrl);
}

export function sanitizeAdorationEmbedUrl(input: string): SafeAdorationEmbed | null {
  let url: URL;

  try {
    url = new URL(input);
  } catch {
    return null;
  }

  if (url.protocol !== "https:") return null;

  const hostname = url.hostname.toLowerCase().replace(/^www\./, "");

  if (hostname === "youtube.com" || hostname === "m.youtube.com" || hostname === "youtube-nocookie.com") {
    const id = extractYouTubeId(url);
    if (!id) return null;
    return {
      provider: "youtube",
      videoId: id,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=0&rel=0&modestbranding=1`,
    };
  }

  if (hostname === "youtu.be") {
    const id = sanitizeYouTubeId(url.pathname.split("/").filter(Boolean)[0]);
    if (!id) return null;
    return {
      provider: "youtube",
      videoId: id,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=0&rel=0&modestbranding=1`,
    };
  }

  if (hostname === "vimeo.com" || hostname === "player.vimeo.com") {
    const id = extractVimeoId(url);
    if (!id) return null;
    return {
      provider: "vimeo",
      videoId: id,
      embedUrl: `https://player.vimeo.com/video/${id}?autoplay=0&title=0&byline=0&portrait=0`,
    };
  }

  return null;
}

export function getAdorationBackendPlan() {
  return {
    googleSheetsSchema: adorationGoogleSheetsSchema,
    appsScriptExporterPlan: adorationAppsScriptExporterPlan,
  };
}

export function getAdorationFirstTimeSteps() {
  return [...adorationFirstTimeSteps];
}

export function getAdorationPrayerMethods() {
  return [...adorationPrayerMethods];
}

export function getShortAdorationVisitGuides() {
  return [...shortAdorationVisitGuides];
}

export function getAdorationAndMassCards() {
  return [...adorationAndMassCards];
}

export function getEucharisticSaints() {
  return [...eucharisticSaints];
}

export function getFamilyAdorationIdeas() {
  return [...familyAdorationIdeas];
}

export function getAdorationExplorerSteps() {
  return [...adorationExplorerSteps];
}

export function getAdorationEtiquette() {
  return [...adorationEtiquette];
}

export function getFindAdorationNearYouOptions() {
  return [...findAdorationNearYou];
}

export function getAdorationAnchorLinks() {
  return [...adorationAnchorLinks];
}

function isStreamAvailable(stream: LiveAdorationStreamRecord) {
  return stream.streamStatus === "live-now" || stream.streamStatus === "available-24-7";
}

function extractYouTubeId(url: URL) {
  if (url.pathname === "/watch") return sanitizeYouTubeId(url.searchParams.get("v") ?? "");

  const parts = url.pathname.split("/").filter(Boolean);
  const embedIndex = parts.findIndex((part) => part === "embed" || part === "live" || part === "shorts");
  if (embedIndex >= 0) return sanitizeYouTubeId(parts[embedIndex + 1]);

  return null;
}

function sanitizeYouTubeId(value: string | undefined) {
  if (!value) return null;
  const id = value.trim();
  return /^[A-Za-z0-9_-]{6,64}$/.test(id) ? id : null;
}

function extractVimeoId(url: URL) {
  const parts = url.pathname.split("/").filter(Boolean);
  const id = parts[0] === "video" ? parts[1] : parts[0];
  if (!id) return null;
  return /^\d{6,14}$/.test(id) ? id : null;
}
