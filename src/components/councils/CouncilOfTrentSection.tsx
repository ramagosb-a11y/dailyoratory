import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const topics = [
  "Scripture and Tradition",
  "Justification and grace",
  "Seven sacraments",
  "Eucharist and Mass",
  "Priesthood",
  "Reform of clergy and Church life",
];

export function CouncilOfTrentSection() {
  return (
    <section id="council-of-trent" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Reformation era"
        title="The Council of Trent"
        summary="Catholic doctrine and reform during the Reformation era."
      />
      <p className="mt-7 text-sm leading-7 text-muted">
        The Council of Trent responded to the Protestant Reformation and addressed doctrine, sacraments, Scripture and
        Tradition, justification, the Mass, Eucharist, priesthood, and Church reform.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {topics.map((topic) => (
          <article key={topic} className="card-parchment p-5 text-sm leading-7 text-muted">
            {topic}
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/tradition" className="btn btn-secondary focus-ring justify-center">Tradition</Link>
        <Link href="/sacraments" className="btn btn-secondary focus-ring justify-center">Sacraments</Link>
        <Link href="/mass" className="btn btn-secondary focus-ring justify-center">Mass</Link>
        <Link href="/catechism" className="btn btn-secondary focus-ring justify-center">Catechism</Link>
      </div>
    </section>
  );
}
