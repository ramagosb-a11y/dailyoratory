import Image from "next/image";
import Link from "next/link";

type MarianPrayerExperienceProps = {
  eyebrow: string;
  imageAlt: string;
  imagePosition: string;
  imageSrc: string;
  prayer: string;
  subtitle: string;
  title: string;
};

export function MarianPrayerExperience({
  eyebrow,
  imageAlt,
  imagePosition,
  imageSrc,
  prayer,
  subtitle,
  title,
}: MarianPrayerExperienceProps) {
  return (
    <main className="min-h-[100svh] bg-[#0D2038] px-3 py-3 text-[#FFFDF7] sm:px-6 sm:py-6 lg:px-10 lg:py-10">
      <div className="mx-auto grid w-full max-w-[1500px] overflow-hidden rounded-[2rem] border border-[#BD8A2F]/55 bg-[#08182A] shadow-[0_24px_70px_rgba(0,0,0,0.35)] lg:grid-cols-[minmax(21rem,0.82fr)_minmax(34rem,1.18fr)]">
        <section aria-label={`${title} sacred artwork`} className="relative h-[32svh] min-h-64 overflow-hidden border-b border-[#BD8A2F]/40 bg-[#08182A] lg:sticky lg:top-6 lg:h-[calc(100svh-5rem)] lg:min-h-[42rem] lg:border-b-0 lg:border-r">
          <Image alt={imageAlt} className={`object-cover ${imagePosition} lg:object-contain lg:object-center lg:p-6 xl:p-8`} fill loading="eager" sizes="(max-width: 1023px) 100vw, 44vw" src={imageSrc} unoptimized />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(5,16,31,0.72),transparent_58%)] lg:bg-[radial-gradient(circle_at_50%_35%,transparent_42%,rgba(5,16,31,0.48))]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-[1.55rem] border border-[#D6AA54]/35 lg:inset-5" />
        </section>

        <section className="relative bg-[linear-gradient(135deg,#fffdf7_0%,#f3ead8_100%)] text-[#0D2038]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-[1.55rem] border border-[#BD8A2F]/35" />
          <article className="relative mx-auto max-w-3xl px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-16 xl:px-20">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9A6A1B]">{eyebrow}</p>
              <Link href="/" className="focus-ring rounded-md px-2 py-1 text-xs font-semibold text-[#7A2533] hover:text-[#0D2038]">Exit Prayer</Link>
            </div>
            <div aria-hidden="true" className="mt-6 flex items-center gap-3 text-[#BD8A2F]"><span className="h-px flex-1 bg-[#D8CDB9]" /><span className="font-serif text-2xl">✦</span><span className="h-px flex-1 bg-[#D8CDB9]" /></div>
            <h1 className="mt-7 font-serif text-4xl font-semibold leading-[1.03] text-[#0D2038] sm:text-5xl xl:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl font-serif text-xl leading-8 text-[#6A5330] sm:text-2xl">{subtitle}</p>

            <div className="my-9 h-px bg-[#D8CDB9]" />
            <div className="grid gap-7 font-serif text-[1.3rem] leading-[1.75] text-[#172033] sm:text-[1.55rem] sm:leading-[1.8]">
              {prayer.split("\n\n").map((paragraph) => <p className="whitespace-pre-line" key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
