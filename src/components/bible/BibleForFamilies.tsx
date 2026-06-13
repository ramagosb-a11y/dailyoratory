import { familyBibleIdeas } from "@/data/biblePage";
import { BibleLinkPills, BibleSection } from "@/components/bible/BibleUi";

export function BibleForFamilies() {
  return (
    <BibleSection
      id="bible-for-families"
      eyebrow="Domestic church"
      title="Reading the Bible as a Family"
      summary="Simple ways to let Scripture become part of family prayer, conversation, memory, and love."
    >
      <div className="card-parchment p-6">
        <ul className="space-y-2 text-sm leading-7 text-muted">
          {familyBibleIdeas.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
        <div className="mt-5">
          <BibleLinkPills
            links={[
              { label: "Family and Domestic Church", href: "/family" },
              { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
              { label: "Saints", href: "/saints" },
            ]}
          />
        </div>
      </div>
    </BibleSection>
  );
}
