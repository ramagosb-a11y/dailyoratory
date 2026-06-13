import { familyPrayerIdeas } from "@/lib/prayer";

export function FamilyPrayer() {
  return (
    <section>
      <p className="liturgical-section-eyebrow">Praying as a family</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Keep family prayer short, peaceful, and consistent.
      </h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {familyPrayerIdeas.map((idea) => (
          <div key={idea} className="card-parchment p-5 text-sm leading-7 text-muted">
            {idea}
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
        Family prayer does not need to be perfect. Keep it short, peaceful, and consistent.
      </p>
    </section>
  );
}
