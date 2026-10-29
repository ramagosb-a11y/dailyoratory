"use client";

import { useEffect, useRef, useState } from "react";
import { armorContemplationText } from "@/data/armorOfGod";
import styles from "./ArmorOfGod.module.css";

const standardDurations = [30, 60, 180, 300];
export function Contemplation({ durations = standardDurations, prompt }: { durations?: readonly number[]; prompt?: string }) {
  const [duration, setDuration] = useState(durations[0]);
  const [remaining, setRemaining] = useState(durations[0]);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState("");
  const deadline = useRef(0);

  useEffect(() => {
    if (!running) return;
    const tick = () => {
      const next = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000));
      setRemaining(next);
      if (next === 0) { setRunning(false); setStatus("Your time of silence is complete. Remain as long as you wish."); }
    };
    const interval = window.setInterval(tick, 250);
    document.addEventListener("visibilitychange", tick);
    return () => { window.clearInterval(interval); document.removeEventListener("visibilitychange", tick); };
  }, [running]);

  function choose(seconds: number) {
    setRunning(false); setDuration(seconds); setRemaining(seconds); setStatus("");
  }
  function toggle() {
    if (running) {
      setRemaining(Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000)));
      setRunning(false); setStatus("Silence timer paused.");
    } else {
      const seconds = remaining || duration;
      deadline.current = Date.now() + seconds * 1000;
      setRemaining(seconds); setRunning(true); setStatus("Silence timer started. You may continue at any time.");
    }
  }
  return <section className={styles.contemplation} aria-label="Optional contemplation">
    <span className={styles.eyebrow}>An optional quiet moment</span>
    <h3>{armorContemplationText.title}</h3>
    <p>{prompt || armorContemplationText.text}</p>
    <div className={styles.durationChoices} role="group" aria-label="Silence duration">
      {durations.map(seconds => <button type="button" key={seconds} aria-pressed={duration === seconds} onClick={() => choose(seconds)}>{seconds < 60 ? `${seconds} seconds` : `${seconds / 60} minute${seconds > 60 ? "s" : ""}`}</button>)}
    </div>
    <div className={styles.timerReadout} role="timer" aria-label="Time remaining" aria-live="off">{Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}</div>
    <progress max={duration} value={duration - remaining} aria-label="Silence elapsed" />
    <div className={styles.actions}><button type="button" onClick={toggle}>{running ? "Pause silence" : "Begin silence"}</button><button type="button" onClick={() => choose(duration)}>Restart timer</button></div>
    <p className={styles.small}>You may continue whenever you are ready.</p>
    <p role="status" className={styles.small}>{status}</p>
  </section>;
}
