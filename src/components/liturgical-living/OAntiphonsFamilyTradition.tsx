const ideas = [
  "Place one title of Christ near the Advent wreath each day.",
  "Let children color or decorate each title.",
  "Pray one antiphon before dinner.",
  "Add one figure or symbol near the Nativity scene each night.",
  "Use the seven days to prepare one gift for Jesus: forgiveness, silence, charity, Confession, Scripture, prayer, or service.",
];

export function OAntiphonsFamilyTradition() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">A family O Antiphons tradition</h2>
      <ul className="daily-card-readable mt-6 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        {ideas.map((idea) => (
          <li key={idea}>{idea}</li>
        ))}
      </ul>
    </section>
  );
}
