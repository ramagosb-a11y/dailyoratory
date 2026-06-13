import type { Saint } from "@/types/saints";

export function SaintProfileHero({ saint }: { saint: Saint }) {
  return (
    <section className="rounded-[2rem] border border-stone/70 bg-[linear-gradient(135deg,rgba(255,248,236,0.96),rgba(247,240,224,0.92))] px-6 py-10 shadow-[0_24px_80px_rgba(7,26,45,0.08)] sm:px-8 lg:px-10">
      <p className="liturgical-section-eyebrow">{saint.feastDayDisplay}</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        {saint.name}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{saint.shortDescription}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="season-pill">{saint.century}</span>
        <span className="season-pill">{saint.region}</span>
        <span className="season-pill">{saint.traditionGroup}</span>
        {saint.martyr ? <span className="season-pill">Martyr</span> : null}
        {saint.doctorOfChurch ? <span className="season-pill">Doctor of the Church</span> : null}
      </div>
    </section>
  );
}
