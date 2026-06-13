import Link from "next/link";

export function RealPresenceSection() {
  return (
    <section id="real-presence" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">The Real Presence</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Transubstantiation and the mystery of Christ's presence
      </h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="card p-6">
          <p className="text-sm leading-7 text-muted">
            Catholics believe that at the consecration, by the power of the Holy Spirit and the
            words of Christ, the bread and wine become the Body and Blood of Christ. The
            appearances of bread and wine remain, but the substance is changed.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "It is not merely symbolic.",
              "Christ is truly present.",
              "The Eucharist is His Body, Blood, Soul, and Divinity.",
              "This mystery calls for adoration, reverence, thanksgiving, and worthy reception.",
            ].map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Keep learning reverently</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring justify-center">Eucharist</Link>
            <Link href="/adoration" className="btn btn-secondary focus-ring justify-center">Adoration</Link>
            <Link href="/church-fathers" className="btn btn-secondary focus-ring justify-center">Church Fathers</Link>
            <Link href="/devotions/eucharistic-adoration" className="btn btn-secondary focus-ring justify-center">Eucharistic Devotion</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
