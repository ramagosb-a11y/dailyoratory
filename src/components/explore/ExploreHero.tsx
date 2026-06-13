export function ExploreHero() {
  return (
    <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
      <div className="max-w-3xl">
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">For seekers and inquirers</p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Curious About the Catholic Faith?
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          A peaceful place to ask questions, learn the basics, and discover Catholic prayer, Scripture, the Mass,
          sacraments, saints, and spiritual life.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          Whether you are new to Catholicism, returning after years away, attending Mass with someone you love, or
          simply curious, Daily Oratory welcomes you. Begin slowly. Ask honest questions. Let the Holy Spirit guide your
          search for truth.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#start-with-the-basics" className="btn liturgical-button focus-ring">Start with the Basics</a>
          <a href="/explore/first-time-at-mass" className="btn btn-secondary focus-ring">First Time at Mass</a>
          <a href="/ocia" className="btn btn-ghost focus-ring">Learn About OCIA</a>
        </div>
      </div>
    </section>
  );
}
