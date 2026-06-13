import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";

const compendiumUrl =
  "https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_en.html";

export function CompendiumSection() {
  return (
    <section>
      <SectionHeader
        eyebrow="Compendium"
        title="The Compendium: A Shorter Guide"
        summary="The Compendium summarizes the Catechism in a shorter question-and-answer format. It is useful for beginners, families, catechists, and quick review."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          Use the Compendium when you want a concise overview, and the full Catechism when you want
          deeper explanation.
        </p>
        <TrackedLink
          href={compendiumUrl}
          external
          className="btn btn-secondary focus-ring mt-5"
          eventName="catechism_resource_click"
          eventParams={{
            resource_name: "Vatican Compendium",
            resource_url: compendiumUrl,
            section: "compendium",
            page_path: "/catechism",
          }}
        >
          Read the Compendium
        </TrackedLink>
      </div>
    </section>
  );
}
