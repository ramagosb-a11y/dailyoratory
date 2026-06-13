import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const cards = [
  "Apostolic preaching",
  "Baptismal faith",
  "Eucharistic worship",
  "Bishops and apostolic succession",
  "Creeds and rule of faith",
  "Defense against heresies",
  "Martyr witness",
  "Prayer and fasting",
] as const;

export function TraditionEarlyChurch() {
  return (
    <section id="tradition-early-church" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Early Church"
        title="Tradition in the Early Church"
        summary="Before the New Testament was fully collected and recognized as a canon, the Church was already preaching, baptizing, celebrating the Eucharist, appointing leaders, and handing on the faith."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card} className="card-parchment p-5">
            <p className="text-sm font-semibold leading-7 text-navy">{card}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/church-fathers" className="btn btn-secondary focus-ring">
          Church Fathers
        </Link>
        <Link href="/sacraments" className="btn btn-secondary focus-ring">
          Sacraments
        </Link>
        <Link href="/mass" className="btn btn-secondary focus-ring">
          The Holy Mass
        </Link>
        <Link href="/catechism" className="btn btn-secondary focus-ring">
          Catechism
        </Link>
      </div>
    </section>
  );
}
