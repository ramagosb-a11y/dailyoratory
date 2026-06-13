export function FamilyEpiphanyNight({ steps }: { steps: readonly string[] }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">A Simple Family Epiphany Night</h2>
      <ol className="daily-card-readable mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-muted">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
