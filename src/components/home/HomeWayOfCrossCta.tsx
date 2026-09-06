import Image from "next/image";
import Link from "next/link";

const stationMarkers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV"];

export function HomeWayOfCrossCta() {
  return (
    <section aria-labelledby="home-way-of-cross-heading" className="home-way-cross relative isolate overflow-hidden bg-[#070d15] text-ivory">
      <Image
        src="/images/way-of-cross/station-02-carries-cross.png"
        alt="Jesus carrying the Cross through the streets of Jerusalem"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-[38%_center] opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070d15]/10 via-[#070d15]/55 to-[#070d15]" />
      <div className="relative mx-auto grid min-h-[34rem] w-full max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.85fr)] lg:px-10 lg:py-20">
        <div className="relative hidden h-full min-h-[30rem] items-end lg:flex">
          <div className="home-way-cross-caption max-w-xs rounded-2xl border border-gold/40 bg-[#070d15]/75 p-5 backdrop-blur-sm">
            <p className="text-sm text-parchment">He walked this road for you.</p>
            <p className="font-display mt-2 text-2xl italic text-gold-soft">Walk with Him.</p>
          </div>
        </div>
        <div className="relative max-w-xl lg:justify-self-end">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.24em] text-gold-soft">
            <span className="text-4xl font-normal tracking-normal text-gold">14</span>
            <span>Stations<br />One journey of love</span>
          </div>
          <div className="mt-5 flex max-w-sm flex-wrap gap-2" aria-label="Fourteen stations">
            {stationMarkers.map((station) => (
              <span key={station} className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs ${station === "V" ? "border-gold bg-burgundy text-ivory" : "border-gold/60 bg-[#070d15]/60 text-gold-soft"}`}>
                {station}
              </span>
            ))}
          </div>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-gold">A contemplative prayer experience</p>
          <h2 id="home-way-of-cross-heading" className="font-display mt-3 text-5xl font-semibold leading-[0.95] text-ivory sm:text-6xl">
            The Way of the Cross
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-parchment sm:text-lg">
            Fourteen moments. One journey of love. Walk with Jesus from judgment to the tomb through Scripture, meditation, and prayer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/way-of-cross" className="btn btn-primary focus-ring min-h-12 justify-center">
              Begin the Way <span aria-hidden="true">→</span>
            </Link>
            <Link href="/way-of-cross" className="focus-ring inline-flex min-h-12 items-center rounded-md border border-gold/60 px-5 text-sm font-bold text-gold-soft transition hover:border-gold hover:text-gold">
              Resume at Station V <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
