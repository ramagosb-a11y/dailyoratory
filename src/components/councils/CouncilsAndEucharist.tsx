import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const items = [
  "Lateran IV and Eucharistic language",
  "Trent and the Eucharist / Mass",
  "Vatican II and liturgical renewal",
];

export function CouncilsAndEucharist() {
  return (
    <section>
      <SectionHeader
        eyebrow="Eucharist"
        title="Councils and the Eucharist"
        summary="Councils helped clarify Catholic teaching on the Eucharist, especially during the medieval period and the Reformation era."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{item}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/mass" className="btn btn-secondary focus-ring justify-center">Mass</Link>
        <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring justify-center">Eucharist</Link>
        <Link href="/adoration" className="btn btn-secondary focus-ring justify-center">Adoration</Link>
        <Link href="/church-fathers" className="btn btn-secondary focus-ring justify-center">Church Fathers</Link>
      </div>
    </section>
  );
}
