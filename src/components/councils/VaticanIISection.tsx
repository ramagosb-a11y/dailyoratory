import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getVaticanIICouncilDocuments } from "@/lib/councils";

const documentTitles: Record<string, string> = {
  "resource-sacrosanctum-concilium": "Sacred Liturgy",
  "resource-lumen-gentium": "The Church",
  "resource-dei-verbum": "Divine Revelation",
  "resource-gaudium-et-spes": "The Church in the Modern World",
};

export function VaticanIISection() {
  const resources = getVaticanIICouncilDocuments().filter((item) => item.id !== "resource-vatican-ii");

  return (
    <section id="vatican-ii" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Vatican II"
        title="The Second Vatican Council"
        summary="Renewal, mission, liturgy, Scripture, and the Church in the modern world."
      />
      <p className="mt-7 text-sm leading-7 text-muted">
        Vatican II was the 21st and most recent ecumenical council of the Catholic Church. It addressed the Church,
        divine revelation, the sacred liturgy, the Church in the modern world, ecumenism, religious liberty, mission, and
        the vocation of all the baptized.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <article key={resource.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{documentTitles[resource.id]}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{resource.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
            <TrackedLink
              href={resource.url}
              external
              className="btn btn-secondary focus-ring mt-5 justify-center"
              eventName="council_resource_click"
              eventParams={{ resource_name: resource.title, resource_url: resource.url, page_path: "/councils", section: "vatican-ii" }}
            >
              Read document
            </TrackedLink>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <TrackedLink
          href="https://www.vatican.va/archive/hist_councils/ii_vatican_council/index.htm"
          external
          className="btn liturgical-button focus-ring justify-center"
          eventName="council_resource_click"
          eventParams={{ resource_name: "Vatican II documents", page_path: "/councils", section: "vatican-ii" }}
        >
          Read Vatican II Documents
        </TrackedLink>
        <TrackedLink
          href="https://www.usccb.org/second-vatican-council"
          external
          className="btn btn-secondary focus-ring justify-center"
          eventName="council_resource_click"
          eventParams={{ resource_name: "USCCB Vatican II Guide", page_path: "/councils", section: "vatican-ii" }}
        >
          USCCB Vatican II Guide
        </TrackedLink>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/mass" className="btn btn-secondary focus-ring justify-center">Mass</Link>
        <Link href="/tradition" className="btn btn-secondary focus-ring justify-center">Tradition</Link>
        <Link href="/catechism" className="btn btn-secondary focus-ring justify-center">Catechism</Link>
        <Link href="/formation" className="btn btn-secondary focus-ring justify-center">Formation</Link>
      </div>
    </section>
  );
}
