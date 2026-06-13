import Link from "next/link";
import { IndulgenceSection, ExternalSourceLink, NotePanel } from "@/components/indulgences/helpers";

const jubileePaths = [
  "Pilgrimage to a Jubilee site",
  "Prayerful visit to a sacred place",
  "Eucharistic adoration or meditation",
  "Works of mercy and charity",
  "Acts of penance",
  "Participation in spiritual formation or mission-related activities where applicable",
  "Offering suffering or hardship in union with Christ, according to the decree",
] as const;

export function JubileeIndulgenceGuide() {
  return (
    <IndulgenceSection
      id="jubilee-2025"
      eyebrow="Special year of grace"
      title="2025 Jubilee: Pilgrims of Hope"
      summary="The Holy See has issued a decree for the granting of indulgences during the Ordinary Jubilee Year 2025."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="content-card p-6 sm:p-8">
          <p className="text-sm leading-7 text-muted">
            The Jubilee indulgence is summarized through pilgrimage, sacred visits, Eucharistic adoration,
            works of mercy, acts of penance, and other paths named by the decree.
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
            {jubileePaths.map((item) => (
              <li key={item}>
                <span className="font-semibold text-navy">• </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-muted">
            Always confirm local Jubilee churches, diocesan norms, and official guidance from your diocese.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2024/05/13/240513f.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary focus-ring justify-center"
            >
              Read Official Vatican Decree
            </a>
            <a
              href="https://www.iubilaeum2025.va/en/notizie/comunicati/2024/giubileo-norme-ottenere-indulgenza-plenaria.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary focus-ring justify-center"
            >
              View Jubilee 2025 Site
            </a>
            <Link href="#indulgence-builder" className="btn btn-primary focus-ring justify-center">
              Build Today&apos;s Indulgence Plan
            </Link>
          </div>
        </article>
        <NotePanel title="Official sources">
          For authoritative details, begin with the{" "}
          <ExternalSourceLink
            href="https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2024/05/13/240513f.html"
            label="Apostolic Penitentiary decree"
          />{" "}
          and the{" "}
          <ExternalSourceLink
            href="https://www.iubilaeum2025.va/en/notizie/comunicati/2024/giubileo-norme-ottenere-indulgenza-plenaria.html"
            label="official Jubilee site"
          />
          .
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
