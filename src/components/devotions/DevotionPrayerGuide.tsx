import type { Devotion } from "@/types/devotions";

export function DevotionPrayerGuide({ devotion }: { devotion: Devotion }) {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Prayer guide</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Prayer guide</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
        {devotion.prayerGuide.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}
