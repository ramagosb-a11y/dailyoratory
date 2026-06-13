import { SectionHeader } from "@/components/section-header";
import { getRelicTopics } from "@/lib/relics";

export function WhyVenerateRelics() {
  const topic = getRelicTopics()[1];

  return (
    <section>
      <SectionHeader
        eyebrow="Veneration"
        title="Why Catholics Venerate Relics"
        summary="Catholics honor relics because God worked through the saints in real history. The bodies of the saints were temples of the Holy Spirit, and their lives show the grace of Christ at work."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {topic.keyPoints.map((point) => (
          <article key={point} className="card-parchment p-5 text-sm leading-7 text-muted">
            {point}
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm font-semibold leading-7 text-navy">Veneration is not worship. Worship belongs to God alone.</p>
    </section>
  );
}
