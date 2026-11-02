import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EditorialPage, EditorialHero, EditorialSection, EditorialLinks } from "@/components/editorial/Editorial";
import styles from "./Litanies.module.css";
import { litanyCatalog } from "@/components/contemplative-litanies/data/litanyRegistry";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pageMetadata = createPageMetadata({
  title: "Catholic Litanies | Daily Oratory",
  description: "Explore Daily Oratory's collection of contemplative Catholic litanies.",
  path: "/prayers/litanies",
  keywords: [
    "Catholic litanies",
    "Litany of Loreto",
    "Litany of Humility",
    "Litany of the Saints",
    "St. Joseph litany",
    "Sacred Heart litany",
  ],
});

export const metadata: Metadata = {
  ...pageMetadata,
  openGraph: {
    ...pageMetadata.openGraph,
    title: "Catholic Litanies",
    description: "Explore Daily Oratory's collection of contemplative Catholic litanies.",
  },
  twitter: {
    ...pageMetadata.twitter,
    title: "Catholic Litanies",
    description: "Explore Daily Oratory's collection of contemplative Catholic litanies.",
  },
};

const contemplativeLitanyShelf = litanyCatalog
  .filter((litany) => litany.status === "available" && Boolean(litany.image))
  .map((litany) => ({
    id: litany.id,
    title: litany.title,
    subtitle: litany.subtitle,
    shortDescription: litany.shortDescription,
    movementsCount: litany.movementsCount,
    href: `/prayers/litanies/${litany.slug}`,
    image: litany.image as string,
    imageAlt: `${litany.title} devotional holy card`,
    accent: litany.colorTheme.primary,
    border: litany.colorTheme.cardBorder,
  }));

export default function LitaniesPage() {
  return (
    <EditorialPage longform breadcrumbs={[{label:"Pray",href:"/pray"},{label:"Prayer library",href:"/prayers"},{label:"Catholic Litanies"}]}>
      <StructuredDataScript
        data={[
          buildWebPageStructuredData({
            name: "Catholic Litanies",
            description: "Explore Daily Oratory's collection of contemplative Catholic litanies.",
            path: "/prayers/litanies",
          }),
          buildBreadcrumbList([
            { name: "Pray", path: "/pray" },
            { name: "Prayer Library", path: "/prayers" },
            { name: "Catholic Litanies", path: "/prayers/litanies" },
          ]),
        ]}
      />

      <EditorialHero compact eyebrow="The rhythm of prayer" title="A quiet invocation. A heart turned toward God." description="Choose a litany and pray slowly, leaving room for silence between each invocation." image="/images/vatican/sistine.webp" imageAlt="Michelangelo’s frescoes across the Sistine Chapel ceiling" actions={[{label:"Choose a litany",href:"#contemplative-litanies"},{label:"How to begin",href:"#how-to-pray-a-litany"}]} />
      <EditorialSection id="contemplative-litanies" eyebrow="Seven paths into prayer" title="Find a litany for this moment" description="Open any prayer below. Each includes a sequence of contemplative movements, with room to pause and return.">
        <div className={styles.catalog}>{contemplativeLitanyShelf.map(litany => <article key={litany.id} className={styles.card}>
          <Link href={litany.href} className={styles.art} aria-label={`Pray ${litany.title}`}><Image src={litany.image} alt={litany.imageAlt} fill sizes="(max-width:600px) 100vw, (max-width:1000px) 50vw, 33vw" /></Link>
          <div className={styles.copy}><p className={styles.eyebrow}>{litany.movementsCount} prayer movements</p><h3><Link href={litany.href}>{litany.title}</Link></h3>{litany.subtitle && <p className={styles.subtitle}>{litany.subtitle}</p>}<p>{litany.shortDescription}</p><Link href={litany.href} className={styles.action}>Begin this litany <span aria-hidden="true">↗</span></Link></div>
        </article>)}</div>
      </EditorialSection>
      <EditorialSection id="how-to-pray-a-litany" eyebrow="Begin simply" title="Let the words become prayer."><ol className={styles.steps}><li><strong>Choose one litany.</strong> Set aside a few quiet minutes and begin with the Sign of the Cross.</li><li><strong>Pray without hurry.</strong> Read the invocations and responses slowly. Pause whenever you wish.</li><li><strong>Carry one line with you.</strong> End with thanksgiving and return to a phrase during the day.</li></ol><p className={styles.note}>Daily Oratory’s contemplative movements include original reflections alongside the litany prayers. See each prayer’s source notes for its text and attribution.</p></EditorialSection>
      <EditorialSection title="Keep a rhythm of prayer"><EditorialLinks links={[{label:"Today’s suggested prayer",href:"/pray/today"},{label:"Prayer library",href:"/prayers"},{label:"Adoration meditation",href:"/adoration/companion"},{label:"The Holy Rosary",href:"/devotions/holy-rosary"}]} /></EditorialSection>
    </EditorialPage>
  );
}
