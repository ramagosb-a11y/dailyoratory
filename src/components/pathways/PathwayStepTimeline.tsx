import Link from "next/link";
import type { SpiritualGrowthPathwayRecord } from "@/types/pathways";
import { getPathwayStepHref } from "@/lib/pathways";

export function PathwayStepTimeline({ pathway }: { pathway: SpiritualGrowthPathwayRecord }) {
  return (
    <ol className="grid gap-4">
      {pathway.modules.map((step) => (
        <li key={step.id} className="card p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase text-burgundy">{step.timeframe}</p>
              <h3 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">
                <Link href={getPathwayStepHref(pathway, step)} className="focus-ring rounded-sm hover:text-burgundy">
                  {step.title}
                </Link>
              </h3>
            </div>
            <span className="season-pill">Step {step.order}</span>
          </div>
          <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="card-parchment p-4">
              <p className="text-xs font-bold uppercase text-burgundy">Scripture</p>
              <p className="mt-1 text-sm font-semibold text-navy">{step.scriptureReference}</p>
            </div>
            <div className="card-parchment p-4">
              <p className="text-xs font-bold uppercase text-burgundy">Practice</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-navy">{step.practice}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
