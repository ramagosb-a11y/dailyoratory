import { NextResponse } from "next/server";
import { isValidDailyOratoryUrl, submitUrlsToIndexNow } from "@/lib/indexnow";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const configuredSecret = process.env.INDEXNOW_SECRET?.trim();
  const providedSecret = request.headers.get("x-indexnow-secret")?.trim();

  if (!configuredSecret) {
    return NextResponse.json(
      { ok: false, error: "IndexNow secret is not configured." },
      { status: 503 },
    );
  }

  if (!providedSecret || providedSecret !== configuredSecret) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const urls = Array.isArray(body?.urls) ? body.urls : null;

    if (!urls) {
      return NextResponse.json(
        { ok: false, error: "Request body must include a urls array." },
        { status: 400 },
      );
    }

    if (urls.length > 100) {
      return NextResponse.json(
        { ok: false, error: "You can submit at most 100 URLs per request." },
        { status: 400 },
      );
    }

    const invalidUrls = urls.filter((url: unknown): boolean => {
      return typeof url !== "string" || !isValidDailyOratoryUrl(url);
    });
    if (invalidUrls.length) {
      return NextResponse.json(
        {
          ok: false,
          error: "One or more URLs are invalid, external, private, or malformed.",
          invalidUrls,
        },
        { status: 400 },
      );
    }

    const result = await submitUrlsToIndexNow(urls);

    return NextResponse.json(
      {
        ok: result.ok,
        submittedCount: result.submittedCount,
        indexNowStatus: result.status,
        skipped: result.skipped,
        reason: result.reason,
      },
      { status: result.ok ? 200 : 502 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown IndexNow error.";
    console.error("IndexNow API submission failed:", message);

    return NextResponse.json(
      { ok: false, error: "Unable to submit URLs to IndexNow." },
      { status: 500 },
    );
  }
}
