import { getAdorationPrayers } from "@/lib/adoration";

export function AdorationPrayerPanel({ compact = false }: { compact?: boolean }) {
  const prayers = compact ? getAdorationPrayers().slice(0, 2) : getAdorationPrayers();

  return (
    <section className="prayer-card p-5 sm:p-7">
      <p className="text-xs font-bold uppercase text-burgundy">Adoration prayers</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Pray before the Lord.</h2>
      <div className="mt-6 grid gap-5">
        {prayers.map((prayer) => (
          <article key={prayer.id} className="border-t border-stone pt-5 first:border-t-0 first:pt-0">
            <h3 className="font-display text-2xl font-semibold text-navy">{prayer.title}</h3>
            <p className="prayer-text mt-3 text-[1.25rem]">{prayer.body}</p>
            {prayer.response ? <p className="prayer-response mt-4">{prayer.response}</p> : null}
            <p className="mt-3 text-xs font-semibold text-muted">{prayer.sourceNote ?? "Original Daily Oratory text"}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
