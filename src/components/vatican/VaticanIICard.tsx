import Image from "next/image";
import Link from "next/link";
import styles from "./VaticanII.module.css";

export function VaticanIICard() {
  return <section id="discover-vatican-ii" aria-labelledby="vatican-ii-card-title" className={styles.card}>
    <div className={styles.art}><Image src="/images/vatican/vatican-ii-council.webp" alt="" fill quality={85} sizes="(max-width: 767px) 100vw, 65vw" /></div>
    <div className={styles.copy}>
      <p className={styles.eyebrow}>The Second Vatican Council</p>
      <h2 id="vatican-ii-card-title">Discover<br />Vatican II</h2>
      <p className={styles.description}>Explore the council, its documents, and its place in the life of the Church.</p>
      <Link href="/vatican-ii" className={styles.button}>Explore Vatican II</Link>
      <p className={styles.footer}>History · Documents · Understanding</p>
      <p className={styles.credit}>Illustration inspired by the council</p>
    </div>
  </section>;
}
