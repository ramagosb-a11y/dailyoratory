import Link from "next/link";
import { confessionTempleSteps } from "@/data/bodySoulSpiritPage";
import { BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function ConfessionCleansesTemple() {
  return (
    <BodySoulSpiritSection
      eyebrow="Reconciliation"
      title="Confession Cleanses the Temple"
      summary="In Confession, Christ acts through the priest to forgive sins, restore grace, heal the soul, and strengthen the person for new life. Confession is not humiliation; it is mercy entering the temple with light."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {confessionTempleSteps.map((step, index) => (
          <article key={step.title} className="card-parchment p-5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-soft text-sm font-bold text-navy">
              {index + 1}
            </span>
            <h3 className="font-display mt-4 text-2xl font-semibold text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/confession" className="btn btn-primary focus-ring justify-center">
          Go to the Confession Guide
        </Link>
        <Link href="/confession/examination" className="btn btn-secondary focus-ring justify-center">
          Examination of Conscience
        </Link>
      </div>
    </BodySoulSpiritSection>
  );
}

