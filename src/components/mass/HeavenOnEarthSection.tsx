import Link from "next/link";

const links = [
  { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
  { label: "Adoration", href: "/adoration" },
  { label: "Eucharist", href: "/sacraments/eucharist" },
  { label: "Church Fathers", href: "/church-fathers" },
];

const points = [
  "The angels and saints are present in worship.",
  "The altar points to sacrifice and banquet.",
  "The Eucharist is communion with Christ.",
  "The Sanctus joins the hymn of heaven.",
  "The Mass sends us back into daily life changed.",
];

export function HeavenOnEarthSection() {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Heaven on Earth</p>
      <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="card p-6">
          <h2 className="font-display text-4xl font-semibold text-navy">Earthly worship joined to heaven</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            The Mass is not isolated from heaven. In the liturgy, the Church joins the angels and
            saints in worshiping God. The prayers, Scripture, altar, sacrifice, and Eucharist all
            point toward the heavenly liturgy.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-gold/25 px-4 py-2 text-sm font-semibold text-navy transition hover:border-burgundy hover:text-burgundy">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="card-parchment p-6">
          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="mt-2 h-2 w-2 rounded-full bg-burgundy" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
