import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { predominantFaults } from "@/data/sinAndTemptation";
import { PastoralMercyNote } from "@/components/sin-and-temptation/PastoralMercyNote";
import { PredominantFaultCards } from "@/components/sin-and-temptation/PredominantFaultCards";
import { PredominantFaultDiscernmentTool } from "@/components/sin-and-temptation/PredominantFaultDiscernmentTool";
import { RelatedConversionLinks } from "@/components/sin-and-temptation/RelatedConversionLinks";
import { SinTemptationPageLayout } from "@/components/sin-and-temptation/SinTemptationPageLayout";

const discernmentQuestions = [
  "What sin do I confess most often?",
  "What criticism from others bothers me most?",
  "What do I excuse or defend quickly?",
  "What triggers disproportionate reactions?",
  "What do I fear losing?",
  "What do I seek more than God?",
  "What virtue feels hardest to practice?",
  "Where do I repeatedly resist grace?",
];

export const metadata: Metadata = createPageMetadata({
  title: "Identifying Your Predominant Fault | Daily Oratory",
  description:
    "Learn how to notice a recurring weakness, name the deeper root, and cooperate with grace more wisely.",
  path: "/sin-and-temptation/predominant-fault",
});

export default function PredominantFaultPage() {
  return (
    <SinTemptationPageLayout
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Sin & Temptation", href: "/sin-and-temptation" },
        { label: "Predominant Fault" },
      ]}
      title="Identifying Your Predominant Fault"
      subtitle="Learning the main weakness that repeatedly pulls the soul away from love."
      summary="Naming the predominant fault helps the Christian life become more honest and more hopeful. Instead of fighting only surface behavior, you begin to cooperate with grace where conversion is most needed."
      ctas={[
        { label: "Open Reflection Tool", href: "#predominant-fault-tool" },
        { label: "Go to Confession Guide", href: "/confession", variant: "secondary", eventName: "confession_guide_click" },
        { label: "Resist Temptation", href: "/sin-and-temptation/resisting-temptation", variant: "secondary", eventName: "sin_topic_open" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is a predominant fault?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          A predominant fault is a recurring weakness, disordered tendency, or root pattern that influences many
          other sins and struggles. It is often the area where conversion is most needed and where grace can
          bring great growth.
        </p>
      </section>

      <PastoralMercyNote>
        <p>
          If you only fight surface sins, the deeper root may remain. Naming the predominant fault helps you
          cooperate with grace more wisely, but it should be done with humility, patience, and prayer.
        </p>
      </PastoralMercyNote>

      <PredominantFaultCards faults={predominantFaults} />

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Signs of your predominant fault</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          {discernmentQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Detachment and virtue</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">See Where Detachment Is Most Needed</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Identifying your predominant fault helps you see where detachment and the opposite virtue are most
          needed.
        </p>
        <div className="mt-6">
          <Link
            href="/indulgences/detachment-from-sin#detachment-builder"
            className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
          >
            Build a Detachment Plan
          </Link>
        </div>
      </section>

      <div id="predominant-fault-tool">
        <PredominantFaultDiscernmentTool />
      </div>

      <RelatedConversionLinks
        title="Related paths of growth"
        links={[
          {
            title: "Habitual Sin",
            description: "See how repeated sin and a deeper root often reinforce each other.",
            href: "/sin-and-temptation/habitual-sin",
          },
          {
            title: "Virtue and Healing",
            description: "Practice the opposite virtue instead of only fighting the symptom.",
            href: "/sin-and-temptation/virtue-and-healing",
          },
          {
            title: "Confession Guide",
            description: "Bring the recurring fault humbly to the Lord in the sacrament.",
            href: "/confession",
          },
          {
            title: "Daily Examen",
            description: "Notice the same root pattern before it takes shape again tomorrow.",
            href: "/daily-examen",
          },
          {
            title: "Detachment from Sin",
            description: "Ask God for freedom from the attachment that keeps feeding the same root fault.",
            href: "/indulgences/detachment-from-sin",
          },
        ]}
      />
    </SinTemptationPageLayout>
  );
}
