import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getVaticanMassHighlights } from "@/lib/vatican";

export function VaticanAndMass() {
  const highlights = getVaticanMassHighlights();

  return (
    <section>
      <SectionHeader
        eyebrow="Liturgy"
        title="The Vatican and the Mass"
        summary="Major Vatican liturgies show the Church at prayer with the Pope and pilgrims from around the world. Watching a Vatican Mass online can be spiritually helpful, especially for those who are homebound, traveling, or learning."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item) => (
          <article key={item} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{item}</h3>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
        Catholics should still follow their local Mass obligations and parish guidance when they are able and obligated to
        attend in person.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/mass" className="btn btn-secondary focus-ring">
          Understand the Mass
        </Link>
        <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring">
          Learn About the Eucharist
        </Link>
        <Link href="/liturgical-living/seasons" className="btn btn-secondary focus-ring">
          Explore Liturgical Seasons
        </Link>
      </div>
    </section>
  );
}
