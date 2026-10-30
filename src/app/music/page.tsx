import Image from "next/image";
import Link from "next/link";
import { gospelMovementsDescription, gospelMovementsPlaylists, gospelMovementsProfile } from "@/data/gospelMovements";
import { createPageMetadata } from "@/lib/metadata";
import styles from "@/components/music/MusicPage.module.css";

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
      <div className={styles.container}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Music</span></nav>
      <section aria-labelledby="music-title" className={styles.hero}>
        <div className={styles.heroPicture}>
          <Image src="/images/music/sanctuary.webp" alt="" fill quality={85} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 50vw, 650px" preload className={styles.heroImage} />
        </div>
        <div className={styles.heroBody}>
          <p className={styles.eyebrow}>Music for the Soul</p>
          <h1 id="music-title">The Gospel <span>Movements</span></h1>
          <p className={styles.description}>{gospelMovementsDescription}</p>
          <p className={styles.attribution}>@thegospelmovements</p>
          <div className={styles.heroActions}>
            <a href={gospelMovementsProfile} target="_blank" rel="noopener noreferrer" aria-label="View All Songs on Suno (opens in a new tab)" className={styles.primaryButton}>View All Songs on Suno</a>
            <a href="#playlists" className={styles.secondaryButton}>Browse Playlists</a>
          </div>
        </div>
      </section>
      <section id="playlists" aria-labelledby="playlists-title" className={styles.collection}>
        <div className={styles.collectionHeading}>
          <div>
          <p className={styles.eyebrow}>Many sounds. One inspiration.</p>
          <h2 id="playlists-title">Explore Playlists</h2>
          <p>Choose a collection and listen on Suno.</p>
          </div>
          <p className={styles.count}>{gospelMovementsPlaylists.length} playlists</p>
        </div>
        <ul className={styles.grid}>
          {gospelMovementsPlaylists.map((playlist) => (
            <li key={playlist.href} className={styles.card}>
              <a href={playlist.href} target="_blank" rel="noopener noreferrer" aria-label={`${playlist.title}: Open on Suno (opens in a new tab)`} className={styles.cardLink}>
              <div className={styles.artwork}>
              <Image src={playlist.image} alt="" width={640} height={640} quality={85} sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 64px) / 2), (max-width: 1279px) calc((100vw - 88px) / 3), 400px" className={styles.cover} />
              </div>
              <div className={styles.cardBody}>
                <h3>{playlist.title}</h3>
                <span className={styles.cardButton}>Open on Suno</span>
              </div>
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.footer}>
        <p>Music opens on Suno in a new tab.</p>
        <Link href="/#gospel-movements">Back to Daily Oratory</Link>
        </div>
      </section>
      </div>
    </div>
  );
}
