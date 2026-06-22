import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";

export function Hero() {
  return (
    <section className="liturgical-home-hero relative overflow-hidden bg-navy text-ivory">
      <Image
        src="/images/chapel-library-hero.png"
        alt="A quiet Catholic chapel library with a prayer journal and rosary"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,32,56,0.94)_0%,rgba(13,32,56,0.78)_46%,rgba(13,32,56,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--liturgical-glow)_118%,transparent),transparent_26rem)]" />
      <div className="relative mx-auto flex min-h-[min(620px,calc(100vh-5rem))] w-full max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="w-full max-w-3xl">
          <div className="liturgical-home-marker mb-6 h-12 w-px sm:mb-8 sm:h-16" aria-hidden="true" />
          <p className="liturgical-home-eyebrow text-xs font-bold uppercase tracking-[0.2em]">The Sacred Digital Sanctuary</p>
          <h1 className="font-display max-w-[9ch] text-5xl font-semibold leading-none text-ivory sm:max-w-none sm:text-7xl lg:text-display-xl">
            {brand.platformName}
          </h1>
          <p className="mt-5 max-w-[31ch] text-lg font-semibold leading-8 text-parchment sm:mt-6 sm:max-w-2xl sm:text-2xl">
            Enter the Quiet Presence of God
          </p>
          <p className="mt-6 max-w-[30ch] text-base leading-8 text-stone-soft sm:max-w-2xl">
            Daily Oratory is a sanctuary for prayer, Scripture, liturgy, silence, and spiritual formation.
          </p>
          <div className="mt-8 flex w-full max-w-[22rem] flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row">
            <Link href="/begin-in-prayer" className="btn btn-gold focus-ring w-full sm:w-auto">
              Begin in Prayer
            </Link>
            <Link href="/daily-examen" className="btn btn-outline-inverse focus-ring w-full sm:w-auto">
              End in Prayer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
