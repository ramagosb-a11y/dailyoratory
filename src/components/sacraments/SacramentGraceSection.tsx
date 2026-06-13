import type { Sacrament } from "@/types/sacraments";

export function SacramentGraceSection({ sacrament }: { sacrament: Sacrament }) {
  return (
    <section className="grid gap-5 lg:grid-cols-2">
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">What grace it gives</h2>
        <p className="mt-4 text-base leading-8 text-muted">{sacrament.graceFocus}</p>
      </article>
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">How the Church celebrates it</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
          {sacrament.howCelebrated.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
