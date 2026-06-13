import { SectionHeader } from "@/components/section-header";

const points = [
  "Councils are not ordinary meetings.",
  "They often happen when the Church faces serious questions or confusion.",
  "Bishops gather to pray, discuss, discern, and teach.",
  "Councils may clarify doctrine, address heresy, guide worship, or reform Church life.",
  "Ecumenical councils are councils recognized as universal councils of the Church.",
  "In Catholic teaching, ecumenical councils are received in communion with the Pope.",
];

export function WhatIsCouncil() {
  return (
    <section>
      <SectionHeader
        eyebrow="Foundations"
        title="What Is a Church Council?"
        summary="A Church council is a gathering of bishops and Church leaders to address important questions of faith, worship, discipline, reform, or pastoral life."
      />
      <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {points.map((point) => (
          <div key={point} className="card-parchment p-4 text-sm leading-7 text-muted">
            {point}
          </div>
        ))}
      </div>
      <p className="mt-6 rounded-md border border-stone bg-parchment p-4 text-sm leading-7 text-muted">
        Beginner note: councils do not invent a different faith. They help the Church explain and defend the faith handed
        on from Christ and the apostles.
      </p>
    </section>
  );
}
