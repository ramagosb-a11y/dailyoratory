import type { ArmorId } from "@/types/armorOfGod";
import styles from "./ArmorOfGod.module.css";

export function ArmorSymbol({ id }: { id: ArmorId }) {
  return <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {id === "belt" && <><path d="M12 39q38 12 76 0v23q-38 12-76 0Z" /><rect x="38" y="40" width="24" height="24" rx="3" /><path d="M50 45v14m-5-7h18M17 48l16 3m34 0 16-3" /></>}
    {id === "breastplate" && <><path d="m33 14-17 9 7 24-4 27 31 14 31-14-4-27 7-24-17-9q-17 17-34 0Z" /><path d="M50 32v39M36 45h28M27 65l23 11 23-11M27 28l6 12m40-12-6 12" /></>}
    {id === "shoes" && <><path d="m22 15 23 5-3 33 15 15q8 5 5 13H13V66l8-12Zm35 0 23 5-3 30 14 16q7 6 3 13H69" /><path d="m23 34 19 4m-20 8 19 4M17 72h34m10-39 15 4m-16 8 15 4" /></>}
    {id === "shield" && <><path d="M50 9 83 22v27q-1 26-33 43C18 75 17 58 17 49V22Z" /><path d="m50 18 25 10v21q0 21-25 34C25 70 25 60 25 49V28Z" /><path d="M50 31v35M37 43h26" /></>}
    {id === "helmet" && <><path d="M20 56V42a30 30 0 0 1 60 0v14l-9 3-5 25-16-9-16 9-5-25Z" /><path d="M20 45h60M50 45v30M25 55l15 6m35-6-15 6M43 12V5h14v7" /></>}
    {id === "sword" && <><path d="m50 5 9 20-4 40H45l-4-40Z" /><path d="M50 18v44M30 66q20 7 40 0v7q-20 7-40 0ZM45 77v13h10V77M44 92h12" /></>}
  </svg>;
}

const positions: { id: ArmorId; x: number; y: number }[] = [
  { id: "helmet", x: 200, y: 48 }, { id: "breastplate", x: 320, y: 122 },
  { id: "sword", x: 320, y: 278 }, { id: "shoes", x: 200, y: 352 },
  { id: "belt", x: 80, y: 278 }, { id: "shield", x: 80, y: 122 },
];

export function ArmorArtwork({ selected = [], onSelect }: { selected?: readonly ArmorId[]; onSelect?: (id: ArmorId) => void }) {
  return <div className={styles.artwork} aria-hidden="true">
    <svg className={styles.artworkLines} viewBox="0 0 400 400" fill="none">
      <circle cx="200" cy="200" r="148" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 7" />
      <circle cx="200" cy="200" r="106" stroke="currentColor" strokeWidth="0.6" />
      <path d="M200 151v98m-28-67h56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M200 137v-12m0 150v-12m-63-63h-12m150 0h-12" stroke="currentColor" />
    </svg>
    {positions.map(({ id, x, y }) => onSelect
      ? <button key={id} type="button" tabIndex={-1} className={`${styles.artworkPiece} ${selected.includes(id) ? styles.artworkSelected : ""}`} style={{ left: `${x / 4}%`, top: `${y / 4}%` }} onClick={() => onSelect(id)}><ArmorSymbol id={id} /></button>
      : <span key={id} className={`${styles.artworkPiece} ${selected.includes(id) ? styles.artworkSelected : ""}`} style={{ left: `${x / 4}%`, top: `${y / 4}%` }}><ArmorSymbol id={id} /></span>)}
  </div>;
}
