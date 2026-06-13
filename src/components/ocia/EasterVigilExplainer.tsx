import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const moments = [
  "Service of Light",
  "extended Scripture readings",
  "baptismal liturgy",
  "reception or profession of faith where applicable",
  "Confirmation",
  "first reception of Holy Communion",
  "joy of the Resurrection",
];

export function EasterVigilExplainer() {
  return (
    <section>
      <SectionHeader
        eyebrow="Easter Vigil"
        title="What Happens at the Easter Vigil?"
        summary="The Easter Vigil is the great liturgy of the Resurrection and is often when adults entering the Church receive the sacraments of initiation."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {moments.map((moment) => (
          <div key={moment} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{moment}</p>
          </div>
        ))}
      </div>
      <div className="card-parchment mt-6 p-5">
        <p className="text-sm leading-7 text-muted">
          Not everyone enters the Church at the Easter Vigil. Some people may be received or
          confirmed at another time depending on their situation.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/mass" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            The Holy Mass
          </Link>
          <Link href="/liturgical-living/seasons#triduum" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Triduum
          </Link>
          <Link href="/sacraments/eucharist" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Eucharist
          </Link>
        </div>
      </div>
    </section>
  );
}
