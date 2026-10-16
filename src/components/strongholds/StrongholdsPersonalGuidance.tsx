import { strongholdCounsel } from "@/data/strongholds";
import { getTriggerGuidance, struggleGuidance } from "@/data/strongholdsGuidance";
import type { StrongholdCategory } from "@/lib/strongholdsState";
import { StrongholdsScripture } from "./StrongholdsScripture";
import styles from "./Strongholds.module.css";

export function StrongholdsPersonalGuidance({ category, step = 0 }: { category: StrongholdCategory; step?: number }) {
  const guide = struggleGuidance[category];
  const counsel = strongholdCounsel[category];
  return <section className={styles.personalGuidance} aria-labelledby="struggle-guidance-heading">
    <p className={styles.eyebrow}>Guidance for this struggle</p><h2 id="struggle-guidance-heading">{counsel.label}</h2>
    <p role="status" className={styles.small}>Showing Scripture and guidance for {counsel.label.toLowerCase()}.</p>
    <p>{guide.encouragement}</p>
    <div className={styles.virtuePanel}><h3>A virtue to practice: {guide.virtue}</h3><p>{guide.virtuePractice}</p></div>
    {step === 0 ? <><StrongholdsScripture reference={counsel.reference} verseNumbers={guide.verses} /><h3>Ideas for your next choice</h3><ul className={styles.questions}>{counsel.actions.map(action => <li key={action}>{action}</li>)}</ul><p className={styles.prayer}>{counsel.prayer}</p></> : <details className={styles.disclosure}><summary className="focus-ring">Scripture for {counsel.label.toLowerCase()} · {counsel.reference}</summary><StrongholdsScripture reference={counsel.reference} verseNumbers={guide.verses} /><p className={styles.prayer}>{counsel.prayer}</p></details>}
    {step === 1 && <p>Examine one recurring claim below; examples are invitations to reflect, not statements about you.</p>}
    {step === 2 && <><h3>Discern this particular struggle</h3><ul className={styles.questions}>{guide.questions.map(question => <li key={question}>{question}</li>)}</ul></>}
    {step >= 3 && <p><strong>Carry this truth:</strong> {counsel.truth}</p>}
    {step === 5 && <p>{guide.remember}</p>}
    <p className={styles.small}>Original devotional suggestions. These selections do not determine guilt, diagnose a condition, or identify a thought’s spiritual origin.</p>
  </section>;
}

export function StrongholdsTriggerGuidance({ category, triggers, compact = false }: { category: StrongholdCategory; triggers: readonly string[]; compact?: boolean }) {
  const guidance = getTriggerGuidance(category, triggers);
  return <section className={styles.personalGuidance} aria-labelledby="trigger-guidance-heading"><p className={styles.eyebrow}>Understand what came before</p><h2 id="trigger-guidance-heading">Care for the situation, too</h2><p className={styles.small}>A selected circumstance is a clue to consider, not proof that it caused the struggle. These are optional practical suggestions alongside prayer.</p><p role="status" className={styles.small}>{guidance.length ? `Guidance for ${guidance.map(item => item.name.toLowerCase()).join(", ")}.` : "Choose any circumstances above to see guidance, or continue without selecting."}</p>
    {guidance.map(item => <article key={item.name} className={styles.triggerCard}><h3>{item.name}</h3>{!compact && <><p>{item.notice}</p><p><strong>Consider:</strong> {item.question}</p></>}<p><strong>Right now:</strong> {item.action}</p>{item.specific && <p className={styles.combinationAdvice}>{item.specific}</p>}{!compact && <p><strong>For next time:</strong> {item.plan}</p>}</article>)}
  </section>;
}
