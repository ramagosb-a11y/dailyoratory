const SENSITIVE_PATH_PREFIXES = [
  "/confession/examination",
  "/daily-examen",
  "/pray",
  "/formation",
  "/ocia",
  "/body-soul-spirit",
  "/relics",
  "/prayer-intentions",
  "/virtue-tracker",
  "/reflections/reading-and-reflections",
  "/fasting-retreat",
  "/rule-of-life/builder",
  "/rule-of-life/my-rule",
  "/pathways/my-pathways",
  "/pathways/recommended",
  "/pathways/settings",
  "/sacraments/my-preparation",
  "/saints/finder",
  "/saints/confirmation",
  "/saints/companions",
  "/saints/settings",
  "/liturgical-living/settings",
  "/family",
  "/divine-mercy/chaplet",
  "/confession/examination-companion",
  "/rule-of-life/examen",
  "/adoration/companion",
] as const;

const ALLOWED_EVENT_PARAMS = new Set([
  "action", "category", "date_key", "destination", "entry_point", "family_stage", "filter_name",
  "filter_slug", "filter_value", "group_slug", "hover", "href", "item", "item_count", "item_slug",
  "media_type", "mystery_slug", "page_path", "page_title", "path", "prayer_id", "prayer_path",
  "prayer_slug", "prayer_style", "prayer_title", "prayer_type", "query_length", "recommended_path",
  "reference", "saint_name", "saint_slug", "scripture_focus", "section", "selection_count", "sm",
  "source", "source_section", "state_slug", "stream_name", "time_available", "time_of_day", "topic_slug",
  "video_title", "virtue_slug",
]);

const ALWAYS_REDACTED_EVENT_PARAMS = new Set([
  "has_contact_email", "intention", "intention_type", "need_slug", "primary_saint", "prayer",
  "selected_categories", "user_need", "visibility",
]);

const PUBLIC_INTENTION_FIXED_PATHS = new Set([
  "submit", "wall", "urgent", "thanksgivings", "guidelines",
]);

const SAFE_CAMPAIGN_SOURCES = new Set([
  "google", "bing", "yahoo", "duckduckgo", "facebook", "instagram", "youtube", "tiktok", "x",
  "newsletter", "parish", "email", "referral", "qr", "direct",
]);
const SAFE_CAMPAIGN_MEDIUMS = new Set([
  "organic", "cpc", "paid", "social", "email", "newsletter", "referral", "qr", "none", "affiliate", "display",
]);

function pathnameOnly(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "/";
  try {
    return new URL(trimmed, "https://dailyoratory.faith").pathname || "/";
  } catch {
    return "/";
  }
}

export function isSensitiveAnalyticsPath(pathname: string): boolean {
  const path = pathnameOnly(pathname);
  return SENSITIVE_PATH_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

export function getAnalyticsPagePath(pathname: string): string {
  const path = pathnameOnly(pathname);
  const segments = path.split("/").filter(Boolean);

  if (
    segments[0] === "prayer-intentions" &&
    segments.length === 2 &&
    !PUBLIC_INTENTION_FIXED_PATHS.has(segments[1])
  ) {
    return "/prayer-intentions/:slug";
  }

  return path;
}

export function getSafeCampaignAttribution(search: string): {
  campaign_source?: string;
  campaign_medium?: string;
} {
  const params = new URLSearchParams(search);
  const sanitize = (value: string | null, allowedValues: Set<string>) => {
    if (!value || value.length > 40 || !/^[a-z0-9][a-z0-9._-]*$/i.test(value)) return undefined;
    const normalized = value.toLowerCase();
    return allowedValues.has(normalized) ? normalized : undefined;
  };
  const source = sanitize(params.get("utm_source"), SAFE_CAMPAIGN_SOURCES);
  const medium = sanitize(params.get("utm_medium"), SAFE_CAMPAIGN_MEDIUMS);
  return {
    ...(source ? { campaign_source: source } : {}),
    ...(medium ? { campaign_medium: medium } : {}),
  };
}

export function sanitizeAnalyticsUrl(value: string, defaultOrigin = "https://dailyoratory.faith"): string {
  try {
    const url = new URL(value, defaultOrigin);
    return `${url.origin}${getAnalyticsPagePath(url.pathname)}`;
  } catch {
    return defaultOrigin;
  }
}

export function sanitizeAnalyticsEventParams(
  params: Record<string, string | number | boolean | null | undefined>,
): Record<string, string | number | boolean> {
  const clean: Record<string, string | number | boolean> = {};

  for (const [key, value] of Object.entries(params)) {
    if (
      value === undefined || value === null ||
      !ALLOWED_EVENT_PARAMS.has(key) ||
      ALWAYS_REDACTED_EVENT_PARAMS.has(key)
    ) continue;

    if (typeof value === "string") {
      const sanitized = key === "page_path"
        ? getAnalyticsPagePath(pathnameOnly(value))
        : ["href", "destination"].includes(key)
          ? sanitizeAnalyticsUrl(value)
        : value.trim().slice(0, 100);
      if (sanitized) clean[key] = sanitized;
    } else {
      clean[key] = value;
    }
  }

  return clean;
}
