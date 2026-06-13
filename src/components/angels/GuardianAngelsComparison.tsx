import { SectionHeader } from "@/components/section-header";

const positive = [
  "remember God's presence",
  "resist temptation",
  "seek what is good",
  "grow in holiness",
  "pray with trust",
  "avoid spiritual danger",
  "follow Christ more faithfully",
];

const limits = [
  "replace Jesus",
  "control our choices",
  "remove free will",
  "give permission to seek occult knowledge",
  "become objects of worship",
  "contradict Scripture or Church teaching",
];

export function GuardianAngelsComparison() {
  return (
    <section>
      <SectionHeader
        eyebrow="Clarity"
        title="What Guardian Angels Do and Do Not Do"
        summary="Guardian angels are a gift of God's care, but Catholic devotion remains centered on Jesus Christ and the worship of God."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        <article className="card-parchment p-5">
          <h3 className="font-display text-3xl font-semibold text-navy">Guardian angels help us…</h3>
          <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
            {positive.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-5">
          <h3 className="font-display text-3xl font-semibold text-navy">Guardian angels do not…</h3>
          <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
            {limits.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
