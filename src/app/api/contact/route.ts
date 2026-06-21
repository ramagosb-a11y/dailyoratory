import { NextRequest, NextResponse } from "next/server";
import { brand } from "@/config/brand";
import { contactFailureMessage, normalizeContactSubmission, sendContactEmail, validateContactSubmission } from "@/lib/contact";
import {
  getClientIpAddress,
  isAllowedFormOrigin,
  isRateLimited,
  looksLikeAutomatedUserAgent,
} from "@/lib/requestProtection";

const allowedFormHosts = [brand.domain, "www.dailyoratory.faith", "vercel.app", "localhost", "127.0.0.1"];

export async function POST(request: NextRequest) {
  try {
    const userAgent = request.headers.get("user-agent") ?? "";
    if (looksLikeAutomatedUserAgent(userAgent)) {
      return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 403 });
    }

    if (!isAllowedFormOrigin(request, { allowedHosts: allowedFormHosts })) {
      return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 403 });
    }

    const ipAddress = getClientIpAddress(request);
    const rateLimit = isRateLimited(`contact:${ipAddress}`, { windowMs: 10 * 60 * 1000, maxRequests: 5 });
    if (rateLimit.limited) {
      const retryAfterSeconds = Math.max(1, Math.ceil((rateLimit.resetAt - Date.now()) / 1000));
      return NextResponse.json(
        { ok: false, error: "Too many messages sent too quickly. Please wait a few minutes and try again." },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfterSeconds),
          },
        },
      );
    }

    const body = await request.json();
    const submission = normalizeContactSubmission(body);

    if (submission.company) {
      return NextResponse.json({ ok: true });
    }

    const validationError = validateContactSubmission(submission);
    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    await sendContactEmail(submission);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown contact form error.";
    console.error("Contact form delivery failed:", message);

    return NextResponse.json(
      {
        ok: false,
        error: contactFailureMessage,
      },
      { status: 500 },
    );
  }
}
