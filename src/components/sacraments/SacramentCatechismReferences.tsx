import type { Sacrament } from "@/types/sacraments";

export function SacramentCatechismReferences({ sacrament }: { sacrament: Sacrament }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Catechism references</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        {sacrament.catechismReferences.map((reference) => (
          <span key={reference} className="rounded-full border border-stone-200 px-3 py-2 text-sm font-semibold text-navy">
            {reference}
          </span>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        Use these paragraph references for study rather than long copied quotations.
      </p>
    </section>
  );
}
