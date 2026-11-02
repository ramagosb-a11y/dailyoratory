import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EditorialPage, EditorialHero, EditorialSection, EditorialDisclosure, EditorialLinks } from "@/components/editorial/Editorial";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { WhatIsDetachment } from "@/components/indulgences/detachment/WhatIsDetachment";
import { DetachmentBuilder } from "@/components/indulgences/detachment/DetachmentBuilder";
import { DetachmentSacramentsSection } from "@/components/indulgences/detachment/DetachmentSacramentsSection";
import { DetachmentPracticeSteps } from "@/components/indulgences/detachment/DetachmentPracticeSteps";
import { DetachmentReflectionQuestions } from "@/components/indulgences/detachment/DetachmentReflectionQuestions";
import { SevenDayDetachmentPractice } from "@/components/indulgences/detachment/SevenDayDetachmentPractice";
import { DetachmentPrayerCards } from "@/components/indulgences/detachment/DetachmentPrayerCards";
import { DetachmentFAQ } from "@/components/indulgences/detachment/DetachmentFAQ";
import { DetachmentExternalResource } from "@/components/indulgences/detachment/DetachmentExternalResource";


const pageMetadata = createPageMetadata({
  title: "Complete Detachment from Sin | Plenary Indulgence Guide | Daily Oratory",
  description:
    "Learn what complete detachment from sin means, why it matters for plenary indulgences, and how to ask God for this grace through Confession, Eucharist, prayer, virtue, and conversion.",
  path: "/indulgences/detachment-from-sin",
  keywords: [
    "detachment from sin",
    "complete detachment from sin",
    "plenary indulgence condition",
    "Catholic indulgences",
    "venial sin",
    "conversion",
    "Confession",
    "Eucharist",
    "spiritual freedom",
    "resisting temptation",
  ],
});

export const metadata: Metadata = {
  ...pageMetadata,
  openGraph: {
    ...pageMetadata.openGraph,
    title: "Complete Detachment from Sin",
    description:
      "A gentle Catholic guide to detachment from sin, plenary indulgences, prayer, conversion, Confession, Eucharist, and spiritual freedom.",
  },
};

export default function DetachmentFromSinPage() {
  return (
    <EditorialPage longform breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Indulgences", href: "/indulgences" }, { label: "Detachment from Sin" }]}>
      <StructuredDataScript data={[buildWebPageStructuredData({ name: "Complete Detachment from Sin", description: pageMetadata.description as string, path: "/indulgences/detachment-from-sin" }), buildBreadcrumbList([{ name: "Indulgences", path: "/indulgences" }, { name: "Complete Detachment from Sin", path: "/indulgences/detachment-from-sin" }])]} />
      <EditorialHero compact eyebrow="Interior freedom" title="A heart free to love God." description="A gentle guide to detachment from sin, sincere conversion, and trust in mercy. Begin with grace, rather than anxious self-measurement." image="/images/editorial/reconciliation.webp" imageAlt="A place for quiet Catholic prayer" actions={[{ label: "Make a simple plan", href: "#detachment-builder" }, { label: "Begin with prayer", href: "#prayer-for-detachment" }]} />
      <EditorialSection eyebrow="Understand" title="Conversion of the heart">
        <div id="detachment-is-and-is-not" className="scroll-mt-28"><WhatIsDetachment /></div>
        <p id="why-detachment-matters" className="scroll-mt-28 text-base leading-8 text-muted">A plenary indulgence requires interior detachment from all sin, even venial sin, along with its other conditions and prescribed work. If full detachment is lacking, the indulgence may be partial rather than plenary. This site cannot judge the interior state of the soul or determine that an indulgence has been gained.</p>
        <EditorialLinks links={[{ label: "Read the Church’s general norms", href: "https://www.vatican.va/roman_curia/tribunals/apost_penit/documents/rc_trib_appen_pro_20000129_indulgence_en.html" }, { label: "The full indulgences guide", href: "/indulgences#usual-conditions" }]} />
      </EditorialSection>
      <EditorialSection eyebrow="One faithful next step" title="Make room for grace" description="The plan is optional. You can pray and continue reading without entering anything.">
        <DetachmentBuilder />
      </EditorialSection>
      <EditorialSection eyebrow="Daily conversion" title="Practice with patience">
        <DetachmentPracticeSteps />
        <EditorialDisclosure title="Questions for a quiet reflection"><DetachmentReflectionQuestions /></EditorialDisclosure>
        <EditorialDisclosure title="An optional seven-day practice"><SevenDayDetachmentPractice /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection eyebrow="Prayer" title="Ask for a willing heart">
        <DetachmentPrayerCards />
        <EditorialLinks links={[{ label: "Pray the Seven Penitential Psalms", href: "/prayers/seven-penitential-psalms" }, { label: "Prayers and devotions with indulgences", href: "/indulgences/prayers-and-devotions" }]} />
      </EditorialSection>
      <EditorialSection eyebrow="Life in the Church" title="Stay close to mercy">
        <DetachmentSacramentsSection />
        <div id="before-seeking-an-indulgence" className="scroll-mt-28"><p className="text-base leading-8 text-muted">Preparation is not a guarantee. Consult the usual conditions in the main indulgences guide and speak with a priest when unsure. If you struggle with scrupulosity, avoid repeatedly measuring your soul with anxiety and seek steady guidance from one confessor.</p></div>
        <EditorialLinks links={[{ label: "Usual conditions for a plenary indulgence", href: "/indulgences#usual-conditions" }, { label: "Confession guide", href: "/confession" }, { label: "The Eucharist", href: "/sacraments/eucharist" }]} />
      </EditorialSection>
      <EditorialSection eyebrow="Further guidance" title="Questions and trusted reading">
        <EditorialDisclosure title="Common questions"><DetachmentFAQ /></EditorialDisclosure>
        <DetachmentExternalResource />
      </EditorialSection>
    </EditorialPage>
  );
}
