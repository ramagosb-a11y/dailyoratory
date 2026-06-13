export function OciaHero() {
  return (
    <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
      <div className="max-w-3xl">
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">
          OCIA
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Becoming Catholic
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          A welcoming guide to OCIA, the Catholic journey of inquiry, formation, and initiation.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          If you are curious about the Catholic faith, returning after time away, or wondering how
          adults become Catholic, you are welcome here. OCIA is a parish journey of learning,
          prayer, discernment, and sacramental preparation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#ocia-journey" className="btn liturgical-button focus-ring">
            Learn the OCIA Process
          </a>
          <a href="#parish-questions" className="btn btn-secondary focus-ring">
            Find Questions to Ask a Parish
          </a>
          <a href="#beginner-catholic-learning-path" className="btn btn-ghost focus-ring">
            Start Exploring the Faith
          </a>
        </div>
        <div className="card-parchment mt-6 max-w-2xl border border-stone/70 bg-ivory/90 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Note</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Daily Oratory helps you understand and prepare, but OCIA happens through a local
            Catholic parish.
          </p>
        </div>
      </div>
    </section>
  );
}
