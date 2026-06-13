import { SectionHeader } from "@/components/section-header";
import { relicVenerationSteps } from "@/data/relicsPage";

export function HowToVenerateRelic() {
  return (
    <section id="how-to-venerate">
      <SectionHeader
        eyebrow="Practice"
        title="How to Venerate a Relic"
        summary="Always follow parish, shrine, or diocesan instructions when venerating relics."
      />
      <ol className="mt-7 space-y-4 rounded-[1.5rem] border border-gold/35 bg-ivory/90 p-6 shadow-soft">
        {relicVenerationSteps.map((step, index) => (
          <li key={step} className="text-sm leading-7 text-muted">
            <span className="font-semibold text-navy">{index + 1}.</span> {step}
          </li>
        ))}
      </ol>
      <p className="mt-6 rounded-2xl border border-gold/30 bg-ivory/85 p-5 text-sm leading-7 text-muted">
        <span className="font-semibold text-navy">Short prayer:</span> Lord Jesus, I thank You for the
        holiness You formed in Your saint. Through their intercession, help me follow You more
        faithfully. Amen.
      </p>
    </section>
  );
}
