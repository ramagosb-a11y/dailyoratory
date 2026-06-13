import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getVisitPlanningTips } from "@/lib/vatican";

export function PlanVaticanVisit() {
  const tips = getVisitPlanningTips();

  return (
    <section>
      <SectionHeader
        eyebrow="Future visit"
        title="Planning a Future Visit"
        summary="A practical, non-commercial starting point for pilgrims, families, and curious travelers."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="space-y-3 text-sm leading-7 text-muted">
          {tips.map((tip) => (
            <li key={tip} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <TrackedLink
            href="https://www.basilicasanpietro.va/en/"
            external
            className="btn btn-secondary focus-ring"
            eventName="vatican_resource_click"
            eventParams={{ resource_name: "Saint Peter's Basilica official website", page_path: "/vatican", section: "plan-vatican-visit" }}
          >
            Saint Peter&apos;s Basilica official site
          </TrackedLink>
          <TrackedLink
            href="https://www.museivaticani.va/content/museivaticani/en.html"
            external
            className="btn btn-secondary focus-ring"
            eventName="vatican_resource_click"
            eventParams={{ resource_name: "Vatican Museums official website", page_path: "/vatican", section: "plan-vatican-visit" }}
          >
            Vatican Museums official site
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
