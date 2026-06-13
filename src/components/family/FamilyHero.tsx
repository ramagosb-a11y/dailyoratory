import Link from "next/link";

export function FamilyHero() {
  return (
    <section className="liturgical-page-hero card-parchment overflow-hidden p-7 sm:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Family formation</p>
      <h1 className="font-display mt-3 max-w-4xl text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        The Domestic Church
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
        Building a home of prayer, love, mercy, and spiritual growth.
      </p>
      <p className="mt-5 max-w-4xl text-sm leading-8 text-muted">
        The Catholic faith sees the family as a domestic church: a place where faith is first learned, prayer is practiced,
        forgiveness is offered, and love becomes visible in daily life. Whether your home is peaceful, busy, wounded,
        growing, or beginning again, the Holy Spirit can help your family become a place of grace.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="#family-rule-of-life" className="btn liturgical-button focus-ring justify-center">
          Build a Family Rule of Life
        </Link>
        <Link href="#family-prayer" className="btn btn-secondary focus-ring justify-center">
          Start Family Prayer
        </Link>
        <Link href="#what-is-domestic-church" className="btn btn-secondary focus-ring justify-center">
          Learn What the Domestic Church Means
        </Link>
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
        Daily Oratory offers prayer and formation resources for families. It does not replace parish life, the sacraments,
        pastoral care, counseling, or emergency help.
      </p>
    </section>
  );
}
