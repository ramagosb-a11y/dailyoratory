const massDirectories = [
  {
    title: "Catholic Mass Times",
    description:
      "Search a mobile-friendly worldwide directory for nearby Catholic churches, Masses, Confession, Adoration, directions, and parish contact information.",
    href: "https://catholicmasstimes.com/",
    cta: "Search Catholic Mass Times",
  },
  {
    title: "MassTimes.org",
    description:
      "Find Catholic churches and local worship times by location, whether you are close to home or traveling.",
    href: "https://masstimes.org/",
    cta: "Search MassTimes.org",
  },
] as const;

export function FindMassSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-ivory">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-gold/15"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-ivory/10 text-gold">
              <LocationIcon />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">
              Catholic Worship Near You
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
              Find Mass, Adoration, or Confession Near You
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-soft">
              Find a nearby Catholic church and check local times for Mass, Eucharistic Adoration,
              and Confession using these helpful directories.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {massDirectories.map((directory) => (
              <article
                key={directory.href}
                className="flex h-full flex-col rounded-3xl border border-gold/40 bg-ivory p-6 text-navy shadow-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
                  Parish directory
                </p>
                <h3 className="font-display mt-3 text-3xl font-semibold">{directory.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">{directory.description}</p>
                <a
                  href={directory.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-liturgical focus-ring mt-6 min-h-12 justify-center"
                  aria-label={`${directory.cta} (opens in a new tab)`}
                >
                  {directory.cta}
                  <ExternalLinkIcon />
                </a>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-8 rounded-2xl border border-gold/25 bg-ivory/10 px-5 py-4 text-sm leading-7 text-stone-soft">
          <strong className="text-ivory">Before you travel:</strong> Schedules can change. Please
          confirm the current time directly with the parish.
        </p>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="ml-2 h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M11 4h5v5" />
      <path d="m9 11 7-7" />
      <path d="M16 11v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4" />
    </svg>
  );
}
