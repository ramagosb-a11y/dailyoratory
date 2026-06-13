import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getMonthlyIntentionsResource } from "@/lib/pope";

export function PopesMonthlyIntentions() {
  const resource = getMonthlyIntentionsResource();

  return (
    <section>
      <SectionHeader eyebrow="Monthly intentions" title="The Pope's Prayer Intentions" />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          Each month, Catholics around the world pray for the Pope&apos;s intentions. This unites the faithful in intercession
          for the needs of the Church and the world.
        </p>
        <TrackedLink
          href={resource.url}
          external
          className="btn btn-secondary focus-ring mt-5 justify-center"
          eventName="pope_resource_click"
          eventParams={{ resource_name: resource.title, resource_url: resource.url, page_path: "/pope", section: "monthly-intentions" }}
        >
          Pope&apos;s Worldwide Prayer Network
        </TrackedLink>
        <p className="mt-4 text-sm leading-7 text-muted">{resource.note}</p>
      </div>
    </section>
  );
}
