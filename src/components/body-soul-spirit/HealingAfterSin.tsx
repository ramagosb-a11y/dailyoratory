import { healingAfterSinPrayer, healingAfterSinSteps } from "@/data/bodySoulSpiritPage";
import { BodySoulSpiritLinkPills, BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";

const links = [
  { label: "Confession Guide", href: "/confession" },
  { label: "Examination of Conscience", href: "/confession/examination" },
  { label: "Daily Examen", href: "/daily-examen" },
];

export function HealingAfterSin() {
  return (
    <BodySoulSpiritSection
      eyebrow="After a fall"
      title="When You Have Fallen"
      summary="If you have sinned, do not hide from God. The enemy wants shame to keep the temple closed. Christ comes as Savior, Physician, and Light."
    >
      <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <article className="card-parchment p-6">
          <ol className="grid gap-4">
            {healingAfterSinSteps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl border border-stone bg-ivory px-4 py-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-soft text-sm font-bold text-navy">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-navy">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <BodySoulSpiritLinkPills links={links} />
          </div>
        </article>
        <article className="card-parchment p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Prayer after a fall</p>
          <p className="mt-4 whitespace-pre-line text-sm leading-8 text-navy">{healingAfterSinPrayer}</p>
        </article>
      </div>
    </BodySoulSpiritSection>
  );
}

