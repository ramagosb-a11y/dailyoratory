import { SectionHeader } from "@/components/section-header";
import { relicEarlyChurchCards } from "@/data/relicsPage";
import { RelicBulletGrid, RelicLinkRow } from "@/components/relics/shared";

export function RelicsEarlyChurch() {
  return (
    <section>
      <SectionHeader
        eyebrow="History"
        title="Relics in the Early Church"
        summary="Early Christians honored the martyrs and gathered near their tombs. This practice reflected faith in the resurrection, the communion of saints, and the belief that the martyrs remained alive in Christ."
      />
      <RelicBulletGrid items={relicEarlyChurchCards} />
      <RelicLinkRow
        links={[
          { label: "Church Fathers", href: "/church-fathers" },
          { label: "Sacred Tradition", href: "/tradition" },
          { label: "Councils", href: "/councils" },
          { label: "Saints", href: "/saints" },
        ]}
      />
    </section>
  );
}
