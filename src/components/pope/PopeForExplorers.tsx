import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { explorerPath } from "@/data/popePage";

export function PopeForExplorers() {
  return (
    <section>
      <SectionHeader eyebrow="For seekers" title="If You Are Exploring the Catholic Faith" />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          The Pope can be one of the most unfamiliar parts of Catholicism. Begin with the question of unity: how does Christ keep
          His Church united in faith, worship, and mission? Catholics understand the papacy as a ministry of service and unity
          rooted in Peter and continued through the Church.
        </p>
        <ol className="mt-5 space-y-3 text-sm leading-7 text-muted">
          {explorerPath.map((step, index) => (
            <li key={step} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
              <span className="font-semibold text-navy">{index + 1}.</span> {step}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/ocia" className="btn liturgical-button focus-ring">
            Explore OCIA
          </Link>
          <Link href="/catechism" className="btn btn-secondary focus-ring">
            Read the Catechism
          </Link>
          <Link href="/church-fathers" className="btn btn-secondary focus-ring">
            Church Fathers
          </Link>
        </div>
      </div>
    </section>
  );
}
