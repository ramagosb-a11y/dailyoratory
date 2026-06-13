import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const items = [
  "Liturgy of the Word",
  "Eucharistic Prayer",
  "Real Presence",
  "Altar and sacrifice",
  "Communion",
  "Dismissal into mission",
] as const;

export function TraditionAndMass() {
  return (
    <section>
      <SectionHeader
        eyebrow="Tradition and worship"
        title="Tradition and the Mass"
        summary="The Mass is one of the clearest places where Catholics encounter Tradition. In the Mass, Scripture is proclaimed, the Eucharist is celebrated, ancient prayers are prayed, and the Church joins the worship of heaven."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item} className="card-parchment p-5">
            <p className="text-sm font-semibold leading-7 text-navy">{item}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/mass" className="btn liturgical-button focus-ring">
          The Holy Mass
        </Link>
        <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring">
          Eucharist
        </Link>
        <Link href="/adoration" className="btn btn-secondary focus-ring">
          Adoration
        </Link>
      </div>
    </section>
  );
}
