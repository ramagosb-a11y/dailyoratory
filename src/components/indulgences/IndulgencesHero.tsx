import Link from "next/link";

export function IndulgencesHero() {
  return (
    <section className="liturgical-page-hero rounded-md border border-stone bg-navy px-6 py-8 text-ivory shadow-soft sm:px-8 sm:py-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Daily Oratory</p>
      <h1 className="font-display mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        Catholic Indulgences Guide
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-parchment sm:text-lg sm:leading-8">
        Understand indulgences, the usual conditions, the 2025 Jubilee, and the 2026 Year of Saint
        Francis indulgence.
      </p>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-soft">
        Indulgences are a gift of mercy rooted in Christ&apos;s grace and the Church&apos;s treasury of
        spiritual goods.
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-soft">
        If this topic is new to you, begin slowly. Catholics understand indulgences in connection
        with repentance, mercy, prayer, and the communion of the Church, not as a shortcut or a
        spiritual transaction.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link href="#indulgence-builder" className="btn btn-gold focus-ring justify-center">
          Build Today&apos;s Indulgence Plan
        </Link>
        <Link href="#official-sources" className="btn btn-outline-inverse focus-ring justify-center">
          Official Church Sources
        </Link>
      </div>
    </section>
  );
}
