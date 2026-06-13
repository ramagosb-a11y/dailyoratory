import Link from "next/link";

export function PenitentialPsalmsHero() {
  return (
    <section className="card-parchment p-8 sm:p-10 lg:p-12">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayers of repentance and mercy</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        The Seven Penitential Psalms
      </h1>
      <p className="daily-readable mt-5 max-w-4xl text-lg leading-9 text-muted">
        Pray the ancient Psalms of repentance, contrition, mercy, and renewal.
      </p>
      <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
        The Seven Penitential Psalms are a traditional Catholic prayer practice for seasons of repentance,
        especially Lent, before Confession, after a fall, or whenever the soul desires to return to God with
        humility and trust. These Psalms teach the heart to cry for mercy, confess sin honestly, hope in
        forgiveness, and begin again.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="#seven-day-journey" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          Begin the Seven-Day Journey
        </Link>
        <Link href="#before-confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Pray Before Confession
        </Link>
        <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Go to Confession Guide
        </Link>
      </div>
    </section>
  );
}
