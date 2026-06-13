export function DevotionsAndLiturgy() {
  return (
    <section className="rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Pastoral guidance</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy sm:text-5xl">
        Devotions and the Liturgy
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Catholic devotions are beautiful when they flow from and lead back to the liturgical life of
        the Church. The Mass, the sacraments, and the Liturgy of the Hours remain central. Devotions
        help extend that worship into daily life, family prayer, works of mercy, and personal conversion.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          "The Mass is the source and summit of Christian life.",
          "Devotions should not compete with the liturgy.",
          "Devotions can prepare us for Mass and help us live its grace.",
          "Devotions can deepen love for the Eucharist, Mary, the saints, Scripture, and works of mercy.",
        ].map((item) => (
          <article key={item} className="card bg-ivory p-4">
            <p className="text-sm leading-7 text-navy">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
