import { VaticanPhoto } from "./VaticanPhotos";
import styles from "./VaticanPage.module.css";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getStPetersHighlights } from "@/lib/vatican";

export function StPetersBasilicaSection() {
  const highlights = getStPetersHighlights();

  return (
    <section id="st-peters" className={styles.landmark}>
      <div className={styles.landmarkIntro}>
      <SectionHeader
        eyebrow="Saint Peter's Basilica"
        title="Saint Peter's Basilica"
        summary="Saint Peter's Basilica is one of the most important churches in the Catholic world. It stands over the traditional burial place of Saint Peter, the apostle to whom Catholics trace the Petrine ministry of the Pope."
      />
      <VaticanPhoto photo="basilica" />
      </div>
      <div className={styles.highlights}>
        {highlights.map((item) => (
          <article key={item} >
            <h3 >{item}</h3>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/pope" className="btn btn-secondary focus-ring">
          Learn About the Pope
        </Link>
        <Link href="/mass" className="btn btn-secondary focus-ring">
          Understand the Mass
        </Link>
        <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring">
          Learn About the Eucharist
        </Link>
      </div>
    </section>
  );
}
