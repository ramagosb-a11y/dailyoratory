import { SectionHeader } from "@/components/section-header";
import { getTraditionTimeline } from "@/lib/tradition";

export function TraditionTimeline() {
  const items = getTraditionTimeline();

  return (
    <section>
      <SectionHeader eyebrow="Timeline" title="The Faith Handed On Through Time" />
      <div className="mt-7 space-y-4">
        {items.map((item) => (
          <article key={item.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{item.approximatePeriod}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
