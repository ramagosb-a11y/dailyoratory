const directories = [
  {
    name: "MassTimes.org",
    href: "https://masstimes.org/map",
    description: "Search for Catholic churches and Mass times by location.",
    cta: "Search Mass Times",
  },
  {
    name: "Catholic Mass Times",
    href: "https://catholicmasstimes.com/",
    description: "Find Catholic Mass schedules, church locations, and parish information.",
    cta: "Find a Mass",
  },
];

export function FindMassTimes() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
      <div className="rounded-md border border-stone/80 bg-parchment/90 p-5 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">External resources</p>
            <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Find Mass Near You
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Looking for a Catholic Mass time nearby? These external tools can help you find parishes, Mass schedules,
              and church locations.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Please confirm Mass times with the parish website or bulletin before traveling, especially on holy days,
              holidays, or during severe weather.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {directories.map((directory) => (
              <a
                key={directory.href}
                href={directory.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card resource-card focus-ring p-5"
                aria-label={`Open ${directory.name} in a new tab`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">External resource</p>
                <h3 className="font-display text-3xl font-semibold leading-tight text-navy">{directory.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{directory.description}</p>
                <span className="text-link mt-5 inline-flex text-sm">{directory.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
