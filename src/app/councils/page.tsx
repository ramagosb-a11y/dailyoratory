import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EditorialPage, EditorialHero, EditorialSection, EditorialDisclosure, EditorialLinks, EditorialGrid, EditorialCard } from "@/components/editorial/Editorial";
import { CouncilsTimelineExplorer } from "@/components/councils/CouncilsTimelineExplorer";
import { CouncilTopicFinder } from "@/components/councils/CouncilTopicFinder";
import { CouncilsAndHolySpirit } from "@/components/councils/CouncilsAndHolySpirit";
import { TypesOfCouncils } from "@/components/councils/TypesOfCouncils";
import { CouncilsFAQ } from "@/components/councils/CouncilsFAQ";
import { CouncilResources } from "@/components/councils/CouncilResources";
import { CouncilsCopyrightNote } from "@/components/councils/CouncilsCopyrightNote";
import { CouncilsStudyPath } from "@/components/councils/CouncilsStudyPath";


export const metadata: Metadata = createPageMetadata({
  title: "Councils of the Catholic Church",
  description:
    "Learn about the 21 ecumenical councils of the Catholic Church, from Nicaea to Vatican II, and how councils clarified doctrine, Scripture, Tradition, the Mass, sacraments, and Church life.",
  path: "/councils",
  keywords: [
    "Catholic councils",
    "ecumenical councils",
    "Church councils",
    "Council of Nicaea",
    "Council of Trent",
    "Vatican I",
    "Vatican II",
    "Catholic doctrine",
    "Creed",
    "Scripture and Tradition",
    "Magisterium",
    "Church history",
  ],
});

export default function CouncilsPage() {
  return (
    <EditorialPage longform breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Councils of the Church" }]}>
      <EditorialHero compact eyebrow="Faith through the centuries" title="The Church gathers. The faith is handed on." description="Explore the Catholic Church’s 21 ecumenical councils, the questions they addressed, and the documents that continue to shape Catholic life." image="/images/vatican-ii/council-005.webp" imageAlt="Catholic learning and the Church’s teaching" actions={[{ label: "Explore the timeline", href: "#councils-timeline" }, { label: "Find a starting point", href: "#council-topic-finder" }]} />
      <EditorialSection id="council-topic-finder" eyebrow="Begin with a question" title="Find your way into the history">
        <CouncilTopicFinder />
      </EditorialSection>
      <EditorialSection id="councils-timeline" eyebrow="Twenty-one councils" title="Explore the councils by era">
        <CouncilsTimelineExplorer />
      </EditorialSection>
      <EditorialSection eyebrow="Authority and continuity" title="Read councils within the life of the Church">
        <div className="max-w-3xl space-y-4 text-base leading-8 text-muted"><p>The college of bishops exercises its authority solemnly in an ecumenical council, always with its head, the Roman Pontiff. Conciliar decrees require papal approval, confirmation, and promulgation to have obligatory force.</p><p>Doctrine concerns what the Church teaches as true; discipline concerns practical rules and structures that can sometimes change. Read each document in its historical context and according to its purpose.</p><p>Papal infallibility concerns particular definitive teachings on faith and morals. It does not mean the Pope is sinless or correct about everything.</p></div>
        <EditorialLinks links={[{ label: "Canons 336–341: the college of bishops", href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib2-cann330-367_en.html" }, { label: "Lumen gentium, 25", href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html" }]} />
        <EditorialDisclosure title="Ecumenical councils, regional councils, and synods"><TypesOfCouncils /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection eyebrow="Continue the study" title="Foundations and defining moments">
        <EditorialGrid>
          <div id="first-seven-councils" className="scroll-mt-28"><EditorialCard title="The first seven councils" description="Begin with the early councils in the timeline, from Nicaea I to Nicaea II." href="#councils-timeline" image="/images/editorial/learn.webp" /></div>
          <div id="councils-and-creed" className="scroll-mt-28"><EditorialCard title="The Creed" description="Learn the faith professed by the Church and return to the early councils for historical context." href="/catechism" image="/images/editorial/catechism.webp" /></div>
          <div id="council-of-trent" className="scroll-mt-28"><EditorialCard title="The Council of Trent" description="Explore the council and its historical setting in the timeline." href="#councils-timeline" image="/images/editorial/eucharist.webp" /></div>
          <div id="vatican-i" className="scroll-mt-28"><EditorialCard title="Vatican I" description="Continue with the dedicated guide to faith, reason, and the papacy." href="/vatican-i" image="/images/editorial/news.webp" /></div>
          <div id="vatican-ii" className="scroll-mt-28"><EditorialCard title="Vatican II" description="Read the council’s actual documents and explore the dedicated guide." href="/vatican-ii" image="/images/editorial/formation.webp" /></div>
        </EditorialGrid>
      </EditorialSection>
      <EditorialSection eyebrow="Prayer and understanding" title="Study with the Church">
        <CouncilsAndHolySpirit />
        <EditorialDisclosure title="A simple study path"><CouncilsStudyPath /></EditorialDisclosure>
        <EditorialDisclosure title="Common questions"><CouncilsFAQ /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection eyebrow="Primary documents" title="Go to the sources">
        <CouncilResources />
        <CouncilsCopyrightNote />
      </EditorialSection>
    </EditorialPage>
  );
}
