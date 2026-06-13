import { commonBibleMistakes } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function CommonBibleMistakes() {
  return (
    <BibleSection
      eyebrow="Discernment"
      title="Common Mistakes When Reading Scripture"
      summary="A few gentle warnings can keep Bible reading prayerful, Catholic, and grounded in reality."
    >
      <BibleCardGrid columns="md:grid-cols-2 xl:grid-cols-5">
        {commonBibleMistakes.map((mistake) => (
          <BibleCard key={mistake} title={mistake} />
        ))}
      </BibleCardGrid>
    </BibleSection>
  );
}
