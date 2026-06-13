const steps = [
  "Go to Confession regularly.",
  "Receive the Eucharist reverently.",
  "Pray daily.",
  "Forgive others.",
  "Practice works of mercy.",
  "Resist temptation.",
  "Prepare for death without fear.",
  "Pray for the dead.",
  "Live each day as a gift.",
  "Keep your eyes fixed on Christ.",
] as const;

export function LivingInLightOfEternity() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Living in the Light of Eternity</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        The Christian does not wait passively for eternal life. The hope of Heaven changes how we live now.
      </p>
      <ol className="daily-card-readable mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-muted">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
