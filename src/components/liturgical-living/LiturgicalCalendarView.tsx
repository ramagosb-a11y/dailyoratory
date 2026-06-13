import Link from "next/link";
import { LiturgicalColorPill, LiturgicalSubnav, VerificationNote } from "@/components/liturgical-living/LiturgicalLivingCards";
import { SectionHeader } from "@/components/section-header";
import {
  liturgicalCalendarImportHref,
  liturgicalGoogleCalendarEmbedUrl,
  liturgicalGoogleCalendarId,
} from "@/config/liturgicalCalendar";
import { diocesanVerificationNote } from "@/data/liturgicalLiving";
import { formatRank, getCalendarMonthModel } from "@/lib/liturgicalLiving";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function LiturgicalCalendarView() {
  const month = getCalendarMonthModel();

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <LiturgicalSubnav />
        <SectionHeader
          eyebrow="Liturgical Living"
          title={`${month.label} calendar`}
          summary="The Daily Oratory liturgical Google Calendar is embedded here, with a PDF-derived local summary retained for fast browsing and diocesan verification."
        />
        <div className="mt-6">
          <VerificationNote note={diocesanVerificationNote} />
        </div>
        <section className="dashboard-card mt-8 overflow-hidden p-4 sm:p-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-burgundy">Google Calendar Source</p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Daily Oratory liturgical calendar</h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
                The homepage uses this calendar when a matching day is available, then falls back to the USCCB PDF-derived
                local calendar if Google Calendar is unavailable.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={`https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(liturgicalGoogleCalendarId)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary focus-ring justify-center"
              >
                Open in Google Calendar
              </a>
              <Link href={liturgicalCalendarImportHref} className="btn btn-primary focus-ring justify-center">
                Download import file
              </Link>
            </div>
          </div>
          <div className="mt-5 overflow-hidden rounded-md border border-stone bg-ivory">
            <iframe
              title="Daily Oratory liturgical Google Calendar"
              src={liturgicalGoogleCalendarEmbedUrl}
              className="h-[640px] w-full border-0 sm:h-[760px]"
              loading="lazy"
            />
          </div>
        </section>

        <div className="mt-8 hidden rounded-md border border-stone bg-ivory shadow-sm sm:block">
          <div className="grid grid-cols-7 border-b border-stone">
            {weekdays.map((day) => (
              <div key={day} className="px-3 py-3 text-xs font-bold uppercase text-burgundy">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {month.leadingBlanks.map((blank) => (
              <div key={`blank-${blank}`} className="min-h-32 border-b border-r border-stone bg-parchment/40" />
            ))}
            {month.days.map((cell) => (
              <article
                key={cell.date}
                className={`min-h-32 border-b border-r border-stone p-3 ${cell.isToday ? "bg-gold-soft/40" : "bg-ivory"}`}
              >
                <p className="text-sm font-bold text-navy">{cell.dayNumber}</p>
                {cell.record ? (
                  <div className="mt-2">
                    <p className="text-xs font-bold uppercase text-burgundy">{formatRank(cell.record.rank)}</p>
                    <h2 className="mt-1 text-sm font-bold leading-5 text-navy">{cell.record.title}</h2>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {cell.record.colors.map((color) => (
                        <LiturgicalColorPill key={`${cell.date}-${color}`} color={color} />
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:hidden">
          {month.days
            .filter((cell) => cell.record || cell.isToday)
            .map((cell) => (
              <article key={cell.date} className={`card p-4 ${cell.isToday ? "border-gold" : ""}`}>
                <p className="text-xs font-bold uppercase text-burgundy">{cell.date}</p>
                <h2 className="font-display mt-1 text-2xl font-semibold text-navy">
                  {cell.record?.title ?? "Today"}
                </h2>
                {cell.record ? (
                  <>
                    <p className="mt-2 text-sm leading-6 text-muted">{cell.record.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cell.record.colors.map((color) => (
                        <LiturgicalColorPill key={`${cell.date}-mobile-${color}`} color={color} />
                      ))}
                    </div>
                  </>
                ) : null}
              </article>
            ))}
        </div>

        <div className="mt-8 dashboard-card p-5">
          <p className="text-xs font-bold uppercase text-burgundy">Official readings</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Use citations, then link outward</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Daily Oratory stores reading references and links to the official readings source rather than copying daily reading text.
          </p>
          <Link href="https://bible.usccb.org/" className="btn btn-primary focus-ring mt-5" target="_blank" rel="noreferrer">
            Open official daily readings
          </Link>
        </div>
      </section>
    </div>
  );
}
