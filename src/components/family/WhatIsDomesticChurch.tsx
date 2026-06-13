import { SectionHeader } from "@/components/section-header";

const points = [
  "The home is often the first school of prayer.",
  "Parents and caregivers teach faith most powerfully by example.",
  "Family prayer forms the heart over time.",
  "The home should be a place of mercy and safety.",
  "The family is connected to the parish and the wider Church.",
  "The domestic church is not a perfect family; it is a family learning to let Christ dwell there.",
];

export function WhatIsDomesticChurch() {
  return (
    <section id="what-is-domestic-church" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Foundation"
        title="What Is the Domestic Church?"
        summary="The domestic church is the family living as a small place of faith, prayer, love, forgiveness, and Christian witness."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card-parchment p-6">
          <p className="text-sm leading-8 text-muted">
            In the home, people first learn how to pray, forgive, serve, listen, sacrifice, and seek God. Catholics use
            the phrase <span className="font-semibold text-navy">domestic church</span> to describe this ordinary, hidden,
            grace-filled work of faith lived in the household.
          </p>
          <p className="mt-4 text-sm leading-8 text-muted">
            If you are exploring the Catholic faith, this page shows how Catholics understand the home as a place where
            faith is lived, not only discussed.
          </p>
        </div>
        <div className="card-parchment p-6">
          <ul className="grid gap-3">
            {points.map((point) => (
              <li key={point} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
