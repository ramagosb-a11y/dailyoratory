import type { Metadata } from "next";
import { GracePrayerCard } from "@/components/grace/GracePrayerCard";
import { GraceRelatedLinks } from "@/components/grace/GraceRelatedLinks";
import { GraceTopicPage } from "@/components/grace/GraceTopicPage";
import { createPageMetadata } from "@/lib/metadata";

const prayer =
  "Holy Spirit, help me notice and respond to Your grace today. Give me courage to choose what is good and strength to reject what leads me away from God. Amen.";

export const metadata: Metadata = createPageMetadata({
  title: "Actual Grace | Catholic Formation | Daily Oratory",
  description:
    "Learn how actual grace helps the soul in specific moments of prayer, repentance, temptation, discernment, and service.",
  path: "/formation/grace/actual-grace",
});

export default function ActualGracePage() {
  return (
    <GraceTopicPage
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Formation", href: "/formation" },
        { label: "Grace", href: "/formation/grace" },
        { label: "Actual Grace" },
      ]}
      title="Actual Grace"
      subtitle="God’s help in specific moments of decision, temptation, repentance, and service."
      summary="Actual grace is God’s concrete help for the present moment. It is the grace that prompts, strengthens, warns, enlightens, and helps the soul respond."
      ctas={[
        { label: "Return to Grace Overview", href: "/formation/grace" },
        { label: "Resist Temptation", href: "/sin-and-temptation/resisting-temptation", variant: "secondary" },
        { label: "Go to Confession Guide", href: "/confession", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is actual grace?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Actual grace is God’s help in particular moments. It does not describe the stable life of sanctifying grace,
          but the concrete help God gives so that we can pray, repent, resist evil, and do good now.
        </p>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">How actual grace differs from sanctifying grace</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Sanctifying grace is abiding divine life in the soul. Actual grace is a specific help from God for a given
          moment, action, or decision. They are distinct, but never opposed.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Promptings to good and away from evil</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Actual grace may come as a prompting to pray, apologize, leave a sinful situation, show mercy, or obey
            God in a difficult circumstance.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Actual grace in temptation</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            In temptation, actual grace helps the soul notice the danger, reject consent, and turn back toward Christ
            without bargaining.
          </p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Actual grace before Confession</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            The desire to examine your conscience, feel sorrow for sin, and return to Confession is itself already a
            work of grace.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Recognizing grace without overanalyzing feelings</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Not every feeling is grace, and grace is not always emotional. Stay close to prayer, Scripture, and the
            Church, and do not become trapped in anxious self-analysis.
          </p>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Responding promptly</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          The soul cooperates with actual grace by answering quickly: pray now, leave now, confess now, forgive now,
          obey now. Delay often weakens the response.
        </p>
      </section>

      <GracePrayerCard title="Prayer for Daily Grace" prayer={prayer} />

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Reflection Questions</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>Where might God be prompting me to act today?</li>
          <li>What good action have I been delaying?</li>
          <li>How can I respond more promptly to grace in temptation?</li>
        </ul>
      </section>

      <GraceRelatedLinks
        title="Related Links"
        links={[
          { title: "Grace", description: "Return to the main Grace guide.", href: "/formation/grace" },
          { title: "Resisting Temptation", description: "See how actual grace helps in moments of spiritual battle.", href: "/sin-and-temptation/resisting-temptation" },
          { title: "Prayer", description: "Keep the heart awake to God’s help through daily prayer.", href: "/pray" },
          { title: "Daily Examen", description: "Review where grace has been at work in your day.", href: "/daily-examen" },
        ]}
      />
    </GraceTopicPage>
  );
}
