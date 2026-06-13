import type { Devotion } from "@/types/devotions";

export function DevotionMisunderstandings({ devotion }: { devotion: Devotion }) {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Common misunderstandings</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Common misunderstandings</h2>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
        {devotion.commonMisunderstandings.map((item) => (
          <li key={item} className="border-l-2 border-gold pl-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
