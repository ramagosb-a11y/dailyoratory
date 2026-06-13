import type { SpiritualGrowthPractice } from "@/types/formation";
import Link from "next/link";

export function SpiritualGrowthSection({ practices }: { practices: SpiritualGrowthPractice[] }) {
  return (
    <section id="spiritual-growth" className="scroll-mt-28">
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Spiritual growth</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Spiritual growth: Build a life with God
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
          Spiritual growth happens through grace and cooperation. It grows through prayer,
          sacraments, repentance, Scripture, silence, spiritual discipline, and charity.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {practices.map((practice) => (
          <article key={practice.id} className="card p-5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-3xl font-semibold text-navy">{practice.title}</h3>
              <span className="season-pill">{practice.timeNeeded}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted">{practice.purpose}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">How to start</p>
            <p className="mt-1 text-sm leading-7 text-muted">{practice.howToStart}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {practice.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="season-pill">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
