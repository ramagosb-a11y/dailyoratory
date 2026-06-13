import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getOciaAudiencePaths } from "@/lib/ocia";

export function OciaDifferentPaths() {
  const paths = getOciaAudiencePaths();

  return (
    <section>
      <SectionHeader
        eyebrow="Different paths"
        title="Your Path May Look Different"
        summary="Not everyone in OCIA has the same starting point. A parish priest, deacon, or OCIA coordinator can help clarify your path."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        {paths.map((path) => (
          <article key={path.id} className="card-parchment p-6">
            <h3 className="font-display text-3xl font-semibold text-navy">{path.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{path.description}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Likely path:</span> {path.likelyPath}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">{path.cautionNote}</p>
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
      <div className="card-parchment mt-6 p-5">
        <p className="text-sm leading-7 text-muted">
          This page cannot determine your exact path. A parish priest, deacon, or OCIA coordinator
          can help.
        </p>
      </div>
    </section>
  );
}
