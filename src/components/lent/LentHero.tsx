import Link from "next/link";

export function LentHero() {
  return (
    <section className="liturgical-page-hero card-parchment overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Liturgical Living</p>
      <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        Lent and Fasting Guide
      </h1>
      <p className="daily-readable mt-5 max-w-4xl text-lg leading-8 text-muted">
        A Catholic path of prayer, fasting, almsgiving, repentance, and preparation for Easter.
      </p>
      <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
        Lent is a sacred season of return. Through prayer, fasting, almsgiving, Confession, and works of mercy, the Church invites us to turn away from sin, follow Christ more closely, and prepare our hearts for the joy of Easter.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href="#lenten-plan-builder" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          Build a Lenten Plan
        </a>
        <Link href="/liturgical-living/lent/fasting-and-abstinence" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Fasting and Abstinence
        </Link>
        <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Go to Confession Guide
        </Link>
      </div>
    </section>
  );
}
