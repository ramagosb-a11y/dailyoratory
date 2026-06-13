import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SaintVirtueBadge } from "@/components/saints/SaintVirtueBadge";
import { getSaintOfTheDay } from "@/lib/saints";
import { SaintPrayerMiniCard } from "@/components/saints/SaintPrayerMiniCard";

export function SaintOfTheDayCard({ date = new Date() }: { date?: Date }) {
  const saint = getSaintOfTheDay(date);

  if (!saint) {
    return (
      <section className="mt-16">
        <p className="liturgical-section-eyebrow">Today</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Saint of the Day</h2>
        <div className="card-parchment mt-6 p-6">
          <p className="text-sm leading-7 text-muted">
            Explore today&apos;s saint using trusted external Catholic sources while the local saint-of-the-day entry is being expanded.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="https://www.vaticannews.va/en/saints.html"
              external
              className="btn btn-secondary focus-ring justify-center"
              eventName="saint_external_resource_click"
              eventParams={{ resource_name: "Vatican News Saint of the Day", page_path: "/saints" }}
            >
              Vatican News Saint of the Day
            </TrackedLink>
            <TrackedLink
              href="https://www.franciscanmedia.org/saint-of-the-day/"
              external
              className="btn btn-secondary focus-ring justify-center"
              eventName="saint_external_resource_click"
              eventParams={{ resource_name: "Franciscan Media Saint of the Day", page_path: "/saints" }}
            >
              Franciscan Media
            </TrackedLink>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Today</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Saint of the Day</h2>
      <div className="card-parchment liturgical-card-accent mt-6 grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{saint.feastDay}</p>
          <h3 className="font-display mt-3 text-4xl font-semibold text-navy">{saint.name}</h3>
          <p className="mt-2 text-sm font-semibold text-navy">{saint.title}</p>
          <p className="mt-4 text-sm leading-7 text-muted">{saint.shortDescription}</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            <span className="font-semibold text-navy">Why this saint matters:</span> {saint.whyThisSaintMatters}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <SaintVirtueBadge label="Virtue to imitate" value={saint.keyVirtue} />
            {saint.fruitOfTheSpirit ? <SaintVirtueBadge label="Fruit of the Spirit" value={saint.fruitOfTheSpirit} /> : null}
          </div>
          <p className="mt-5 rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
            <span className="font-semibold text-navy">Practice today:</span> {saint.imitateToday}
          </p>
        </div>

        <aside className="rounded-2xl border border-stone bg-ivory p-5">
          <SaintPrayerMiniCard
            prayer={saint.shortPrayer}
            pagePath="/saints/saint-of-the-day"
            sourceSection="saint-of-the-day-page"
            anchorId="prayer"
          />
          <div className="mt-5 flex flex-col gap-3">
            <Link href={`/saints/${saint.slug}`} className="btn liturgical-button focus-ring justify-center">
              Learn More
            </Link>
            <Link href="/saints/saint-of-the-day" className="btn btn-secondary focus-ring justify-center">
              Saint of the Day Page
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
