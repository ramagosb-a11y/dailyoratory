export function WatchMass() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
      <div className="grid gap-6 rounded-md border border-stone bg-ivory p-5 shadow-soft sm:p-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Watch the Mass</p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Pray with the daily Mass online.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            When you cannot attend in person, you can unite your heart to the Holy Sacrifice of the Mass through a
            reverent daily broadcast from the National Shrine of The Divine Mercy.
          </p>
        </div>
        <div className="rounded-sm border border-stone bg-parchment p-5">
          <h3 className="font-display text-3xl font-semibold leading-tight text-navy">Daily Mass from The Divine Mercy</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Open the daily Mass page in a new tab. Parish attendance and sacramental Communion remain the ordinary
            way Catholics participate in the Mass when possible.
          </p>
          <a
            href="https://www.thedivinemercy.org/DailyMass"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary focus-ring mt-5 w-full justify-center sm:w-auto"
            aria-label="Watch Daily Mass from The Divine Mercy in a new tab"
          >
            Watch Daily Mass
          </a>
        </div>
      </div>
    </section>
  );
}
