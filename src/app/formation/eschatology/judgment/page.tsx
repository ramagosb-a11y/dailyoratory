import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EschatologyTopicPage } from "@/components/eschatology/EschatologyTopicPage";
import { EschatologyRelatedLinks } from "@/components/eschatology/EschatologyRelatedLinks";
import { eschatologyTopics } from "@/data/eschatology";

const topic = eschatologyTopics.find((item) => item.slug === "judgment")!;

export const metadata: Metadata = createPageMetadata({
  title: "Particular Judgment and Final Judgment | Catholic Eschatology | Daily Oratory",
  description:
    "Learn Catholic teaching on the particular judgment after death, the final judgment at the end of time, and the hope of mercy in Christ.",
  path: "/formation/eschatology/judgment",
});

export default function EschatologyJudgmentPage() {
  return (
    <EschatologyTopicPage
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Formation", href: "/formation" },
        { label: "Catholic Eschatology", href: "/formation/eschatology" },
        { label: topic.title },
      ]}
      title={topic.title}
      subtitle={topic.subtitle}
      summary="Judgment is not arbitrary or impersonal. It is the soul's encounter with Jesus Christ, in whom truth, justice, and mercy are perfectly united."
      ctas={[
        { label: "Particular Judgment", href: "#particular-judgment" },
        { label: "Final Judgment", href: "#final-judgment", variant: "secondary" },
        { label: "Go to Confession", href: "/confession", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is judgment?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Judgment means that each human life is seen fully in the light of God. Nothing is hidden from Him,
          and His judgment reveals truth while remaining inseparable from His justice and mercy.
        </p>
      </section>
      <section id="particular-judgment" className="card-parchment scroll-mt-28 p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Particular Judgment</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          At death, each soul encounters Christ and receives the particular judgment. This concerns the person's
          life, choices, and state before God at the end of earthly life.
        </p>
      </section>
      <section id="final-judgment" className="card-parchment scroll-mt-28 p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Final Judgment</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          At the end of time, Christ will come in glory and the final judgment will reveal the meaning of each
          life and of history itself. God's justice and mercy will be made manifest before all.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Justice and mercy</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            The Christian need not choose between fearing justice and trusting mercy. In Jesus Christ, justice
            is true and mercy is real. Judgment calls us to honesty, repentance, and hope.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Matthew 25 and works of mercy</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Christ's teaching in Matthew 25 shows that love of neighbor matters eternally. Works of mercy do
            not replace grace, but they reveal a heart being formed by it.
          </p>
        </article>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Why judgment should lead to conversion, not despair</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Judgment should not drive the soul into panic. It should lead to Confession, prayer, mercy, and
          faithful perseverance in grace.
        </p>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Reflection Questions</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          {topic.reflectionQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </section>
      <EschatologyRelatedLinks />
    </EschatologyTopicPage>
  );
}
