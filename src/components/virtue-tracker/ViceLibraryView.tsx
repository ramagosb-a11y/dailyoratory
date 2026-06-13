import { viceDefinitions } from "@/data/virtueTracker";
import { getVirtueLabel } from "@/lib/virtueTracker";

export function ViceLibraryView() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {viceDefinitions.map((vice) => (
        <article key={vice.id} className="card resource-card p-5">
          <p className="text-xs font-bold uppercase text-burgundy">Capital vice</p>
          <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{vice.title}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{vice.gentleDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {vice.contraryVirtues.map((virtue) => (
              <span key={virtue} className="season-pill">
                {getVirtueLabel(virtue)}
              </span>
            ))}
          </div>
          <div className="mt-5">
            <p className="text-xs font-bold uppercase text-burgundy">Warning signs</p>
            <ul className="mt-2 grid gap-2 text-sm leading-6 text-navy">
              {vice.warningSigns.slice(0, 3).map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <p className="text-xs font-bold uppercase text-burgundy">Grace-filled next steps</p>
            <ul className="mt-2 grid gap-2 text-sm leading-6 text-muted">
              {vice.graceFilledNextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
