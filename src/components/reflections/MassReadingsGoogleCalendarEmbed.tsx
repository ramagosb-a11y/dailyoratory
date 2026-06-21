import Link from "next/link";
import { getMassReadingsGoogleCalendarId, googleCalendars } from "@/config/googleCalendars";

function buildEmbedUrl() {
  const calendarId = getMassReadingsGoogleCalendarId();
  const params = new URLSearchParams({
    src: calendarId,
    ctz: googleCalendars.massReadingsTimeZone,
    mode: "MONTH",
    showTitle: "0",
    showPrint: "0",
    showCalendars: "0",
    showTabs: "0",
    showTz: "0",
    wkst: "1",
    bgcolor: "#fffdf7",
  });

  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
}

function buildOpenUrl() {
  const calendarId = getMassReadingsGoogleCalendarId();
  const params = new URLSearchParams({
    cid: calendarId,
  });

  return `https://calendar.google.com/calendar/u/0/r?${params.toString()}`;
}

export function MassReadingsGoogleCalendarEmbed() {
  return (
    <section className="mt-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Month calendar</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy sm:text-5xl">
            Upcoming reflection calendar
          </h2>
          <p className="daily-readable-muted mt-4 max-w-3xl">
            View upcoming Daily Oratory Mass Readings reflections in a month calendar layout. If the
            calendar is meant for public visitors, make sure this Google Calendar remains publicly
            shareable in Google Calendar settings.
          </p>
        </div>
        <Link
          href={buildOpenUrl()}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary focus-ring w-full justify-center md:w-auto"
        >
          Open in Google Calendar
        </Link>
      </div>

      <div className="card-parchment mt-8 overflow-hidden p-3 sm:p-4">
        <div className="overflow-hidden rounded-md border border-stone/70 bg-ivory">
          <iframe
            src={buildEmbedUrl()}
            title="Daily Oratory Mass Readings reflection calendar"
            className="h-[720px] w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
