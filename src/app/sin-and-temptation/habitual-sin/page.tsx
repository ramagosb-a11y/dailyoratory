import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { HabitualSinPatternTool } from "@/components/sin-and-temptation/HabitualSinPatternTool";
import { PastoralMercyNote } from "@/components/sin-and-temptation/PastoralMercyNote";
import { RelatedConversionLinks } from "@/components/sin-and-temptation/RelatedConversionLinks";
import { SinTemptationPageLayout } from "@/components/sin-and-temptation/SinTemptationPageLayout";

export const metadata: Metadata = createPageMetadata({
  title: "Habitual Sin | Daily Oratory",
  description:
    "Learn how repeated sin becomes familiar and how grace, honesty, and perseverance help break the pattern.",
  path: "/sin-and-temptation/habitual-sin",
});

const causes = [
  "repeated choices",
  "emotional triggers",
  "stress or fatigue",
  "isolation",
  "near occasions",
  "lack of prayer",
  "lack of accountability",
  "discouragement after falling",
  "failure to practice opposite virtue",
];

const steps = [
  "Name the pattern honestly.",
  "Bring it to Confession.",
  "Identify triggers.",
  "Remove near occasions.",
  "Replace the sin with virtue.",
  "Create a small plan before temptation comes.",
  "Ask for help if needed.",
  "Keep a daily examen.",
  "Do not negotiate with temptation.",
  "Begin again immediately after falling.",
];

export default function HabitualSinPage() {
  return (
    <SinTemptationPageLayout
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Sin & Temptation", href: "/sin-and-temptation" },
        { label: "Habitual Sin" },
      ]}
      title="Habitual Sin"
      subtitle="How repeated sin forms patterns — and how grace, honesty, and perseverance can break them."
      summary="Habitual sin can feel discouraging because the same fall seems to return again and again. The answer is not despair. It is grace, truth, strategy, humility, and steady return to Jesus Christ."
      ctas={[
        { label: "Open Examination", href: "/confession/examination" },
        { label: "Go to Confession Guide", href: "/confession", variant: "secondary", eventName: "confession_guide_click" },
        { label: "Resist Temptation", href: "/sin-and-temptation/resisting-temptation", variant: "secondary", eventName: "sin_topic_open" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is habitual sin?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Habitual sin is a repeated pattern of sin that has become familiar or difficult to resist. It can
          involve repeated choices, weakened habits, emotional patterns, near occasions, or a lack of practical
          safeguards.
        </p>
      </section>

      <PastoralMercyNote>
        <p>
          A repeated fall does not mean God has abandoned you. It means the soul needs grace, strategy,
          humility, and perseverance. Christ meets sinners with mercy and calls them into freedom.
        </p>
      </PastoralMercyNote>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {causes.map((cause) => (
          <article key={cause} className="card-parchment p-5">
            <h2 className="font-display text-2xl font-semibold text-navy">{cause}</h2>
          </article>
        ))}
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">How to fight habitual sin</h2>
        <ol className="daily-card-readable mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-muted">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">After a fall</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Do not remain in shame. Turn to Jesus immediately. Make an act of contrition, learn from the fall,
          remove the next occasion, and return to prayer. If grave sin is involved, go to Confession as soon as
          possible.
        </p>
      </section>

      <HabitualSinPatternTool />

      <RelatedConversionLinks
        title="Keep moving toward mercy"
        links={[
          {
            title: "Near Occasions of Sin",
            description: "Remove the traps that keep putting you back in the same place.",
            href: "/sin-and-temptation/near-occasions-of-sin",
          },
          {
            title: "Predominant Fault",
            description: "Look beneath the repeated fall to the deeper root.",
            href: "/sin-and-temptation/predominant-fault",
          },
          {
            title: "Confession Guide",
            description: "Bring the pattern honestly to the sacrament of mercy.",
            href: "/confession",
          },
          {
            title: "Daily Examen",
            description: "Review the day so discouragement does not turn into forgetfulness.",
            href: "/daily-examen",
          },
        ]}
      />
    </SinTemptationPageLayout>
  );
}
