import { SectionHeader } from "@/components/section-header";
import type { HomilyItem } from "@/types/homilies";
import { HomilyCard } from "./HomilyCard";

export function HomilyPlaylists({ items }: { items: HomilyItem[] }) {
  if (!items.length) return null;

  return (
    <section id="homily-playlists" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Playlists"
        title="Homily Playlists"
        summary="Curated YouTube playlists and series for prayer, study, and formation."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <HomilyCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
