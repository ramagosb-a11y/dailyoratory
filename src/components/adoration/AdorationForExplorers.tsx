import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getAdorationExplorerSteps } from "@/lib/adoration";

export function AdorationForExplorers() {
  const steps = getAdorationExplorerSteps();

  return (
    <section>
      <SectionHeader
        eyebrow="For seekers"
        title="If You Are Exploring the Catholic Faith"
        summary="Eucharistic Adoration may be one of the most unfamiliar Catholic practices."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="card-parchment p-6">
          <p className="text-sm leading-8 text-muted">
            Catholics believe Jesus is truly present in the Eucharist, so Adoration is worship of Christ Himself. You are
            welcome to learn, observe, sit quietly, and ask questions.
          </p>
        </div>
        <div className="card-parchment p-6">
          <ol className="grid gap-3">
            {steps.map((step, index) => (
              <li key={step} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">{index + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="/ocia" className="btn liturgical-button focus-ring justify-center">OCIA / Becoming Catholic</Link>
        <Link href="/mass" className="btn btn-secondary focus-ring justify-center">The Holy Mass</Link>
        <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring justify-center">Eucharist</Link>
        <Link href="/catechism" className="btn btn-secondary focus-ring justify-center">Catechism</Link>
      </div>
    </section>
  );
}
