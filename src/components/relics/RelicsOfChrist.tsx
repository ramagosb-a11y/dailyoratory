import { SectionHeader } from "@/components/section-header";
import { RelicLinkRow } from "@/components/relics/shared";

const items = [
  "True Cross",
  "Crown of Thorns",
  "Holy Nails",
  "Shroud-related devotion should be framed carefully",
] as const;

export function RelicsOfChrist() {
  return (
    <section>
      <SectionHeader
        eyebrow="Christ"
        title="Relics Connected with Christ"
        summary="Some relics are traditionally connected with the Passion of Christ. These relics are honored because they are connected to the saving work of Jesus."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
            {item}
          </article>
        ))}
      </div>
      <p className="mt-6 rounded-2xl border border-gold/30 bg-ivory/85 p-5 text-sm leading-7 text-muted">
        Use careful language here: relics may be <span className="font-semibold text-navy">traditionally associated with</span>,
        <span className="font-semibold text-navy"> venerated as</span>, or <span className="font-semibold text-navy">historically connected with</span>
        Christ's Passion. Avoid sensational claims and keep the focus on His saving death and Resurrection.
      </p>
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
