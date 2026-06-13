import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getPeterReferences } from "@/lib/pope";

export function WhyPeterMatters() {
  const references = getPeterReferences();

  return (
    <section>
      <SectionHeader
        eyebrow="Saint Peter"
        title="Why Saint Peter Matters"
        summary="Catholics look to Peter's role in the Gospels and Acts as the biblical foundation for the papacy."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {references.map((item) => (
          <article key={item.reference} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{item.reference}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/library/scripture-prayer" className="btn btn-secondary focus-ring">
          Scripture Prayer
        </Link>
        <Link href="/church-fathers" className="btn btn-secondary focus-ring">
          Church Fathers
        </Link>
        <Link href="/catechism" className="btn btn-secondary focus-ring">
          Catechism
        </Link>
      </div>
    </section>
  );
}
