import Link from "next/link";

export function DoctorsOfChurchSection() {
  const names = [
    "Saint Augustine",
    "Saint Jerome",
    "Saint Ambrose",
    "Saint Gregory the Great",
    "Saint Athanasius",
    "Saint Basil the Great",
    "Saint Gregory of Nazianzus",
    "Saint John Chrysostom",
    "Saint Thomas Aquinas",
    "Saint Bonaventure",
    "Saint Teresa of Avila",
    "Saint Catherine of Siena",
    "Saint Therese of Lisieux",
    "Saint Hildegard of Bingen",
  ];

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Teachers</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Doctors of the Church</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Doctors of the Church are saints recognized for their outstanding teaching and contribution
        to theology or spirituality.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {names.map((name) => (
          <article key={name} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{name}</h3>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/church-fathers" className="btn btn-secondary focus-ring justify-center">
          Church Fathers
        </Link>
        <Link href="/formation" className="btn btn-secondary focus-ring justify-center">
          Formation
        </Link>
      </div>
    </section>
  );
}

