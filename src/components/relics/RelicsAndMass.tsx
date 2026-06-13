import { SectionHeader } from "@/components/section-header";
import { relicMassPoints } from "@/data/relicsPage";
import { RelicBulletGrid, RelicLinkRow } from "@/components/relics/shared";

export function RelicsAndMass() {
  return (
    <section>
      <SectionHeader
        eyebrow="Mass"
        title="Relics and the Altar"
        summary="Catholic tradition has long connected relics of martyrs and saints with altars. This expresses the unity of Christ's sacrifice, the witness of the martyrs, and the worship of the Church on earth and in heaven."
      />
      <RelicBulletGrid items={relicMassPoints} />
      <RelicLinkRow
        links={[
          { label: "The Holy Mass", href: "/mass" },
          { label: "Eucharist", href: "/sacraments/eucharist" },
          { label: "Saints", href: "/saints" },
          { label: "The Vatican", href: "/vatican" },
        ]}
      />
    </section>
  );
}
