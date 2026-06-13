export function CouncilsHero() {
  return (
    <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
      <div className="max-w-3xl">
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">Catholic formation</p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Councils of the Church
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          How the Church gathers, discerns, and teaches through history.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          From the early centuries to Vatican II, Church councils have helped the Church defend the faith, clarify doctrine,
          guide worship, address error, and respond to the needs of each age. Councils remind us that the Holy Spirit
          continues to guide the Church in faithfulness to Christ.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#councils-timeline" className="btn liturgical-button focus-ring">
            Explore the Councils
          </a>
          <a href="#first-seven-councils" className="btn btn-secondary focus-ring">
            Start with the First Seven Councils
          </a>
          <a href="#vatican-ii" className="btn btn-ghost focus-ring">
            Learn Vatican II
          </a>
        </div>
        <div className="card-parchment mt-6 max-w-2xl border border-stone/70 bg-ivory/90 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Note</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Daily Oratory provides beginner-friendly summaries and links to official sources. For full council documents,
            use the Vatican and other official Church resources.
          </p>
        </div>
      </div>
    </section>
  );
}
