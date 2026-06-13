import { SectionHeader } from "@/components/section-header";

const readingPlan = [
  "Start with official sources.",
  "Read one or two trusted Catholic sources.",
  "Avoid doom-scrolling.",
  "Pray before and after reading.",
  "Verify major claims.",
  "Share with charity.",
  "Choose one concrete prayer or work of mercy.",
];

const weeklyRhythm = [
  { day: "Monday", focus: "Vatican and universal Church" },
  { day: "Tuesday", focus: "Local diocese and parish" },
  { day: "Wednesday", focus: "Faith and culture" },
  { day: "Thursday", focus: "Persecuted Christians" },
  { day: "Friday", focus: "Pro-life and human dignity" },
  { day: "Saturday", focus: "Saints, devotions, and spiritual reading" },
  { day: "Sunday", focus: "Mass readings and parish life" },
];

export function NewsReadingPlan() {
  return (
    <section>
      <SectionHeader
        eyebrow="A peaceful rhythm"
        title="A Peaceful Way to Follow Catholic News"
        summary="The point is not to know everything. It is to stay attentive, truthful, and prayerful without letting headlines dominate your interior life."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
        <article className="card-parchment liturgical-card-accent p-5">
          <h3 className="font-display text-2xl font-semibold text-navy">Simple reading plan</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {readingPlan.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--liturgical-primary)]" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-5">
          <h3 className="font-display text-2xl font-semibold text-navy">Suggested weekly rhythm</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {weeklyRhythm.map((item) => (
              <div key={item.day} className="rounded-md border border-stone bg-ivory p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{item.day}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{item.focus}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
