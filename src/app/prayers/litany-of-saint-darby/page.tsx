import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

const pageMetadata = createPageMetadata({
  title: "Litany of Saint Darby | Personal Devotional Prayer | Daily Oratory",
  description: "A personal devotional litany shared in friendship and prayer.",
  path: "/prayers/litany-of-saint-darby",
});

export const metadata: Metadata = {
  ...pageMetadata,
  robots: { index: false, follow: false },
};

type Petition = {
  invocation: string;
  response: string;
};

type PrayerSection = {
  title: string;
  petitions: Petition[];
};

const prayerSections: PrayerSection[] = [
  {
    title: "Opening Invocation",
    petitions: [
      { invocation: "Lord, have mercy;", response: "Lord, have mercy" },
      { invocation: "Christ, have mercy;", response: "Christ, have mercy" },
      { invocation: "Lord, Have mercy;", response: "Lord, have mercy" },
      { invocation: "Christ, hear us;", response: "Christ, hear us" },
      { invocation: "Christ, graciously hear us;", response: "Christ, graciously hear us" },
      { invocation: "Most Sacred Heart of Jesus,", response: "have mercy on us" },
      { invocation: "Most Sacred Heart of Jesus,", response: "I trust in you" },
    ],
  },
  {
    title: "Our Lady",
    petitions: [
      { invocation: "Holy Mary, Mother of God,", response: "pray for us" },
      { invocation: "Our Lady of Prompt Succor,", response: "hasten to help us!" },
      { invocation: "Holy Mary of Guadalupe,", response: "pray for us" },
      { invocation: "Our Lady, Queen of Peace,", response: "pray for us" },
      { invocation: "Our Lady, Star of the Sea,", response: "pray for us" },
      { invocation: "Our Lady of the Holy Rosary,", response: "pray for us" },
      { invocation: "Our Lady of the Assumption,", response: "pray for us" },
      { invocation: "Our Lady of Perpetual Help,", response: "pray for us" },
      { invocation: "Our Lady of Lourdes,", response: "pray for us" },
      { invocation: "Our Lady of Fatima,", response: "pray for us" },
    ],
  },
  {
    title: "Saint Joseph",
    petitions: [
      { invocation: "St. Joseph Most Just,", response: "pray for us" },
      { invocation: "St. Joseph Light of the Patriarchs,", response: "pray for us" },
      { invocation: "St. Joseph Head of the Holy Family,", response: "pray for us" },
      { invocation: "St. Joseph Glory of the family life,", response: "pray for us" },
      { invocation: "St. Joseph Guardian of virgins,", response: "pray for us" },
      { invocation: "St. Joseph Pillar of families,", response: "pray for us" },
      { invocation: "St. Joseph Model of workers,", response: "pray for us" },
      { invocation: "St. Joseph Terror of the demons,", response: "pray for us" },
    ],
  },
  {
    title: "The Angels",
    petitions: [
      { invocation: "St. Michael, Gabriel, Raphael the Archangels,", response: "pray for us" },
      { invocation: "Holy Guardian Angels,", response: "pray for us" },
    ],
  },
  {
    title: "Saints of Faith and Service",
    petitions: [
      { invocation: "St Louis, King of France,", response: "pray for us" },
      { invocation: "St Charles Lwanga,", response: "pray for us" },
      { invocation: "St John Bosco,", response: "pray for us" },
      { invocation: "St. Benedict of Nursia,", response: "pray for us" },
      { invocation: "St. Francis of Assisi,", response: "pray for us" },
      { invocation: "St. Clare,", response: "pray for us" },
      { invocation: "St. Francis de Sales,", response: "pray for us" },
      { invocation: "St. Ignatius of Loyola,", response: "pray for us" },
      { invocation: "St. Anthony of Padua,", response: "pray for us" },
      { invocation: "St Frances of Rome,", response: "pray for us" },
      { invocation: "Pope St. Pius X,", response: "pray for us" },
      { invocation: "Cardinal Merry del Val,", response: "pray for us" },
      { invocation: "Pope Pius XI,", response: "pray for us" },
      { invocation: "Pope Pius XII,", response: "pray for us" },
      { invocation: "Ven. Augustus Tolton,", response: "pray for us" },
    ],
  },
  {
    title: "Saints of Wisdom and Charity",
    petitions: [
      { invocation: "St. Martin de Porres,", response: "pray for us" },
      { invocation: "St Juan Diego,", response: "pray for us" },
      { invocation: "St. Rose of Lima,", response: "pray for us" },
      { invocation: "St. Francis Xavier Seelos,", response: "pray for us" },
      { invocation: "St Thomas Aquinas,", response: "pray for us" },
      { invocation: "St Albert Magnus,", response: "pray for us" },
      { invocation: "St. Augustine of Hippo,", response: "pray for us" },
      { invocation: "St. Monica,", response: "pray for us" },
      { invocation: "St. John Chrysostom,", response: "pray for us" },
      { invocation: "St. Ambrose,", response: "pray for us" },
      { invocation: "St. Andre Bessette,", response: "pray for us" },
      { invocation: "St. Louis and Zeile Martin,", response: "pray for us" },
      { invocation: "St. Thérèse of Lisieux,", response: "pray for us" },
    ],
  },
  {
    title: "Saints of Courage and Hope",
    petitions: [
      { invocation: "St. Elizabeth of Portugal,", response: "pray for us" },
      { invocation: "St. Dymphna,", response: "pray for us" },
      { invocation: "Pope St John Paul II,", response: "pray for us" },
      { invocation: "St. Padre Pio,", response: "pray for us" },
      { invocation: "St. Jean Vianney,", response: "pray for us" },
      { invocation: "St Mother Teresa,", response: "pray for us" },
      { invocation: "St. Pier Giorgio Frassati,", response: "pray for us" },
      { invocation: "Blessed Fr Michael McGivney,", response: "pray for us" },
      { invocation: "St. Carlo Acutis,", response: "pray for us" },
      { invocation: "St. Bartolo Longo,", response: "pray for us" },
      { invocation: "Emperor Blessed Karl of Austria,", response: "pray for us" },
    ],
  },
];

export default function LitanyOfSaintDarbyPage() {
  return (
    <div className="paper-texture min-h-screen">
      <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Prayer Library", href: "/prayers" }, { label: "Litany of Saint Darby" }]} />

        <header className="mt-8 overflow-hidden rounded-[2rem] border border-gold/45 bg-ivory shadow-[0_20px_55px_rgba(28,43,67,0.12)]">
          <div className="grid items-center gap-8 px-6 py-8 sm:px-10 sm:py-12 md:grid-cols-[minmax(0,1fr)_18rem]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-burgundy">A personal devotional prayer</p>
              <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">Litany of Saint Darby</h1>
              <p className="daily-readable-muted mt-5 max-w-2xl text-lg leading-8 text-muted">A prayer of intercession, friendship, and confidence in the communion of saints.</p>
              <div className="mt-7 border-l-2 border-gold/70 pl-5">
                <p className="daily-readable text-sm leading-7 text-muted">Shared as a personal devotional litany for a friend. This is not an official litany of the Church, and the title is not a statement of canonization.</p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[17rem]">
              <div className="rounded-[1.45rem] bg-[linear-gradient(135deg,#3e240e,#d0a13c,#5d3512)] p-[0.38rem] shadow-[0_16px_32px_rgba(47,31,13,0.28)]">
                <div className="overflow-hidden rounded-[1.12rem] border-2 border-[#e7c879] bg-[#151d2b]">
                  <Image
                    src="/images/personal-devotions/saint-darby-devotional-portrait.png"
                    alt="Personal devotional portrait for the Litany of Saint Darby"
                    width={1024}
                    height={1365}
                    priority
                    className="aspect-[3/4] h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-10 rounded-[2rem] border border-stone bg-ivory/90 p-6 shadow-sm sm:p-9">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-burgundy">Pray slowly</p>
            <h2 className="font-display mt-3 text-center text-4xl font-semibold text-navy">In the Presence of God</h2>
            <p className="daily-readable-muted mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-muted">If praying alone, pray both the invocation and the response. Pause whenever a name or petition draws your heart into prayer.</p>

            <div className="mt-10 space-y-12">
              {prayerSections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-burgundy">{section.title}</h3>
                  <div className="mt-5 divide-y divide-stone/70 border-y border-stone/70">
                    {section.petitions.map((petition) => (
                      <div key={`${petition.invocation}-${petition.response}`} className="grid gap-1 px-2 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(11rem,0.7fr)] sm:gap-8 sm:px-4">
                        <p className="daily-readable text-lg leading-8 text-navy">{petition.invocation}</p>
                        <p className="daily-readable border-l border-gold/45 pl-4 text-lg italic leading-8 text-muted sm:border-l-0 sm:pl-0 sm:text-right">{petition.response}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10 flex justify-center">
          <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center px-6">Return to Prayer Library</Link>
        </div>
      </main>
    </div>
  );
}
