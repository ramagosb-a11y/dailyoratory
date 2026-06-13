import { SectionHeader } from "@/components/section-header";

const faithfulUse = [
  "turns the heart toward God",
  "strengthens prayer",
  "reminds us of Christ",
  "expresses faith and trust",
  "connects us to the Church's prayer",
  "encourages conversion and holiness",
  "leads us to the sacraments",
];

const superstitiousUse = [
  "treats objects like magic charms",
  "replaces prayer or repentance",
  "tries to control spiritual power",
  "ignores the sacraments",
  "creates fear or obsession",
  "uses holy things without faith",
  "disconnects objects from Christ",
];

export function SacramentalsNotMagic() {
  return (
    <section>
      <SectionHeader
        eyebrow="Pastoral warning"
        title="Sacramentals Are Not Magic"
        summary="A blessed object is not a lucky charm. Holy water, medals, candles, rosaries, and scapulars should never be treated as objects that force God to act or protect someone automatically without faith, repentance, and love."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        <article className="card-parchment liturgical-card-accent p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">A faithful use of sacramentals...</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">{faithfulUse.map((item) => <li key={item}>- {item}</li>)}</ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">A superstitious use of sacramentals...</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">{superstitiousUse.map((item) => <li key={item}>- {item}</li>)}</ul>
        </article>
      </div>
      <p className="mt-6 rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
        If a devotion or object does not lead to Jesus, prayer, charity, repentance, and peace, something is out of order.
      </p>
    </section>
  );
}
