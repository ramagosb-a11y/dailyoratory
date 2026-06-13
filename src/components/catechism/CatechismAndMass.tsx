import { SectionHeader } from "@/components/section-header";
import Link from "next/link";

export function CatechismAndMass() {
  return (
    <section>
      <SectionHeader
        eyebrow="Liturgy"
        title="The Catechism and the Mass"
        summary="The Catechism helps explain the liturgy, the Eucharist, sacrifice, Real Presence, Holy Communion, and why the Mass is central to Catholic life."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          A good place to begin is <span className="font-semibold text-navy">CCC 1066-1209</span>{" "}
          for liturgy and <span className="font-semibold text-navy">CCC 1322-1419</span> for the
          Eucharist.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/mass" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            The Holy Mass
          </Link>
          <Link href="/sacraments/eucharist" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Eucharist
          </Link>
          <Link href="/adoration" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Adoration
          </Link>
          <Link href="/church-fathers" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Church Fathers
          </Link>
        </div>
      </div>
    </section>
  );
}
