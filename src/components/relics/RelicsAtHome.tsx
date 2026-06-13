import { SectionHeader } from "@/components/section-header";
import { relicHomeGuidance } from "@/data/relicsPage";
import { RelicBulletGrid } from "@/components/relics/shared";

export function RelicsAtHome() {
  return (
    <section>
      <SectionHeader
        eyebrow="Home"
        title="Relics at Home"
        summary="Some Catholics may have third-class relics or devotional items touched to relics. These should be kept prayerfully and respectfully, not treated as decorations, collectibles, or lucky charms."
      />
      <RelicBulletGrid items={relicHomeGuidance} />
    </section>
  );
}
