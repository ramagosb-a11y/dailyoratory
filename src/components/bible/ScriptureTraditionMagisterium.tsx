import { scriptureTraditionMagisteriumCards, scriptureTraditionMagisteriumLinks } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleLinkPills, BibleSection } from "@/components/bible/BibleUi";

export function ScriptureTraditionMagisterium() {
  return (
    <BibleSection
      eyebrow="Deposit of faith"
      title="Scripture, Tradition, and the Church"
      summary="Catholics read the Bible inside the family of faith that received, preserved, proclaimed, prayed, and interpreted it across the centuries."
    >
      <BibleCardGrid>
        {scriptureTraditionMagisteriumCards.map((card) => (
          <BibleCard key={card.title} title={card.title} description={card.description} />
        ))}
      </BibleCardGrid>
      <div className="mt-5">
        <BibleLinkPills links={scriptureTraditionMagisteriumLinks} />
      </div>
    </BibleSection>
  );
}
