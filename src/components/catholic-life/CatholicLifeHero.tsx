import Link from "next/link";

export function CatholicLifeHero() {
  return (
    <section className="liturgical-page-hero card-parchment overflow-hidden p-6 sm:p-8 lg:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Start here</p>
      <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Catholic Life Roadmap
          </h1>
          <p className="daily-readable mt-4 max-w-3xl text-xl leading-9 text-muted">
            A simple path through prayer, mercy, sacraments, Scripture, formation, and daily Catholic life.
          </p>
          <p className="daily-readable-muted mt-5 max-w-3xl text-base leading-8 text-muted">
            The Catholic life is not a collection of disconnected topics. It is a way of following Jesus Christ
            through prayer, the sacraments, Scripture, mercy, virtue, Mary&apos;s help, the life of the Church,
            and hope in eternal life. Use this roadmap to find your next faithful step.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-gold/25 bg-white/70 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-burgundy">Begin gently</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Start with one simple next step and let the rest unfold with prayer, patience, and grace.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <a href="#roadmap" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Explore the Roadmap
            </a>
            <Link href="/explore" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Explore the Catholic Faith
            </Link>
            <Link href="/pray" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Start Praying
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
