import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { AdorationHero } from "@/components/adoration/AdorationHero";
import { AdorationStreamRoom } from "@/components/adoration/AdorationStreamRoom";
import { WhatIsAdoration } from "@/components/adoration/WhatIsAdoration";
import { FirstTimeAdoration } from "@/components/adoration/FirstTimeAdoration";
import { HowToPrayAdoration } from "@/components/adoration/HowToPrayAdoration";
import { HolyHourGuide } from "@/components/adoration/HolyHourGuide";
import { ShortAdorationVisitGuide } from "@/components/adoration/ShortAdorationVisitGuide";
import { AdorationPrayerPathSelector } from "@/components/adoration/AdorationPrayerPathSelector";
import { AdorationScriptureCards } from "@/components/adoration/AdorationScriptureCards";
import { AdorationPrayerCards } from "@/components/adoration/AdorationPrayerCards";
import { AdorationAndMass } from "@/components/adoration/AdorationAndMass";
import { EucharisticSaints } from "@/components/adoration/EucharisticSaints";
import { AdorationForFamilies } from "@/components/adoration/AdorationForFamilies";
import { AdorationForExplorers } from "@/components/adoration/AdorationForExplorers";
import { AdorationFAQ } from "@/components/adoration/AdorationFAQ";
import { AdorationEtiquette } from "@/components/adoration/AdorationEtiquette";
import { FindAdorationNearYou } from "@/components/adoration/FindAdorationNearYou";
import { AdorationResources } from "@/components/adoration/AdorationResources";
import { RelatedAdorationTools } from "@/components/adoration/RelatedAdorationTools";
import { AdorationCopyrightNote } from "@/components/adoration/AdorationCopyrightNote";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Eucharistic Adoration | Live Perpetual Adoration and Prayer",
  description:
    "Pray before Jesus in Eucharistic Adoration with live and 24/7 perpetual adoration streams, a Holy Hour guide, beginner instructions, Scripture, prayers, and Catholic resources.",
  path: "/adoration",
  keywords: [
    "Eucharistic Adoration",
    "Adoration live stream",
    "perpetual adoration",
    "live Eucharistic Adoration",
    "perpetual adoration Melbourne",
    "Holy Hour",
    "Blessed Sacrament",
    "Catholic prayer",
    "Real Presence",
    "Eucharist",
    "Adoration prayers",
    "how to pray in Adoration",
  ],
});

export default function AdorationPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Eucharistic Adoration",
              description:
                "Pray before Jesus in Eucharistic Adoration with live and 24/7 perpetual adoration streams, a Holy Hour guide, beginner instructions, Scripture, prayers, and Catholic resources.",
              path: "/adoration",
            }),
            buildArticleStructuredData({
              headline: "Eucharistic Adoration",
              description:
                "Pray before Jesus in Eucharistic Adoration with live and 24/7 perpetual adoration streams, a Holy Hour guide, beginner instructions, Scripture, prayers, and Catholic resources.",
              path: "/adoration",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Adoration", path: "/adoration" },
            ]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Adoration" }]} />
        <AdorationNav />
        <div className="mt-8">
          <AdorationHero />
        </div>
        <div className="mt-10">
          <AdorationStreamRoom />
        </div>
        <div className="mt-10">
          <HolyHourGuide />
        </div>
        <div className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Popular live stream</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Looking for perpetual Adoration in Melbourne?</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
            Daily Oratory now has a dedicated page for the verified St Benedict&apos;s Melbourne stream, with a simpler
            prayer-focused path into live Adoration and the Holy Hour guide.
          </p>
          <div className="mt-6">
            <Link href="/adoration/melbourne" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Open Melbourne Adoration
            </Link>
          </div>
        </div>
        <div className="mt-14">
          <WhatIsAdoration />
        </div>
        <div className="mt-14">
          <FirstTimeAdoration />
        </div>
        <div className="mt-14">
          <HowToPrayAdoration />
        </div>
        <div className="mt-14">
          <ShortAdorationVisitGuide />
        </div>
        <div className="mt-14">
          <AdorationPrayerPathSelector />
        </div>
        <div className="mt-14">
          <AdorationScriptureCards />
        </div>
        <div className="mt-14">
          <AdorationPrayerCards />
        </div>
        <div className="mt-14">
          <AdorationAndMass />
        </div>
        <div className="mt-14">
          <EucharisticSaints />
        </div>
        <div className="mt-14">
          <AdorationForFamilies />
        </div>
        <div className="mt-14">
          <AdorationForExplorers />
        </div>
        <div className="mt-14">
          <AdorationFAQ />
        </div>
        <div className="mt-14">
          <AdorationEtiquette />
        </div>
        <div className="mt-14">
          <FindAdorationNearYou />
        </div>
        <div className="mt-14">
          <AdorationResources />
        </div>
        <div className="mt-14">
          <RelatedAdorationTools />
        </div>
        <div className="mt-14">
          <AdorationCopyrightNote />
        </div>
      </main>
    </div>
  );
}
