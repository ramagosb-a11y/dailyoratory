import Link from "next/link";

export function PrayHero() {
  return (
    <header className="liturgical-page-hero liturgical-gradient-soft rounded-2xl border border-stone/70 px-6 py-10 sm:px-8 sm:py-12">
      <p className="liturgical-section-eyebrow">Catholic prayer hub</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        Pray
      </h1>
      <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">
        Begin with God. Return throughout the day. Grow into a life of prayer.
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
        Prayer is not about perfect words. It is a relationship with the Father, through the Son,
        in the Holy Spirit. Daily Oratory helps you begin simply, pray faithfully, and grow deeper
        over time.
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Prayer belongs to every seeking heart. Daily Oratory presents Catholic prayer traditions for
        anyone who wants to learn how the Church prays and how the Holy Spirit leads souls toward God.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="#prayers-for-today" className="btn liturgical-button focus-ring justify-center">
          Pray Now
        </Link>
        <Link href="#prayer-rhythm-builder" className="btn btn-secondary focus-ring justify-center">
          Build a Prayer Rhythm
        </Link>
        <Link href="#what-is-prayer" className="btn btn-secondary focus-ring justify-center">
          Learn How to Pray
        </Link>
      </div>
    </header>
  );
}
