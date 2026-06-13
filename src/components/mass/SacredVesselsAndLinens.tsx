import type { MassObject } from "@/types/mass";

export function SacredVesselsAndLinens({ objects }: { objects: MassObject[] }) {
  return (
    <section id="sacred-vessels-linens" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Sacred vessels and linens</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Ordinary-looking objects, sacred use
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        These objects are beginner-friendly windows into the Church's care for the Eucharist.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {objects.map((item) => (
          <article key={item.id} className="card p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{item.objectType}</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.shortDescription}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">How it is used:</span> {item.howUsed}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Why it matters:</span> {item.whyItMatters}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
