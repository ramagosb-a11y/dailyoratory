import { SectionHeader } from "@/components/section-header";
import { howPopeChosenPoints } from "@/data/popePage";

export function HowPopeIsChosen() {
  return (
    <section>
      <SectionHeader
        eyebrow="Conclave"
        title="How Is a Pope Chosen?"
        summary="This is a simplified overview. Official rules are governed by Church law and papal documents."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          When the See of Rome becomes vacant, the College of Cardinals gathers in conclave to elect a new Pope. The process is
          prayerful, structured, and governed by Church law.
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
          {howPopeChosenPoints.map((point) => (
            <li key={point} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
