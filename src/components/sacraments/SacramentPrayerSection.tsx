import type { Sacrament } from "@/types/sacraments";

export function SacramentPrayerSection({ sacrament }: { sacrament: Sacrament }) {
  return (
    <section className="prayer-card p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Prayers</h2>
      <div className="mt-6 grid gap-6">
        {sacrament.prayers.map((prayer) => (
          <article key={prayer.id}>
            <h3 className="font-display text-3xl font-semibold text-navy">{prayer.title}</h3>
            <p className="prayer-response mt-3">{prayer.body}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-burgundy">{prayer.sourceNote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
