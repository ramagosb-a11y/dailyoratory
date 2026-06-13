import type { EpiphanyJourneyStep } from "@/types/epiphany";

export function FollowTheStarCards({ steps }: { steps: EpiphanyJourneyStep[] }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Follow the Star</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {steps
          .slice()
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((step) => (
            <article key={step.id} className="dashboard-card p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Step {step.sortOrder}</p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{step.title}</h3>
              <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{step.description}</p>
            </article>
          ))}
      </div>
    </section>
  );
}
