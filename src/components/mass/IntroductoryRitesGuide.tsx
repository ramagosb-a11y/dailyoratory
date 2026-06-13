import type { MassPart } from "@/types/mass";
import { MassPartSection } from "@/components/mass/MassPartSection";

export function IntroductoryRitesGuide({ parts }: { parts: MassPart[] }) {
  return (
    <MassPartSection
      id="introductory-rites"
      eyebrow="Introductory Rites"
      title="Gathered into one body"
      description="The Introductory Rites gather the faithful into one body, dispose the heart for worship, and prepare the assembly to hear the Word of God and celebrate the Eucharist."
      parts={parts}
    />
  );
}
