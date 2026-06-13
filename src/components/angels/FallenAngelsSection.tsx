import { SectionHeader } from "@/components/section-header";

export function FallenAngelsSection() {
  return (
    <section id="fallen-angels" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Sobriety"
        title="Fallen Angels"
        summary="Catholic teaching holds that some angels freely rejected God. These fallen angels oppose God's plan and seek to draw human beings away from Him. The devil is real, but Christ is Lord."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        <article className="card-parchment p-6">
          <ul className="grid gap-3 text-sm leading-7 text-muted">
            <li>• Fallen angels are creatures, not equal to God.</li>
            <li>• Evil is not as powerful as God.</li>
            <li>• Christ has conquered sin and death.</li>
            <li>• Christians should avoid fear and sensationalism.</li>
            <li>• Do not seek occult knowledge or contact with spirits.</li>
            <li>• Stay rooted in Christ, prayer, sacraments, Scripture, and the Church.</li>
          </ul>
        </article>
        <article className="card-parchment p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Safety note</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            If someone is troubled spiritually, they should speak with a priest or trusted pastoral
            leader. If someone is experiencing mental health distress, danger, or fear of harm, they
            should seek qualified professional help or emergency assistance.
          </p>
        </article>
      </div>
    </section>
  );
}
