import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const items = [
  "Councils use Scripture",
  "Councils clarify apostolic faith",
  "Councils respond to error",
  "Councils guide catechesis",
  "Councils show the living Tradition of the Church",
];

export function CouncilsScriptureTraditionChurch() {
  return (
    <section>
      <SectionHeader
        eyebrow="Scripture and Tradition"
        title="Councils, Scripture, Tradition, and the Church"
        summary="Councils help show how Scripture, Tradition, and the Magisterium work together."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <div key={item} className="card-parchment p-4 text-sm leading-7 text-muted">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/tradition" className="btn btn-secondary focus-ring justify-center">Sacred Tradition</Link>
        <Link href="/catechism" className="btn btn-secondary focus-ring justify-center">Catechism</Link>
        <Link href="/library/scripture-prayer" className="btn btn-secondary focus-ring justify-center">Scripture Prayer</Link>
        <Link href="/church-fathers" className="btn btn-secondary focus-ring justify-center">Church Fathers</Link>
      </div>
    </section>
  );
}
