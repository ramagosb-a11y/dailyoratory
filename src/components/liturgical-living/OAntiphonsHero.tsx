import Link from "next/link";

export function OAntiphonsHero() {
  return (
    <section className="dashboard-card overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Final days of Advent</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            The O Antiphons
          </h1>
          <p className="daily-readable mt-5 max-w-3xl text-xl leading-9 text-muted">
            Pray the ancient titles of Christ from December 17–23 and prepare your heart for Christmas.
          </p>
          <p className="daily-readable-muted mt-5 max-w-3xl text-base leading-8 text-muted">
            In the final seven days before Christmas, the Church prays the O Antiphons, calling upon Christ
            with biblical titles that reveal who He is and awaken our longing for His coming. These prayers
            help the heart move from Advent expectation into Christmas joy.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="#today-o-antiphon" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Pray Today&apos;s O Antiphon
            </Link>
            <Link href="/liturgical-living/christmas" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Prepare for Christmas
            </Link>
          </div>
        </div>

        <aside className="card-parchment p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">December 17–23</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-navy">A prayerful countdown to Christmas</h2>
          <p className="daily-card-readable mt-4 text-sm leading-7 text-muted">
            Each antiphon calls Christ by a title from Scripture: Wisdom, Lord, Root of Jesse, Key of David,
            Radiant Dawn, King of Nations, and Emmanuel.
          </p>
          <p className="daily-prayer-readable mt-4 text-base italic leading-8 text-navy">
            Come, Lord Jesus.
          </p>
        </aside>
      </div>
    </section>
  );
}
