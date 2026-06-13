import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { syncScheduledMassReadingsCalendar } from "@/lib/massReadingsCalendarSync";
import { getMassReadingsGoogleSheetTag } from "@/lib/massReadingsGoogleSheets";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const CHICAGO_TIME_ZONE = "America/Chicago";

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  revalidateTag(getMassReadingsGoogleSheetTag(), "max");
  revalidatePath("/");
  revalidatePath("/reflect");
  revalidatePath("/reflections");
  revalidatePath("/reflections/mass-readings");
  revalidatePath("/reflections/mass-readings/archive");
  revalidatePath("/reflections/mass-readings/calendar");
  revalidatePath("/reflections/mass-readings/upcoming");
  revalidatePath("/sitemap.xml");

  const calendarSync = await syncScheduledMassReadingsCalendar();

  return NextResponse.json({
    ok: true,
    revalidated: true,
    message: "Mass readings reflections cache revalidated.",
    calendarSync,
    localTime: getChicagoTimestamp(new Date()),
    timeZone: CHICAGO_TIME_ZONE,
    refreshedAt: new Date().toISOString(),
  });
}

function isAuthorized(request: Request) {
  if (process.env.NODE_ENV !== "production") return true;

  const cronSecret = process.env.CRON_SECRET?.trim();
  const authorization = request.headers.get("authorization")?.trim() ?? "";
  if (cronSecret) {
    return authorization === `Bearer ${cronSecret}` || authorization === cronSecret;
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  const cronHeader = request.headers.get("x-vercel-cron") ?? "";
  return userAgent.startsWith("vercel-cron/") || cronHeader === "1";
}

function getChicagoTimestamp(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: CHICAGO_TIME_ZONE,
  }).format(date);
}
