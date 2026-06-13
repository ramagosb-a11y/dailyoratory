import { SectionHeader } from "@/components/section-header";
import { getRelicExplorerPath } from "@/lib/relics";
import { RelicLinkRow } from "@/components/relics/shared";

export function RelicsForExplorers() {
  const steps = getRelicExplorerPath();

  return (
    <section>
      <SectionHeader
        eyebrow="Exploring Catholicism"
        title="If You Are Exploring the Catholic Faith"
        summary="Relics can seem strange at first. Begin with the Incarnation: Catholics believe God entered the material world in Jesus Christ. The body matters."
      />
      <ol className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step} className="card-parchment p-5 text-sm leading-7 text-muted">
            <span className="font-semibold text-navy">{index + 1}.</span> {step}
          </li>
        ))}
      </ol>
      <RelicLinkRow
        links={[
          { label: "Explore", href: "/explore" },
          { label: "OCIA", href: "/ocia" },
          { label: "Saints", href: "/saints" },
          { label: "Sacramentals", href: "/sacramentals" },
          { label: "Mass", href: "/mass" },
        ]}
      />
    </section>
  );
}
