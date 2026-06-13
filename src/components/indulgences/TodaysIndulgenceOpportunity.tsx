import Link from "next/link";
import {
  getActiveSpecialIndulgenceCallouts,
  getTodaysIndulgenceOpportunity,
} from "@/lib/indulgences";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function TodaysIndulgenceOpportunity() {
  const opportunity = getTodaysIndulgenceOpportunity();
  const specialCallouts = getActiveSpecialIndulgenceCallouts(new Date());

  return (
    <IndulgenceSection
      id="todays-opportunity"
      eyebrow="Today"
      title="Today's Indulgence Opportunity"
      summary="One practical suggestion for today, plus seasonal callouts when a special indulgence year is active."
    >
      <div className="dashboard-card p-6 sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{opportunity.recommendedDay}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{opportunity.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{opportunity.description}</p>
            <p className="mt-4 text-xs leading-6 text-muted">{opportunity.usualConditionsReminder}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={opportunity.relatedLink} className="btn btn-secondary focus-ring justify-center">
                Open related Daily Oratory page
              </Link>
              <Link href="#indulgence-builder" className="btn btn-primary focus-ring justify-center">
                Start Today's Plan
              </Link>
            </div>
          </div>
          <div className="grid gap-3">
            {specialCallouts.map((callout) => (
              <article key={callout.id} className="card-parchment p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{callout.title}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{callout.description}</p>
                <Link href={callout.href} className="text-link focus-ring mt-4 inline-flex text-sm font-semibold">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </IndulgenceSection>
  );
}
