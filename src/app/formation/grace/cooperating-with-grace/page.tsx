import type { Metadata } from "next";
import { DailyGraceCooperationPlan } from "@/components/grace/DailyGraceCooperationPlan";
import { GracePrayerCard } from "@/components/grace/GracePrayerCard";
import { GraceRelatedLinks } from "@/components/grace/GraceRelatedLinks";
import { GraceTopicPage } from "@/components/grace/GraceTopicPage";
import { createPageMetadata } from "@/lib/metadata";

const prayer =
  "Lord, grace comes first. Teach me to respond with faith, obedience, prayer, and love. Let me not resist Your help, but answer it generously in the ordinary duties of today. Amen.";

export const metadata: Metadata = createPageMetadata({
  title: "Cooperating with Grace | Catholic Formation | Daily Oratory",
  description:
    "Learn how prayer, sacraments, virtue, charity, and perseverance help the soul cooperate with grace without trying to earn it.",
  path: "/formation/grace/cooperating-with-grace",
});

export default function CooperatingWithGracePage() {
  return (
    <GraceTopicPage
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Formation", href: "/formation" },
        { label: "Grace", href: "/formation/grace" },
        { label: "Cooperating with Grace" },
      ]}
      title="Cooperating with Grace"
      subtitle="Grace is God’s gift, and the soul is invited to respond with faith, obedience, prayer, and love."
      summary="God’s grace comes first. Cooperation means answering that grace with faith, repentance, prayer, virtue, and charity. It is not earning grace, but receiving and responding to it."
      ctas={[
        { label: "Return to Grace Overview", href: "/formation/grace" },
        { label: "Open Daily Plan", href: "#daily-grace-plan", variant: "secondary" },
        { label: "Go to Prayer", href: "/pray", variant: "secondary" },
      ]}
    >
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Grace comes first</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            God takes the first step. He calls, prompts, enlightens, heals, and invites. The Christian life begins
            with God’s initiative, not our self-generated effort.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">What cooperation means</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Cooperation means saying yes to what God is already doing: praying when moved to pray, confessing when
            conscience is stirred, turning away from temptation, and choosing charity.
          </p>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Why cooperation is not earning grace</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Cooperation never means putting God in our debt. Grace remains a gift. Our response matters, but it is
          always a response to God’s prior generosity.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {[
          ["Prayer and openness", "Daily prayer keeps the soul attentive and teachable."],
          ["Sacraments and perseverance", "The sacraments strengthen the soul for long obedience."],
          ["Resisting temptation", "Grace helps the person reject what leads away from God."],
          ["Practicing virtue", "Virtue makes cooperation more ready, stable, and fruitful."],
          ["Works of mercy", "Charity is one of grace’s clearest fruits."],
        ].map(([title, body]) => (
          <article key={title} className="card-parchment p-6">
            <h2 className="font-display text-3xl font-semibold text-navy">{title}</h2>
            <p className="daily-readable mt-4 text-base leading-8 text-muted">{body}</p>
          </article>
        ))}
      </section>

      <div id="daily-grace-plan">
        <DailyGraceCooperationPlan />
      </div>

      <GracePrayerCard title="Prayer to Cooperate with Grace" prayer={prayer} />

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Reflection Questions</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>What grace is God already offering me today?</li>
          <li>Where do I tend to delay or resist His help?</li>
          <li>What small act of obedience or charity would be a real yes to grace?</li>
        </ul>
      </section>

      <GraceRelatedLinks
        title="Related Links"
        links={[
          { title: "Grace", description: "Return to the main Grace guide.", href: "/formation/grace" },
          { title: "Sin & Temptation", description: "See how grace strengthens the soul in spiritual battle.", href: "/sin-and-temptation" },
          { title: "Confession Guide", description: "Return to mercy when you fall and begin again in grace.", href: "/confession" },
          { title: "Prayer", description: "Stay open to grace through a steady life of prayer.", href: "/pray" },
        ]}
      />
    </GraceTopicPage>
  );
}
