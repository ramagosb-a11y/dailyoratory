import type { Sacrament } from "@/types/sacraments";

export function SacramentPreparationGuide({ sacrament }: { sacrament: Sacrament }) {
  return (
    <section className="grid gap-5 lg:grid-cols-2">
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">How to prepare</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
          {sacrament.howToPrepare.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Family and sponsor guidance</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
          {[...sacrament.familyGuidance, ...sacrament.sponsorGuidance].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
