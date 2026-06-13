import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { formatFeastDate, getUpcomingSaintFeasts } from "@/lib/saints";

export function SaintCalendarPreview() {
  const upcoming = getUpcomingSaintFeasts(new Date(), 6);

  return (
    <section className="mt-16">
      <SectionHeader
        eyebrow="Feast calendar"
        title="Keep the saints close to the Church year."
        summary="Follow upcoming feast days, stay rooted in Daily Oratory's own saints calendar, and use trusted Catholic sources for deeper reading."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment liturgical-card-accent p-5">
          <h3 className="font-display text-3xl font-semibold text-navy">Upcoming feast days</h3>
          <div className="mt-5 grid gap-3">
            {upcoming.map(({ saint, nextOccurrence }) => (
              <Link key={`${saint.id}-${nextOccurrence.toISOString()}`} href={`/saints/${saint.slug}`} className="card focus-ring block p-4 hover:border-gold">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
                  {formatFeastDate(saint.feastDay)}
                </p>
                <h4 className="font-display mt-1 text-2xl font-semibold text-navy">{saint.name}</h4>
                <p className="mt-2 text-sm leading-6 text-muted">{saint.shortDescription}</p>
              </Link>
            ))}
          </div>
        </article>

        <aside className="grid gap-4">
          <article className="card-parchment p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">Daily Oratory saints calendar</h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              Browse saints month by month, connect feast days to prayer and the liturgical year, and keep your reading inside the Daily Oratory flow.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/saints/calendar" className="btn liturgical-button focus-ring justify-center">
                Open Saints Calendar
              </Link>
              <Link href="/saints/saint-of-the-day" className="btn btn-secondary focus-ring justify-center">
                Saint of the Day
              </Link>
            </div>
          </article>

          <article className="card-parchment p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">Trusted external calendar</h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              For an additional day-by-day Catholic saints reference, Franciscan Media offers a long-running Saint of the Day calendar. Use it as a supplement, not a replacement, for liturgical and local Church guidance.
            </p>
            <TrackedLink
              href="https://www.franciscanmedia.org/saint-of-the-day/calendar/"
              external
              className="btn btn-secondary focus-ring mt-6 justify-center"
              eventName="saint_external_resource_click"
              eventParams={{
                resource_name: "Franciscan Media Saint Calendar",
                page_path: "/saints",
              }}
            >
              Open Franciscan Media Calendar
            </TrackedLink>
          </article>
        </aside>
      </div>
    </section>
  );
}
