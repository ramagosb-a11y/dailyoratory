import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { bibleHero } from "@/data/biblePage";

export function BibleHero() {
  return (
    <section className="liturgical-page-hero card-parchment overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Sacred Scripture</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {bibleHero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-navy">{bibleHero.subtitle}</p>
          <p className="mt-6 max-w-4xl text-sm leading-8 text-muted">{bibleHero.copy}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TrackedLink
              href="https://bible.usccb.org/daily-bible-reading"
              external
              className="btn btn-gold focus-ring justify-center"
              eventName="bible_resource_click"
              eventParams={{
                category: "hero",
                item_slug: "usccb-daily-bible-reading",
                source: "/bible",
                destination: "https://bible.usccb.org/daily-bible-reading",
              }}
            >
              Read Today&apos;s Mass Readings
            </TrackedLink>
            <Link href="#catholic-view" className="btn btn-secondary focus-ring justify-center">
              How Catholics Read the Bible
            </Link>
            <Link href="#translations" className="btn btn-secondary focus-ring justify-center">
              Choose a Catholic Bible
            </Link>
          </div>
        </div>

        <aside className="rounded-[1.5rem] border border-gold/35 bg-ivory/90 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Source note</p>
          <p className="mt-3 text-sm leading-7 text-muted">{bibleHero.note}</p>
        </aside>
      </div>
    </section>
  );
}
