"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { strongholdCounsel } from "@/data/strongholds";
import { struggleGuidance } from "@/data/strongholdsGuidance";
import { StrongholdsScripture } from "./StrongholdsScripture";
import type { StrongholdCategory } from "@/lib/strongholdsState";
import { CategoryChoices } from "./StrongholdsJourney";
import { StrongholdsIcon } from "./StrongholdsIcon";
import styles from "./Strongholds.module.css";

const headings = ["Pause. Turn toward Christ.","Name the struggle","Step away when possible","Pray briefly","Receive a word of Scripture","Choose one small action"];
export function StrongholdsHelp() {
  const [step,setStep] = useState(0);
  const [category, setCategory] = useState<StrongholdCategory>("unsure");
  const [action, setAction] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const counsel = strongholdCounsel[category];
  useEffect(() => { heading.current?.focus({preventScroll:true}); window.scrollTo({top:0,left:0,behavior:"instant"}); },[step]);
  return <section className={`${styles.journey} ${styles.helpExperience}`}>
    <div className={styles.stepToolbar}><span>Step {step + 1} of 6</span><Link href="/strongholds" className="btn btn-secondary focus-ring">Close help</Link></div>
    <header className={styles.practiceHeader}><p className={styles.eyebrow}>A quiet moment · no writing required</p><h1>Help Me Right Now</h1><progress className={styles.meter} value={step + 1} max={6} aria-label={`Help step ${step + 1} of 6: ${headings[step]}`} /></header>
    <span className={styles.helpEmblem}><StrongholdsIcon name={step === 3 ? "prayer" : step === 4 ? "book" : "heart"} /></span>
    <div className={styles.helpContent}><h2 ref={heading} tabIndex={-1}>{headings[step]}</h2>
      {step === 0 && <><p>Notice where you are. Give yourself a moment before responding. You may stay here as long as you need; there is no countdown.</p><p>Anxiety, unwanted thoughts, and emotional distress are not automatically temptation or sin. You do not need to judge the thought immediately.</p><p className={styles.prayer}>Lord Jesus, help me pause and turn toward You.</p><p className={styles.small}>Original devotional prayer · draft</p></>}
      {step === 1 && <><p>Unsure is enough. Choose a word that helps describe the experience without judging yourself.</p><CategoryChoices value={category} onChange={value => { setCategory(value); setAction(""); }} /></>}
      {step === 2 && <><p>Put the device aside or move away from a trigger if it is safe. Make room for a calmer, more responsible choice.</p><div className={styles.card}><p>Take one safe step: leave the conversation briefly, close the digital content, or contact a trusted person.</p></div><p>If you are in danger, seek safety and immediate local help. You do not need to stay in harm to persevere in prayer.</p></>}
      {step === 3 && <><p>Pray aloud or silently, without pressure to feel differently.</p><p className={styles.prayer}>{counsel.prayer}</p><p className={styles.small}>Original devotional prayer · draft</p></>}
      {step === 4 && <><StrongholdsScripture reference="2 Corinthians 10:3–6" verseNumbers={[5]} /><p className={styles.small}>Original devotional application: bring this thought to Christ in prayer, then choose one safe, loving response. You do not have to force the thought to disappear.</p><p>For {counsel.label.toLowerCase()}:</p><StrongholdsScripture reference={counsel.reference} verseNumbers={struggleGuidance[category].verses} /><div className={styles.virtuePanel}><h3>A virtue to practice: {struggleGuidance[category].virtue}</h3><p>{struggleGuidance[category].virtuePractice}</p></div><p>{struggleGuidance[category].encouragement}</p><p className={styles.small}>Original devotional suggestions · draft</p></>}
      {step === 5 && <><p>Choose a safe, manageable action, or carry an intention silently. Your next faithful response can be small.</p><fieldset className={styles.fieldset}><legend>A practical response (optional)</legend><div className={styles.choices}>{counsel.actions.map(item => <button key={item} type="button" className={`${styles.choice} focus-ring`} aria-pressed={action === item} onClick={() => setAction(action === item ? "" : item)}>{item}</button>)}</div></fieldset><p role="status">{action ? `A next step: ${action}` : "You can continue without making a selection."}</p><p>Return to Christ with hope. Finishing these steps is not a measure of holiness or a guarantee that distress disappears.</p><div className={styles.actions}><Link className="btn btn-secondary focus-ring" href="/strongholds/journey">Explore deeper: six-step guided prayer <span aria-hidden="true">→</span></Link></div></>}
    </div>
    <aside className={styles.supportNote}>Seek trusted pastoral or professional support when needed, especially if distress persists. Intrusive thoughts and mental-health symptoms are not spiritual failure. If you are in immediate danger, contact local emergency services.</aside>
    <div className={styles.buttons}>{step > 0 && <button className="btn btn-secondary focus-ring" onClick={() => setStep(current => current - 1)}>Back</button>}{step < 5 ? <button className="btn btn-primary focus-ring" onClick={() => setStep(current => current + 1)}>Continue</button> : <Link className="btn btn-primary focus-ring" href="/strongholds">Return in Peace</Link>}</div>
    <p className={styles.small}>Your in-memory guided journey is kept while visiting this help page. Help selections are not saved. Forgiveness does not require excusing harm or giving up appropriate boundaries.</p>
  </section>;
}
