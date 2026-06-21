const DEFAULT_WINDOW_MS = 10 * 60 * 1000;
const DEFAULT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export function getClientIpAddress(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  return "unknown";
}

export function isRateLimited(
  key: string,
  options: { windowMs?: number; maxRequests?: number } = {},
) {
  const windowMs = options.windowMs ?? DEFAULT_WINDOW_MS;
  const maxRequests = options.maxRequests ?? DEFAULT_MAX_REQUESTS;
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    pruneRateLimitStore(now);
    return { limited: false, remaining: maxRequests - 1, resetAt: now + windowMs };
  }

  if (current.count >= maxRequests) {
    return { limited: true, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  rateLimitStore.set(key, current);
  return { limited: false, remaining: maxRequests - current.count, resetAt: current.resetAt };
}

export function isAllowedFormOrigin(request: Request, options: { allowedHosts: string[] }) {
  const origin = request.headers.get("origin")?.trim();
  const referer = request.headers.get("referer")?.trim();
  const source = origin || referer;

  if (!source) {
    return false;
  }

  try {
    const parsed = new URL(source);
    const host = parsed.hostname.toLowerCase();
    return options.allowedHosts.some((allowedHost) => {
      const normalized = allowedHost.toLowerCase();
      return host === normalized || host.endsWith(`.${normalized}`);
    });
  } catch {
    return false;
  }
}

export function looksLikeAutomatedUserAgent(userAgent: string) {
  const normalized = userAgent.trim().toLowerCase();
  if (!normalized) return true;

  return [
    "bot",
    "spider",
    "crawler",
    "curl",
    "wget",
    "python-requests",
    "python-urllib",
    "go-http-client",
    "node-fetch",
    "axios",
    "postmanruntime",
  ].some((token) => normalized.includes(token));
}

function pruneRateLimitStore(now: number) {
  if (rateLimitStore.size < 200) return;

  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }
}
