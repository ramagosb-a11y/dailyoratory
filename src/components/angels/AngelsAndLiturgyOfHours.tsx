import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export function AngelsAndLiturgyOfHours() {
  return (
    <section>
      <SectionHeader
        eyebrow="Prayer of the Church"
        title="Angels and the Prayer of the Church"
        summary="The Church's prayer joins the praise of heaven. The Psalms, hymns, and canticles of the Liturgy of the Hours help believers pray with the whole Church, visible and invisible."
      />
      <div className="card-parchment mt-7 p-6 sm:p-8">
        <Link href="/liturgy-of-the-hours" className="btn btn-secondary focus-ring justify-center">
          Explore the Liturgy of the Hours
        </Link>
      </div>
    </section>
  );
}
