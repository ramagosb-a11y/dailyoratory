"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { strongholdCounsel, strongholdsSteps, strongholdsTriggers } from "@/data/strongholds";
import { getTriggerGuidance, struggleGuidance } from "@/data/strongholdsGuidance";
import { StrongholdsPersonalGuidance, StrongholdsTriggerGuidance } from "./StrongholdsPersonalGuidance";
import { strongholdsFruits, strongholdsStones, strongholdsStepInvitations } from "@/data/strongholdsPractice";
import { strongholdsTeaching } from "@/data/strongholdsTeaching";
import { STRONGHOLDS_CORE_REFERENCE } from "@/data/strongholdsPractice";
import { saveStrongholdsEntry } from "@/lib/strongholdsHistory";
import { deleteStrongholds, moveStrongholdsStep, newStrongholdsDraft, saveStrongholds, STRONGHOLDS_PRIVACY, strongholdCategories, type StrongholdCategory } from "@/lib/strongholdsState";
import { notifyStrongholdsStorage } from "@/lib/strongholdsStorage";
import { useStrongholds } from "./StrongholdsProvider";
import { StrongholdsIcon } from "./StrongholdsIcon";
import { StrongholdsScripture } from "./StrongholdsScripture";
import { StrongholdsCoreScripture } from "./StrongholdsCoreScripture";
import styles from "./Strongholds.module.css";

export function CategoryChoices({ value, onChange }: { value: StrongholdCategory; onChange: (value: StrongholdCategory) => void }) {
  return <fieldset className={styles.fieldset}><legend>Name the struggle (optional)</legend><div className={styles.choices}>
    {strongholdCategories.map(id => <button key={id} type="button" className={`${styles.choice} focus-ring`} aria-pressed={value === id} onClick={() => onChange(id)}>{strongholdCounsel[id].label}</button>)}
  </div></fieldset>;
}
export function OptionalText({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className={styles.field}>{label}<textarea className="focus-ring" maxLength={2000} value={value} onChange={e => onChange(e.target.value)} /></label>;
}

export function StrongholdsJourney() {
  const { draft, setDraft } = useStrongholds();
  const page = strongholdsSteps[draft.step];
  const lesson = strongholdsTeaching[draft.step];
  const counsel = strongholdCounsel[draft.category];
  const personal = struggleGuidance[draft.category];
  const circumstances = getTriggerGuidance(draft.category, draft.triggers);
  const actions = [...new Set([...counsel.actions, ...circumstances.map(item => item.action)])];
  const heading = useRef<HTMLHeadingElement>(null);
  const entryId = useRef<string | null>(null);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
    // Reset after the new step commits; scrolling the previous heading in the
    // click handler can leave the next step below the page's navigation.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [draft.step, finished]);
  function patch(update: Partial<typeof draft>) { setDraft(current => ({ ...current, ...update })); }
  function move(delta: -1 | 1) {
    setMessage("");
    setDraft(current => moveStrongholdsStep(current, delta));
  }
  function save() {
    let ok = false;
    try { ok = saveStrongholds(window.localStorage, draft); } catch {}
    notifyStrongholdsStorage();
    setMessage(ok ? "Saved on this device. Only this snapshot was saved; later edits stay in memory until you save again." : "This browser could not save your reflection. Your prayer remains available here; you can continue or print it.");
  }
  function saveReflection() {
    let ok = false;
    entryId.current ??= crypto.randomUUID();
    try { ok = saveStrongholdsEntry(window.localStorage, { id: entryId.current, savedAt: new Date().toISOString(), draft }); } catch {}
    notifyStrongholdsStorage();
    setMessage(ok ? "Reflection saved to My Journey on this browser. Later edits are not saved automatically." : "This browser could not save the reflection. Storage may be unavailable, full, or contain an unsupported record. Your prayer remains here; you can print or continue without saving.");
  }
  function remove(finish = false) {
    let ok = false;
    try { ok = deleteStrongholds(window.localStorage); } catch {}
    notifyStrongholdsStorage();
    if (finish) { setDraft(newStrongholdsDraft()); setFinished(true); }
    setMessage(ok ? "Saved Strongholds journey deleted from this browser. Saved My Journey reflections and other tools are unchanged." : finish ? "Your in-memory journey has ended. Saved data could not be deleted. Try again or remove this site's stored data in browser settings." : "Saved data could not be deleted. Your current prayer is still open. Try again or remove this site's stored data in browser settings.");
  }
  if (finished) return <section className={styles.journey}><h1 tabIndex={-1} ref={heading}>Go in hope</h1><p>Your in-memory journey has ended. Return to Christ as often as you need; completing a journey is not a measure of holiness.</p><p role="status">{message}</p><div className={styles.buttons}><Link className="btn btn-primary focus-ring" href="/strongholds">Return to Strongholds</Link><Link className="btn btn-secondary focus-ring" href="/strongholds/weapons">Continue Praying</Link><button type="button" className="btn btn-secondary focus-ring" onClick={() => remove()}>Retry Deleting Saved Data</button></div></section>;
  return <section className={`${styles.journey} ${styles.journeySurface}`} aria-label="Strongholds guided prayer">
    <div className={styles.stepToolbar}><Link className="btn btn-secondary focus-ring" href="/strongholds">← Sanctuary</Link><span>Step {draft.step + 1} of 6</span><Link className="btn btn-secondary focus-ring" href="/strongholds">Pause & Exit</Link></div>
    <StrongholdsCoreScripture compact />
    <header className={styles.practiceHeader}>
    <p className={styles.eyebrow}><StrongholdsIcon />Step {draft.step + 1} · {page.name} · Writing optional</p>
    <ol className={styles.progress} aria-label="Prayer steps">{strongholdsSteps.map((step, index) => <li key={step.name} aria-current={draft.step === index ? "step" : undefined}>{index + 1}. {step.name}</li>)}</ol>
    <progress className={styles.meter} value={draft.step + 1} max={6} aria-label={`Step ${draft.step + 1} of 6: ${page.name}`} />
    <h1 ref={heading} tabIndex={-1}>{page.heading}</h1>
    <p className={styles.small}>{strongholdsStepInvitations[draft.step]}</p>
    </header>
    <details className={styles.disclosure}><summary className="focus-ring">See the six prayer movements</summary><section className={styles.fortress} aria-label="Six prayer movements"><div className={styles.fortressHeader}><strong>Captive to Christ</strong><span>{page.name}</span></div><ol className={styles.stones}>{strongholdsStones.map((stone,index) => <li key={stone} aria-current={index === draft.step ? "step" : undefined} data-complete={index < draft.step}>{stone}<small>{index < draft.step ? "Considered in prayer" : index === draft.step ? "Pause here" : `Movement ${index + 1}`}</small></li>)}</ol><p className={styles.small}>The stones symbolize patterns brought to prayer. They do not measure sin, holiness, or freedom from distress.</p></section></details>
    <figure className={styles.teachingArtwork}><Image className={styles.teachingImage} src={"/images/strongholds/" + lesson.image + ".webp"} alt={lesson.alt} width={1536} height={1024} sizes="(max-width: 640px) 100vw, 640px" /><figcaption>{lesson.caption}</figcaption></figure>
    <section className={styles.teachingLesson} aria-labelledby="strongholds-lesson-heading"><p className={styles.eyebrow}>Learn from the passage</p><h2 id="strongholds-lesson-heading">{lesson.title}</h2><StrongholdsScripture reference={STRONGHOLDS_CORE_REFERENCE} verseNumbers={lesson.verses} /><p className={styles.small}>Original devotional application</p><p>{lesson.application}</p><p><strong>Practice this now:</strong> {lesson.practice}</p></section>
    <details className={styles.disclosure}><summary className="focus-ring">Supporting Scripture · {page.reference}</summary><StrongholdsScripture reference={page.reference} /></details>
    <p className={styles.small}>Reflections, truth statements, and prayers below are original devotional applications, separate from the Scripture quotation.</p>
    <p>{page.reflection}</p>
    <ul className={styles.questions}>{page.questions.map(question => <li key={question}>{question}</li>)}</ul>
    {draft.step > 0 && <StrongholdsPersonalGuidance category={draft.category} step={draft.step} />}
    {draft.step === 0 && <>
      <CategoryChoices value={draft.category} onChange={category => { if (category !== draft.category) patch({ category, action: "", surrendered: false }); }} />
      <StrongholdsPersonalGuidance category={draft.category} />
      <fieldset className={styles.fieldset}><legend>What came before? (optional; choose any)</legend><div className={styles.choices}>{strongholdsTriggers.map(trigger => <button type="button" key={trigger} className={`${styles.choice} focus-ring`} aria-pressed={draft.triggers.includes(trigger)} onClick={() => patch({ triggers: draft.triggers.includes(trigger) ? draft.triggers.filter(t => t !== trigger) : [...draft.triggers, trigger] })}>{trigger}</button>)}</div></fieldset>
      <StrongholdsTriggerGuidance category={draft.category} triggers={draft.triggers} />
    </>}
    {draft.step === 1 && <>
      <fieldset className={styles.fieldset}><legend>A thought to examine for {counsel.label.toLowerCase()} (optional; examples are editable)</legend><div className={styles.choices}>{personal.examples.map(example => <button type="button" key={example} className={`${styles.choice} focus-ring`} aria-pressed={draft.thought === example} onClick={() => patch({ thought: example, surrendered: false })}>{example}</button>)}</div></fieldset>
      <OptionalText label="The thought in my own words (optional)" value={draft.thought} onChange={thought => patch({ thought, surrendered: false })} />
      <button type="button" className="btn btn-secondary focus-ring" onClick={() => patch({ thought: "", surrendered: false })}>Unsure / leave this blank</button>
    </>}
    {draft.step === 2 && <fieldset className={styles.fieldset}><legend>What fruits do I notice? (optional; choose any)</legend><div className={styles.choices}>{strongholdsFruits.map(fruit => <button key={fruit} type="button" className={`${styles.choice} focus-ring`} aria-pressed={draft.fruits.includes(fruit)} onClick={() => patch({ fruits: draft.fruits.includes(fruit) ? draft.fruits.filter(value => value !== fruit) : [...draft.fruits,fruit] })}>{fruit}</button>)}</div><p className={styles.small}>Observe the direction of your choices over time. Feelings alone do not establish consolation, desolation, or the origin of a thought.</p><div className={styles.actions}><Link className="btn btn-secondary focus-ring" href="/strongholds/discernment">Read the discernment guide</Link></div></fieldset>}
    {draft.step === 3 && <div className={styles.card}>
      <h2>Before Christ</h2><p><strong>The thought I am examining:</strong> {draft.thought || "A thought I am holding silently, or have not yet named."}</p>
      <p><strong>Scripture reference:</strong> {counsel.reference}</p>
      <StrongholdsScripture reference={counsel.reference} />
      <p><strong>A truth to remember:</strong> {counsel.truth}</p><p className={styles.small}>Original devotional application for reflection alongside this Scripture reference; not a quotation.</p>
      <OptionalText label="My prayerful response (optional)" value={draft.response} onChange={response => patch({ response })} />
      <button type="button" className="btn btn-primary focus-ring" onClick={() => patch({ surrendered: true })}>Bring This Thought to Christ</button>
      <p role="status" className={styles.notice}>{draft.surrendered ? "You have turned toward Christ in prayer. Remain with Him at your own pace." : ""}</p>
      <p className={styles.small}>This symbolizes turning toward Christ. It does not guarantee that temptation or distress disappears, and it does not represent absolution.</p>
    </div>}
    {draft.step === 4 && <>
      {circumstances.length > 0 && <StrongholdsTriggerGuidance category={draft.category} triggers={draft.triggers} compact />}
      <fieldset className={styles.fieldset}><legend>One practical response for this struggle or circumstance (optional)</legend><div className={styles.choices}>{actions.map(action => <button type="button" key={action} className={`${styles.choice} focus-ring`} aria-pressed={draft.action === action} onClick={() => patch({ action: draft.action === action ? "" : action })}>{action}</button>)}</div></fieldset>
      <OptionalText label="My resolution (optional; choose above or write my own)" value={draft.action} onChange={action => patch({ action })} />
      <p>Forgiveness does not require excusing harm or abandoning appropriate boundaries.</p>
      <p>For sacramental guidance, speak with a priest and visit the existing guides.</p><div className={styles.actions}><Link className="btn btn-secondary focus-ring" href="/confession">Confession guide</Link><Link className="btn btn-secondary focus-ring" href="/sacraments">Sacramental resources</Link></div>
    </>}
    {draft.step !== 1 && draft.step !== 3 && draft.step !== 4 && draft.step !== 5 && <OptionalText label="My reflection (optional)" value={draft.notes[draft.step]} onChange={note => patch({ notes: draft.notes.map((value, i) => i === draft.step ? note : value) })} />}
    {draft.step === 5 && <article className={`${styles.card} ${styles.summary}`} aria-label="Prayer summary">
      <p className={styles.eyebrow}>Strongholds · personal prayer summary</p><h2>One truth, one next step</h2>
      <dl><dt>Experience identified</dt><dd>{counsel.label}</dd><dt>Thought examined</dt><dd>{draft.thought || "Held silently / not yet named"}</dd><dt>Scripture reference</dt><dd>{counsel.reference}</dd><dt>Truth to remember</dt><dd>{counsel.truth}</dd><dt>Practical action</dt><dd>{draft.action || "Carry a quiet intention to respond in love."}</dd>{draft.response && <><dt>My prayerful response</dt><dd>{draft.response}</dd></>}</dl>
      <h3>Closing prayer</h3><p className={styles.prayer}>{page.prayer}</p><p>God’s grace invites a new beginning. Completing this journey is not a measure of holiness.</p>
      <h3>My practice of virtue</h3><p>{personal.virtue}: {personal.virtuePractice}</p><p>{personal.remember}</p>
      {circumstances.length > 0 && <><h3>What came before, and a plan</h3><ul>{circumstances.map(item => <li key={item.name}><strong>{item.name}:</strong> {item.plan}</li>)}</ul></>}
      <StrongholdsScripture reference={counsel.reference} expandable={false} />
      <p className={styles.small}>Scripture: public-domain Douay-Rheims, American Edition of 1899. Reflections and prayers are original devotional applications.</p>
    </article>}
    <p><strong>A small practice:</strong> {page.action}</p>
    {draft.step !== 5 && <div className={styles.prayer}><p>{page.prayer}</p></div>}
    <details className={styles.disclosure}><summary className="focus-ring">Go a little deeper</summary><p>{page.deeper}</p></details>
    <div className={styles.buttons}>
      {draft.step === 0 ? <Link className="btn btn-secondary focus-ring" href="/strongholds">Back to Strongholds</Link> : <button type="button" className="btn btn-secondary focus-ring" onClick={() => move(-1)}>Back</button>}
      {draft.step < 5 && <button type="button" className="btn btn-primary focus-ring" onClick={() => move(1)}>Continue</button>}
      {draft.step === 5 && <><button type="button" className="btn btn-primary focus-ring" onClick={saveReflection}>Save Reflection to My Journey</button><button type="button" className="btn btn-secondary focus-ring" onClick={() => window.print()}>Print Summary</button><button type="button" className="btn btn-secondary focus-ring" onClick={() => remove(true)}>Finish Without Saving</button><Link className="btn btn-secondary focus-ring" href="/strongholds/weapons">Continue Praying</Link></>}
    </div>
    <details className={styles.disclosure} open={draft.step === 5 ? true : undefined}><summary className="focus-ring">Save or delete on this device</summary><p>{STRONGHOLDS_PRIVACY}</p><p>Saving is optional. Each press saves one snapshot, replacing any previous Strongholds snapshot. Later edits are not automatically saved. Finish Without Saving clears this journey and any saved journey snapshot. Previously saved My Journey reflections remain until you delete them in My Journey or Settings. Printed pages may be visible to others.</p><div className={styles.buttons}><button type="button" className="btn btn-primary focus-ring" onClick={save}>Save on This Device</button><button type="button" className="btn btn-secondary focus-ring" onClick={() => remove()}>Delete Saved Journey</button></div></details>
    <p role="status" className={styles.notice}>{message}</p>
  </section>;
}
