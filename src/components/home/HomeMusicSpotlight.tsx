import Image from "next/image";
import Link from "next/link";
import { gospelMovementsDescription, gospelMovementsProfile } from "@/data/gospelMovements";
import styles from "@/components/music/Music.module.css";

export function HomeMusicSpotlight() {
  return (
    <section id="gospel-movements" aria-labelledby="home-music-title" className="mx-auto mt-12 w-full max-w-7xl scroll-mt-28 px-5 sm:px-8 lg:px-10">
      <div className={styles.spotlight}>
        <Image src="/images/music/gospel-in-motion.webp" alt="" fill sizes="(max-width: 1280px) 100vw, 1280px" className={styles.background} />
        <div className={styles.cardShade} />
        <div className={styles.spotlightContent}>
          <p className={styles.eyebrow}>Music for the Soul</p>
          <h2 id="home-music-title" className={styles.cardTitle}>The Gospel <span>Movements</span></h2>
          <p className={styles.lightCopy}>{gospelMovementsDescription}</p>
          <div className={styles.actions}>
            <a href={gospelMovementsProfile} target="_blank" rel="noopener noreferrer" aria-label="View All Songs on Suno (opens in a new tab)" className={styles.goldButton}>View All Songs on Suno</a>
            <Link href="/music" className={styles.outlineButton}>Explore Playlists</Link>
          </div>
          <p className={styles.attribution}>@thegospelmovements</p>
        </div>
      </div>
    </section>
  );
}
