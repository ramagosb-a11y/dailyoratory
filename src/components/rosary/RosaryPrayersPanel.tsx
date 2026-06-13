import { getRosaryPrayers } from "@/lib/rosary";

export function RosaryPrayersPanel({ compact = false }: { compact?: boolean }) {
  const prayers = compact ? getRosaryPrayers().slice(0, 4) : getRosaryPrayers();

  return (
    <section className="prayer-card p-5 sm:p-7">
      <p className="text-xs font-bold uppercase text-burgundy">Rosary prayers</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Traditional prayers for the Rosary.</h2>
      <div className="mt-6 grid gap-5">
        {prayers.map((prayer) => (
          <article key={prayer.id} className="border-t border-stone pt-5 first:border-t-0 first:pt-0">
            <h3 className="font-display text-2xl font-semibold text-navy">{prayer.title}</h3>
            <p className="mt-3 text-base leading-8 text-navy">{prayer.english}</p>
            {prayer.latin ? <p className="mt-3 rounded-md border border-stone bg-parchment p-3 text-sm leading-7 text-muted">{prayer.latin}</p> : null}
            {prayer.note ? <p className="mt-3 text-xs font-semibold text-muted">{prayer.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
