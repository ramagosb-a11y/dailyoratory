import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SectionJumpNav } from "@/components/SectionJumpNav";
import { EditorialPage, EditorialHero, EditorialSection, EditorialGrid, EditorialCard, EditorialDisclosure, EditorialLinks } from "@/components/editorial/Editorial";
import { FormationPathwaySelector } from "@/components/formation/FormationPathwaySelector";
import { DoctrineFormationSection } from "@/components/formation/DoctrineFormationSection";
import { VirtueFormationSection } from "@/components/formation/VirtueFormationSection";
import { SpiritualGrowthSection } from "@/components/formation/SpiritualGrowthSection";
import { WeeklyFormationPlan } from "@/components/formation/WeeklyFormationPlan";
import { ThirtyDayFormationChallenge } from "@/components/formation/ThirtyDayFormationChallenge";
import { FormationByStateOfLife } from "@/components/formation/FormationByStateOfLife";
import { FormationByLiturgicalSeason } from "@/components/formation/FormationByLiturgicalSeason";
import { FormationObstacles } from "@/components/formation/FormationObstacles";
import { FormationLibraryGrid } from "@/components/formation/FormationLibraryGrid";
import { FormationTrustedSources } from "@/components/formation/FormationTrustedSources";
import { FormationPastoralNote } from "@/components/formation/FormationPastoralNote";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { getFormationChallenge, getFormationObstacles, getFormationTopicsByCategory, getSpiritualGrowthPractices, getVirtueFormationItems } from "@/lib/formation";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Formation | Doctrine, Virtue, and Spiritual Growth",
  description:
    "Grow in Catholic doctrine, virtue, prayer, Scripture, sacraments, and daily discipleship with formation pathways for Catholics, returning Catholics, and anyone exploring the Catholic faith.",
  path: "/formation",
  keywords: [
    "Catholic formation",
    "doctrine",
    "virtue",
    "spiritual growth",
    "Catholic discipleship",
    "Catechism",
    "prayer life",
    "rule of life",
    "Catholic moral life",
    "Catholic spiritual formation",
  ],
});

export default function FormationPage() {
  const doctrineTopics = getFormationTopicsByCategory("doctrine").concat(getFormationTopicsByCategory("sacraments"), getFormationTopicsByCategory("prayer"), getFormationTopicsByCategory("service"));
  return (
    <EditorialPage breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Formation" }]}>
      <StructuredDataScript data={[buildWebPageStructuredData({ name: "Catholic Formation", description: metadata.description as string, path: "/formation" }), buildArticleStructuredData({ headline: "Catholic Formation", description: metadata.description as string, path: "/formation", keywords: metadata.keywords as string[] }), buildBreadcrumbList([{ name: "Learn", path: "/learn" }, { name: "Formation", path: "/formation" }])]} />
      <EditorialHero eyebrow="Faith for everyday life" title="Catholic Formation" description="Grow in doctrine, virtue, and prayer. Find a faithful next step for the life you are living today." image="/images/editorial/formation.webp" imageAlt="" actions={[{ label: "Find my starting point", href: "#formation-selector" }, { label: "Explore formation topics", href: "#formation-library" }]} />
      <SectionJumpNav ariaLabel="Formation sections" items={[{ label: "Begin", href: "#formation-selector" }, { label: "Featured", href: "#featured" }, { label: "Grow", href: "#grow" }, { label: "Your rhythm", href: "#formation-rhythm" }, { label: "Library", href: "#formation-library" }, { label: "Sources", href: "#sources" }]} />
      <div className="mt-14"><FormationPathwaySelector /></div>
      <EditorialSection id="featured" title="A deeper life in Christ" eyebrow="Explore next"><EditorialGrid>
        <EditorialCard title="Catholic Life Roadmap" description="Find a simple path through prayer, Confession, Mass, Scripture, and daily discipleship." href="/catholic-life" image="/images/editorial/learn.webp" />
        <EditorialCard title="Grace" description="Learn how God's grace heals, strengthens, sanctifies, and helps us respond to His will." href="/formation/grace" image="/images/editorial/baptism.webp" />
        <EditorialCard title="The Last Things" description="Explore Catholic teaching on death, judgment, and eternal life." href="/formation/eschatology" image="/images/editorial/indulgences.webp" />
      </EditorialGrid><EditorialLinks links={[{ label: "Catholic burial and funeral rites", href: "/formation/catholic-burial" }, { label: "Detachment from sin", href: "/indulgences/detachment-from-sin" }]} /></EditorialSection>
      <EditorialSection id="grow" title="Learn. Practice. Pray." eyebrow="Three dimensions of formation" description="Explore the teaching, virtues, and spiritual practices that support a steady Catholic life.">
        <EditorialDisclosure title="Doctrine — learn the faith"><DoctrineFormationSection topics={doctrineTopics} /></EditorialDisclosure>
        <EditorialDisclosure title="Virtue — practice the good"><VirtueFormationSection virtues={getVirtueFormationItems()} /></EditorialDisclosure>
        <EditorialDisclosure title="Spiritual growth — deepen your life with God"><SpiritualGrowthSection practices={getSpiritualGrowthPractices()} /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection id="formation-rhythm" title="Make room for steady growth" eyebrow="An ordinary week">
        <WeeklyFormationPlan />
        <EditorialDisclosure title="Try the 30-day formation challenge"><ThirtyDayFormationChallenge challenge={getFormationChallenge()} /></EditorialDisclosure>
        <EditorialDisclosure title="Formation for your state of life"><FormationByStateOfLife /></EditorialDisclosure>
        <EditorialDisclosure title="Follow the Church's seasons"><FormationByLiturgicalSeason /></EditorialDisclosure>
        <EditorialDisclosure title="When growth feels difficult"><FormationObstacles obstacles={getFormationObstacles()} /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection id="formation-library" title="Keep exploring" eyebrow="The formation library"><FormationLibraryGrid /></EditorialSection>
      <EditorialSection id="sources" title="Rooted in the Church" eyebrow="Trusted guidance"><FormationTrustedSources /><FormationPastoralNote /></EditorialSection>
    </EditorialPage>
  );
}
