import Image from "next/image";
import Link from "next/link";
import { growInFaithSection } from "@/data/homepageSections";
import { HomeSectionHeader } from "@/components/home/HomeSectionHeader";

const artwork: Record<string, { src: string; alt: string }> = {
  "faith-bible": { src: "/images/home/grow-faith-bible.webp", alt: "Illustration of an open Bible in a warmly lit library" },
  "faith-tradition": { src: "/images/home/grow-faith-tradition.webp", alt: "Illustration of a basilica with a cross above the apse and a manuscript on a lectern" },
  "faith-church-fathers": { src: "/images/home/grow-faith-church-fathers.webp", alt: "Illustrative scene of early Christian teachers discussing manuscripts" },
  "faith-catechism": { src: "/images/home/grow-faith-catechism.webp", alt: "Illustration of a navy study book with a gold cross on a wooden desk" },
};

export function GrowInFaithSection() {
  return (
    <section id="grow-in-faith" className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-14 sm:px-8 lg:px-10">
      <HomeSectionHeader title={growInFaithSection.title} />
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {growInFaithSection.cards.map((card) => {
          const image = artwork[card.id];
          return (
            <article key={card.id} className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-stone/80 bg-ivory shadow-[0_10px_30px_rgba(13,32,56,0.06)] transition-shadow duration-200 hover:shadow-[0_16px_36px_rgba(13,32,56,0.11)]">
              {image ? <Image src={image.src} alt={image.alt} width={1672} height={941} quality={85} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) calc(50vw - 44px), 282px" className="aspect-video w-full border-b border-stone/60 object-cover" /> : null}
              <div className="flex flex-1 flex-col p-5 sm:p-6 xl:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{card.category}</p>
                <h3 className="font-display mt-3 text-2xl font-semibold leading-tight text-navy">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">{card.description}</p>
                <Link href={card.href} className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center rounded-xl border border-navy bg-navy px-4 py-3 text-center text-sm font-semibold leading-6 text-ivory shadow-sm transition-colors hover:border-[#244458] hover:bg-[#244458]">
                  {card.cta}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
