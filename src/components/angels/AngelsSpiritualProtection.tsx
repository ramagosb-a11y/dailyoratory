import { SectionHeader } from "@/components/section-header";

const items = [
  "Stay close to Jesus",
  "Receive the sacraments",
  "Pray daily",
  "Read Scripture",
  "Ask guardian angel for help",
  "Pray Saint Michael prayer",
  "Go to confession",
  "Avoid occult practices",
  "Seek pastoral help when needed",
];

export function AngelsSpiritualProtection() {
  return (
    <section>
      <SectionHeader
        eyebrow="Protection"
        title="Angels and Spiritual Protection"
        summary="Angels remind us that the Christian life includes spiritual struggle, but the focus should always remain on Christ."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}
