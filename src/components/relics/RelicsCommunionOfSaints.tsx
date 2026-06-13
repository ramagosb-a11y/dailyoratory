import { SectionHeader } from "@/components/section-header";
import { relicCommunionCards } from "@/data/relicsPage";
import { RelicBulletGrid, RelicLinkRow } from "@/components/relics/shared";

export function RelicsCommunionOfSaints() {
  return (
    <section>
      <SectionHeader
        eyebrow="Communion of Saints"
        title="Relics and the Communion of Saints"
        summary="Relics remind us that the Church is not only the people we see. The saints are alive in Christ, pray for us, and remain part of the one Body of Christ."
      />
      <RelicBulletGrid items={relicCommunionCards} />
      <RelicLinkRow links={[{ label: "Saints", href: "/saints" }, { label: "Devotions", href: "/devotions" }, { label: "Prayer", href: "/pray" }]} />
    </section>
  );
}
