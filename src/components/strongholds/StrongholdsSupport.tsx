import Link from "next/link";
import { buildStrongholdsReturnPlan, strongholdsSupport, type StrongholdsPlanCircumstance } from "@/data/strongholdsSupport";
import { StrongholdsScripture } from "./StrongholdsScripture";
import styles from "./Strongholds.module.css";

export function StrongholdsReturnPlan({ circumstances, action, fallback }: { circumstances: readonly StrongholdsPlanCircumstance[]; action: string; fallback: string }) {
  const plan = buildStrongholdsReturnPlan(circumstances, action, fallback);
  return <section className={styles.virtuePanel} aria-label="When this comes again"><h3>When this comes again</h3><p><strong>When:</strong> {plan.when}.</p><p><strong>{plan.chosen ? "My response:" : "A possible response:"}</strong> {plan.response}</p>{plan.circumstances.map(item => <p key={item.name}><strong>{item.name}:</strong> {item.plan}</p>)}<p className={styles.small}>{strongholdsSupport.planSupport}</p><p className={styles.small}>An optional intention, not a promise that temptation or distress will disappear. Only an explicit save keeps your existing choices.</p><details className={styles.disclosure}><summary className="focus-ring">Scripture for a next faithful step</summary><StrongholdsScripture reference="1 Corinthians 10:13" expandable={false} /><p className={styles.small}>This passage is not a call to endure danger or distress without help. Seek safe, practical support when needed.</p></details></section>;
}

export function StrongholdsBeginAgain() {
  return <details id="begin-again" className={styles.disclosure}><summary className="focus-ring">After a fall: begin again</summary><p>{strongholdsSupport.beginAgain}</p><p className={styles.prayer}>{strongholdsSupport.mercyPrayer}</p><p className={styles.small}>Original devotional reflection and prayer</p><StrongholdsScripture reference="Psalm 50" verseNumbers={[12]} /><p className={styles.small}>{strongholdsSupport.sacramentalBoundary}</p><p>An unwanted intrusive thought does not itself mean that you have fallen. Seek trusted pastoral or professional support when needed.</p><div className={styles.actions}><Link className="btn btn-primary focus-ring" href="/confession/examination-companion">Prepare for Confession</Link><Link className="btn btn-secondary focus-ring" href="/strongholds/help-now">Help for this moment</Link><Link className="btn btn-secondary focus-ring" href="/divine-mercy/chaplet">Pray the Divine Mercy Chaplet</Link></div></details>;
}

export function StrongholdsLordsPrayer() {
  return <details className={styles.disclosure}><summary className="focus-ring">Pray the Lord’s Prayer · Matthew 6:9–13</summary><p>The Lord’s Prayer in Matthew 6:9–13 · Douay-Rheims. The text below is the biblical wording; pray slowly, at your own pace.</p><StrongholdsScripture reference="Matthew 6:9–13" verseNumbers={[9,10,11,12,13]} expandable={false} /><p className={styles.small}>Original devotional invitation: after praying, choose one small act of obedience or charity. You do not need a particular feeling before you can choose the good.</p></details>;
}

export function StrongholdsGospelExample() {
  return <details className={styles.disclosure}><summary className="focus-ring">How Jesus answered temptation</summary><p>{strongholdsSupport.gospel}</p><StrongholdsScripture reference="Matthew 4:1–11" verseNumbers={[1,2,3,4,5,6,7,8,9,10,11]} expandable={false} /><ul className={styles.questions}><li>Is any promise in this temptation drawing me away from truth or love?</li><li>What truth from the passage can I remember?</li><li>What faithful response is possible now?</li></ul><p className={styles.small}>{strongholdsSupport.gospelBoundary}</p><div className={styles.actions}><Link className="btn btn-secondary focus-ring" href="/sin-and-temptation/resisting-temptation">Read about resisting temptation</Link><Link className="btn btn-secondary focus-ring" href="/sin-and-temptation/near-occasions-of-sin">Consider helpful boundaries</Link></div></details>;
}

export function StrongholdsTemptationReassurance() {
  return <details className={styles.disclosure}><summary className="focus-ring">An unwanted thought is not a choice</summary><p>{strongholdsSupport.reassurance}</p><StrongholdsScripture reference="Hebrews 4:15–16" verseNumbers={[15,16]} expandable={false} /><p className={styles.small}>Original devotional application, not an assessment of your guilt or the cause of a thought.</p></details>;
}
