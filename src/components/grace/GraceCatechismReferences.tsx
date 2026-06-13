import { LinkedCitationText } from "@/components/LinkedCitationText";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { GraceCatechismReference } from "@/types/grace";

export function GraceCatechismReferences({ references }: { references: GraceCatechismReference[] }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Catechism References on Grace</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {references
          .slice()
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((reference) => (
            <article key={reference.id} className="dashboard-card p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
                <LinkedCitationText text={reference.reference} />
              </p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{reference.title}</h3>
              <p className="daily-card-readable mt-4 text-base leading-7 text-muted">
                <LinkedCitationText text={reference.description} />
              </p>
              <div className="mt-5">
                <TrackedLink
                  href={reference.url}
                  external
                  eventName="grace_related_link_click"
                  eventParams={{ section: "catechism", destination: reference.url }}
                  className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
                >
                  Open Vatican Catechism
                </TrackedLink>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
