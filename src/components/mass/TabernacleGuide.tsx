import Link from "next/link";

export function TabernacleGuide() {
  return (
    <section id="tabernacle" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">The Tabernacle</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Christ's abiding Eucharistic presence
      </h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
        <article className="card p-6">
          <p className="text-sm leading-7 text-muted">
            The tabernacle is the place where the Blessed Sacrament is reserved. Because Christ is
            truly present in the Eucharist, the tabernacle is treated with profound reverence.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "The sanctuary lamp indicates the Blessed Sacrament is reserved.",
              "Catholics genuflect toward the tabernacle when appropriate.",
              "The tabernacle supports Communion for the sick and Eucharistic adoration.",
              "It reminds the faithful of Christ's abiding presence.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Related helps</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/adoration" className="btn btn-secondary focus-ring justify-center">Adoration</Link>
            <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring justify-center">Eucharist</Link>
            <Link href="/devotions/eucharistic-adoration" className="btn btn-secondary focus-ring justify-center">Eucharistic Devotion</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
