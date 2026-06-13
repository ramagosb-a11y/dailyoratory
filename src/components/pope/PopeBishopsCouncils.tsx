import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export function PopeBishopsCouncils() {
  return (
    <section>
      <SectionHeader eyebrow="Communion" title="The Pope, Bishops, and Councils" />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          The Pope does not serve alone. The bishops, as successors of the apostles, share responsibility for teaching,
          sanctifying, and governing the Church in communion with the Pope. Councils are major moments when bishops gather to
          address important questions for the Church.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/sacraments/holy-orders" className="btn btn-secondary focus-ring">
            Holy Orders
          </Link>
          <Link href="/catechism" className="btn btn-secondary focus-ring">
            Catechism
          </Link>
          <Link href="/formation" className="btn btn-secondary focus-ring">
            Formation
          </Link>
        </div>
      </div>
    </section>
  );
}
