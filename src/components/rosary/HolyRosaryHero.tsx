import Link from "next/link";

export function HolyRosaryHero() {
  return (
    <section className="liturgical-page-hero card-parchment overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Marian devotion</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            The Holy Rosary
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-navy">
            A prayerful walk through the life of Jesus with Mary.
          </p>
          <p className="mt-6 max-w-4xl text-sm leading-8 text-muted">
            The Rosary is a Christ-centered prayer that helps the faithful meditate on the mysteries of
            salvation with the Blessed Virgin Mary. Each decade invites the heart to slow down, enter the
            Gospel, and ask for the grace to follow Jesus more faithfully.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/rosary" className="btn btn-gold focus-ring justify-center">
              Pray the Rosary Live
            </Link>
            <Link href="#mysteries-of-the-rosary" className="btn btn-secondary focus-ring justify-center">
              Explore the Mysteries
            </Link>
          </div>
        </div>

        <aside className="rounded-[1.5rem] border border-gold/35 bg-ivory/90 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Hero note</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Daily Oratory provides original summaries and prayer prompts. For full Scripture texts, use
            approved Catholic Bible translations and official Church resources.
          </p>
        </aside>
      </div>
    </section>
  );
}
