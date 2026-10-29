import { ArmorOfGodExperience } from "@/components/armor-of-god/ArmorOfGodExperience";
import { ArmorScripture } from "@/components/armor-of-god/ArmorScripture";
import styles from "@/components/armor-of-god/ArmorOfGod.module.css";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { armorExplanation, armorIntroduction } from "@/data/armorOfGod";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const path = "/armor-of-god";
const description = "Explore the Armor of God through Scripture, Catholic reflections, guided prayers, and interactive spiritual exercises. Find strength to protect your peace, resist temptation, persevere through trials, and stand firm in faith.";

export const metadata = createPageMetadata({
  title: "The Armor of God | Catholic Prayer & Spiritual Strength | Daily Oratory",
  description,
  path,
  keywords: ["Armor of God", "Catholic prayer", "Ephesians 6", "spiritual strength", "Catholic spiritual armor"],
});

export default function ArmorOfGodPage() {
  return <>
    <StructuredDataScript data={[
      buildWebPageStructuredData({ name: "The Armor of God", description, path }),
      buildBreadcrumbList([{ name: "Daily Oratory", path: "/" }, { name: "Prayer", path: "/pray" }, { name: "The Armor of God", path }]),
    ]} />
    <ArmorOfGodExperience introduction={<section className={styles.intro} aria-labelledby="armor-foundation">
      <p className={styles.eyebrow}>Our foundation · Ephesians 6:10–20</p>
      <h2 id="armor-foundation" tabIndex={-1}>Stand firm in Christ. Walk in peace.</h2>
      <div className={styles.introColumns}>{armorIntroduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      <p className={styles.introNote}>{armorExplanation}</p>
      <details><summary>Read Ephesians 6:10–20 · Douay-Rheims</summary>
        <ArmorScripture reference="Ephesians 6:10–20" />
      </details>
    </section>} />
  </>;
}
