const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const DAILY_ORATORY_HOST = "dailyoratory.faith";

const PRIVATE_PATH_PREFIXES = [
  "/api",
  "/dashboard",
  "/pathways/my-pathways",
  "/pathways/settings",
  "/saints/settings",
  "/saints/companions",
  "/sacraments/my-preparation",
  "/liturgical-living/settings",
  "/virtue-tracker/settings",
];

export type IndexNowSubmissionResult = {
  ok: boolean;
  submittedCount: number;
  status: number | null;
  skipped: string[];
  reason?: string;
};

export function isValidDailyOratoryUrl(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return false;
    if (parsed.hostname.toLowerCase() !== DAILY_ORATORY_HOST) return false;
    if (parsed.search || parsed.hash) return false;
    if (PRIVATE_PATH_PREFIXES.some((prefix) => parsed.pathname.startsWith(prefix))) return false;
    if (parsed.pathname === "/robots.txt" || parsed.pathname === "/sitemap.xml") return true;
    if (parsed.pathname.startsWith("/admin")) return false;
    return true;
  } catch {
    return false;
  }
}

export async function submitUrlToIndexNow(url: string) {
  return submitUrlsToIndexNow([url]);
}

export async function submitUrlsToIndexNow(urls: string[]): Promise<IndexNowSubmissionResult> {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key) {
    if (process.env.NODE_ENV !== "production") {
      console.info("IndexNow skipped: INDEXNOW_KEY is not configured.");
    }

    return {
      ok: false,
      submittedCount: 0,
      status: null,
      skipped: urls,
      reason: "missing-key",
    };
  }

  const normalizedUrls = Array.from(
    new Set(
      urls
        .map((value) => value.trim())
        .filter(Boolean),
    ),
  );
  const validUrls = normalizedUrls.filter(isValidDailyOratoryUrl);
  const skipped = normalizedUrls.filter((url) => !validUrls.includes(url));

  if (!validUrls.length) {
    return {
      ok: false,
      submittedCount: 0,
      status: null,
      skipped,
      reason: "no-valid-urls",
    };
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: DAILY_ORATORY_HOST,
      key,
      keyLocation: `https://${DAILY_ORATORY_HOST}/${key}.txt`,
      urlList: validUrls,
    }),
  });

  return {
    ok: response.ok,
    submittedCount: validUrls.length,
    status: response.status,
    skipped,
    ...(response.ok ? {} : { reason: "request-failed" }),
  };
}
