import type { Sacrament } from "@/types/sacraments";

export function SacramentBiblicalRoots({ sacrament }: { sacrament: Sacrament }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Biblical roots</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {sacrament.biblicalRoots.map((reference) => (
          <span key={reference} className="season-pill bg-ivory px-3 py-2 text-navy">
            {reference}
          </span>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        Daily Oratory uses Scripture references here rather than reproducing full copyrighted modern Bible texts.
      </p>
    </section>
  );
}
