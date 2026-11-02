import { SectionHeader } from "@/components/section-header";
import { RelicLinkRow } from "@/components/relics/shared";

const items = [
  "True Cross",
  "Crown of Thorns",
  "Holy Nails",
] as const;

export function RelicsOfChrist() {
  return (
    <section>
      <SectionHeader
        eyebrow="Christ"
        title="Relics Connected with Christ"
        summary="Some objects are traditionally associated with Christ’s Passion and venerated in remembrance of His saving death and Resurrection. This page does not authenticate individual objects."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
            {item}
          </article>
        ))}
      </div>
      <RelicLinkRow
        links={[
          { label: "The Holy Mass", href: "/mass" },
          { label: "Eucharist", href: "/sacraments/eucharist" },
          { label: "Adoration", href: "/adoration" },
          { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
        ]}
      />
    </section>
  );
}
