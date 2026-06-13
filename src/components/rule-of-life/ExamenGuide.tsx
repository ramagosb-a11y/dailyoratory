import Link from "next/link";
import { dailyExamenSteps } from "@/data/ruleOfLife";

export function ExamenGuide() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <aside className="dashboard-card p-6 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">Daily Examen</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">End the day in mercy.</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          The examen is not a trial. It is a prayerful review of the day with the Lord who loves you.
        </p>
        <Link href="/rule-of-life/builder" className="btn btn-primary focus-ring mt-6">
          Add examen to my rule
        </Link>
      </aside>

      <section className="grid gap-4">
        {dailyExamenSteps.map((step, index) => (
          <article key={step.id} className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase text-burgundy">Step {index + 1}</p>
            <h1 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">{step.title}</h1>
            <p className="mt-3 text-base leading-8 text-muted">{step.prompt}</p>
            {step.prayer ? (
              <blockquote className="mt-5 border-l-4 border-gold pl-4 text-sm font-semibold leading-7 text-navy">
                {step.prayer}
              </blockquote>
            ) : null}
          </article>
        ))}
        <article className="card-parchment p-6">
          <p className="text-xs font-bold uppercase text-burgundy">Gentle review</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-navy">A rule can be adjusted.</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            If your rule becomes too heavy, simplify it in prayer. Fidelity grows through grace, not pressure.
          </p>
        </article>
      </section>
    </div>
  );
}
