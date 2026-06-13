import { SectionHeader } from "@/components/section-header";
import Link from "next/link";

export function CatechismAndPrayer() {
  return (
    <section>
      <SectionHeader
        eyebrow="Prayer"
        title="The Catechism and Prayer"
        summary="The final major part of the Catechism teaches Christian prayer and the Our Father. This helps users see prayer as relationship with God, not just words or technique."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          A strong place to begin is <span className="font-semibold text-navy">CCC 2558-2865</span>,
          especially if you are new to Catholic prayer or returning after time away.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/pray" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Pray
          </Link>
          <Link href="/liturgy-of-the-hours" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Liturgy of the Hours
          </Link>
          <Link href="/rosary" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Rosary
          </Link>
          <Link href="/devotions" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Devotions
          </Link>
        </div>
      </div>
    </section>
  );
}
