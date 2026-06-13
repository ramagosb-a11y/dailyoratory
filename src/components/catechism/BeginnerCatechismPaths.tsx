import { SectionHeader } from "@/components/section-header";
import { getCatechismPathways } from "@/lib/catechism";
import Link from "next/link";

export function BeginnerCatechismPaths() {
  const pathways = getCatechismPathways();

  return (
    <section>
      <SectionHeader
        eyebrow="Beginner pathways"
        title="Start Here"
        summary="Choose a starting path that fits where you are right now."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        {pathways.map((path) => (
          <article key={path.id} className="card-parchment p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{path.audience}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{path.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{path.description}</p>
            <div className="mt-5">
              <p className="text-sm font-semibold text-navy">Suggested Catechism sections</p>
              <ul className="mt-2 space-y-2 text-sm leading-7 text-muted">
                {path.startingSections.map((section) => (
                  <li key={section} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
                    {section}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">{path.reflectionPrompt}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {path.relatedLinks.map((link) => (
                <Link
                  key={`${path.id}-${link.href}`}
                  href={link.href}
                  className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy"
                >
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
