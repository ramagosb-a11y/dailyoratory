import { SectionHeader } from "@/components/section-header";

const items = [
  "You are welcome to attend.",
  "Sit where you feel comfortable.",
  "Follow along as you are able.",
  "Do not worry if you do not understand everything.",
  "Listen to the Scripture readings.",
  "If you are not Catholic, remain in the pew during Communion and pray.",
  "Ask questions afterward if you feel comfortable.",
];

export function FirstTimeMassPreview() {
  return (
    <section>
      <SectionHeader eyebrow="Mass" title="Going to Mass for the First Time" />
      <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="card-parchment p-4 text-sm leading-7 text-muted">{item}</div>
        ))}
      </div>
      <a href="/explore/first-time-at-mass" className="btn liturgical-button focus-ring mt-6 justify-center">
        First Time at Mass Guide
      </a>
    </section>
  );
}
