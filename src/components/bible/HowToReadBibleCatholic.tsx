import { howToReadBibleCatholicSteps } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function HowToReadBibleCatholic() {
  return (
    <BibleSection
      eyebrow="Practice"
      title="How to Read the Bible as a Catholic"
      summary="A beginner-friendly Catholic way to read Scripture with prayer, context, humility, and a real desire for conversion."
    >
      <BibleCardGrid columns="md:grid-cols-2">
        {howToReadBibleCatholicSteps.map((step, index) => (
          <BibleCard
            key={step.title}
            title={`${index + 1}. ${step.title}`}
            description={step.description}
          />
        ))}
      </BibleCardGrid>
    </BibleSection>
  );
}
