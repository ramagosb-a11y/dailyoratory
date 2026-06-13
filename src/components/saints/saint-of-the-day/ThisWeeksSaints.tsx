import Link from "next/link";
import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";

export function ThisWeeksSaints({ entries }: { entries: SaintOfTheDayEntry[] }) {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">This Week</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">This Week&apos;s Saints</h2>
      {entries.length ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {entries.map((entry) => (
            <Link key={entry.id} href={`/saints/saint-of-the-day?date=${entry.dateKey}`} className="card-parchment block p-5">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">{entry.dateKey}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{entry.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{entry.shortDescription}</p>
              {entry.virtue ? (
                <p className="mt-3 text-sm leading-7 text-muted">
                  <span className="font-semibold text-navy">Virtue:</span> {entry.virtue}
                </p>
              ) : null}
            </Link>
          ))}
        </div>
      ) : (
        <div className="card-parchment mt-6 p-5 text-sm leading-7 text-muted">
          More Daily Oratory saint entries are being added. Use the external calendars below for the full daily calendar.
        </div>
      )}
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/saints/calendar" className="btn btn-secondary focus-ring justify-center">
          Saint Calendar
        </Link>
        <Link href="/saints" className="btn btn-secondary focus-ring justify-center">
          Saints Library
        </Link>
      </div>
    </section>
  );
}
