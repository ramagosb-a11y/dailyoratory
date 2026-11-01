import Image from "next/image";
import Link from "next/link";
import styles from "./VaticanII.module.css";
import theme from "./VaticanICard.module.css";

export function VaticanICard() {
  return <section id="discover-vatican-i" aria-labelledby="vatican-i-card-title" className={`${styles.card} ${theme.card}`}>
    <div className={`${styles.art} ${theme.art}`}><Image src="/images/vatican/vatican-i-council.webp" alt="" fill quality={85} sizes="(max-width: 767px) 100vw, 65vw" /></div>
    <div className={`${styles.copy} ${theme.copy}`}>
      <p className={styles.eyebrow}>The First Vatican Council</p>
      <h2 id="vatican-i-card-title">Discover<br />Vatican I</h2>
      <p className={styles.description}>Explore the council, its documents, and its place in the life of the Church.</p>
      <Link href="/vatican-i" className={styles.button}>Explore Vatican I</Link>
      <p className={styles.footer}>History · Faith · Understanding</p>
      <p className={styles.credit}>Illustration inspired by the council</p>
    </div>
  </section>;
}
