export function VenialMortalComparison() {
  return (
    <section className="grid gap-5 lg:grid-cols-2">
      <article className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Venial sin</p>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>wounds charity</li>
          <li>weakens the soul</li>
          <li>does not destroy sanctifying grace</li>
          <li>should be repented of</li>
          <li>can be forgiven through prayer, charity, Eucharist, and Confession</li>
        </ul>
      </article>
      <article className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Mortal sin</p>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>involves grave matter, knowledge, and consent</li>
          <li>destroys charity in the soul</li>
          <li>separates from sanctifying grace</li>
          <li>must be confessed</li>
          <li>should lead the person quickly to repentance and mercy</li>
        </ul>
      </article>
    </section>
  );
}
