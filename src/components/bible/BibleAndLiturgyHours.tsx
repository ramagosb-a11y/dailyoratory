import Link from "next/link";
import { BibleSection } from "@/components/bible/BibleUi";

export function BibleAndLiturgyHours() {
  return (
    <BibleSection
      eyebrow="Prayer of the Church"
      title="Scripture in the Prayer of the Church"
      summary="The Liturgy of the Hours is filled with Psalms, canticles, readings, and biblical prayer. It helps Catholics pray Scripture with the whole Church throughout the day."
    >
      <div className="card-parchment p-6">
        <Link href="/liturgy-of-the-hours" className="btn btn-secondary focus-ring justify-center">
          Liturgy of the Hours
        </Link>
      </div>
    </BibleSection>
  );
}
