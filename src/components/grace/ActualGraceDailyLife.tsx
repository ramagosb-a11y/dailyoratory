const examples = [
  "You feel moved to pray after neglecting prayer.",
  "You receive courage to leave a near occasion of sin.",
  "You feel prompted to apologize.",
  "You are given strength to forgive.",
  "You sense the need to go to Confession.",
  "You are drawn to help someone in need.",
  "You receive light while reading Scripture.",
  "You are given peace to obey God in a hard decision.",
] as const;

export function ActualGraceDailyLife() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Actual Grace in Daily Life</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        Actual grace is God’s help in concrete moments. It may come as a prompting to pray, a sudden clarity to
        choose the good, courage to resist temptation, sorrow for sin, strength to forgive, or an invitation to serve.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {examples.map((example) => (
          <article key={example} className="dashboard-card p-5">
            <p className="daily-card-readable text-base leading-7 text-muted">{example}</p>
          </article>
        ))}
      </div>
      <p className="daily-readable-muted mt-6 text-base leading-8 text-muted">
        Not every feeling is automatically grace. Discernment, prayer, Scripture, Church teaching, and wise counsel
        help us recognize God’s movements.
      </p>
    </section>
  );
}
