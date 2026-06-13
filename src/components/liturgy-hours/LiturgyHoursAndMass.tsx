import Link from "next/link";

const links = [
  { label: "Eucharist", href: "/sacraments/eucharist" },
  { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
  { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
  { label: "Adoration", href: "/adoration" },
];

export function LiturgyHoursAndMass() {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Liturgy and sacrament</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        How it connects to the Mass
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        The Mass is the source and summit of Christian life. The Liturgy of the Hours extends the
        prayer of the Church through the day, helping the faithful carry Scripture, praise,
        thanksgiving, intercession, and conversion into ordinary time.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
