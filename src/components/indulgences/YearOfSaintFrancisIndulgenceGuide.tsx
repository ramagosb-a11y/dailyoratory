import Link from "next/link";
import { getIndulgencePrayers } from "@/lib/indulgences";
import { IndulgencePrayerCard } from "@/components/indulgences/IndulgencePrayerCard";
import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

const practicalCards = [
  "Visit a Franciscan church or shrine",
  "Spend time in pious meditation",
  "Pray for charity, concord, and peace",
  "Pray the Our Father and Creed",
  "Invoke Mary, Saint Francis, Saint Clare, and the Franciscan saints",
  "Offer sufferings or limitations spiritually if unable to travel",
] as const;

export function YearOfSaintFrancisIndulgenceGuide() {
  const prayer = getIndulgencePrayers().find((item) => item.id === "prayer-for-the-year-of-saint-francis");

  return (
    <IndulgenceSection
      id="year-of-saint-francis-2026"
      eyebrow="Special decree"
      title="2026 Year of Saint Francis Indulgence"
      summary="A special year of grace for the eighth centenary of the death of Saint Francis of Assisi."
    >
      <div className="grid gap-5">
        <article className="content-card p-6 sm:p-8">
          <p className="text-sm leading-7 text-muted">
            The Apostolic Penitentiary issued a decree for the eighth centenary of the death of Saint
            Francis of Assisi. The decree establishes a special Year of Saint Francis from January 10,
            2026 through January 10, 2027, with an attached plenary indulgence under the usual conditions.
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
            <li><span className="font-semibold text-navy">• </span>The year runs from January 10, 2026 to January 10, 2027.</li>
            <li><span className="font-semibold text-navy">• </span>It honors the eighth centenary of the death, or transitus, of Saint Francis of Assisi.</li>
            <li><span className="font-semibold text-navy">• </span>The indulgence is granted under the usual conditions: confession, Holy Communion, prayer for the Holy Father, detachment from sin, and completion of the indicated work.</li>
            <li><span className="font-semibold text-navy">• </span>The indulgence may also be applied by way of suffrage for the souls in purgatory.</li>
            <li><span className="font-semibold text-navy">• </span>It extends to all the faithful who participate by pilgrimage to a Franciscan conventual church or a place of worship connected to Saint Francis, and there pray or spend a suitable time in pious meditation.</li>
            <li><span className="font-semibold text-navy">• </span>Those unable to travel may participate spiritually, offering prayers, sufferings, or hardships to God, with the intention to fulfill the usual conditions as soon as possible.</li>
          </ul>
        </article>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {practicalCards.map((card) => (
            <article key={card} className="card p-5">
              <p className="text-sm font-semibold leading-7 text-navy">{card}</p>
            </article>
          ))}
        </div>
        {prayer ? <IndulgencePrayerCard prayer={prayer} /> : null}
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://press.vatican.va/content/salastampa/it/bollettino/pubblico/2026/01/16/0041/00081.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary focus-ring justify-center"
            >
              Read Official 2026 Vatican Decree
            </a>
            <Link href="#indulgence-builder" className="btn btn-primary focus-ring justify-center">
              Build Today&apos;s Indulgence Plan
            </Link>
            <Link href="/saints/saint-francis-assisi" className="btn btn-secondary focus-ring justify-center">
              Pray for Peace
            </Link>
          </div>
          <NotePanel title="Pastoral note">
            Confirm local Franciscan churches, events, and diocesan guidance. This page is a pastoral
            summary and does not replace the official decree.
          </NotePanel>
        </div>
      </div>
    </IndulgenceSection>
  );
}
