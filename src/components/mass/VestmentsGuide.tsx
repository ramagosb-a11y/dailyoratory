import type { MassObject } from "@/types/mass";

export function VestmentsGuide({ vestments }: { vestments: MassObject[] }) {
  return (
    <section id="vestments" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Vestments</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Signs of sacred ministry
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        Vestments are not costumes. They signify sacred ministry, liturgical role, and the solemnity of worship.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {vestments.map((vestment) => (
          <article key={vestment.id} className="card p-6">
            <h3 className="font-display text-3xl font-semibold text-navy">{vestment.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{vestment.shortDescription}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">How used:</span> {vestment.howUsed}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Why it matters:</span> {vestment.whyItMatters}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
