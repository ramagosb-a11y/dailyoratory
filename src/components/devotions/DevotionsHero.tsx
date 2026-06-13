"use client";

import Link from "next/link";

export function DevotionsHero() {
  return (
    <section className="rounded-md border border-stone bg-navy px-6 py-8 text-ivory shadow-soft sm:px-8 sm:py-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Daily Oratory</p>
      <h1 className="font-display mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        Catholic Devotions
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-parchment">
        Discover prayers and practices that help the heart turn toward Christ, honor Mary and the saints,
        seek mercy, grow in virtue, and live the liturgical year.
      </p>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-soft">
        Devotions are Catholic prayer practices that help the heart turn toward Christ. Visitors
        from any background are welcome to learn about them, while Catholics are encouraged to keep
        them rooted in the Mass, sacraments, Scripture, and charity.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link href="#devotions-library" className="btn btn-gold focus-ring justify-center">
          Find a Devotion
        </Link>
        <Link href="/rosary" className="btn btn-outline-inverse focus-ring justify-center">
          Start with the Rosary
        </Link>
      </div>
    </section>
  );
}
