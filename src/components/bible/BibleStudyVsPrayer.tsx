import { studyVsPrayerCards } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function BibleStudyVsPrayer() {
  return (
    <BibleSection
      eyebrow="Both are good"
      title="Bible Study and Bible Prayer"
      summary="Study helps prayer become deeper; prayer keeps study humble."
    >
      <BibleCardGrid columns="md:grid-cols-2">
        {studyVsPrayerCards.map((card) => (
          <BibleCard key={card.title} title={card.title}>
            <ul className="space-y-2 text-sm leading-7 text-muted">
              {card.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </BibleCard>
        ))}
      </BibleCardGrid>
    </BibleSection>
  );
}
