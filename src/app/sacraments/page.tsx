import type { Metadata } from "next";
import { EditorialPage, EditorialHero, EditorialSection, EditorialGrid, EditorialCard, EditorialLinks, EditorialDisclosure, EditorialPhoto } from "@/components/editorial/Editorial";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { SacramentalJourneySelector } from "@/components/sacraments/SacramentalJourneySelector";
import { SacramentFAQHub } from "@/components/sacraments/SacramentFAQHub";
import { WhatAreSacraments } from "@/components/sacraments/WhatAreSacraments";
import { SacramentParishReminder } from "@/components/sacraments/SacramentParishReminder";
import { FamilySacramentalHomeGuide } from "@/components/sacraments/FamilySacramentalHomeGuide";
import { AskYourParishChecklist } from "@/components/sacraments/AskYourParishChecklist";
import { SacramentsAndChurchFathers } from "@/components/sacraments/SacramentsAndChurchFathers";
import { SacramentsAndDevotions } from "@/components/sacraments/SacramentsAndDevotions";
import { createPageMetadata } from "@/lib/metadata";
import { getSacraments, getSacramentGroups } from "@/lib/sacraments";
import { buildArticleStructuredData, buildWebPageStructuredData } from "@/lib/structuredData";
export const metadata: Metadata = createPageMetadata({
  title: "The Seven Sacraments | Daily Oratory",
  description: "Learn what Catholics believe about the seven sacraments, their meaning, grace, preparation, and how explorers and returning Catholics can understand them more clearly.",
  path: "/sacraments",
  keywords: ["Catholic sacraments", "seven sacraments", "Baptism", "Confirmation", "Eucharist", "Reconciliation", "Anointing of the Sick", "Matrimony", "Holy Orders", "OCIA"],
});
export default function SacramentsPage() {
  const sacraments = getSacraments();
  const groups = getSacramentGroups();
  return <EditorialPage breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Sacraments" }]}>
    <StructuredDataScript data={[
      buildWebPageStructuredData({ name: "The Seven Sacraments", description: metadata.description!, path: "/sacraments" }),
      buildArticleStructuredData({ headline: "The Seven Sacraments", description: metadata.description!, path: "/sacraments", keywords: metadata.keywords as string[] }),
    ]} />
    <EditorialHero eyebrow="Encounters with Christ" title="The Seven Sacraments" description="Encounter Christ's grace through the sacramental life of the Church." image="/images/editorial/eucharist.webp" imageAlt="Eucharistic adoration" actions={[{ label: "Explore the sacraments", href: "#explore-sacraments" }, { label: "Find preparation guidance", href: "#preparation" }]} />
    <EditorialSection id="explore-sacraments" eyebrow="A lifelong rhythm of grace" title="Christ meets us here." description="Sacramental life is not a checklist to finish. It is a lifelong rhythm in which Christ gives grace for birth, growth, nourishment, mercy, suffering, family life, and service.">
      {groups.map((group) => <div key={group.id} className="mt-9"><div className="mb-5 flex flex-wrap items-baseline justify-between gap-3 border-b border-stone pb-3"><h3 className="font-display text-3xl font-semibold text-navy">{group.title}</h3><p className="max-w-2xl text-sm leading-7 text-muted">{group.description}</p></div><EditorialGrid>{sacraments.filter((sacrament) => group.sacramentIds.includes(sacrament.id)).map((sacrament) => <EditorialCard key={sacrament.id} title={sacrament.name} description={sacrament.shortDescription} href={`/sacraments/${sacrament.slug}`} image={`/images/editorial/${sacrament.slug}.webp`} />)}</EditorialGrid></div>)}
    </EditorialSection>
    <EditorialSection id="preparation" eyebrow="Your next step" title="Begin with your parish." description="Daily Oratory helps you learn and prepare prayerfully, but sacramental preparation and requirements belong to your parish and diocese.">
      <SacramentalJourneySelector />
      <EditorialLinks links={[{ label: "Start preparation companion", href: "/sacraments/prepare" }, { label: "My preparation", href: "/sacraments/my-preparation" }, { label: "Becoming Catholic · OCIA", href: "/sacraments/ocia" }, { label: "Sponsors and godparents", href: "/sacraments/sponsor-godparent" }]} />
      <EditorialDisclosure title="Questions to ask your parish"><AskYourParishChecklist /><SacramentParishReminder /></EditorialDisclosure>
    </EditorialSection>
    <EditorialSection eyebrow="Gifts, not achievements" title="Visible signs of invisible grace."><div className="grid items-start gap-6 lg:grid-cols-2"><EditorialPhoto src="/images/editorial/baptism.webp" alt="A Catholic baptism" /><WhatAreSacraments /></div><EditorialDisclosure title="The grace and ministry of each sacrament"><div className="grid gap-5 sm:grid-cols-2">{sacraments.map((sacrament) => <article key={sacrament.id} className="border-b border-stone pb-5"><h3 className="font-display text-2xl font-semibold">{sacrament.name}</h3><p className="mt-3 text-sm leading-7 text-muted">{sacrament.graceFocus}</p><p className="mt-2 text-sm leading-7 text-muted"><strong>Ordinary minister: </strong>{sacrament.ordinaryMinister}</p></article>)}</div></EditorialDisclosure></EditorialSection>
    <EditorialSection eyebrow="Faith at home" title="Live the grace you receive."><EditorialLinks links={[{ label: "Explore sacramental grace", href: "/formation/grace/sacramental-grace" }, { label: "Catholic burial and funeral rites", href: "/formation/catholic-burial" }, { label: "Prepare for Confession", href: "/confession" }, { label: "Understand the Holy Mass", href: "/mass" }]} /><EditorialDisclosure title="Family sacramental life"><FamilySacramentalHomeGuide /></EditorialDisclosure><EditorialDisclosure title="Sacraments, devotion, and the Church Fathers"><SacramentsAndChurchFathers /><SacramentsAndDevotions /></EditorialDisclosure></EditorialSection>
    <EditorialSection eyebrow="Learn with confidence" title="Questions about the sacraments"><SacramentFAQHub /></EditorialSection>
  </EditorialPage>;
}
