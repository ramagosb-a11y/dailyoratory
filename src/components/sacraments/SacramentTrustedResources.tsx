import Link from "next/link";
import { getSacramentResources } from "@/lib/sacraments";

export function SacramentTrustedResources({ sacramentId }: { sacramentId: string }) {
  const resources = getSacramentResources(sacramentId);

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Trusted resources</h2>
      <div className="mt-6 grid gap-4">
        {resources.map((resource) => {
          const external = resource.url.startsWith("http");
          return (
            <article key={resource.id} className="rounded-3xl border border-stone-200 bg-ivory/70 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
                {resource.official ? "Official Church source" : resource.sourceName}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-navy">{resource.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{resource.description}</p>
              <Link
                href={resource.url}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mt-3 inline-flex text-sm font-semibold text-navy underline-offset-4 hover:underline"
              >
                Open resource
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
