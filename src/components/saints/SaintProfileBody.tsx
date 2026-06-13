import Link from "next/link";
import { getRelatedSaints, getSaintResources } from "@/lib/saints";
import type { Saint } from "@/types/saints";
import { SaintCard } from "@/components/saints/SaintCard";
import { SaintPrayerCard } from "@/components/saints/SaintPrayerCard";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function SaintProfileBody({ saint }: { saint: Saint }) {
  const relatedSaints = getRelatedSaints(saint.id);
  const resources = getSaintResources(saint.id);

  return (
    <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-8">
        <SectionCard title="Who Was This Saint?">
          <p>{saint.biography}</p>
        </SectionCard>
        <SectionCard title="Their Path to Christ">
          <p>{saint.whyMatters}</p>
        </SectionCard>
        <SectionCard title="Key Virtues">
          <ul className="space-y-2">
            {saint.keyVirtues.map((virtue) => (
              <li key={virtue}>{virtue}</li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title="What to Imitate Today">
          <ol className="space-y-2">
            {saint.imitateToday.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </SectionCard>
        <SectionCard title="Patronage and Intercession">
          <p>
            <span className="font-semibold text-navy">Traditionally invoked for:</span>{" "}
            {saint.patronages.join(", ")}.
          </p>
        </SectionCard>
        <SectionCard title="Feast Day and Liturgical Notes">
          <p>{saint.feastDayDisplay} in many calendars. Local observances and ranks can vary.</p>
        </SectionCard>
      </div>

      <aside className="space-y-6">
        <SaintPrayerCard title={`Prayer with ${saint.name}`} prayer={saint.prayer} />
        <article className="card-parchment p-5">
          <h3 className="font-display text-2xl font-semibold text-navy">Scripture and devotion</h3>
          <p className="mt-4 text-sm leading-7 text-muted">
            <span className="font-semibold text-navy">Scripture:</span> {saint.scriptureReferences.join(", ")}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">
            <span className="font-semibold text-navy">Sacraments:</span> {saint.sacramentConnections.join(", ")}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">
            <span className="font-semibold text-navy">Devotions:</span> {saint.devotionConnections.join(", ")}
          </p>
        </article>
        <article className="card-parchment p-5">
          <h3 className="font-display text-2xl font-semibold text-navy">Related Daily Oratory tools</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            {saint.relatedDailyOratoryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold text-navy underline decoration-gold underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-5">
          <h3 className="font-display text-2xl font-semibold text-navy">Learn More</h3>
          <ul className="mt-4 space-y-3">
            {resources.map((resource) => (
              <li key={resource.id}>
                <TrackedLink
                  href={resource.url}
                  external
                  className="text-sm font-semibold text-navy underline decoration-gold underline-offset-4"
                  eventName="saint_external_resource_click"
                  eventParams={{ saint_name: saint.name, resource_name: resource.title, page_path: `/saints/${saint.slug}` }}
                >
                  {resource.title}
                </TrackedLink>
                <p className="mt-1 text-xs leading-6 text-muted">{resource.description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-6 text-muted">{saint.sourceNotes}</p>
        </article>
      </aside>

      {relatedSaints.length ? (
        <section className="xl:col-span-2">
          <h2 className="font-display text-3xl font-semibold text-navy">Related Saints</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedSaints.map((relatedSaint) => (
              <SaintCard key={relatedSaint.id} saint={relatedSaint} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="card-parchment liturgical-card-accent p-6">
      <h2 className="font-display text-3xl font-semibold text-navy">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-muted">{children}</div>
    </article>
  );
}

