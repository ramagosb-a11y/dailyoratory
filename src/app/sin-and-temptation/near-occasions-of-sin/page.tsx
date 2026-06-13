import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { NearOccasionAuditTool } from "@/components/sin-and-temptation/NearOccasionAuditTool";
import { PastoralMercyNote } from "@/components/sin-and-temptation/PastoralMercyNote";
import { RelatedConversionLinks } from "@/components/sin-and-temptation/RelatedConversionLinks";
import { SinTemptationPageLayout } from "@/components/sin-and-temptation/SinTemptationPageLayout";

const occasionTypes = [
  "places",
  "websites and media",
  "relationships",
  "conversations",
  "fatigue",
  "anger",
  "loneliness",
  "alcohol or substances",
  "hidden phone use",
  "resentment loops",
  "social comparison",
  "unstructured time",
];

const replacements = [
  "prayer",
  "exercise",
  "service",
  "call a friend",
  "Scripture",
  "sleep",
  "confession",
  "creative work",
  "silence",
  "adoration",
];

export const metadata: Metadata = createPageMetadata({
  title: "Near Occasions of Sin | Daily Oratory",
  description:
    "Learn how to identify and avoid the situations, media, patterns, and moods that repeatedly lead you toward sin.",
  path: "/sin-and-temptation/near-occasions-of-sin",
});

export default function NearOccasionsOfSinPage() {
  return (
    <SinTemptationPageLayout
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Sin & Temptation", href: "/sin-and-temptation" },
        { label: "Near Occasions of Sin" },
      ]}
      title="Near Occasions of Sin"
      subtitle="Learning to avoid the situations that repeatedly lead the soul away from God."
      summary="Avoiding near occasions is not cowardice. It is humility and wisdom. If a pattern repeatedly leads you into sin, part of conversion is learning to leave the trap before it closes."
      ctas={[
        { label: "Open Audit Tool", href: "#near-occasion-audit" },
        { label: "Resist Temptation", href: "/sin-and-temptation/resisting-temptation", variant: "secondary", eventName: "sin_topic_open" },
        { label: "Go to Confession Guide", href: "/confession", variant: "secondary", eventName: "confession_guide_click" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is a near occasion of sin?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          A near occasion of sin is a person, place, habit, environment, device, conversation, emotional state,
          or pattern that commonly leads someone into sin.
        </p>
      </section>

      <PastoralMercyNote>
        <p>
          Avoiding near occasions is not cowardice. It is humility and wisdom. A person who wants freedom does
          not keep walking into the same trap.
        </p>
      </PastoralMercyNote>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {occasionTypes.map((item) => (
          <article key={item} className="card-parchment p-5">
            <h2 className="font-display text-2xl font-semibold text-navy">{item}</h2>
          </article>
        ))}
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Replacement plan</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Do not only remove the occasion. Replace it with something good so the heart is not left empty and
          vulnerable.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {replacements.map((replacement) => (
            <span key={replacement} className="season-pill bg-ivory px-3 py-2 text-navy">
              {replacement}
            </span>
          ))}
        </div>
      </section>

      <div id="near-occasion-audit">
        <NearOccasionAuditTool />
      </div>

      <RelatedConversionLinks
        links={[
          {
            title: "Resisting Temptation",
            description: "Use a quick faithful response when temptation appears anyway.",
            href: "/sin-and-temptation/resisting-temptation",
          },
          {
            title: "Habitual Sin",
            description: "See how repeated falls often depend on the same unguarded setting.",
            href: "/sin-and-temptation/habitual-sin",
          },
          {
            title: "Daily Examen",
            description: "Notice the place, emotion, and timing around the struggle each day.",
            href: "/daily-examen",
          },
          {
            title: "Confession Guide",
            description: "Return to mercy and make a fresh amendment with honesty.",
            href: "/confession",
          },
        ]}
      />
    </SinTemptationPageLayout>
  );
}
