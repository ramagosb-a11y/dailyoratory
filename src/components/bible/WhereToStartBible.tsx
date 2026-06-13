import { whereToStartPaths } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function WhereToStartBible() {
  return (
    <BibleSection
      id="where-to-start"
      eyebrow="Beginner paths"
      title="Where Should I Start?"
      summary="Do not feel pressured to start at Genesis and read straight through if you are new. Begin with Christ and the Church's prayer."
    >
      <BibleCardGrid>
        {whereToStartPaths.map((path) => (
          <BibleCard key={path.title} title={path.title}>
            <ul className="space-y-2 text-sm leading-7 text-muted">
              {path.references.map((reference) => (
                <li key={reference}>{reference}</li>
              ))}
            </ul>
          </BibleCard>
        ))}
      </BibleCardGrid>
    </BibleSection>
  );
}
