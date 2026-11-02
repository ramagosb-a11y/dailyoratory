import type { Metadata } from "next";
import { EditorialPage, EditorialHero, EditorialSection, EditorialGrid, EditorialCard, EditorialLinks, EditorialDisclosure } from "@/components/editorial/Editorial";
import { createPageMetadata } from "@/lib/metadata";
import { getResourcesByCategory } from "@/lib/resources";

export const metadata: Metadata = createPageMetadata({ title: "Learn", description: "Confession, Mass, sacraments, saints, devotions, and spiritual formation.", path: "/learn" });
const destinations = [
  { title: "Sacred Scripture", description: "Learn how Catholics read Sacred Scripture with the Church, pray with the Mass readings, and let the Word of God shape daily life.", href: "/bible", image: "learn", eyebrow: "Listen to the Word" },
  { title: "The Catechism", description: "A trusted guide to what Catholics believe, celebrate, live, and pray.", href: "/catechism", image: "catechism", eyebrow: "Understand the faith" },
  { title: "The Seven Sacraments", description: "Encounter Christ's grace through the sacramental life of the Church.", href: "/sacraments", image: "eucharist", eyebrow: "Life in Christ" },
  { title: "Catholic Formation", description: "Grow in doctrine, virtue, prayer, and daily discipleship.", href: "/formation", image: "formation", eyebrow: "Put faith into practice" },
  { title: "Saints & Tradition", description: "Church Fathers, saints, and Catholic devotions for prayer and study.", href: "/church-fathers", image: "pray", eyebrow: "Learn from the Church" },
  { title: "The Life of the Church", description: "Explore the Vatican, Church history, sacred art, and official Catholic resources.", href: "/vatican", image: "news", eyebrow: "Explore our inheritance" },
];
export default function LearnPage() {
  const resources = getResourcesByCategory(["Sacraments", "Saints & Devotions", "Formation", "Scripture"]);
  return <EditorialPage breadcrumbs={[{ label: "Learn" }]}>
    <EditorialHero eyebrow="Faith seeking understanding" title="Discover the richness of the Catholic faith." description="Grow in the Catholic faith with clarity and reverence." image="/images/editorial/learn.webp" imageAlt="A historic abbey library" actions={[{ label: "Explore the faith", href: "#explore" }, { label: "Find a learning path", href: "/pathways" }]} />
    <EditorialSection id="explore" eyebrow="A place to begin" title="What would you like to explore?" description="Scripture, the sacraments, the Church’s teaching, and the daily practice of faith."><EditorialGrid>{destinations.map((item) => <EditorialCard key={item.href} {...item} image={`/images/editorial/${item.image}.webp`} />)}</EditorialGrid></EditorialSection>
    <EditorialSection eyebrow="Make room for the Word" title="Open the Bible. Begin a conversation." description="Learn how Catholics read Sacred Scripture with the Church, choose Catholic translations, and pray with the Mass readings."><EditorialLinks links={[{ label: "Explore the Bible", href: "/bible" }, { label: "Read and reflect", href: "/reflections/reading-and-reflections" }, { label: "Pray with Scripture", href: "/library/scripture-prayer" }, { label: "Mass readings", href: "/reflections/mass-readings" }]} /></EditorialSection>
    <EditorialSection eyebrow="From learning to living" title="Take one faithful next step."><EditorialGrid><EditorialCard title="Grow in virtue" description="Guided Catholic formation tracks." href="/pathways" /><EditorialCard title="Build a rule of life" description="Prayer, Scripture, virtue, sacraments, and mercy." href="/rule-of-life" /><EditorialCard title="Explore the Catholic faith" description="A welcoming starting place for first questions and next steps." href="/explore" /></EditorialGrid></EditorialSection>
    <EditorialSection eyebrow="Keep exploring" title="More from Daily Oratory"><EditorialLinks links={[{ label: "Saints", href: "/saints" }, { label: "Catholic devotions", href: "/devotions" }, { label: "The Holy Mass", href: "/mass" }, { label: "Body, Soul, and Spirit", href: "/body-soul-spirit" }, { label: "Catholic news sources", href: "/news" }, { label: "Indulgences", href: "/indulgences" }, { label: "Councils of the Church", href: "/councils" }, { label: "Heavenbound Companion", href: "/tools/heavenbound" }]} /><EditorialDisclosure title="Browse the learning resource library"><EditorialLinks links={resources.map((resource) => ({ label: resource.title, href: `/library/${resource.slug}` }))} /></EditorialDisclosure></EditorialSection>
  </EditorialPage>;
}
