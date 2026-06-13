import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getBeginnerCatholicLearningPath } from "@/lib/ocia";

export function BeginnerCatholicLearningPath() {
  const steps = getBeginnerCatholicLearningPath();

  return (
    <section id="beginner-catholic-learning-path" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Start learning"
        title="Start Learning the Catholic Faith"
        summary="A gentle path for people who want to begin with Jesus, the Mass, the sacraments, prayer, and the life of the Church."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="card-parchment p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Step {index + 1}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {step.links.map((link) =>
                link.external ? (
                  <TrackedLink
                    key={link.href}
                    href={link.href}
                    external
                    className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy"
                    eventName="ocia_resource_click"
                    eventParams={{
                      resource_name: link.label,
                      resource_url: link.href,
                      section: "beginner-learning-path",
                      page_path: "/ocia",
                    }}
                  >
                    {link.label}
                  </TrackedLink>
                ) : (
                  <TrackedLink
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy"
                  >
                    {link.label}
                  </TrackedLink>
                ),
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
