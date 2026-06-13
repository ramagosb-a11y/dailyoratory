import type { FormationObstacle } from "@/types/formation";
import Link from "next/link";

export function FormationObstacles({ obstacles }: { obstacles: FormationObstacle[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Gentle realism</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Common obstacles to formation
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {obstacles.map((obstacle) => (
          <article key={obstacle.id} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{obstacle.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{obstacle.encouragement}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">One next step</p>
            <p className="mt-1 text-sm leading-7 text-muted">{obstacle.nextStep}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {obstacle.relatedLinks.map((link) => (
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
