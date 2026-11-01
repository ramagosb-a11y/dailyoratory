import { VaticanPhoto } from "./VaticanPhotos";
import styles from "./VaticanPage.module.css";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getSistineChapelHighlights } from "@/lib/vatican";

export function SistineChapelSection() {
  const highlights = getSistineChapelHighlights();

  return (
    <section id="sistine-chapel" className={styles.landmark}>
      <SectionHeader
        eyebrow="Sacred art"
        title="The Sistine Chapel"
        summary="The Sistine Chapel is famous for Michelangelo's ceiling and Last Judgment, but it is also a sacred chapel and the place where papal conclaves are held."
      />
      <VaticanPhoto photo="sistine" panoramic />
      <div className={styles.highlights}>
        {highlights.map((item) => (
          <article key={item} >
            <h3 >{item}</h3>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <TrackedLink
          href="https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina/tour-virtuale.html"
          external
          className="btn liturgical-button focus-ring"
          eventName="vatican_virtual_tour_click"
          eventParams={{ resource_name: "Sistine Chapel Virtual Tour", page_path: "/vatican", section: "sistine-chapel" }}
        >
          Open the official virtual tour
        </TrackedLink>
        <a href="/pope" className="btn btn-secondary focus-ring">
          Learn About the Pope
        </a>
      </div>
    </section>
  );
}
