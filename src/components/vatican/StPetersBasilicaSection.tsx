import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getStPetersHighlights } from "@/lib/vatican";

export function StPetersBasilicaSection() {
  const highlights = getStPetersHighlights();

  return (
    <section>
      <SectionHeader
        eyebrow="Saint Peter's Basilica"
        title="Saint Peter's Basilica"
        summary="Saint Peter's Basilica is one of the most important churches in the Catholic world. It stands over the traditional burial place of Saint Peter, the apostle to whom Catholics trace the Petrine ministry of the Pope."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item) => (
          <article key={item} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{item}</h3>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/pope" className="btn btn-secondary focus-ring">
          Learn About the Pope
        </Link>
        <Link href="/mass" className="btn btn-secondary focus-ring">
          Understand the Mass
        </Link>
        <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring">
          Learn About the Eucharist
        </Link>
      </div>
    </section>
  );
}
