import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";

const currentSources = [
  { title: "Pope Leo XIV official page", href: "https://www.vatican.va/content/leo-xiv/en.html" },
  { title: "Apostolic Exhortations", href: "https://www.vatican.va/content/leo-xiv/en/apost_exhortations.html" },
  { title: "Apostolic Letters", href: "https://www.vatican.va/content/leo-xiv/en/apost_letters.index.html" },
  { title: "Messages", href: "https://www.vatican.va/content/leo-xiv/en/messages.html" },
  { title: "Speeches", href: "https://www.vatican.va/content/leo-xiv/en/speeches.html" },
  { title: "Audiences", href: "https://www.vatican.va/content/leo-xiv/en/audiences.html" },
];

const recentSources = [
  { title: "Pope Francis", href: "https://www.vatican.va/content/francesco/en.html" },
  { title: "Pope Benedict XVI", href: "https://www.vatican.va/content/benedict-xvi/en.html" },
  { title: "Saint John Paul II", href: "https://www.vatican.va/content/john-paul-ii/en.html" },
  { title: "Saint Paul VI", href: "https://www.vatican.va/content/paul-vi/en.html" },
  { title: "Saint John XXIII", href: "https://www.vatican.va/content/john-xxiii/en.html" },
];

export function PapalDocumentsLibrary() {
  return (
    <section>
      <SectionHeader
        eyebrow="Library"
        title="Papal Documents and Where to Read Them"
        summary="Do not rely on screenshots, headlines, or excerpts alone. Use the official Vatican pages whenever possible."
      />
      <div className="mt-7 grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Current Pope</p>
          <div className="mt-4 grid gap-3">
            {currentSources.map((item) => (
              <TrackedLink
                key={item.href}
                href={item.href}
                external
                className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm font-semibold text-navy transition hover:border-gold"
                eventName="pope_resource_click"
                eventParams={{ resource_name: item.title, resource_url: item.href, page_path: "/pope", section: "papal-documents-library" }}
              >
                {item.title}
              </TrackedLink>
            ))}
          </div>
        </article>
        <article className="card-parchment p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Recent Popes</p>
          <div className="mt-4 grid gap-3">
            {recentSources.map((item) => (
              <TrackedLink
                key={item.href}
                href={item.href}
                external
                className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm font-semibold text-navy transition hover:border-gold"
                eventName="pope_resource_click"
                eventParams={{ resource_name: item.title, resource_url: item.href, page_path: "/pope", section: "papal-documents-library" }}
              >
                {item.title}
              </TrackedLink>
            ))}
            <TrackedLink
              href="https://www.vatican.va/content/vatican/en/holy-father.html"
              external
              className="btn liturgical-button focus-ring mt-2 justify-center"
              eventName="pope_resource_click"
              eventParams={{ resource_name: "Holy Father Archive", page_path: "/pope", section: "papal-documents-library" }}
            >
              Visit Vatican Holy Father Archive
            </TrackedLink>
          </div>
        </article>
      </div>
    </section>
  );
}
