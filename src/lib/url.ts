import { brand } from "@/config/brand";

export const SITE_URL = (brand.canonicalUrl || "https://dailyoratory.faith").replace(/\/+$/, "");

const DAILY_ORATORY_HOSTS = new Set([
  brand.domain.toLowerCase(),
  `www.${brand.domain.toLowerCase()}`,
]);

const MALFORMED_PATTERNS = [
  { pattern: /dailyoratory\.faith\/https?:\/\//i, reason: "contains a duplicated domain followed by another URL" },
  { pattern: /\/https?:\/\//i, reason: "contains an embedded absolute URL in the path" },
  { pattern: /%20https?:\/\//i, reason: "contains an encoded second URL" },
  { pattern: /\shttps?:\/\//i, reason: "contains a space-separated second URL" },
];

export class UrlValidationError extends Error {
  constructor(
    message: string,
    public readonly value: string,
  ) {
    super(message);
    this.name = "UrlValidationError";
  }
}

export function isAbsoluteUrl(value: string): boolean {
  return /^https?:\/\//i.test(value.trim());
}

export function isDailyOratoryUrl(value: string): boolean {
  if (!isAbsoluteUrl(value)) return false;

  try {
    const url = new URL(value.trim());
    return DAILY_ORATORY_HOSTS.has(url.hostname.toLowerCase());
  } catch {
    return false;
  }
}

export function isInternalHref(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return true;
  if (isDailyOratoryUrl(trimmed)) return true;
  if (isAbsoluteUrl(trimmed)) return false;
  return !hasNonHttpScheme(trimmed);
}

export function hasMalformedUrlPattern(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;

  if (MALFORMED_PATTERNS.some(({ pattern }) => pattern.test(trimmed))) {
    return true;
  }

  const protocolMatches = trimmed.match(/https?:\/\//gi) ?? [];
  if (protocolMatches.length > 1) {
    return true;
  }

  if (/\s/.test(trimmed) && (isInternalHref(trimmed) || isDailyOratoryUrl(trimmed))) {
    return true;
  }

  return false;
}

export function validateSingleUrl(value: string): { ok: boolean; reason?: string } {
  const trimmed = value.trim();
  if (!trimmed) {
    return { ok: true };
  }

  for (const { pattern, reason } of MALFORMED_PATTERNS) {
    if (pattern.test(trimmed)) {
      return { ok: false, reason };
    }
  }

  const protocolMatches = trimmed.match(/https?:\/\//gi) ?? [];
  if (protocolMatches.length > 1) {
    return { ok: false, reason: "contains more than one absolute URL" };
  }

  if (/\s/.test(trimmed) && (isInternalHref(trimmed) || isDailyOratoryUrl(trimmed))) {
    return { ok: false, reason: "contains whitespace inside an internal URL" };
  }

  try {
    if (isAbsoluteUrl(trimmed)) {
      new URL(trimmed);
      return { ok: true };
    }

    if (hasNonHttpScheme(trimmed)) {
      return { ok: true };
    }

    normalizeRelativePath(trimmed);
    return { ok: true };
  } catch {
    return { ok: false, reason: "is not a valid URL or path" };
  }
}

export function assertSingleUrl(value: string): string {
  const trimmed = value.trim();
  const validation = validateSingleUrl(trimmed);

  if (!validation.ok) {
    const reason = validation.reason ?? "invalid URL";
    warnUrlIssue(reason, trimmed);
    throw new UrlValidationError(reason, trimmed);
  }

  return trimmed;
}

export function normalizeInternalHref(value: string): string {
  const trimmed = assertSingleUrl(value);
  if (!trimmed) return "/";

  if (isAbsoluteUrl(trimmed)) {
    const parsed = new URL(trimmed);
    if (!DAILY_ORATORY_HOSTS.has(parsed.hostname.toLowerCase())) {
      return parsed.toString();
    }

    return normalizeRelativePath(`${parsed.pathname}${parsed.search}${parsed.hash}`);
  }

  if (hasNonHttpScheme(trimmed)) {
    return trimmed;
  }

  return normalizeRelativePath(trimmed);
}

export function absoluteUrl(value: string): string {
  const trimmed = assertSingleUrl(value);
  if (!trimmed) return SITE_URL;

  if (isAbsoluteUrl(trimmed)) {
    const parsed = new URL(trimmed);
    if (!DAILY_ORATORY_HOSTS.has(parsed.hostname.toLowerCase())) {
      return parsed.toString();
    }

    return `${SITE_URL}${normalizeRelativePath(`${parsed.pathname}${parsed.search}${parsed.hash}`)}`;
  }

  if (hasNonHttpScheme(trimmed)) {
    return trimmed;
  }

  return `${SITE_URL}${normalizeRelativePath(trimmed)}`;
}

function normalizeRelativePath(value: string): string {
  const match = value.match(/^([^?#]*)(.*)$/);
  const rawPath = (match?.[1] ?? value).trim();
  const suffix = match?.[2] ?? "";
  const withLeadingSlash = rawPath
    ? rawPath.startsWith("/")
      ? rawPath
      : `/${rawPath}`
    : "/";

  const collapsedPath = withLeadingSlash.replace(/\/{2,}/g, "/");
  return `${collapsedPath || "/"}${suffix}`;
}

function hasNonHttpScheme(value: string): boolean {
  return /^[a-z][a-z0-9+.-]*:/i.test(value.trim()) && !isAbsoluteUrl(value);
}

function warnUrlIssue(reason: string, value: string) {
  if (process.env.NODE_ENV !== "production") {
    console.warn(`[url] ${reason}: ${value}`);
  }
}
