import Image from "next/image";
import Link from "next/link";
import { gospelMovementsDescription, gospelMovementsPlaylists, gospelMovementsProfile } from "@/data/gospelMovements";
import { createPageMetadata } from "@/lib/metadata";
import styles from "@/components/music/Music.module.css";

export const metadata = createPageMetadata({
  title: "The Gospel Movements | Scripture-Inspired Music",
  description: gospelMovementsDescription,
  path: "/music",
  image: "/images/music/sanctuary.webp",
  imageAlt: "Sunlight through a stained-glass window in a quiet chapel",
});

export default function MusicPage() {
  return (
    <div className={styles.page}>
      <section aria-labelledby="music-title" className={styles.hero}>
        <Image src="/images/music/sanctuary.webp" alt="" fill sizes="100vw" preload className={styles.background} />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Music</span></nav>
          <p className={styles.eyebrow}>Music for the Soul</p>
          <h1 id="music-title" className={styles.heroTitle}>The Gospel<br className="hidden sm:block" /> Movements</h1>
          <p className={styles.lightCopy}>{gospelMovementsDescription}</p>
          <p className={styles.attribution}>@thegospelmovements</p>
          <div className={styles.actions}>
            <a href={gospelMovementsProfile} target="_blank" rel="noopener noreferrer" aria-label="View All Songs on Suno (opens in a new tab)" className={styles.burgundyButton}>View All Songs on Suno <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <section aria-labelledby="playlists-title" className={styles.collection}>
        <div className={styles.collectionHeading}>
          <p className={styles.collectionEyebrow}>Many sounds. One inspiration.</p>
          <h2 id="playlists-title">Explore Playlists</h2>
          <p>Choose a collection and listen on Suno.</p>
        </div>
        <ul className={styles.grid}>
          {gospelMovementsPlaylists.map((playlist) => (
            <li key={playlist.href} className={styles.playlist}>
              <Image src={playlist.image} alt={`Cover artwork for ${playlist.title}`} width={640} height={420} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className={styles.cover} />
              <div className={styles.playlistContent}>
                <h3>{playlist.title}</h3>
                <a href={playlist.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${playlist.title} on Suno (opens in a new tab)`} className={styles.burgundyButton}>Open on Suno <span aria-hidden="true">↗</span></a>
              </div>
            </li>
          ))}
        </ul>
        <p className={styles.note}>Music opens on Suno in a new tab.</p>
        <Link href="/#gospel-movements" className={styles.backLink}>← Back to Daily Oratory</Link>
      </section>
    </div>
  );
}
