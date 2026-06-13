import { SectionHeader } from "@/components/section-header";
import type { HomilyItem } from "@/types/homilies";
import { HomilyCard } from "./HomilyCard";

export function FeaturedHomilies({ items }: { items: HomilyItem[] }) {
  if (!items.length) return null;

  const [lead, ...rest] = items;

  return (
    <section id="featured-homilies" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Featured Homilies"
        title="Featured Homilies"
        summary="Begin with the most important current homily content first."
      />
      <div className="mt-8 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <HomilyCard item={lead} large />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
          {rest.slice(0, 4).map((item) => (
            <HomilyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
