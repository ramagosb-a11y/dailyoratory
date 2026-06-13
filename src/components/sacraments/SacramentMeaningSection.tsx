import type { Sacrament } from "@/types/sacraments";

export function SacramentMeaningSection({ sacrament, title = "What This Sacrament Is" }: { sacrament: Sacrament; title?: string }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">{title}</h2>
      <p className="mt-4 text-base leading-8 text-muted">{sacrament.longDescription}</p>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {sacrament.whoReceives.map((item) => (
          <li key={item} className="rounded-3xl border border-stone-200 bg-ivory/70 px-4 py-3 text-sm leading-7 text-navy">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
