import type { Metadata } from "next";
import { EditorialPage, EditorialHero, EditorialSection, EditorialGrid, EditorialCard, EditorialDisclosure, EditorialLinks } from "@/components/editorial/Editorial";
import { WhatIsIndulgenceSection } from "@/components/indulgences/WhatIsIndulgenceSection";
import { PlenaryConditionsChecklist } from "@/components/indulgences/PlenaryConditionsChecklist";
import { CommonIndulgencedWorks } from "@/components/indulgences/CommonIndulgencedWorks";
import { IndulgenceBuilder } from "@/components/indulgences/IndulgenceBuilder";
import { TodaysIndulgenceOpportunity } from "@/components/indulgences/TodaysIndulgenceOpportunity";
import { YearOfSaintFrancisIndulgenceGuide } from "@/components/indulgences/YearOfSaintFrancisIndulgenceGuide";
import { JubileeIndulgenceGuide } from "@/components/indulgences/JubileeIndulgenceGuide";
import { IndulgenceFAQ } from "@/components/indulgences/IndulgenceFAQ";
import { OfficialSourcesList } from "@/components/indulgences/OfficialSourcesList";
import { PastoralNote } from "@/components/indulgences/PastoralNote";
import { IndulgenceTypeCards } from "@/components/indulgences/IndulgenceTypeCards";
import { OfferIndulgenceForCards } from "@/components/indulgences/OfferIndulgenceForCards";
import { createPageMetadata } from "@/lib/metadata";

export const revalidate = 86400;
export const metadata: Metadata = createPageMetadata({
  title: "Catholic Indulgences Guide",
  description: "Understand indulgences, the usual conditions, prayer for the faithful departed, and the Church’s official guidance for indulgenced works.",
  path: "/indulgences",
  keywords: ["Catholic indulgences", "plenary indulgence", "partial indulgence", "detachment from sin", "souls in purgatory"],
});

export default function IndulgencesPage() {
  return (
    <EditorialPage breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Indulgences" }]}>
      <EditorialHero eyebrow="Mercy and conversion" title="A deeper encounter with mercy." description="Understand the Church’s teaching on indulgences, prepare with peace, and unite prayer and charity with love for the faithful departed." image="/images/editorial/indulgences.webp" imageAlt="A quiet Catholic church inviting prayer and reflection" actions={[{ label: "Understand the conditions", href: "#usual-conditions" }, { label: "Explore indulgenced works", href: "#common-indulgenced-works" }]} />
      <EditorialSection eyebrow="Understand" title="Begin with the Church’s teaching">
        <span id="healing-not-earning" className="scroll-mt-28" />
        <WhatIsIndulgenceSection />
        <EditorialDisclosure title="Partial and plenary indulgences"><IndulgenceTypeCards /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection id="how-to-gain-today" eyebrow="Prepare with peace" title="The conditions belong with the work" description="A devotional practice has the conditions attached to its particular grant. A checklist helps preparation; it cannot determine a spiritual outcome.">
        <PlenaryConditionsChecklist />
        <EditorialLinks links={[{ label: "Understand detachment from sin", href: "/indulgences/detachment-from-sin" }, { label: "Prepare for Confession", href: "/confession" }]} />
      </EditorialSection>
      <EditorialSection eyebrow="Prayer and charity" title="Find a practice for daily life">
        <TodaysIndulgenceOpportunity />
        <CommonIndulgencedWorks />
        <EditorialGrid>
          <div id="detachment-from-sin" className="scroll-mt-28"><EditorialCard title="Detachment from sin" description="A deeper guide to interior freedom, conversion, and trust in mercy." href="/indulgences/detachment-from-sin" image="/images/editorial/formation.webp" /></div>
          <EditorialCard title="Prayers and devotions" description="Explore prayers and devout works associated with indulgences." href="/indulgences/prayers-and-devotions" image="/images/editorial/pray.webp" />
          <div id="holy-souls" className="scroll-mt-28"><EditorialCard title="Pray for the faithful departed" description="Continue with prayers for the dead and Catholic teaching on hope and purification." href="/formation/catholic-burial/prayers-for-the-dead" image="/images/editorial/indulgences.webp" /></div>
        </EditorialGrid>
      </EditorialSection>
      <EditorialSection eyebrow="Optional companion" title="Make a simple plan" description="Choose a work, remember the conditions, and keep an optional intention in this browser.">
        <span id="daily-indulgence-routine" className="scroll-mt-28" />
        <IndulgenceBuilder />
        <EditorialDisclosure title="For whom may I offer an indulgence?"><OfferIndulgenceForCards /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection eyebrow="Grants and dates" title="Special years and official decrees" description="Special grants have defined dates, places, and requirements. Read the decree and confirm local guidance.">
        <YearOfSaintFrancisIndulgenceGuide />
        <EditorialDisclosure title="Historical reference: Jubilee 2025"><JubileeIndulgenceGuide /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection eyebrow="Go to the sources" title="Questions and Church guidance">
        <EditorialDisclosure title="Questions about indulgences"><IndulgenceFAQ /></EditorialDisclosure>
        <OfficialSourcesList />
        <PastoralNote />
      </EditorialSection>
    </EditorialPage>
  );
}
