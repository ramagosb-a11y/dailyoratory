import Link from "next/link";
import { LentenPlanBuilder } from "@/components/lent/LentenPlanBuilder";

export function LentenPrayerPlanContent() {
  const dailyPlan = [
    "Morning offering or a brief opening prayer.",
    "A short Gospel reading.",
    "A simple act of fasting or silence.",
    "One concrete act of charity or restraint.",
    "Evening Examen and contrition.",
  ];

  const weeklyPlan = [
    "Choose one day for Stations of the Cross.",
    "Choose one day for a fuller Rosary or Sorrowful Mysteries.",
    "Set one concrete Confession date.",
    "Add one period of Adoration or extra silence.",
  ];

  return (
    <div className="grid gap-10">
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Why prayer matters in Lent</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Lent is not sustained by willpower alone. Prayer turns sacrifice into relationship and repentance into return. Without prayer, even good Lenten efforts can become dry or self-focused.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Simple daily plan</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
            {dailyPlan.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Weekly plan</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
            {weeklyPlan.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Scripture plan</h2>
          <p className="daily-readable mt-4 text-base leading-8 text-muted">
            Stay close to the Gospels, penitential Psalms, and the Sunday readings so your Lent is shaped by the Word of God.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Rosary plan</h2>
          <p className="daily-readable mt-4 text-base leading-8 text-muted">
            The Sorrowful Mysteries are especially fitting for Lent, even if you only pray one decade slowly and faithfully.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Confession plan</h2>
          <p className="daily-readable mt-4 text-base leading-8 text-muted">
            Put Confession on the calendar. Planned repentance is often more fruitful than a vague intention to go later.
          </p>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Adoration plan</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Even a short visit before the Blessed Sacrament can quiet the heart and keep Lent centered on Jesus rather than on self-improvement.
        </p>
      </section>

      <LentenPlanBuilder />

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Related links</h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/pray" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Prayer
          </Link>
          <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Confession Guide
          </Link>
          <Link href="/prayers/seven-penitential-psalms" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Seven Penitential Psalms
          </Link>
        </div>
      </section>
    </div>
  );
}

