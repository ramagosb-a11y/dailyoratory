import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export function CouncilsAndMary() {
  return (
    <section>
      <SectionHeader
        eyebrow="Mary"
        title="Councils and Mary"
        summary="The Council of Ephesus defended the title Theotokos, meaning Mother of God."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          This teaching protects the truth about Jesus: Mary's Son is not merely a human person joined to God, but the
          eternal Son made flesh.
        </p>
        <p className="mt-4 rounded-md border border-stone bg-ivory/80 p-4 text-sm leading-7 text-muted">
          Beginner note: Catholic teaching about Mary always points back to Christ.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/saints" className="btn btn-secondary focus-ring justify-center">Saints</Link>
        <Link href="/devotions" className="btn btn-secondary focus-ring justify-center">Devotions</Link>
        <Link href="/rosary" className="btn btn-secondary focus-ring justify-center">Rosary</Link>
      </div>
    </section>
  );
}
