import styles from "./VaticanPage.module.css";
import { SectionHeader } from "@/components/section-header";
import { getVaticanTimeline } from "@/lib/vatican";

export function VaticanHistoryTimeline() {
  const items = getVaticanTimeline();

  return (
    <section id="vatican-history">
      <SectionHeader eyebrow="History" title="A Short History of the Vatican" />
      <div className={styles.timeline}>
        {items.map((item) => (
          <article key={item.id} >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{item.approximatePeriod}</p>
            <h3 >{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
