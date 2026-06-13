import { SectionHeader } from "@/components/section-header";
import { RelicLinkRow } from "@/components/relics/shared";

export function RelicsBuyingSelling() {
  return (
    <section>
      <SectionHeader
        eyebrow="Warning"
        title="Can Relics Be Bought or Sold?"
        summary="Catholic practice forbids the sale of sacred relics. Relics are holy, not collectibles or merchandise."
      />
      <div className="mt-7 rounded-[1.75rem] border border-burgundy/30 bg-[linear-gradient(180deg,rgba(255,252,244,0.98),rgba(250,245,232,0.98))] p-6 shadow-soft">
        <p className="text-lg font-semibold text-burgundy">Do not buy first-class or second-class relics online.</p>
        <p className="mt-4 text-sm leading-7 text-muted">
          It is acceptable to purchase devotional items such as rosaries, medals, holy cards, or
          reliquaries, but not to buy or sell sacred relics as objects of commerce.
        </p>
      </div>
      <RelicLinkRow
        links={[
          { label: "Sacramentals", href: "/sacramentals" },
          { label: "Sacred Tradition", href: "/tradition" },
          { label: "The Vatican", href: "/vatican" },
        ]}
      />
    </section>
  );
}
