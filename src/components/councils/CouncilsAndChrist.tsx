import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const cards = [
  "Jesus is truly God",
  "Jesus is truly man",
  "Jesus is one divine Person",
  "Jesus has two natures",
  "Jesus has a human will and divine will",
  "Mary is Mother of God because her Son is God",
];

export function CouncilsAndChrist() {
  return (
    <section>
      <SectionHeader
        eyebrow="Christology"
        title="Councils and the Mystery of Christ"
        summary="Several early councils defended the truth that Jesus Christ is truly God and truly man."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{card}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/catechism" className="btn btn-secondary focus-ring justify-center">Catechism</Link>
        <Link href="/library/scripture-prayer" className="btn btn-secondary focus-ring justify-center">Scripture Prayer</Link>
        <Link href="/church-fathers" className="btn btn-secondary focus-ring justify-center">Church Fathers</Link>
      </div>
    </section>
  );
}
