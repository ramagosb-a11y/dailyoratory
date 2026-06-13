import { DevotionCard } from "@/components/devotions/DevotionCard";
import type { Devotion } from "@/types/devotions";

export function FeaturedDevotions({ devotions }: { devotions: Devotion[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Featured devotions</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Featured devotions
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {devotions.map((devotion) => (
          <DevotionCard key={devotion.id} devotion={devotion} compact />
        ))}
      </div>
    </section>
  );
}
