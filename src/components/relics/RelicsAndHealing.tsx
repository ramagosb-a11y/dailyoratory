import { SectionHeader } from "@/components/section-header";
import { RelicLinkRow } from "@/components/relics/shared";

const points = [
  "God is the healer.",
  "Saints intercede.",
  "Relics are not magical instruments.",
  "Healing may be physical, spiritual, emotional, or moral.",
  "Continue appropriate medical care.",
  "Bring serious illness to prayer, sacraments, and professional care.",
] as const;

export function RelicsAndHealing() {
  return (
    <section>
      <SectionHeader
        eyebrow="Healing"
        title="Relics, Healing, and Faith"
        summary="God may grant healing through the intercession of saints and the veneration of relics, but relics do not control God. The faithful should pray with trust, humility, and surrender."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {points.map((point) => (
          <article key={point} className="card-parchment p-5 text-sm leading-7 text-muted">
            {point}
          </article>
        ))}
      </div>
      <RelicLinkRow
        links={[
          { label: "Anointing of the Sick", href: "/sacraments/anointing" },
          { label: "Prayer", href: "/pray" },
          { label: "Adoration", href: "/adoration" },
        ]}
      />
    </section>
  );
}
