import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ChoosePrayerByNeed } from "@/components/pray/ChoosePrayerByNeed";
import { CommunityPrayer } from "@/components/pray/CommunityPrayer";
import { DailyOratoryPrayerPath } from "@/components/pray/DailyOratoryPrayerPath";
import { ExternalPrayerResources } from "@/components/pray/ExternalPrayerResources";
import { FamilyPrayer } from "@/components/pray/FamilyPrayer";
import { PrayerAndSacraments } from "@/components/pray/PrayerAndSacraments";
import { PrayerAndScripture } from "@/components/pray/PrayerAndScripture";
import { PrayerCopyrightNote } from "@/components/pray/PrayerCopyrightNote";
import { PrayerFAQ } from "@/components/pray/PrayerFAQ";
import { PrayerForBeginners } from "@/components/pray/PrayerForBeginners";
import { PrayerLevels } from "@/components/pray/PrayerLevels";
import { PrayerMediaFeature } from "@/components/pray/PrayerMediaFeature";
import { PrayerLibraryCategories } from "@/components/pray/PrayerLibraryCategories";
import { PrayerObstacles } from "@/components/pray/PrayerObstacles";
import { PrayerRhythmBuilder } from "@/components/pray/PrayerRhythmBuilder";
import { PrayerToolsGrid } from "@/components/pray/PrayerToolsGrid";
import { PrayerTypesGrid } from "@/components/pray/PrayerTypesGrid";
import { PrayerWithMaryAndSaints } from "@/components/pray/PrayerWithMaryAndSaints";
import { PrayHero } from "@/components/pray/PrayHero";
import { RelatedPrayerTools } from "@/components/pray/RelatedPrayerTools";
import { SeasonalMarianPrayerCard } from "@/components/prayers/SeasonalMarianPrayerCard";
import { TopPrayerCards } from "@/components/pray/TopPrayerCards";
import { WhatIsPrayer } from "@/components/pray/WhatIsPrayer";
import Link from "next/link";
import { getMediaItemBySlug } from "@/lib/media";
import { createPageMetadata } from "@/lib/metadata";
import { getTopPrayers } from "@/lib/prayer";

export const revalidate = 900;

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Prayer",
  description:
    "Begin praying with Catholic prayers, learn the levels and types of prayer, build a daily prayer rhythm, and explore trusted Catholic prayer resources.",
  path: "/pray",
  keywords: [
    "Catholic prayer",
    "how to pray",
    "Catholic prayers",
    "levels of prayer",
    "vocal prayer",
    "meditation",
    "contemplative prayer",
    "Rosary",
    "Liturgy of the Hours",
    "Eucharistic Adoration",
    "prayer rhythm",
  ],
});

export default async function PrayPage() {
  const [prayers, featuredPrayerTalk] = await Promise.all([
    Promise.resolve(getTopPrayers()),
    getMediaItemBySlug("levels-of-prayer"),
  ]);

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Pray" }]} />

        <div className="mt-8">
          <PrayHero />
        </div>

        <div className="mt-14">
          <TopPrayerCards prayers={prayers} />
        </div>

        <div className="mt-14">
          <WhatIsPrayer />
        </div>

        <div className="mt-14">
          <PrayerLevels />
        </div>

        <div className="mt-14">
          <PrayerMediaFeature item={featuredPrayerTalk ?? null} />
        </div>

        <div className="mt-14">
          <PrayerTypesGrid />
        </div>

        <div className="mt-14">
          <ChoosePrayerByNeed />
        </div>

        <div className="mt-14">
          <PrayerRhythmBuilder />
        </div>

        <div className="mt-14">
          <PrayerForBeginners />
        </div>

        <div className="mt-14">
          <PrayerObstacles />
        </div>

        <div className="mt-14">
          <DailyOratoryPrayerPath />
        </div>

        <div className="mt-14">
          <PrayerToolsGrid />
        </div>

        <div className="mt-14">
          <PrayerAndSacraments />
        </div>

        <div className="mt-14">
          <PrayerAndScripture />
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Daily prayer rhythm</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Build a Daily Prayer Rhythm</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              See how morning prayer, Scripture, charity, the Rosary, Confession, and the liturgical year fit together
              in one steady Catholic rhythm.
            </p>
            <div className="mt-6">
              <Link href="/catholic-life#weekly-rhythm" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                See the Weekly Rhythm
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Scripture prayer and repentance</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">The Seven Penitential Psalms</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Pray Psalms 6, 32, 38, 51, 102, 130, and 143 as a traditional Catholic path of repentance, mercy,
              Confession, and renewed conversion.
            </p>
            <div className="mt-6">
              <Link href="/prayers/seven-penitential-psalms" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                The Seven Penitential Psalms
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer in grief and remembrance</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Prayers for the Dead</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Pray for deceased loved ones, souls in Purgatory, cemetery visits, anniversaries of death, and the hope of resurrection in Christ.
            </p>
            <div className="mt-6">
              <Link href="/formation/catholic-burial/prayers-for-the-dead" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Prayers for the Dead
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <PrayerWithMaryAndSaints />
        </div>

        <div className="mt-14">
          <SeasonalMarianPrayerCard />
        </div>

        <div className="mt-14">
          <FamilyPrayer />
        </div>

        <div className="mt-14">
          <CommunityPrayer />
        </div>

        <div className="mt-14">
          <PrayerLibraryCategories />
        </div>

        <div className="mt-14">
          <ExternalPrayerResources />
        </div>

        <div className="mt-14">
          <PrayerFAQ />
        </div>

        <div className="mt-14">
          <RelatedPrayerTools />
        </div>

        <div className="mt-14">
          <PrayerCopyrightNote />
        </div>
      </main>
    </div>
  );
}
