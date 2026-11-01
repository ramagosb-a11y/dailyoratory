import { VaticanPhoto } from "./VaticanPhotos";
import styles from "./VaticanPage.module.css";
import { SectionHeader } from "@/components/section-header";
import { getVaticanMuseumHighlights } from "@/lib/vatican";

export function VaticanMuseumsSection() {
  const highlights = getVaticanMuseumHighlights();

  return (
    <section id="vatican-museums" className={styles.landmark}>
      <div className={`${styles.landmarkIntro} ${styles.reverseIntro}`}>
      <SectionHeader
        eyebrow="Museums"
        title="Vatican Museums"
        summary="The Vatican Museums preserve centuries of sacred art, cultural treasures, manuscripts, sculpture, and works that help tell the story of faith, beauty, history, and human creativity."
      />
      <VaticanPhoto photo="museums" />
      </div>
      <div className={styles.highlights}>
        {highlights.map((item) => (
          <article key={item} >
            <h3 >{item}</h3>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
        Art can become prayer when it leads the heart to contemplate truth, beauty, and God.
      </p>
    </section>
  );
}
