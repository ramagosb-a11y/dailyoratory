import Link from "next/link";

export function FastingQuickGuide() {
  const points = [
    "Ash Wednesday and Good Friday are days of fasting and abstinence in many places.",
    "Fridays of Lent are days of abstinence from meat in many places.",
    "Fasting usually means eating less than usual according to Church norms.",
    "Abstinence usually means refraining from meat.",
    "The sick, frail, pregnant, nursing, young children, older adults, and those with serious medical or eating-related concerns may be exempt or need guidance.",
    "Fasting should never become self-harm or spiritual pride.",
  ];

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Fasting and Abstinence Quick Guide</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        Catholic fasting and abstinence rules may vary by country or bishops&apos; conference. The guide below gives a general Catholic overview. Always follow your local diocese or bishops&apos; conference.
      </p>
      <ul className="daily-card-readable mt-6 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href="/liturgical-living/lent/fasting-and-abstinence" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Read the Full Fasting Guide
        </Link>
      </div>
    </section>
  );
}

