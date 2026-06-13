import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { DevotionDetailSection } from "@/components/devotions/DevotionDetailSection";
import { DevotionMisunderstandings } from "@/components/devotions/DevotionMisunderstandings";
import { DevotionPrayerGuide } from "@/components/devotions/DevotionPrayerGuide";
import { DevotionSourceNotes } from "@/components/devotions/DevotionSourceNotes";
import { ExploreEachDecade } from "@/components/rosary/ExploreEachDecade";
import { RelatedDevotionTools } from "@/components/devotions/RelatedDevotionTools";
import { RelatedDevotions } from "@/components/devotions/RelatedDevotions";
import { TrustedDevotionLinks } from "@/components/devotions/TrustedDevotionLinks";
import { RosaryBeginnerTips } from "@/components/rosary/RosaryBeginnerTips";
import { RosaryDaySchedule } from "@/components/rosary/RosaryDaySchedule";
import { RosaryGospelPrayer } from "@/components/rosary/RosaryGospelPrayer";
import { HolyRosaryHero } from "@/components/rosary/HolyRosaryHero";
import { RosaryHowToPray } from "@/components/rosary/RosaryHowToPray";
import { RosaryMysteryGroups } from "@/components/rosary/RosaryMysteryGroups";
import { RosaryPrayerRoomCTA } from "@/components/rosary/RosaryPrayerRoomCTA";
import { RosaryRelatedLinks } from "@/components/rosary/RosaryRelatedLinks";
import { TodaysRosaryMysteries } from "@/components/rosary/TodaysRosaryMysteries";
import { WhatIsRosary } from "@/components/rosary/WhatIsRosary";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { getDevotionBySlug, getRelatedDevotions, getTrustedLinksForDevotion } from "@/lib/devotions";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const baseMetadata = createPageMetadata({
  title: "The Holy Rosary | Daily Oratory",
  description:
    "Learn how to pray the Holy Rosary, explore the Joyful, Luminous, Sorrowful, and Glorious Mysteries, and enter the Rosary Prayer Room.",
  path: "/devotions/holy-rosary",
  keywords: [
    "rosary",
    "holy rosary",
    "joyful mysteries",
    "luminous mysteries",
    "sorrowful mysteries",
    "glorious mysteries",
    "decade",
    "Mary",
    "Hail Mary",
    "Our Father",
    "Gospel prayer",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: "The Holy Rosary",
    description:
      "Learn how to pray the Holy Rosary, explore the mysteries, and enter the Rosary Prayer Room.",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "The Holy Rosary",
    description:
      "Learn how to pray the Holy Rosary, explore the mysteries, and enter the Rosary Prayer Room.",
  },
};

export default function HolyRosaryPage() {
  const devotion = getDevotionBySlug("holy-rosary");
  if (!devotion) notFound();

  const trustedLinks = getTrustedLinksForDevotion(devotion.id);
  const relatedDevotions = getRelatedDevotions(devotion);
  const breadcrumbItems = [
    { name: "Pray", path: "/pray" },
    { name: "Devotions", path: "/devotions" },
    { name: "Holy Rosary", path: "/devotions/holy-rosary" },
  ];

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "The Holy Rosary",
              description:
                "Learn how to pray the Holy Rosary, explore the Joyful, Luminous, Sorrowful, and Glorious Mysteries, and enter the Rosary Prayer Room.",
              path: "/devotions/holy-rosary",
            }),
            buildArticleStructuredData({
              headline: "The Holy Rosary",
              description:
                "Learn how to pray the Holy Rosary, explore the Joyful, Luminous, Sorrowful, and Glorious Mysteries, and enter the Rosary Prayer Room.",
              path: "/devotions/holy-rosary",
              keywords: baseMetadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList(breadcrumbItems),
          ]}
        />
        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Devotions", href: "/devotions" }, { label: "Holy Rosary" }]} />

        <div className="mt-8">
          <HolyRosaryHero />
        </div>

        <div className="mt-10">
          <RosaryPrayerRoomCTA
            title="Pray the Rosary Live"
            description="Join the Daily Oratory Rosary Prayer Room and pray with others."
            buttonLabel="Open Rosary Prayer Room"
            href="/rosary"
            eventName="rosary_prayer_room_click"
            eventParams={{ destination: "/rosary" }}
          />
        </div>

        <div className="mt-14">
          <WhatIsRosary />
        </div>

        <div className="mt-14">
          <RosaryHowToPray />
        </div>

        <div className="mt-14">
          <RosaryMysteryGroups />
        </div>

        <div className="mt-14">
          <TodaysRosaryMysteries />
        </div>

        <div className="mt-14">
          <RosaryDaySchedule />
        </div>

        <div className="mt-14">
          <RosaryBeginnerTips />
        </div>

        <div className="mt-14">
          <ExploreEachDecade />
        </div>

        <div className="mt-14">
          <RosaryGospelPrayer />
        </div>

        <div className="mt-14">
          <RosaryPrayerRoomCTA
            eyebrow="Pray with others"
            title="The Rosary Prayer Room Is Ready When You Are"
            description="The Rosary can be prayed quietly alone, with family, or with others. The Daily Oratory Rosary Prayer Room is a place to begin, return, and pray in communion with others."
            buttonLabel="Enter the Rosary Prayer Room"
            href="/rosary"
            eventName="rosary_prayer_room_click"
            eventParams={{ destination: "/rosary" }}
          />
        </div>

        <div className="mt-14">
          <RosaryRelatedLinks />
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic life</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Mary and the Rosary in Catholic Life</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              See how the Rosary belongs to a larger Catholic rhythm of prayer, Mass, Confession,
              Scripture, grace, family life, and hope.
            </p>
            <div className="mt-6">
              <Link href="/catholic-life" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Open the Catholic Life Roadmap
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Prayer Library", href: "/prayers" },
                { label: "The Angelus", href: "/prayers/angelus" },
                { label: "Regina Caeli", href: "/prayers/regina-caeli" },
                { label: "Confession Guide", href: "/confession" },
                { label: "Lent and Fasting Guide", href: "/liturgical-living/lent" },
                { label: "Catholic Q&A", href: "/catholic-answers" },
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
        </div>

        <div className="mt-16 border-t border-stone/80 pt-14">
          <SectionHeader
            eyebrow="More guidance"
            title="More About This Devotion"
            summary="The original Daily Oratory Holy Rosary guidance remains here so you can keep the older formation notes and trusted links in one place."
          />

          <div className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <DevotionDetailSection
              eyebrow="What this devotion is"
              title="What this devotion is"
              paragraphs={[devotion.longDescription]}
            />
            <DevotionDetailSection
              eyebrow="Why Catholics practice it"
              title="Why it matters"
              items={devotion.whyPractice}
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <DevotionDetailSection title="Spiritual fruits" items={devotion.spiritualFruits} />
            <DevotionDetailSection title="Theological focus" items={devotion.theologicalFocus} />
            <DevotionDetailSection title="When to practice" items={devotion.whenToPractice} />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <DevotionDetailSection title="How to begin" items={devotion.howToBegin} />
            <DevotionDetailSection title="Suggested prayer rhythm" items={devotion.suggestedRhythm} />
          </div>

          <div className="mt-6">
            <DevotionPrayerGuide devotion={devotion} />
          </div>

          <div className="mt-6">
            <DevotionMisunderstandings devotion={devotion} />
          </div>

          <div className="mt-6">
            <TrustedDevotionLinks links={trustedLinks} />
          </div>

          <div className="mt-6">
            <RelatedDevotionTools links={devotion.relatedDailyOratoryLinks} />
          </div>

          <div className="mt-6">
            <RelatedDevotions devotions={relatedDevotions} />
          </div>

          <div className="mt-6">
            <DevotionSourceNotes notes={devotion.sourceNotes} />
          </div>
        </div>
      </main>
    </div>
  );
}
