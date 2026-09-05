import Image from "next/image";
import Link from "next/link";

export function FooterCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-ivory">
      <Image
        src="/images/adoration/adoration-wide-3x1.png"
        alt="An open chapel leading toward the Eucharist in a monstrance"
        fill
        sizes="100vw"
        className="hidden object-contain opacity-90 sm:block"
      />
      <Image
        src="/images/adoration/adoration-responsive.png"
        alt="An open chapel leading toward the Eucharist in a monstrance"
        fill
        sizes="100vw"
        className="object-contain opacity-90 sm:hidden"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,38,0.96)_0%,rgba(7,21,38,0.84)_42%,rgba(7,21,38,0.28)_100%)]" />
      <div className="relative mx-auto flex min-h-[18rem] w-full max-w-7xl items-center px-5 py-10 sm:min-h-[20rem] sm:px-8 lg:aspect-[2048/704] lg:min-h-0 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Eucharistic Adoration</p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
            Come into the presence of Jesus
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-parchment sm:text-base">
            A quiet place for Eucharistic meditation, Scripture, thanksgiving, and Holy Hour prayer.
          </p>
          <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
            <Link href="/adoration/companion" className="btn btn-gold focus-ring justify-center text-center">
              Adoration Meditation
            </Link>
            <Link href="/adoration/companion?mode=holy-hour" className="btn btn-outline-inverse focus-ring justify-center text-center">
              Holy Hour Meditation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
