import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const items = [
  "Nicaea I and the Son",
  "Constantinople I and the Holy Spirit",
  "The Creed at Sunday Mass",
  "Doctrine as prayer, not just information",
];

export function CouncilsAndCreed() {
  return (
    <section id="councils-and-creed" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Creed"
        title="Councils and the Creed"
        summary="The Nicene Creed grew from the Church's need to confess clearly who God is: Father, Son, and Holy Spirit."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/mass" className="btn btn-secondary focus-ring justify-center">Mass</Link>
        <Link href="/catechism" className="btn btn-secondary focus-ring justify-center">Catechism</Link>
        <Link href="/formation" className="btn btn-secondary focus-ring justify-center">Formation</Link>
      </div>
    </section>
  );
}
