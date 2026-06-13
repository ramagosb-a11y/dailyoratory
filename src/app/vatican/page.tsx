import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { VaticanHero } from "@/components/vatican/VaticanHero";
import { WhatIsVatican } from "@/components/vatican/WhatIsVatican";
import { WhyVaticanMatters } from "@/components/vatican/WhyVaticanMatters";
import { VaticanLiveBroadcasts } from "@/components/vatican/VaticanLiveBroadcasts";
import { FeaturedVaticanVideos } from "@/components/vatican/FeaturedVaticanVideos";
import { VaticanVirtualTours } from "@/components/vatican/VaticanVirtualTours";
import { StPetersBasilicaSection } from "@/components/vatican/StPetersBasilicaSection";
import { SistineChapelSection } from "@/components/vatican/SistineChapelSection";
import { VaticanMuseumsSection } from "@/components/vatican/VaticanMuseumsSection";
import { VaticanHistoryTimeline } from "@/components/vatican/VaticanHistoryTimeline";
import { VaticanAndPope } from "@/components/vatican/VaticanAndPope";
import { VaticanAndMass } from "@/components/vatican/VaticanAndMass";
import { SacredArtAsPrayer } from "@/components/vatican/SacredArtAsPrayer";
import { VirtualPilgrimage } from "@/components/vatican/VirtualPilgrimage";
import { VaticanForExplorers } from "@/components/vatican/VaticanForExplorers";
import { VaticanOfficialSources } from "@/components/vatican/VaticanOfficialSources";
import { PlanVaticanVisit } from "@/components/vatican/PlanVaticanVisit";
import { VaticanFAQ } from "@/components/vatican/VaticanFAQ";
import { RelatedVaticanTools } from "@/components/vatican/RelatedVaticanTools";
import { VaticanCopyrightNote } from "@/components/vatican/VaticanCopyrightNote";

export const metadata: Metadata = createPageMetadata({
  title: "The Vatican | Vatican City, Saint Peter's Basilica, Live Mass, and Virtual Tours",
  description:
    "Explore the Vatican, Saint Peter's Basilica, the Sistine Chapel, Vatican Museums, Vatican history, official live broadcasts, papal events, virtual tours, and sacred art.",
  path: "/vatican",
  keywords: [
    "Vatican",
    "Vatican City",
    "Holy See",
    "Saint Peter's Basilica",
    "Sistine Chapel",
    "Vatican Museums",
    "Vatican live Mass",
    "Vatican Media Live",
    "Vatican News",
    "Pope",
    "papal Mass",
    "virtual Vatican tour",
    "Catholic sacred art",
  ],
});

export default function VaticanPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "The Vatican" }]} />

        <div className="mt-8">
          <VaticanHero />
        </div>
        <div className="mt-14">
          <WhatIsVatican />
        </div>
        <div className="mt-14">
          <WhyVaticanMatters />
        </div>
        <div className="mt-14">
          <VaticanLiveBroadcasts />
        </div>
        <div className="mt-14">
          <FeaturedVaticanVideos />
        </div>
        <div className="mt-14">
          <VaticanVirtualTours />
        </div>
        <div className="mt-14">
          <StPetersBasilicaSection />
        </div>
        <div className="mt-14">
          <SistineChapelSection />
        </div>
        <div className="mt-14">
          <VaticanMuseumsSection />
        </div>
        <div className="mt-14">
          <VaticanHistoryTimeline />
        </div>
        <div className="mt-14">
          <VaticanAndPope />
        </div>
        <div className="mt-14">
          <VaticanAndMass />
        </div>
        <div className="mt-14">
          <SacredArtAsPrayer />
        </div>
        <div className="mt-14">
          <VirtualPilgrimage />
        </div>
        <div className="mt-14">
          <VaticanForExplorers />
        </div>
        <div className="mt-14">
          <VaticanOfficialSources />
        </div>
        <div className="mt-14">
          <PlanVaticanVisit />
        </div>
        <div className="mt-14">
          <VaticanFAQ />
        </div>
        <div className="mt-14">
          <RelatedVaticanTools />
        </div>
        <div className="mt-14">
          <VaticanCopyrightNote />
        </div>
      </main>
    </div>
  );
}
