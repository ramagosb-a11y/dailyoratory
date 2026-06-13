import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getOciaGlossaryTerms } from "@/lib/ocia";

export function OciaGlossary() {
  const terms = getOciaGlossaryTerms();

  return (
    <section>
      <SectionHeader
        eyebrow="Words to know"
        title="OCIA Words You May Hear"
        summary="Short explanations of common words and phrases that often come up in parish conversations."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {terms.map((term) => (
          <article key={term.id} className="card-parchment p-5">
            <h3 className="text-lg font-semibold text-navy">{term.term}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{term.definition}</p>
            {term.relatedLinks.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {term.relatedLinks.map((link) => (
                  <Link
                    key={`${term.id}-${link.href}`}
                    href={link.href}
                    className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
