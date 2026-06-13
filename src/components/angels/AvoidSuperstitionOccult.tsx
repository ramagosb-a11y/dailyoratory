import { SectionHeader } from "@/components/section-header";

const avoidItems = [
  "angel numerology",
  "attempts to discover secret angel names",
  "seances",
  "spirit boards",
  "divination",
  "magic",
  "New Age angel channeling",
  "treating angels like personal spiritual powers to command",
  "using angel devotion apart from Christ",
  "fear-based obsession with demons",
];

const positiveItems = [
  "Pray to God",
  "Ask guardian angel for help",
  "Pray Saint Michael prayer",
  "Read Scripture",
  "Receive the sacraments",
  "Trust Jesus Christ",
  "Speak with a priest if unsure",
];

export function AvoidSuperstitionOccult() {
  return (
    <section>
      <SectionHeader
        eyebrow="Discernment"
        title="Avoiding Superstition and the Occult"
        summary="Catholic devotion to the angels should stay rooted in Christ, Scripture, prayer, and the life of the Church."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        <article className="card-parchment p-5">
          <h3 className="font-display text-3xl font-semibold text-navy">Avoid</h3>
          <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
            {avoidItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-5">
          <h3 className="font-display text-3xl font-semibold text-navy">Choose instead</h3>
          <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
            {positiveItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
