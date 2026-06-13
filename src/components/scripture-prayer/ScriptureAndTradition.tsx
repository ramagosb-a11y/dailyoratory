import Link from "next/link";

const links = [
  { label: "Church Fathers", href: "/church-fathers" },
  { label: "Sacraments", href: "/sacraments" },
  { label: "Devotions", href: "/devotions" },
  { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
];

export function ScriptureAndTradition() {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Reading with the Church</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Scripture and Catholic Tradition
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        Catholics read Scripture within the living faith of the Church. The same Spirit who
        inspired Scripture guides the Church in handing on the faith. The Church Fathers, saints,
        liturgy, and Catechism help Catholics read Scripture faithfully.
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
