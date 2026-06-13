import { aspirations, prayerPathSteps, weeklyRhythm } from "@/lib/prayer";

export function DailyOratoryPrayerPath() {
  return (
    <section>
      <p className="liturgical-section-eyebrow">A daily path of prayer</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        A flexible rhythm for an ordinary Catholic life.
      </h2>

      <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <div className="dashboard-card p-6 sm:p-8">
          <ol className="grid gap-4">
            {prayerPathSteps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="liturgical-accent-bg mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-[var(--liturgical-foreground)]">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-muted">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-7 text-muted">
            This is a flexible path, not a burden. Start with one step.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Weekly devotional rhythm</p>
            <div className="mt-4 grid gap-3">
              {weeklyRhythm.map(([day, devotion]) => (
                <div key={day} className="flex items-start justify-between gap-4 border-b border-stone/70 pb-3 last:border-0">
                  <span className="font-semibold text-navy">{day}</span>
                  <span className="text-right text-sm leading-6 text-muted">{devotion}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Short aspirations</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {aspirations.map((aspiration) => (
                <div key={aspiration} className="rounded-md border border-stone bg-parchment p-3 text-sm font-semibold text-navy">
                  {aspiration}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
