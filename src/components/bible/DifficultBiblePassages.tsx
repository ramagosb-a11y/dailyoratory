import { difficultPassageAdvice } from "@/data/biblePage";
import { BibleSection } from "@/components/bible/BibleUi";

export function DifficultBiblePassages() {
  return (
    <BibleSection
      eyebrow="Hard texts"
      title="What About Difficult Passages?"
      summary="Some Bible passages are hard to understand. Catholics should read difficult passages with patience, context, the whole of Scripture, the Catechism, trusted Catholic commentary, and guidance from the Church."
    >
      <div className="card-parchment p-6">
        <ul className="space-y-2 text-sm leading-7 text-muted">
          {difficultPassageAdvice.map((advice) => (
            <li key={advice}>{advice}</li>
          ))}
        </ul>
      </div>
    </BibleSection>
  );
}
