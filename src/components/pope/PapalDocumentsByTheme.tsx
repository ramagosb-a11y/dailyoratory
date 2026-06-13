import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getPapalDocuments, getPapalThemes } from "@/lib/pope";

export function PapalDocumentsByTheme() {
  const themes = getPapalThemes();
  const documents = getPapalDocuments();

  return (
    <section>
      <SectionHeader eyebrow="Themes" title="Find a Papal Document by Theme" />
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {themes.map((theme) => {
          const themeDocuments = documents.filter((document) => theme.documentIds.includes(document.id));
          return (
            <article key={theme.id} className="card-parchment p-5">
              <h3 className="font-display text-2xl font-semibold text-navy">{theme.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{theme.description}</p>
              <div className="mt-4 space-y-2">
                {themeDocuments.map((document) => (
                  <TrackedLink
                    key={document.id}
                    href={document.officialUrl}
                    external
                    className="block rounded-md border border-stone bg-ivory px-4 py-3 text-sm font-semibold text-navy transition hover:border-gold"
                    eventName="papal_document_click"
                    eventParams={{ document_title: document.title, page_path: "/pope", section: "papal-themes" }}
                  >
                    {document.title}
                  </TrackedLink>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
