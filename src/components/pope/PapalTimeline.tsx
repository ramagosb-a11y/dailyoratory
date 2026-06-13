import { SectionHeader } from "@/components/section-header";
import { getRecentPopes } from "@/lib/pope";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function PapalTimeline() {
  const popes = getRecentPopes();

  return (
    <section>
      <SectionHeader eyebrow="Timeline" title="A Short Timeline of Recent Popes" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {popes.map((pope) => (
          <article key={pope.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
              {pope.pontificateStart} {pope.pontificateEnd ? `to ${pope.pontificateEnd}` : "to present"}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{pope.papalName}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{pope.shortTheme}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{pope.shortDescription}</p>
            {pope.officialVaticanUrl ? (
              <TrackedLink
                href={pope.officialVaticanUrl}
                external
                className="btn btn-secondary focus-ring mt-5 justify-center"
                eventName="pope_resource_click"
                eventParams={{ resource_name: pope.papalName, resource_url: pope.officialVaticanUrl, page_path: "/pope", section: "papal-timeline" }}
              >
                Official Vatican Page
              </TrackedLink>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
