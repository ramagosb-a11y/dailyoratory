import type { Metadata } from "next";
import { VaticanICard } from "@/components/vatican/VaticanICard";
import { VaticanIICard } from "@/components/vatican/VaticanIICard";
import styles from "@/components/vatican/VaticanPage.module.css";
import { VaticanPhotoCredits } from "@/components/vatican/VaticanPhotos";
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
import { VaticanOfficialSources } from "@/components/vatican/VaticanOfficialSources";
import { PlanVaticanVisit } from "@/components/vatican/PlanVaticanVisit";
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
    <div className={styles.page}>
      <main className={styles.main}>
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "The Vatican" }]} />

        <VaticanHero />
        <div className={styles.flow}>
          <div><VaticanVirtualTours /></div>
          <div><WhatIsVatican /></div>
          <div><WhyVaticanMatters /></div>
          <div><VaticanLiveBroadcasts /></div>
          <div><FeaturedVaticanVideos /></div>
          <div><StPetersBasilicaSection /></div>
          <div><SistineChapelSection /></div>
          <div><VaticanMuseumsSection /></div>
          <div><VaticanHistoryTimeline /></div>
          <div><VaticanAndPope /></div>
          <div><VaticanAndMass /></div>
          <div><SacredArtAsPrayer /></div>
          <div id="official-sources"><VaticanOfficialSources /></div>
          <div><PlanVaticanVisit /></div>
          <div><VaticanCopyrightNote /></div>
          <div><VaticanPhotoCredits /></div>
          <VaticanICard />
          <VaticanIICard />
        </div>
      </main>
    </div>
  );
}
