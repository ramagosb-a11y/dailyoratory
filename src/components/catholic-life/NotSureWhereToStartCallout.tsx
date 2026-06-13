import Link from "next/link";

export function NotSureWhereToStartCallout() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Need a gentle starting point?</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">Not Sure Where to Start?</h2>
      <p className="daily-readable mt-4 max-w-3xl text-base leading-8 text-muted">
        Choose your current situation and let Daily Oratory point you to one simple next step.
      </p>
      <div className="mt-6">
        <Link href="/explore" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          Open Explore the Catholic Faith
        </Link>
      </div>
    </section>
  );
}
