import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export function VaticanAndPope() {
  return (
    <section>
      <SectionHeader
        eyebrow="The Pope"
        title="The Vatican and the Pope"
        summary="The Vatican is closely connected to the Pope's ministry, but the Pope's role is spiritual and pastoral before it is administrative. The Pope serves as Bishop of Rome and visible sign of unity for the Church."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          The Vatican helps support the Pope&apos;s service to the universal Church through prayer, teaching, communication, and
          major liturgies. Catholics do not worship the Pope. They pray for him and look to his office as a ministry of unity
          rooted in Christ and the witness of Saint Peter.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pope" className="btn liturgical-button focus-ring">
            Learn About the Pope
          </Link>
          <Link href="/news" className="btn btn-secondary focus-ring">
            Read Vatican News
          </Link>
        </div>
      </div>
    </section>
  );
}
