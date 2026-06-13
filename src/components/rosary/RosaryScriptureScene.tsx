import { TrackedLink } from "@/components/analytics/TrackedLink";
import { RosarySection } from "@/components/rosary/RosaryUi";
import { BodyText } from "@/components/ui/Typography";
import type { RosaryMystery } from "@/types/rosary";

export function RosaryScriptureScene({ mystery }: { mystery: RosaryMystery }) {
  return (
    <RosarySection
      eyebrow="Short scene summary"
      title="Short Scene Summary"
      summary="Stay close to the Gospel moment itself before moving into deeper prayer."
    >
      <article className="card-parchment p-7 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Scripture reference</p>
        <p className="mt-2 font-display text-3xl font-semibold text-navy">{mystery.scriptureReference}</p>
        <BodyText className="mt-5 text-[#2f2a22]">{mystery.scriptureSummary}</BodyText>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href="https://bible.usccb.org/"
            external
            className="btn btn-secondary focus-ring w-full justify-center sm:w-auto"
            eventName="bible_resource_click"
            eventParams={{
              category: "rosary-scripture-scene",
              item_slug: mystery.slug,
              source: mystery.fullPath,
              destination: "https://bible.usccb.org/",
            }}
          >
            Open Official Bible Resources
          </TrackedLink>
          <TrackedLink href="/bible" className="btn btn-secondary focus-ring w-full justify-center sm:w-auto">
            Learn How Catholics Read Scripture
          </TrackedLink>
        </div>
      </article>
    </RosarySection>
  );
}
