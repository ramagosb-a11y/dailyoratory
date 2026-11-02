import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SectionJumpNav } from "@/components/SectionJumpNav";
import { EditorialPage, EditorialHero, EditorialSection, EditorialGrid, EditorialCard, EditorialDisclosure } from "@/components/editorial/Editorial";
import { CatechismTopicFinder } from "@/components/catechism/CatechismTopicFinder";
import { FourPillars } from "@/components/catechism/FourPillars";
import { CatechismReadingPlan } from "@/components/catechism/CatechismReadingPlan";
import { CatechismStudyMethod } from "@/components/catechism/CatechismStudyMethod";
import { CompendiumSection } from "@/components/catechism/CompendiumSection";
import { CatechismFAQ } from "@/components/catechism/CatechismFAQ";
import { OfficialCatechismResources } from "@/components/catechism/OfficialCatechismResources";
import { CatechismCopyrightNote } from "@/components/catechism/CatechismCopyrightNote";

export const metadata: Metadata = createPageMetadata({
  title: "Catechism of the Catholic Church",
  description:
    "Learn what the Catechism of the Catholic Church is, how it is organized, how to use it, and where to read official Vatican and USCCB Catechism resources.",
  path: "/catechism",
  keywords: [
    "Catechism of the Catholic Church",
    "CCC",
    "Catholic teaching",
    "Catholic doctrine",
    "Catholic faith",
    "Compendium of the Catechism",
    "four pillars of the Catechism",
    "Catholic formation",
    "OCIA",
    "Catholic study guide",
  ],
});

export default function CatechismPage() {
  return (
    <EditorialPage breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Catechism" }]}>
      <EditorialHero eyebrow="Know the faith" title="The Catechism" description="Explore what the Church believes, celebrates, lives, and prays. Begin with a question, then follow it to the source." image="/images/editorial/catechism.webp" imageAlt="" actions={[{ label: "Find a topic", href: "#catechism-topic-finder" }, { label: "Read the official Catechism", href: "https://www.vatican.va/archive/ENG0015/_INDEX.HTM" }]} />
      <SectionJumpNav ariaLabel="Catechism sections" items={[{ label: "Find a topic", href: "#catechism-topic-finder" }, { label: "Four pillars", href: "#four-pillars" }, { label: "Study", href: "#study" }, { label: "Daily life", href: "#daily-life" }, { label: "Questions", href: "#questions" }, { label: "Sources", href: "#sources" }]} />
      <div className="mt-14"><CatechismTopicFinder /></div>
      <EditorialSection title="A map of the Catholic faith" eyebrow="The foundations" description="The Catechism of the Catholic Church is a comprehensive summary of Catholic teaching. It connects doctrine, worship, morality, and prayer. CCC references identify paragraph numbers, so you can return to the teaching in context."><FourPillars /></EditorialSection>
      <EditorialSection id="study" title="Read slowly. Return often." eyebrow="A place to begin" description="A manageable reading plan and a simple method for prayerful study.">
        <CatechismReadingPlan />
        <EditorialDisclosure title="A method for studying the Catechism"><CatechismStudyMethod /></EditorialDisclosure>
        <EditorialDisclosure title="Prefer a question-and-answer format?"><CompendiumSection /></EditorialDisclosure>
      </EditorialSection>
      <EditorialSection id="daily-life" title="Let learning become life" eyebrow="Take the next step"><EditorialGrid>
        <EditorialCard title="Scripture" description="Read the Bible with the Church and bring the Word of God into prayer." href="/bible" image="/images/editorial/learn.webp" />
        <EditorialCard title="The sacramental life" description="Explore the seven sacraments and prepare with your parish." href="/sacraments" image="/images/editorial/eucharist.webp" />
        <EditorialCard title="Prayer and virtue" description="Find a practical path through doctrine, virtue, and spiritual growth." href="/formation" image="/images/editorial/formation.webp" />
      </EditorialGrid></EditorialSection>
      <EditorialSection id="questions" title="Questions along the way"><CatechismFAQ /></EditorialSection>
      <EditorialSection id="sources" title="Go to the source" eyebrow="Official teaching"><OfficialCatechismResources /><CatechismCopyrightNote /></EditorialSection>
    </EditorialPage>
  );
}
