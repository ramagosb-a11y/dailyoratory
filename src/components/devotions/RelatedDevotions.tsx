import { DevotionCard } from "@/components/devotions/DevotionCard";
import type { Devotion } from "@/types/devotions";

export function RelatedDevotions({ devotions }: { devotions: Devotion[] }) {
  if (devotions.length === 0) return null;

  return (
    <section>
      <p className="text-xs font-bold uppercase text-burgundy">Related devotions</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Related devotions</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {devotions.map((devotion) => (
          <DevotionCard key={devotion.id} devotion={devotion} compact />
        ))}
      </div>
    </section>
  );
}
