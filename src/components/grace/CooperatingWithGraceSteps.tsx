const steps = [
  "Pray daily.",
  "Receive the sacraments.",
  "Respond promptly to holy inspirations.",
  "Avoid near occasions of sin.",
  "Practice the opposite virtue.",
  "Examine your conscience.",
  "Read Scripture.",
  "Serve others.",
  "Ask for the Holy Spirit’s help.",
  "Begin again after falling.",
] as const;

export function CooperatingWithGraceSteps() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">How to Cooperate with Grace</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {steps.map((step, index) => (
          <article key={step} className="dashboard-card p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Step {index + 1}</p>
            <p className="daily-card-readable mt-3 text-base leading-7 text-muted">{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
