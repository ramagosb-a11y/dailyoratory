import { howToReadBibleCatholicSteps } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function HowToReadBibleCatholic() {
  return (
    <BibleSection
      id="how-to-begin"
      eyebrow="A gentle suggestion"
      title="A Simple Way to Begin"
      summary="Try these suggestions, adapting the pace and approach to your experience and tradition."
    >
      <BibleCardGrid columns="md:grid-cols-2 xl:grid-cols-3">
        {howToReadBibleCatholicSteps.map((step, index) => (
          <BibleCard
            key={step.title}
            title={`${index + 1}. ${step.title}`}
            description={step.description}
            className="relative overflow-hidden bg-[linear-gradient(145deg,rgba(255,253,247,0.98),rgba(247,238,220,0.95))] p-6 transition duration-200 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_16px_32px_rgba(83,61,29,0.14)]"
          />
        ))}
      </BibleCardGrid>
    </BibleSection>
  );
}
