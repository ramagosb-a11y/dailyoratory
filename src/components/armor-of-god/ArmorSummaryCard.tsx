"use client";

import { useId, useState } from "react";
import type { ArmorCardSummary } from "@/types/armorOfGod";
import { scripturePassages } from "@/data/armorOfGod";
import { ArmorSymbol } from "./ArmorArtwork";
import { ArmorScripture } from "./ArmorScripture";
import styles from "./ArmorOfGod.module.css";

export function ArmorSummaryCard({ card }: { card: ArmorCardSummary }) {
  const [message, setMessage] = useState("");
  const [fallback, setFallback] = useState(false);
  const cardId = useId();
  const passage = scripturePassages[card.scriptureReference];
  const scripture = passage ? `${card.scriptureReference} (Douay-Rheims 1899)\n${passage.text}` : card.scriptureReference;
  const shareText = [`The Armor of God · Daily Oratory`, card.title, card.armorNames.join(" · "), scripture, card.prayer, `Live the Word: ${card.dailyAction}`, "https://dailyoratory.faith/armor-of-god"].join("\n\n");

  async function share() {
    if (typeof navigator.share === "function") {
      try { await navigator.share({ title: "The Armor of God | Daily Oratory", text: shareText }); setMessage("Card shared."); return; }
      catch (error) { if (error instanceof Error && error.name === "AbortError") { setMessage("Sharing canceled."); return; } }
    }
    setFallback(true);
    setMessage("Copy the card text below to share it.");
  }
  async function copy() {
    try { await navigator.clipboard.writeText(shareText); setMessage("Card text copied."); }
    catch { setMessage("Copy is unavailable. Select and copy the card text below."); }
  }
  function print() {
    const root = document.getElementById(cardId);
    if (!root) return;
    // Clone only the allowlisted card into a layout-isolated print tree.
    document.querySelector("[data-armor-print-root]")?.remove();
    const printRoot = document.createElement("div");
    printRoot.className = styles.experience;
    printRoot.setAttribute("data-theme", "ivory");
    printRoot.setAttribute("data-armor-print-root", "true");
    const cardCopy = root.cloneNode(true) as HTMLElement;
    cardCopy.removeAttribute("id");
    printRoot.appendChild(cardCopy);
    document.body.appendChild(printRoot);
    document.body.setAttribute("data-armor-printing", "true");
    const cleanup = () => { printRoot.remove(); document.body.removeAttribute("data-armor-printing"); };
    window.addEventListener("afterprint", cleanup, { once: true });
    try { window.print(); } catch { cleanup(); setMessage("Printing is unavailable in this browser."); }
  }
  return <section className={styles.summaryWrap} aria-label={`Daily Armor Card: ${card.title}`}>
    <article className={styles.summaryCard} id={cardId}>
      <span className={styles.cardEmblem}><ArmorSymbol id="shield" /></span>
      <p className={styles.eyebrow}>Daily Oratory · A prayer for today</p>
      <h3>The Armor of God</h3>
      <h4>{card.title}</h4>
      <p className={styles.cardArmor}>{card.armorNames.join(" · ")}</p>
      <ArmorScripture reference={card.scriptureReference} compact />
      <p className={styles.prayer}>{card.prayer}</p>
      <div className={styles.cardAction}><strong>Live the Word</strong><p>{card.dailyAction}</p></div>
      <p className={styles.cardFooter}>Stand firm in Christ. Go forward in peace.<br />dailyoratory.faith/armor-of-god</p>
    </article>
    <p className={styles.small}>This card includes your selected situation. Save or share it only if you wish.</p>
    <div className={styles.actions}><button type="button" onClick={print}>Save My Card</button><button type="button" onClick={share}>Share</button></div>
    <p className={styles.small}>Save My Card opens your browser&apos;s print dialog. Choose Save as PDF or print.</p>
    {fallback && <div className={styles.shareFallback}><label htmlFor={`${cardId}-text`}>Card text</label><textarea id={`${cardId}-text`} readOnly value={shareText} rows={10} onFocus={event => event.currentTarget.select()} /><button type="button" onClick={copy}>Copy card text</button></div>}
    <p role="status" className={styles.small}>{message}</p>
  </section>;
}
