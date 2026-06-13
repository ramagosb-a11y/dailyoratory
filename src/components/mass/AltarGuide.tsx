export function AltarGuide() {
  return (
    <section id="altar" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">The Altar</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        The center of Eucharistic sacrifice and sacred banquet
      </h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <article className="card p-6">
          <p className="text-sm leading-7 text-muted">
            The altar is the central place of Eucharistic sacrifice and sacred banquet. It points
            to Christ Himself, the sacrifice of the Cross, and the table of the Lord.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "The altar is not just a table.",
              "It is treated with reverence.",
              "The priest kisses the altar.",
              "The gifts are placed on it.",
              "The Eucharistic sacrifice is offered there.",
              "It may contain relics according to liturgical tradition and norms.",
              "It is normally covered and prepared for the sacred liturgy.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">What to notice at Mass</h3>
          <ul className="mt-4 space-y-3">
            {[
              "The altar's central location.",
              "The reverence shown to it.",
              "The movement from ambo to altar.",
              "The preparation of gifts.",
              "The Eucharistic Prayer.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="mt-2 h-2 w-2 rounded-full bg-burgundy" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
