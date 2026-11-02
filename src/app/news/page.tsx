import type { Metadata } from "next";
import { EditorialPage, EditorialHero, EditorialSection, EditorialGrid, EditorialDisclosure, EditorialLinks, EditorialPhoto } from "@/components/editorial/Editorial";
import { NewsResourceCard } from "@/components/news/NewsResourceCard";
import { NewsFAQ } from "@/components/news/NewsFAQ";
import { NewsCopyrightNote } from "@/components/news/NewsCopyrightNote";
import { PrayTheNews } from "@/components/news/PrayTheNews";
import { getCatholicNewsResources } from "@/lib/news";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic News and Church Sources",
  description: "A considered directory of official Church sources, Catholic reporting, and spiritual reading, with space to turn the news into prayer.",
  path: "/news",
});

export default function NewsPage() {
  const resources = getCatholicNewsResources().filter((resource) => resource.url !== "#");
  const official = resources.filter((resource) => resource.official);
  const reporting = resources.filter((resource) => !resource.official && ["catholic-news", "catholic-media"].includes(resource.sourceType));
  const spiritual = resources.filter((resource) => !resource.official && !reporting.includes(resource));
  return (
    <EditorialPage breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Catholic News" }]}>
      <EditorialHero eyebrow="The Church in the world" title="An informed mind. A prayerful heart." description="Follow the life of the Church through official statements, Catholic reporting, and thoughtful spiritual reading. A directory of sources to visit and explore." image="/images/editorial/news.webp" imageAlt="Saint Peter’s Square and the basilica in Vatican City" actions={[{ label: "Official Church sources", href: "#official-church-sources" }, { label: "Catholic reporting", href: "#catholic-reporting" }]} />
      <EditorialSection id="official-church-sources" eyebrow="Begin at the source" title="Official Church sources" description="For statements, documents, and Church guidance, start with the Vatican, bishops’ conference, diocese, or parish.">
        <EditorialGrid>{official.map((resource) => <NewsResourceCard key={resource.id} resource={resource} section="official-church-sources" />)}</EditorialGrid>
      </EditorialSection>
      <EditorialSection id="catholic-reporting" eyebrow="Reporting and analysis" title="Catholic perspectives" description="Independent Catholic media bring context to the news. Distinguish reporting from opinion, and check consequential claims against the original statement.">
        <EditorialGrid>{reporting.map((resource) => <NewsResourceCard key={resource.id} resource={resource} section="catholic-reporting" compact />)}</EditorialGrid>
      </EditorialSection>
      <EditorialSection id="spiritual-reading" eyebrow="Faith and daily life" title="Spiritual reading and commentary" description="These external resources offer reflection, commentary, or aggregation. They are distinct from official Church statements; inclusion does not establish the authenticity of a reported private revelation.">
        <EditorialGrid>{spiritual.map((resource) => <NewsResourceCard key={resource.id} resource={resource} section="spiritual-reading" compact />)}</EditorialGrid>
        <p className="mt-5 text-sm leading-7 text-muted">Spirit Daily is an external spiritual news and aggregation resource. Verify important claims with official Church sources.</p>
      </EditorialSection>
      <EditorialSection eyebrow="From awareness to intercession" title="Bring the world into prayer" description="Read with prudence and charity. Let the needs you encounter become an invitation to pray, serve, and show mercy.">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <EditorialPhoto src="/images/editorial/indulgences.webp" alt="Saint Peter’s Basilica interior" />
          <div><EditorialLinks links={[{ label: "Prayer intentions", href: "/prayer-intentions" }, { label: "Today in the Church", href: "/today" }, { label: "Learn about the Pope", href: "/pope" }, { label: "Daily Mass reflections", href: "/reflections/mass-readings" }]} /><EditorialDisclosure title="Prayer prompts for the news"><PrayTheNews /></EditorialDisclosure></div>
        </div>
      </EditorialSection>
      <EditorialSection eyebrow="Read with discernment" title="A little context goes a long way">
        <EditorialDisclosure title="A peaceful approach to the headlines"><p className="text-base leading-8 text-muted">Verify important claims with official sources, distinguish news from commentary, avoid outrage-driven reading, and pray before reacting. The Church’s daily life of prayer, charity, and the sacraments is larger than the headlines.</p></EditorialDisclosure>
        <EditorialDisclosure title="Questions about Catholic news"><NewsFAQ /></EditorialDisclosure>
        <NewsCopyrightNote />
      </EditorialSection>
    </EditorialPage>
  );
}
