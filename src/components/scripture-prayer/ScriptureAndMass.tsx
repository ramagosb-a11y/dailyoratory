import Link from "next/link";

const massParts = [
  "First Reading",
  "Responsorial Psalm",
  "Second Reading, usually Sundays and solemnities",
  "Gospel Acclamation",
  "Gospel",
  "Homily",
  "Creed and intercessions",
];

const links = [
  { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
  { label: "Eucharist", href: "/sacraments/eucharist" },
  { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
];

export function ScriptureAndMass() {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Scripture and the Mass</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        The Bible at the heart of the Mass
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        At every Mass, Scripture is proclaimed, heard, and fulfilled in Christ. The Liturgy of the
        Word prepares the faithful for the Liturgy of the Eucharist. The same Lord who speaks in
        the Scriptures gives Himself in the Eucharist.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {massParts.map((part) => (
          <article key={part} className="rounded-md border border-stone/70 bg-parchment px-4 py-4">
            <h3 className="font-display text-2xl font-semibold text-navy">{part}</h3>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href="https://bible.usccb.org/" target="_blank" rel="noopener noreferrer" className="btn btn-primary focus-ring justify-center">
          Pray Today&apos;s Mass Readings
        </a>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
