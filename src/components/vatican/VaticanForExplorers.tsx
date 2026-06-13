import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getVaticanExplorerPath } from "@/lib/vatican";

export function VaticanForExplorers() {
  const steps = getVaticanExplorerPath();

  return (
    <section>
      <SectionHeader
        eyebrow="For explorers"
        title="If You Are Exploring the Catholic Faith"
        summary="The Vatican can seem mysterious from the outside. Start simply: it is connected to the Pope, Saint Peter, the Church's history, sacred art, worship, and the universal mission of the Catholic Church."
      />
      <div className="card-parchment mt-7 p-6">
        <ol className="space-y-3 text-sm leading-7 text-muted">
          {steps.map((step, index) => (
            <li key={step}>
              <span className="mr-2 font-semibold text-navy">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pope" className="btn btn-secondary focus-ring">
            Learn About the Pope
          </Link>
          <Link href="/mass" className="btn btn-secondary focus-ring">
            Understand the Mass
          </Link>
          <Link href="/catechism" className="btn btn-secondary focus-ring">
            Open the Catechism
          </Link>
          <Link href="/ocia" className="btn btn-secondary focus-ring">
            Explore OCIA
          </Link>
        </div>
      </div>
    </section>
  );
}
