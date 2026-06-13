import Link from "next/link";

const pillars = [
  {
    title: "Prayer",
    description:
      "Prayer turns the heart back toward God. Lent is a time to deepen daily prayer, meditate on Scripture, pray the Rosary, attend Mass, make a Holy Hour, or pray the Stations of the Cross.",
    href: "/liturgical-living/lent/lenten-prayer-plan",
    button: "Build a Prayer Plan",
  },
  {
    title: "Fasting",
    description:
      "Fasting trains the body and soul to hunger for God. By denying ourselves lawful goods in a healthy and obedient way, we learn to resist sin and love Christ more freely.",
    href: "/liturgical-living/lent/fasting-and-abstinence",
    button: "Learn About Fasting",
  },
  {
    title: "Almsgiving",
    description:
      "Almsgiving turns love outward. Lent calls us to serve the poor, forgive debts, give generously, practice mercy, and make room in our lives for others.",
    href: "/liturgical-living/lent/almsgiving",
    button: "Practice Almsgiving",
  },
];

export function ThreePillarsOfLent() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">The Three Pillars of Lent</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="card-parchment p-6 sm:p-8">
            <h3 className="font-display text-3xl font-semibold text-navy">{pillar.title}</h3>
            <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{pillar.description}</p>
            <div className="mt-6">
              <Link href={pillar.href} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                {pillar.button}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

