import Link from "next/link";

export function MassHero() {
  return (
    <section className="liturgical-page-hero overflow-hidden rounded-[2rem] border border-gold/30 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.22),_transparent_48%),linear-gradient(135deg,rgba(251,247,238,0.98),rgba(245,236,219,0.94))] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-burgundy">The Holy Mass</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Heaven on Earth
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            At every Mass, the Church is drawn into the worship of heaven. Christ speaks in the
            Word, offers Himself to the Father, gives Himself in the Eucharist, and sends His
            people into the world as witnesses of His love.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            If you are new to Mass, you are welcome to attend and observe. You do not need to
            understand everything at once. This guide explains what Catholics believe is happening
            and how to participate respectfully.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#mass-roadmap" className="btn btn-gold focus-ring justify-center">
              Walk Through the Mass
            </a>
            <a href="#featured-videos" className="btn btn-secondary focus-ring justify-center">
              Watch: The Veil Removed
            </a>
            <a href="#sacred-spaces" className="btn btn-secondary focus-ring justify-center">
              Learn the Sacred Space
            </a>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">
            Daily Oratory helps you learn the Mass prayerfully, but it does not replace the living
            liturgy of your parish, the teaching of your priest, or official Church guidance.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem] border border-gold/25 bg-gradient-to-br from-ivory via-parchment to-white p-6 shadow-soft sm:p-8">
          <div className="absolute inset-x-10 top-6 h-24 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative rounded-[1.25rem] border border-gold/20 bg-white/78 p-6 backdrop-blur sm:p-7">
            <div className="mx-auto max-w-sm text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-burgundy">
                Mass at a glance
              </p>
              <div className="mx-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-[radial-gradient(circle,_rgba(201,162,39,0.16),rgba(255,255,255,0.96)_68%)]">
                <div className="relative h-10 w-10">
                  <div className="absolute inset-x-1 top-1 h-1.5 rounded-full bg-burgundy/70" />
                  <div className="absolute left-1/2 top-2 h-7 w-0.5 -translate-x-1/2 rounded-full bg-gold" />
                  <div className="absolute left-1/2 top-4 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gold" />
                  <div className="absolute inset-x-1 bottom-1 h-3 rounded-[999px] border border-gold/25 bg-parchment" />
                </div>
              </div>
              <p className="mt-5 font-display text-xl font-semibold leading-tight text-navy sm:text-2xl">
                Christ gathers, speaks, offers, feeds, and sends.
              </p>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-[15px]">
                A reverent guide to the altar, the Word, the Eucharistic sacrifice, and the sacred
                mission flowing from the dismissal.
              </p>
              <Link
                href="/sacraments/eucharist"
                className="btn btn-secondary focus-ring mt-5 inline-flex justify-center"
              >
                Begin with the Eucharist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
