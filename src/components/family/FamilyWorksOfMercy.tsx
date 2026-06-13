import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { familyWorksOfMercy } from "@/data/familyPage";

export function FamilyWorksOfMercy() {
  return (
    <section>
      <SectionHeader
        eyebrow="Mercy"
        title="Family Works of Mercy"
        summary="The domestic church opens outward. Love at home becomes service beyond the home."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {familyWorksOfMercy.map((item) => (
          <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
            {item}
          </article>
        ))}
      </div>
      <Link href="/pathways/works-of-mercy-and-service" className="btn btn-secondary focus-ring mt-6 justify-center">
        Explore Works of Mercy
      </Link>
    </section>
  );
}
