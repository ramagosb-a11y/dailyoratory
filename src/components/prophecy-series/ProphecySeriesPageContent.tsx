import Link from "next/link";
import { HowToFollowSeries } from "@/components/prophecy-series/HowToFollowSeries";
import { PrayerBeforeWatching } from "@/components/prophecy-series/PrayerBeforeWatching";
import { ProphecyDiscernmentNote } from "@/components/prophecy-series/ProphecyDiscernmentNote";
import { ProphecyEpisodeTracker } from "@/components/prophecy-series/ProphecyEpisodeTracker";
import { ProphecyPlaylistEmbed } from "@/components/prophecy-series/ProphecyPlaylistEmbed";
import { ProphecyPremiereCard } from "@/components/prophecy-series/ProphecyPremiereCard";
import { ProphecyReflectionPrompts } from "@/components/prophecy-series/ProphecyReflectionPrompts";
import { ProphecyRelatedLinks } from "@/components/prophecy-series/ProphecyRelatedLinks";
import { ProphecySeriesHero } from "@/components/prophecy-series/ProphecySeriesHero";
import { ProphecySeriesOverview } from "@/components/prophecy-series/ProphecySeriesOverview";
import { ProphecySubscribeCTA } from "@/components/prophecy-series/ProphecySubscribeCTA";

export function ProphecySeriesPageContent() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <ProphecySeriesHero />
        <ProphecyPremiereCard />
        <ProphecyPlaylistEmbed />
        <ProphecySeriesOverview />
        <ProphecyEpisodeTracker />
        <HowToFollowSeries />
        <PrayerBeforeWatching />
        <ProphecyReflectionPrompts />
        <section className="card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related formation</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Charisms, Prophecy, and Discernment</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            Keep prophecy grounded in Catholic discernment, humility, obedience, and the good of the Church.
          </p>
          <div className="mt-6">
            <Link href="/formation/grace/charisms" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Learn About Charisms
            </Link>
          </div>
        </section>
        <section className="card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic foundation</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">The Last Things</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            Prophecy should always lead us deeper into Christ, conversion, hope, Scripture, and Church teaching.
            Explore Catholic eschatology as the doctrinal foundation for thinking about final things with peace and faith.
          </p>
          <div className="mt-6">
            <Link href="/formation/eschatology" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Learn Catholic Eschatology
            </Link>
          </div>
        </section>
        <section className="card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Priority guides</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Keep prophecy grounded in the wider Catholic life</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            Let prophecy study remain connected to prayer, mercy, formation, and a clear Catholic path of discipleship.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { label: "Catholic Life Roadmap", href: "/catholic-life" },
              { label: "Catholic Q&A", href: "/catholic-answers" },
              { label: "Prayer Library", href: "/prayers" },
              { label: "What Should I Do?", href: "/what-should-i-do" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
        <ProphecyRelatedLinks />
        <ProphecyDiscernmentNote />
        <ProphecySubscribeCTA />
      </main>
    </div>
  );
}
