import { penitentialPsalmReasons } from "@/data/sevenPenitentialPsalms";

export function WhyPrayPenitentialPsalms() {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Why pray them?</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Why Pray the Penitential Psalms?</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {penitentialPsalmReasons.map((reason) => (
          <article key={reason.title} className="card-parchment p-6">
            <h3 className="font-display text-2xl font-semibold text-navy">{reason.title}</h3>
            <p className="daily-card-readable mt-3 text-base leading-7 text-muted">{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
