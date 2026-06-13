"use client";

import Link from "next/link";

export function LiturgyHoursHero() {
  return (
    <section className="rounded-md border border-stone bg-navy px-6 py-8 text-ivory shadow-soft sm:px-8 sm:py-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Daily Oratory</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Liturgy of the Hours</h1>
      <h2 className="font-display mt-3 max-w-4xl text-3xl font-semibold leading-tight text-parchment sm:text-4xl">
        Pray with the Church Throughout the Day
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-8 text-parchment">
        Discover the Divine Office, the daily prayer of the Church, and join Catholics around the
        world in sanctifying the hours with psalms, Scripture, hymns, and prayer.
      </p>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-soft">
        Daily Oratory links to DivineOffice.org for the current daily prayers. If you are new to
        this tradition, you can begin simply as a learner and discover how the Holy Spirit draws
        the Church into steady prayer through the day.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href="https://divineoffice.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold focus-ring justify-center"
        >
          Pray Today&apos;s Office
        </a>
        <Link href="#how-to-begin" className="btn btn-outline-inverse focus-ring justify-center">
          Learn How It Works
        </Link>
        <a
          href="https://divineoffice.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-inverse focus-ring justify-center"
        >
          Start with Night Prayer
        </a>
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold/90">
        Opens DivineOffice.org in a new tab
      </p>
    </section>
  );
}
