import Link from "next/link";
import { RosaryCard, RosaryCardGrid, RosarySection } from "@/components/rosary/RosaryUi";

const howToPraySteps = [
  "Make the Sign of the Cross.",
  "Pray the Apostles' Creed.",
  "Pray one Our Father.",
  "Pray three Hail Marys.",
  "Pray one Glory Be.",
  "Announce the first mystery.",
  "Pray one Our Father.",
  "Pray ten Hail Marys.",
  "Pray one Glory Be.",
  "Pray the Fatima Prayer, if desired.",
  "Continue through all five mysteries.",
  "End with the Hail Holy Queen and closing prayer.",
];

export function RosaryHowToPray() {
  return (
    <RosarySection
      eyebrow="How to pray"
      title="How to Pray the Rosary"
      summary="Move steadily through the prayers, keep the mystery before your heart, and let the rhythm become contemplation."
    >
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <RosaryCard title="A simple step-by-step guide" accent="joyful">
          <ol className="grid gap-3 text-sm leading-7 text-muted">
            {howToPraySteps.map((step, index) => (
              <li key={step} className="grid grid-cols-[1.75rem_1fr] gap-3">
                <span className="font-bold text-burgundy">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </RosaryCard>

        <RosaryCardGrid columns="grid-cols-1">
          <RosaryCard
            title="Pray slowly"
            description="The Rosary is most fruitful when the heart rests in the mystery rather than rushing to finish."
            accent="luminous"
          />
          <RosaryCard
            title="Keep your place with the beads"
            description="The beads free the mind from counting so attention can remain with Jesus and the mystery."
            accent="glorious"
          />
          <RosaryCard
            title="Pray live when you need help beginning"
            description="If you want a gentle place to start, enter the Daily Oratory Rosary Prayer Room and pray with others."
            accent="sorrowful"
          >
            <Link href="/rosary" className="btn btn-secondary focus-ring mt-5 justify-center">
              Open Live Rosary Prayer Room
            </Link>
          </RosaryCard>
        </RosaryCardGrid>
      </div>
    </RosarySection>
  );
}
