import Image from "next/image";
import Link from "next/link";

export function HomeDivineMercyCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-ivory">
      <Image
        src="/images/divine-mercy/divine-mercy-home-chapel-v1.0.2.png"
        alt="A Divine Mercy image in a peaceful, sunlit chapel"
        fill
        sizes="100vw"
        className="object-cover object-[67%_center] opacity-90 sm:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,21,38,0.92)_0%,rgba(7,21,38,0.82)_54%,rgba(7,21,38,0.22)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,21,38,0.97)_0%,rgba(7,21,38,0.88)_43%,rgba(7,21,38,0.25)_100%)]" />
      <div className="relative mx-auto flex min-h-[28rem] w-full max-w-7xl items-start px-5 py-10 sm:px-8 lg:aspect-[2048/704] lg:min-h-0 lg:items-center lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Divine Mercy</p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
            Rest in the Mercy of Jesus
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-parchment sm:text-base">
            A quiet place to pray with the Divine Mercy image, reflect on Christ’s love, and entrust your life to His mercy.
          </p>
          <div className="mt-6 max-w-xl">
            <Link href="/divine-mercy/chaplet" className="btn btn-outline-inverse focus-ring justify-center text-center">
              Divine Mercy Chaplet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
