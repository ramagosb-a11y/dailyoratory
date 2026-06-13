"use client";

import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import { getOciaStages } from "@/lib/ocia";

export function OciaJourneyTimeline() {
  const stages = getOciaStages();

  return (
    <section id="ocia-journey" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Journey"
        title="The OCIA Journey at a Glance"
        summary="These stage names and timelines can vary by parish and diocese, but this overview helps explain the usual movement of the process."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        {stages.map((stage, index) => (
          <article
            key={stage.id}
            className="card-parchment liturgical-card-accent p-6"
            onMouseEnter={() =>
              trackEvent("ocia_stage_click", {
                stage_slug: stage.slug,
                page_path: "/ocia",
              })
            }
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
              Stage {index + 1}
            </p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{stage.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{stage.summary}</p>
            <div className="mt-5">
              <p className="text-sm font-semibold text-navy">What usually happens</p>
              <ul className="mt-2 space-y-2 text-sm leading-7 text-muted">
                {stage.whatHappens.map((item) => (
                  <li key={item} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-navy">Questions to ask</p>
              <ul className="mt-2 space-y-2 text-sm leading-7 text-muted">
                {stage.discernmentQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Prayer focus:</span> {stage.prayerFocus}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
