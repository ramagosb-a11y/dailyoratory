const steps = [
  "Light an Advent candle or sit quietly before a sacred image.",
  "Read the day’s O Antiphon title.",
  "Pray the short prayer.",
  "Ask the reflection question.",
  "Sing or listen to “O Come, O Come Emmanuel.”",
  "End by praying: Come, Lord Jesus.",
];

export function OAntiphonsHomePrayerGuide() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">How to pray the O Antiphons at home</h2>
      <ol className="daily-card-readable mt-6 list-decimal space-y-3 pl-5 text-base leading-7 text-muted">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
