import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export function VaticanISection() {
  return (
    <section id="vatican-i" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Modern era"
        title="The First Vatican Council"
        summary="Vatican I addressed faith, reason, divine revelation, the Church, papal primacy, and papal infallibility."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          Vatican I was interrupted in 1870 and did not complete all intended work.
        </p>
        <p className="mt-4 rounded-md border border-stone bg-ivory/80 p-4 text-sm leading-7 text-muted">
          Papal infallibility does not mean the Pope is sinless or always right about everything. It has specific conditions
          related to solemn teaching on faith and morals.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/catechism" className="btn btn-secondary focus-ring justify-center">Catechism</Link>
        <Link href="/tradition" className="btn btn-secondary focus-ring justify-center">Tradition</Link>
        <Link href="/pope" className="btn btn-secondary focus-ring justify-center">The Pope</Link>
      </div>
    </section>
  );
}
