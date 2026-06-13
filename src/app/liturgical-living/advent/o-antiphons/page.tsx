import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { OAntiphonCards } from "@/components/liturgical-living/OAntiphonCards";
import { OAntiphonFulfillmentTable } from "@/components/liturgical-living/OAntiphonFulfillmentTable";
import { OAntiphonsFamilyTradition } from "@/components/liturgical-living/OAntiphonsFamilyTradition";
import { OAntiphonsHero } from "@/components/liturgical-living/OAntiphonsHero";
import { OAntiphonsHomePrayerGuide } from "@/components/liturgical-living/OAntiphonsHomePrayerGuide";
import { OAntiphonsRelatedLinks } from "@/components/liturgical-living/OAntiphonsRelatedLinks";
import { SevenDoorsOfTheHeart } from "@/components/liturgical-living/SevenDoorsOfTheHeart";
import { TodayOAntiphonCard } from "@/components/liturgical-living/TodayOAntiphonCard";
import { getOAntiphons } from "@/data/oAntiphons";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "O Antiphons | Final Days of Advent | Daily Oratory",
  description:
    "Pray the O Antiphons from December 17–23 and prepare for Christmas by calling upon Christ as Wisdom, Lord, Root of Jesse, Key of David, Radiant Dawn, King of Nations, and Emmanuel.",
  path: "/liturgical-living/advent/o-antiphons",
  keywords: [
    "O Antiphons",
    "Advent",
    "Christmas",
    "Catholic Advent prayers",
    "O Come O Come Emmanuel",
    "December 17",
    "December 18",
    "December 19",
    "December 20",
    "December 21",
    "December 22",
    "December 23",
  ],
});

export default function OAntiphonsPage() {
  const antiphons = getOAntiphons();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Liturgical Year", href: "/liturgical-living" },
            { label: "Advent", href: "/liturgical-living/advent" },
            { label: "O Antiphons" },
          ]}
        />

        <div className="mt-8 grid gap-8">
          <OAntiphonsHero />

          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">What are the O Antiphons?</h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              The O Antiphons are short, ancient prayers traditionally prayed from December 17 through December 23.
              Each one begins with “O” and addresses Christ by a biblical title. Together, they form a prayerful
              countdown to Christmas, teaching the soul to long for the Savior.
            </p>
            <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
              <li>They are prayed during the final days of Advent.</li>
              <li>Each antiphon names Christ with a scriptural title.</li>
              <li>They express longing, hope, and expectation.</li>
              <li>They help prepare the heart for the Nativity.</li>
              <li>They are connected to the Advent hymn “O Come, O Come Emmanuel.”</li>
            </ul>
          </section>

          <TodayOAntiphonCard />
          <OAntiphonCards antiphons={antiphons} />
          <OAntiphonFulfillmentTable antiphons={antiphons} />
          <OAntiphonsHomePrayerGuide />
          <OAntiphonsFamilyTradition />
          <SevenDoorsOfTheHeart antiphons={antiphons} />
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">After Christmas</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Follow the Star</h2>
            <p className="daily-readable-muted mt-4 max-w-3xl text-base leading-8 text-muted">
              The O Antiphons lead the heart to Christmas. Epiphany extends Christmas joy outward as Christ is
              revealed to the nations.
            </p>
            <div className="mt-6">
              <Link
                href="/liturgical-living/christmas/epiphany"
                className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
              >
                Explore Epiphany
              </Link>
            </div>
          </section>
          <OAntiphonsRelatedLinks />
        </div>
      </main>
    </div>
  );
}
