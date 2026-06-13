import Link from "next/link";

const ideas = [
  "Place a crucifix or purple cloth in a prayer corner.",
  "Pray before meals.",
  "Choose one family sacrifice.",
  "Attend Stations of the Cross.",
  "Give to the poor.",
  "Write forgiveness notes.",
  "Pray one decade of the Rosary.",
  "Read the Sunday Gospel before Mass.",
  "Make a family Holy Week plan.",
];

export function LentForFamiliesCallout() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Lent at Home</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        Families can live Lent simply and beautifully through small daily practices.
      </p>
      <ul className="daily-card-readable mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
        {ideas.map((idea) => (
          <li key={idea}>{idea}</li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href="/liturgical-living/lent/lent-for-families" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Lent for Families
        </Link>
      </div>
    </section>
  );
}

