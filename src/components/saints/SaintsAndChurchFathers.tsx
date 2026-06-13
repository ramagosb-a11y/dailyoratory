import Link from "next/link";

export function SaintsAndChurchFathers() {
  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Church Fathers</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
        Saints and the Church Fathers
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Many Church Fathers are also saints. Their writings help Catholics understand Scripture,
        sacraments, doctrine, prayer, and holiness.
      </p>
      <Link href="/church-fathers" className="mt-6 inline-flex text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
        Explore the Church Fathers
      </Link>
    </section>
  );
}

