import Image from "next/image";
import Link from "next/link";
import styles from "./HomeRosaryCta.module.css";

const rosaryImageAlt =
  "A traditional black-bead Rosary with a crucifix and Marian centerpiece resting beside a prayer book in a sunlit monastery cloister";

export function HomeRosaryCta() {
  return (
    <section
      aria-labelledby="home-rosary-heading"
      className="relative isolate overflow-hidden bg-navy text-ivory"
    >
      <Image
        src="/images/rosary/home/rosary-cloister-day-desktop-v2.webp"
        alt={rosaryImageAlt}
        fill
        sizes="100vw"
        className={`${styles.desktopImage} object-cover object-center opacity-90`}
      />
      <Image
        src="/images/rosary/home/rosary-cloister-day-mobile-v2.webp"
        alt={rosaryImageAlt}
        fill
        sizes="100vw"
        className={`${styles.mobileImage} object-cover object-center opacity-90`}
      />
      <div className={`${styles.overlay} absolute inset-0`} />
      <div className="relative mx-auto flex min-h-[18rem] w-full max-w-7xl items-center px-5 py-10 sm:min-h-[20rem] sm:px-8 lg:aspect-[2048/704] lg:min-h-0 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">The Holy Rosary</p>
          <h2
            id="home-rosary-heading"
            className="font-display mt-3 text-4xl font-semibold leading-tight text-ivory sm:text-5xl"
          >
            Pray with Mary and Jesus
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-parchment sm:text-base">
            A peaceful place to pray the Rosary, reflect on the mysteries of Christ, and grow in faithful devotion.
          </p>
          <div className="mt-6 max-w-sm">
            <Link
              href="/rosary/visual-meditation"
              className="btn btn-gold focus-ring min-h-12 w-full justify-center text-center"
            >
              Pray the Rosary
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
