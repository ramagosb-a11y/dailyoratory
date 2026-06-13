import { SectionHeader } from "@/components/section-header";
import { commonBlessedItems, sacramentalBlessingSteps } from "@/data/sacramentalsPage";

export function GetSacramentalsBlessed() {
  return (
    <section>
      <SectionHeader
        eyebrow="Blessings"
        title="How to Have Sacramentals Blessed"
        summary="Many sacramentals can be blessed by a priest or deacon. A blessing sets an object apart for sacred use and connects it to the prayer of the Church."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment liturgical-card-accent p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Practical steps</h3>
          <ol className="mt-4 space-y-2 text-sm leading-7 text-muted">
            {sacramentalBlessingSteps.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}
          </ol>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Items commonly blessed</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {commonBlessedItems.map((item) => (
              <span key={item} className="rounded-full border border-stone px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-navy">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-muted">
            Some devotions, such as certain scapulars, may have specific enrollment or blessing practices. Ask a priest or parish for guidance.
          </p>
        </article>
      </div>
    </section>
  );
}
