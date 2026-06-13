import { NextResponse } from "next/server";
import { contactFailureMessage, normalizeContactSubmission, sendContactEmail, validateContactSubmission } from "@/lib/contact";

export async function POST(request: Request) {
  try {
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
