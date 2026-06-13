import Link from "next/link";

export function DevotionsHomeCard() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
      <div className="grid gap-6 rounded-md border border-stone bg-parchment p-5 shadow-soft sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Catholic Devotions</p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Discover Catholic devotions
          </h2>
        </div>
        <div>
          <p className="text-sm leading-7 text-muted">
            Discover Catholic devotions that help you pray, grow in holiness, honor Christ, love Mary,
            seek mercy, and live the faith each day.
          </p>
          <Link href="/devotions" className="btn btn-primary focus-ring mt-5 w-full justify-center sm:w-auto">
            Explore Devotions
          </Link>
        </div>
      </div>
    </section>
  );
}
