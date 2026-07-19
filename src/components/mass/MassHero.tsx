export function MassHero() {
  return (
    <section className="liturgical-page-hero overflow-hidden rounded-[2rem] border border-gold/30 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.22),_transparent_48%),linear-gradient(135deg,rgba(251,247,238,0.98),rgba(245,236,219,0.94))] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-burgundy">The Holy Mass</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
          Heaven on Earth
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
          At every Mass, the Church is drawn into the worship of heaven. Christ speaks in the Word,
          offers Himself to the Father, gives Himself in the Eucharist, and sends His people into
          the world as witnesses of His love.
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
    </section>
  );
}
