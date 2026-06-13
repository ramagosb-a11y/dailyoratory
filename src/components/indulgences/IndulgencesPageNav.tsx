import Link from "next/link";
import { indulgenceAnchors } from "@/components/indulgences/content";

export function IndulgencesPageNav() {
  return (
    <>
      <details className="dashboard-card p-5 lg:hidden">
        <summary className="cursor-pointer list-none text-sm font-semibold text-navy">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Jump to section</span>
          <span className="mt-2 block">Open the indulgences guide outline</span>
        </summary>
        <div className="mt-4 grid gap-2">
          {indulgenceAnchors.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="focus-ring rounded-2xl border border-stone bg-ivory px-4 py-3 text-sm font-semibold text-navy transition hover:border-gold hover:text-burgundy"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </details>

      <nav aria-label="On-page navigation" className="dashboard-card hidden p-5 lg:sticky lg:top-24 lg:block">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">On this page</p>
        <div className="mt-4 space-y-2">
          {indulgenceAnchors.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="season-pill focus-ring block bg-ivory px-3 py-2 text-sm font-semibold text-navy hover:border-gold hover:text-burgundy"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
