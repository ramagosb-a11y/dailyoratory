import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { virtueReplacements } from "@/data/sinAndTemptation";
import { FreedomPlanTool } from "@/components/sin-and-temptation/FreedomPlanTool";
import { PastoralMercyNote } from "@/components/sin-and-temptation/PastoralMercyNote";
import { RelatedConversionLinks } from "@/components/sin-and-temptation/RelatedConversionLinks";
import { SinTemptationPageLayout } from "@/components/sin-and-temptation/SinTemptationPageLayout";
import { VirtueReplacementCards } from "@/components/sin-and-temptation/VirtueReplacementCards";

const sacramentalPractices = [
  "Confession",
  "Holy Communion",
  "Eucharistic Adoration",
  "Scripture",
  "Rosary",
  "Fasting",
  "Works of mercy",
  "Accountability",
  "Spiritual direction",
  "Daily Examen",
];

export const metadata: Metadata = createPageMetadata({
  title: "Virtue, Healing, and Freedom | Daily Oratory",
  description:
    "Learn how grace replaces vice with virtue and how healing, mercy, and steady practice help the soul grow in freedom.",
  path: "/sin-and-temptation/virtue-and-healing",
});

export default function VirtueAndHealingPage() {
  return (
    <SinTemptationPageLayout
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Sin & Temptation", href: "/sin-and-temptation" },
        { label: "Virtue and Healing" },
      ]}
      title="Virtue, Healing, and Freedom"
      subtitle="Christian freedom is not only avoiding sin — it is becoming free to love God and neighbor."
      summary="The goal of conversion is not merely getting through the day without falling. The goal is union with God, deeper charity, and a heart that becomes steadily more like Jesus Christ."
      ctas={[
        { label: "Open Freedom Plan", href: "#freedom-plan" },
        { label: "Go to Confession Guide", href: "/confession", variant: "secondary", eventName: "confession_guide_click" },
        { label: "Daily Examen", href: "/daily-examen", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Freedom is for love</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          The goal is not merely not sinning. The goal is union with God, charity, holiness, peace, and
          becoming more like Christ.
        </p>
      </section>

      <VirtueReplacementCards replacements={virtueReplacements} />

      <PastoralMercyNote>
        <p>
          Some patterns are connected to wounds, fear, loneliness, trauma, or false beliefs. Grace works deeply
          and patiently. Sometimes pastoral counsel, spiritual direction, or professional help may be needed.
        </p>
      </PastoralMercyNote>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Sacraments and spiritual practices</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {sacramentalPractices.map((item) => (
            <span key={item} className="season-pill bg-ivory px-3 py-2 text-navy">
              {item}
            </span>
          ))}
        </div>
      </section>

      <div id="freedom-plan">
        <FreedomPlanTool />
      </div>

      <RelatedConversionLinks
        links={[
          {
            title: "Predominant Fault",
            description: "Find the root weakness that needs grace and contrary virtue.",
            href: "/sin-and-temptation/predominant-fault",
          },
          {
            title: "Habitual Sin",
            description: "Bring repeated falls into a more practical plan of freedom.",
            href: "/sin-and-temptation/habitual-sin",
          },
          {
            title: "Confession Guide",
            description: "Return often to sacramental mercy and begin again.",
            href: "/confession",
          },
          {
            title: "Body, Soul, and Spirit",
            description: "Reflect more deeply on grace, conscience, and the inner life.",
            href: "/body-soul-spirit",
          },
        ]}
      />
    </SinTemptationPageLayout>
  );
}
