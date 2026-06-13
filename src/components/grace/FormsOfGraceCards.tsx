import { LinkedCitationText } from "@/components/LinkedCitationText";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { GraceForm } from "@/types/grace";

export function FormsOfGraceCards({ forms }: { forms: GraceForm[] }) {
  return (
    <section id="forms-of-grace" className="scroll-mt-24 card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Forms of Grace</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {forms
          .slice()
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((form) => (
            <article key={form.id} className="dashboard-card p-5 sm:p-6">
              <h3 className="font-display text-2xl font-semibold text-navy">{form.title}</h3>
              <p className="daily-card-readable mt-4 text-base leading-7 text-muted">
                <LinkedCitationText text={form.description} />
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {form.catechismReferences.map((reference) => (
                  <span key={reference} className="season-pill bg-ivory px-3 py-1 text-xs text-navy">
                    <LinkedCitationText text={reference} />
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <TrackedLink
                  href={form.href}
                  eventName="grace_topic_open"
                  eventParams={{ section: "forms-of-grace", destination: form.href }}
                  className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
                >
                  Learn About {form.title}
                </TrackedLink>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
