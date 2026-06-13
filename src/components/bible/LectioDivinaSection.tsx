import Link from "next/link";
import { lectioDivinaMovements } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function LectioDivinaSection() {
  return (
    <BibleSection
      id="lectio-divina"
      eyebrow="Sacred reading"
      title="Lectio Divina"
      summary="Lectio Divina means sacred reading. It is a traditional way of praying with Scripture that moves through reading, meditation, prayer, and contemplation."
    >
      <BibleCardGrid columns="md:grid-cols-2 xl:grid-cols-5">
        {lectioDivinaMovements.map((movement) => (
          <BibleCard key={movement.title} title={movement.title} description={movement.description} />
        ))}
      </BibleCardGrid>
      <div className="mt-6">
        <Link href="/library/scripture-prayer" className="btn btn-secondary focus-ring justify-center">
          Scripture Prayer
        </Link>
      </div>
    </BibleSection>
  );
}
