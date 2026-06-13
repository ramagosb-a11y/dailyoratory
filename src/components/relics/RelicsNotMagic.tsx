import { SectionHeader } from "@/components/section-header";

const faithful = [
  "honors God's grace in the saints",
  "asks for heavenly intercession",
  "inspires prayer and conversion",
  "points to Christ",
  "deepens hope in the resurrection",
  "encourages imitation of holiness",
  "respects Church teaching",
] as const;

const superstitious = [
  "treats relics like lucky charms",
  "seeks power apart from God",
  "replaces prayer or repentance",
  "becomes obsessed with objects",
  "ignores the sacraments",
  "tries to control grace",
  "disconnects relics from Christ",
] as const;

export function RelicsNotMagic() {
  return (
    <section>
      <SectionHeader
        eyebrow="Pastoral Clarity"
        title="Relics Are Not Magic"
        summary="Relics should deepen prayer, not replace it. If devotion to a relic does not lead to Jesus, prayer, charity, humility, and holiness, it needs to be purified."
      />
      <div className="mt-7 grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">A faithful approach to relics...</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {faithful.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">A superstitious approach to relics...</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {superstitious.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
