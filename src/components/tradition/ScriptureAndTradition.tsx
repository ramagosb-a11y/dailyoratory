import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const points = [
  "Scripture is the inspired Word of God written down.",
  "Tradition is the living handing-on of the apostolic faith.",
  "The Church received, preserved, and recognized the Scriptures within the life of faith.",
  "Catholics do not see Scripture and Tradition as enemies.",
  "Tradition helps the Church read Scripture faithfully.",
  "Scripture remains central in the Mass, prayer, doctrine, and spiritual life.",
];

export function ScriptureAndTradition() {
  return (
    <section id="scripture-and-tradition" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Scripture and Tradition"
        title="Scripture and Tradition"
        summary="Catholics believe Sacred Scripture and Sacred Tradition are closely united. They come from the same divine source and work together in handing on God's revelation."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="space-y-3 text-sm leading-7 text-muted">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/library/scripture-prayer" className="btn btn-secondary focus-ring">
            Scripture Prayer
          </Link>
          <Link href="/catechism" className="btn btn-secondary focus-ring">
            Catechism
          </Link>
          <Link href="/mass" className="btn btn-secondary focus-ring">
            The Holy Mass
          </Link>
          <Link href="/church-fathers" className="btn btn-secondary focus-ring">
            Church Fathers
          </Link>
        </div>
      </div>
    </section>
  );
}
