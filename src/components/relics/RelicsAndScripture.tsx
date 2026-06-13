import { SectionHeader } from "@/components/section-header";
import { relicScriptureReferences } from "@/data/relicsPage";
import { ExternalAnchor } from "@/components/relics/shared";

export function RelicsAndScripture() {
  return (
    <section>
      <SectionHeader
        eyebrow="Scripture"
        title="Relics and Scripture"
        summary="Catholics see in Scripture a pattern that God can work through material realities. This does not make objects magical; it shows that God's grace can touch creation."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {relicScriptureReferences.map((item) => (
          <article key={item.reference} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{item.reference}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-muted">
        Scripture should be read with the Church, not used as superstition.
      </p>
      <ExternalAnchor href="https://bible.usccb.org/" className="btn btn-secondary focus-ring mt-5 inline-flex justify-center">
        Read Scripture
      </ExternalAnchor>
    </section>
  );
}
