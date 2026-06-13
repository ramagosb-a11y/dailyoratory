import { SectionHeader } from "@/components/section-header";
import { getFindAdorationNearYouOptions } from "@/lib/adoration";

export function FindAdorationNearYou() {
  const options = getFindAdorationNearYouOptions();

  return (
    <section>
      <SectionHeader
        eyebrow="Nearby"
        title="Find Adoration Near You"
        summary="A few simple ways to locate Eucharistic Adoration without needing location tracking."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {options.map((option) => (
            <li key={option} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {option}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
