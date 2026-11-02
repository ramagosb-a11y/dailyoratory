import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EditorialPage, EditorialHero, EditorialSection, EditorialDisclosure, EditorialLinks } from "@/components/editorial/Editorial";
import { RelicVisitReflectionTool } from "@/components/relics/RelicVisitReflectionTool";
import { RelicClasses } from "@/components/relics/RelicClasses";
import { HowToVenerateRelic } from "@/components/relics/HowToVenerateRelic";
import { RelicsAndScripture } from "@/components/relics/RelicsAndScripture";
import { RelicsOfChrist } from "@/components/relics/RelicsOfChrist";
import { RelicsAndMass } from "@/components/relics/RelicsAndMass";
import { RelicsAuthenticity } from "@/components/relics/RelicsAuthenticity";
import { RelicsBuyingSelling } from "@/components/relics/RelicsBuyingSelling";
import { RelicsAndHealing } from "@/components/relics/RelicsAndHealing";
import { WhatIfIHaveRelic } from "@/components/relics/WhatIfIHaveRelic";
import { RelicPrayerCards } from "@/components/relics/RelicPrayerCards";
import { RelicsFAQ } from "@/components/relics/RelicsFAQ";
import { RelicResources } from "@/components/relics/RelicResources";
import { RelicCopyrightNote } from "@/components/relics/RelicCopyrightNote";
import { RelicPilgrimageSites } from "@/components/relics/RelicPilgrimageSites";


const baseMetadata = createPageMetadata({
  title: "Catholic Relics | Saints, Veneration, Relic Classes, and the Communion of Saints",
  description:
    "Learn what Catholic relics are, why Catholics venerate relics, the first, second, and third classes of relics, relics in Scripture, relics in the Mass, and how to avoid superstition.",
  path: "/relics",
  keywords: [
    "Catholic relics",
    "first class relic",
    "second class relic",
    "third class relic",
    "reliquary",
    "communion of saints",
    "relic veneration",
    "relics in the Bible",
    "relics and the Mass",
    "saint relics",
    "Catholic saints",
    "sacramentals",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Catholic Relics",
    description:
      "A faithful guide to Catholic relics, the communion of saints, relic classes, reliquaries, relics in Scripture, relics at Mass, and reverent veneration.",
  },
};

export default function RelicsPage() {
  return (
    <EditorialPage longform breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Relics" }]}>
      <EditorialHero compact eyebrow="The communion of saints" title="Remember the saints. Follow Christ." description="Understand Catholic relics, prepare for a reverent visit, and keep the focus on God’s grace in the lives of His saints." image="/images/editorial/relics.webp" imageAlt="Catholic sacred art and architecture" actions={[{ label: "Prepare for a visit", href: "#relic-visit-preparation" }, { label: "Understand relics", href: "#what-are-relics" }]} />
      <EditorialSection id="what-are-relics" eyebrow="Understand" title="Faith lived in real history">
        <div className="max-w-3xl space-y-4 text-base leading-8 text-muted"><p>The Church venerates the bodily remains of saints and objects associated with their lives. These signs recall the grace of Christ at work in real people and invite us to imitate their faith.</p><p>Veneration is not worship. Worship belongs to God alone. Relics are not lucky charms, and devotion to them does not control God or guarantee healing.</p></div>
        <EditorialLinks links={[{ label: "The Church’s guidance on relics, 236–237", href: "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20020513_vers-direttorio_en.html" }, { label: "Explore the saints", href: "/saints" }]} />
      </EditorialSection>
      <EditorialSection id="relic-visit-preparation" eyebrow="A reverent encounter" title="Prepare for your visit">
        <RelicVisitReflectionTool />
        <EditorialDisclosure title="How to venerate a relic"><HowToVenerateRelic /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection eyebrow="Recognize and understand" title="Relics, Scripture, and sacred memory">
        <RelicClasses />
        <EditorialDisclosure title="Relics in Scripture"><RelicsAndScripture /></EditorialDisclosure>
        <EditorialDisclosure title="Traditionally associated with Christ’s Passion"><RelicsOfChrist /></EditorialDisclosure>
        <EditorialDisclosure title="Relics and the Mass"><RelicsAndMass /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection eyebrow="Authenticity and care" title="Handle sacred things with care">
        <p className="max-w-3xl text-base leading-8 text-muted">Daily Oratory cannot authenticate a relic. Some claims are uncertain or disputed; seek guidance from the relevant parish, shrine, religious community, or diocese.</p>
        <RelicsBuyingSelling />
        <EditorialDisclosure title="Documentation and authenticity"><RelicsAuthenticity /></EditorialDisclosure>
        <EditorialDisclosure title="If you have inherited or received a relic"><WhatIfIHaveRelic /></EditorialDisclosure>
        <EditorialDisclosure title="Healing, faith, and appropriate care"><RelicsAndHealing /></EditorialDisclosure>
        <p className="text-sm leading-7 text-muted">God is the healer. Continue appropriate medical care, and bring serious illness to prayer, the sacraments, and professional care.</p>
      </EditorialSection>
      <EditorialSection eyebrow="Prayer and pilgrimage" title="Ask for intercession. Grow in charity.">
        <p className="text-sm leading-7 text-muted">Original Daily Oratory devotional prayers.</p>
        <RelicPrayerCards />
        <EditorialDisclosure title="Pilgrimage resources"><RelicPilgrimageSites /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection eyebrow="Further reading" title="Questions and Church guidance">
        <EditorialDisclosure title="Common questions"><RelicsFAQ /></EditorialDisclosure>
        <RelicResources />
        <RelicCopyrightNote />
      </EditorialSection>
    </EditorialPage>
  );
}
