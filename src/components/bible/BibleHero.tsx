import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { bibleHero } from "@/data/biblePage";

export function BibleHero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-gold/40 bg-[radial-gradient(circle_at_88%_12%,rgba(226,193,94,0.28),transparent_19rem),radial-gradient(circle_at_4%_100%,rgba(72,122,121,0.3),transparent_24rem),linear-gradient(135deg,#0a1d2c,#142e40)] p-7 shadow-[0_24px_60px_rgba(8,27,41,0.26)] sm:p-10 lg:p-14">
      <div aria-hidden="true" className="absolute -right-20 top-20 h-64 w-64 rounded-full border border-gold/25" />
      <div aria-hidden="true" className="absolute -right-2 top-4 h-36 w-36 rounded-full border border-ivory/15" />
      <div className="relative max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Scripture for every reader</p>
        <h1 className="font-display mt-4 text-5xl font-semibold leading-[0.96] text-ivory sm:text-6xl lg:text-7xl">
          {bibleHero.title}
        </h1>
        <div className="mt-6 h-px w-24 bg-gold/75" />
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/95">{bibleHero.subtitle}</p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-ivory/75">{bibleHero.copy}</p>
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
          <Link href="/reflections/mass-readings" className="btn border border-ivory/40 bg-transparent text-ivory hover:border-gold hover:bg-ivory/10 focus-ring justify-center">
            Mass Readings Reflections
          </Link>
          <Link href="#books-of-the-bible" className="btn border border-ivory/40 bg-transparent text-ivory hover:border-gold hover:bg-ivory/10 focus-ring justify-center">
            Explore the Books of the Bible
          </Link>
        </div>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-gold/90">
          Begin · Read slowly · Find your next book
        </p>
      </div>
    </section>
  );
}
