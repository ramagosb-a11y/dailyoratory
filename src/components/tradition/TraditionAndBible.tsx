import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const points = [
  "Scripture is inspired by the Holy Spirit.",
  "The Church received and recognized the canon.",
  "The Bible was proclaimed in worship.",
  "Tradition helps Catholics read Scripture within the faith of the Church.",
  "Catholics should read and pray with Scripture.",
] as const;

export function TraditionAndBible() {
  return (
    <section>
      <SectionHeader
        eyebrow="Scripture"
        title="Did the Church Give Us the Bible?"
        summary="The Bible is inspired by God. The Church did not make Scripture inspired; God did. But the early Church received, preserved, copied, proclaimed, and recognized the inspired books of Scripture within the life of faith."
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
          <Link href="/church-fathers" className="btn btn-secondary focus-ring">
            Church Fathers
          </Link>
        </div>
      </div>
    </section>
  );
}
