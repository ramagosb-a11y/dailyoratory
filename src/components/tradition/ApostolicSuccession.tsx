import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const points = [
  "Jesus sent the apostles.",
  "The apostles appointed leaders.",
  "Bishops continue this ministry in the Church.",
  "Apostolic succession helps preserve unity and faithful teaching.",
  "It is connected to the sacraments, especially Holy Orders.",
];

export function ApostolicSuccession() {
  return (
    <section>
      <SectionHeader
        eyebrow="Apostolic succession"
        title="Apostolic Succession"
        summary="Apostolic succession means the Church's bishops stand in continuity with the apostles through the laying on of hands and the handing on of apostolic teaching, worship, and pastoral care."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="space-y-3 text-sm leading-7 text-muted">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/sacraments/holy-orders" className="btn btn-secondary focus-ring">
            Holy Orders
          </Link>
          <Link href="/church-fathers" className="btn btn-secondary focus-ring">
            Church Fathers
          </Link>
          <Link href="/catechism" className="btn btn-secondary focus-ring">
            Catechism
          </Link>
        </div>
      </div>
    </section>
  );
}
