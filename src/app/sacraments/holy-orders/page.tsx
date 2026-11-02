import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialPage, EditorialHero, EditorialSection, EditorialLinks, EditorialDisclosure, EditorialPhoto } from "@/components/editorial/Editorial";
import { SacramentBiblicalRoots } from "@/components/sacraments/SacramentBiblicalRoots";
import { SacramentCatechismReferences } from "@/components/sacraments/SacramentCatechismReferences";
import { SacramentCommonQuestions } from "@/components/sacraments/SacramentCommonQuestions";
import { SacramentPastoralBoundaryNote } from "@/components/sacraments/SacramentPastoralBoundaryNote";
import { SacramentPrayerSection } from "@/components/sacraments/SacramentPrayerSection";
import { SacramentTrustedResources } from "@/components/sacraments/SacramentTrustedResources";
import { createPageMetadata } from "@/lib/metadata";
import { getSacramentBySlug, getSacramentDetailMetadata, getPreparationCompanionForSacrament } from "@/lib/sacraments";
export const metadata: Metadata = createPageMetadata(getSacramentDetailMetadata(getSacramentBySlug("holy-orders")!));
export default function HolyOrdersPage() {
  const sacrament = getSacramentBySlug("holy-orders");
  if (!sacrament) notFound();
  const companion = getPreparationCompanionForSacrament(sacrament.id);
  return <EditorialPage breadcrumbs={[{ label: "Sacraments", href: "/sacraments" }, { label: "Holy Orders" }]}>
    <EditorialHero eyebrow="The sacraments · Service and communion" title="Holy Orders" description={sacrament.shortDescription} image="/images/editorial/holy-orders.webp" imageAlt="Catholic episcopal ordination" actions={[{ label: "Understand Holy Orders", href: "#meaning" }, { label: "Begin discernment", href: "#discernment" }]} />
    <EditorialSection id="meaning" eyebrow="Called to serve" title="One sacrament. Three degrees." description={sacrament.longDescription}>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]"><div className="space-y-5 text-base leading-8 text-muted"><p>Holy Orders is one sacrament lived in three degrees. Bishops, priests, and deacons each serve the Church according to their proper office and mission.</p><p>{sacrament.graceFocus}</p><p>{sacrament.whoReceives[0]}</p></div><dl className="border-l-2 border-gold pl-6 text-sm leading-7"><dt className="font-semibold text-navy">Visible sign</dt><dd className="mt-2 mb-5 text-muted">{sacrament.visibleSign}</dd><dt className="font-semibold text-navy">Ordinary minister</dt><dd className="mt-2 text-muted">{sacrament.ordinaryMinister}</dd></dl></div>
      <EditorialDisclosure title="How the Church celebrates Holy Orders"><ul className="space-y-3 text-base leading-8 text-muted">{sacrament.howCelebrated.map((text) => <li key={text}>{text}</li>)}</ul></EditorialDisclosure>
    </EditorialSection>
    <EditorialSection id="discernment" eyebrow="Begin with prayer" title="Discern with the Church." description="Start with prayer, sacramental life, spiritual direction, a trusted priest, and the diocesan vocation director. Discernment matures with the Church, not apart from her.">
      <div className="grid gap-8 lg:grid-cols-2"><ol className="list-decimal space-y-4 pl-5 text-base leading-8 text-muted">{sacrament.howToPrepare.map((text) => <li key={text}>{text}</li>)}</ol><SacramentPastoralBoundaryNote kind="vocation" /></div>
      <EditorialLinks links={[{ label: "Open Holy Orders Discernment Companion", href: companion?.route ?? "/sacraments/prepare" }, { label: "Sacrament preparation", href: "/sacraments/prepare" }]} /><p className="text-sm leading-7 text-muted">{sacrament.familyGuidance[0]}</p>
    </EditorialSection>
    <EditorialSection id="prayer" eyebrow="For the life of the Church" title="Pray for vocations."><div className="grid items-center gap-8 lg:grid-cols-2"><EditorialPhoto src="/images/editorial/formation.webp" alt="An abbey cloister garden" /><SacramentPrayerSection sacrament={sacrament} /></div></EditorialSection>
    <EditorialSection id="sources" eyebrow="Rooted in the faith" title="Scripture & the teaching of the Church."><div className="grid gap-5 lg:grid-cols-2"><SacramentBiblicalRoots sacrament={sacrament} /><SacramentCatechismReferences sacrament={sacrament} /></div><EditorialDisclosure title="Official and trusted resources"><SacramentTrustedResources sacramentId={sacrament.id} /></EditorialDisclosure><EditorialDisclosure title="Questions about Holy Orders"><SacramentCommonQuestions sacrament={sacrament} /></EditorialDisclosure><EditorialLinks links={sacrament.relatedDailyOratoryLinks} /><p className="mt-6 text-xs leading-6 text-muted">Original Daily Oratory summaries, Scripture references, Catechism paragraph references, and outbound links to official or trusted Catholic resources. This page does not reproduce long copyrighted Church texts.</p></EditorialSection>
  </EditorialPage>;
}
