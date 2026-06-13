import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BeginnerCatholicLearningPath } from "@/components/ocia/BeginnerCatholicLearningPath";
import { EasterVigilExplainer } from "@/components/ocia/EasterVigilExplainer";
import { FirstMassGuide } from "@/components/ocia/FirstMassGuide";
import { HowDailyOratoryHelpsOcia } from "@/components/ocia/HowDailyOratoryHelpsOcia";
import { OciaCannotReplace } from "@/components/ocia/OciaCannotReplace";
import { OciaCopyrightNote } from "@/components/ocia/OciaCopyrightNote";
import { OciaDifferentPaths } from "@/components/ocia/OciaDifferentPaths";
import { OciaFAQ } from "@/components/ocia/OciaFAQ";
import { OciaGlossary } from "@/components/ocia/OciaGlossary";
import { OciaHero } from "@/components/ocia/OciaHero";
import { OciaJourneyTimeline } from "@/components/ocia/OciaJourneyTimeline";
import { OciaLearningTopics } from "@/components/ocia/OciaLearningTopics";
import { OciaPastoralNote } from "@/components/ocia/OciaPastoralNote";
import { OciaPersonalSituationsNote } from "@/components/ocia/OciaPersonalSituationsNote";
import { OciaPrayerCards } from "@/components/ocia/OciaPrayerCards";
import { OciaReadinessReflection } from "@/components/ocia/OciaReadinessReflection";
import { OciaSources } from "@/components/ocia/OciaSources";
import { OciaSponsorGuide } from "@/components/ocia/OciaSponsorGuide";
import { OciaTimelineExample } from "@/components/ocia/OciaTimelineExample";
import { ParishQuestionsChecklist } from "@/components/ocia/ParishQuestionsChecklist";
import { RelatedOciaTools } from "@/components/ocia/RelatedOciaTools";
import { SacramentsOfInitiation } from "@/components/ocia/SacramentsOfInitiation";
import { WhatIsOcia } from "@/components/ocia/WhatIsOcia";
import { WhoIsOciaFor } from "@/components/ocia/WhoIsOciaFor";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Becoming Catholic | OCIA Guide",
  description:
    "Learn about OCIA, the Catholic journey for adults exploring the faith, preparing for Baptism, Confirmation, Eucharist, or full communion with the Church.",
  path: "/ocia",
  keywords: [
    "OCIA",
    "RCIA",
    "becoming Catholic",
    "how to become Catholic",
    "Catholic faith",
    "Catholic initiation",
    "Baptism Confirmation Eucharist",
    "Catholic convert",
    "Catholic inquiry",
    "Easter Vigil",
    "catechumen",
    "candidate",
  ],
});

export default function OciaPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Becoming Catholic" }]} />

        <div className="mt-8">
          <OciaHero />
        </div>

        <div className="mt-14">
          <WhatIsOcia />
        </div>

        <div className="mt-14">
          <WhoIsOciaFor />
        </div>

        <div className="mt-14">
          <OciaJourneyTimeline />
        </div>

        <div className="mt-14">
          <OciaDifferentPaths />
        </div>

        <div className="mt-14">
          <OciaLearningTopics />
        </div>

        <div className="mt-14">
          <SacramentsOfInitiation />
        </div>

        <div className="mt-14">
          <EasterVigilExplainer />
        </div>

        <div className="mt-14">
          <OciaFAQ />
        </div>

        <div className="mt-14">
          <ParishQuestionsChecklist />
        </div>

        <div className="mt-14">
          <OciaReadinessReflection />
        </div>

        <div className="mt-14">
          <BeginnerCatholicLearningPath />
        </div>

        <div className="mt-14">
          <OciaTimelineExample />
        </div>

        <div className="mt-14">
          <OciaGlossary />
        </div>

        <div className="mt-14">
          <OciaSponsorGuide />
        </div>

        <div className="mt-14">
          <OciaPersonalSituationsNote />
        </div>

        <div className="mt-14">
          <FirstMassGuide />
        </div>

        <div className="mt-14">
          <OciaPrayerCards />
        </div>

        <div className="mt-14">
          <HowDailyOratoryHelpsOcia />
        </div>

        <div className="mt-14">
          <OciaCannotReplace />
        </div>

        <div className="mt-14">
          <OciaSources />
        </div>

        <div className="mt-14">
          <RelatedOciaTools />
        </div>

        <div className="mt-14">
          <OciaPastoralNote />
        </div>

        <div className="mt-14">
          <OciaCopyrightNote />
        </div>
      </main>
    </div>
  );
}
