import { SectionHeader } from "@/components/section-header";
import Link from "next/link";

export function CatechismAndMoralLife() {
  return (
    <section>
      <SectionHeader
        eyebrow="Moral life"
        title="The Catechism and the Moral Life"
        summary="The Catechism helps explain conscience, freedom, virtue, sin, grace, and the commandments. It should not be used as a weapon against others, but as a guide for forming conscience and growing in love."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          A strong range to explore is <span className="font-semibold text-navy">CCC 1691-2557</span>,
          especially if you want help with virtue, conscience, freedom, and the Christian moral life.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/formation" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Formation
          </Link>
          <Link href="/virtue-tracker" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Virtue Tracker
          </Link>
          <Link href="/confession" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Confession
          </Link>
          <Link href="/confession/examination" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Examination
          </Link>
        </div>
      </div>
    </section>
  );
}
