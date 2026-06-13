export function TraditionHero() {
  return (
    <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
      <div className="max-w-3xl">
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">Catholic formation</p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">Sacred Tradition</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          How the Catholic faith is handed on through the Church, guided by the Holy Spirit.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          Catholics believe the Gospel was handed on through both Sacred Scripture and Sacred Tradition. Tradition is not
          merely old customs. It is the living transmission of the apostolic faith: proclaimed, prayed, celebrated, taught,
          defended, and lived in the Church.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#understand-tradition" className="btn liturgical-button focus-ring">
            Understand Tradition
          </a>
          <a href="#scripture-and-tradition" className="btn btn-secondary focus-ring">
            Scripture and Tradition
          </a>
          <a href="#tradition-early-church" className="btn btn-ghost focus-ring">
            Explore the Church Fathers
          </a>
        </div>
        <div className="card-parchment mt-6 max-w-2xl border border-stone/70 bg-ivory/90 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Note</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Daily Oratory offers a beginner-friendly explanation and links to official Church sources. For formal teaching,
            consult the Catechism and Church documents.
          </p>
        </div>
      </div>
    </section>
  );
}
