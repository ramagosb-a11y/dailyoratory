"use client";

import Link from "next/link";
import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

const fields = [
  { id: "person", label: "Who is God placing before me this Lent?", placeholder: "A person, household, parish need, or local work of mercy." },
  { id: "gift", label: "What gift or act of mercy can I offer?", placeholder: "Money, time, food, attention, service, forgiveness, or practical help." },
  { id: "hidden", label: "What hidden act of mercy can I practice?", placeholder: "A quiet work of love that no one else needs to notice." },
  { id: "family", label: "How can my family share in this?", placeholder: "A family almsgiving practice, donation, visit, or shared sacrifice." },
] as const;

const initialValues = Object.fromEntries(fields.map((field) => [field.id, ""]));

function buildCopyText(values: Record<string, string>) {
  return [
    "My Almsgiving Plan",
    "",
    `Person or need: ${values.person || "Not filled in yet."}`,
    `Gift or work of mercy: ${values.gift || "Not filled in yet."}`,
    `Hidden act of mercy: ${values.hidden || "Not filled in yet."}`,
    `Family participation: ${values.family || "Not filled in yet."}`,
  ].join("\n");
}

export function AlmsgivingContent() {
  const corporal = ["Feed the hungry", "Give drink to the thirsty", "Clothe the naked", "Shelter the homeless", "Visit the sick", "Visit the imprisoned", "Bury the dead"];
  const spiritual = ["Counsel the doubtful", "Instruct the ignorant", "Admonish the sinner", "Comfort the sorrowful", "Forgive offenses", "Bear wrongs patiently", "Pray for the living and the dead"];
  const hidden = ["Give anonymously", "Write a note of encouragement", "Make a quiet meal for someone", "Forgive without announcing it", "Offer time to a lonely person"];

  return (
    <div className="grid gap-10">
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is almsgiving?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Almsgiving is love made concrete. It is more than handing something over; it is a way of opening the heart, loosening attachment, and noticing the needs of others with mercy.
        </p>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Why charity belongs in Lent</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Lent does not turn inward only. Real repentance makes the heart more available to the poor, the lonely, the burdened, and the forgotten.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Corporal works of mercy</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
            {corporal.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Spiritual works of mercy</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
            {spiritual.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Family almsgiving ideas</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Families can set aside money saved through fasting, collect food for a pantry, visit someone who is lonely, or choose one local mercy project together.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Hidden acts of mercy</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
            {hidden.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <LocalPlanToolShell
        eyebrow="Local-only planner"
        title="Almsgiving Plan Builder"
        summary="Choose one or two concrete acts of mercy rather than a vague desire to be more generous."
        storageKey="daily-oratory-almsgiving-plan"
        fields={[...fields]}
        initialValues={initialValues}
        buildCopyText={buildCopyText}
        copyEventName="lenten_plan_copy"
        printEventName="lenten_plan_print"
      />

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Related links</h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/liturgical-living/lent" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Back to Lent
          </Link>
          <Link href="/formation/catholic-burial/prayers-for-the-dead" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Pray for the Dead
          </Link>
          <Link href="/indulgences/detachment-from-sin" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Detachment from Sin
          </Link>
        </div>
      </section>
    </div>
  );
}

