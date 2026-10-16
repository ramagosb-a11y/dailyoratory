"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { strongholdsDiscernmentRules, strongholdsDiscernmentSuggestion, type StrongholdsAtmosphere, type StrongholdsDirection, type StrongholdsRuleFilter } from "@/data/strongholdsFormation";
import styles from "./Strongholds.module.css";
import formation from "./Formation.module.css";

const filters: readonly { id: StrongholdsRuleFilter; label: string }[] = [{ id: "all", label: "All rules" }, { id: "desolation", label: "During desolation" }, { id: "consolation", label: "During consolation" }];

export function StrongholdsDiscernment() {
  const [atmosphere, setAtmosphere] = useState<StrongholdsAtmosphere | null>(null);
  const [direction, setDirection] = useState<StrongholdsDirection | null>(null);
  const [suggestion, setSuggestion] = useState<ReturnType<typeof strongholdsDiscernmentSuggestion> | null>(null);
  const [filter, setFilter] = useState<StrongholdsRuleFilter>("all");
  const result = useRef<HTMLElement>(null);
  useEffect(() => { if (suggestion) result.current?.focus(); }, [suggestion]);
  const rules = strongholdsDiscernmentRules.filter(rule => filter === "all" || rule.focus === filter);
  return <div className={formation.root}>
    <header><p className={styles.eyebrow}>Attend to the direction</p><h1>Discernment</h1><p className={formation.intro}>Look at where a thought leads your choices. These prompts offer educational suggestions; they cannot diagnose consolation, desolation, guilt, or a thought’s supernatural origin.</p></header>
    <section className={styles.panel} aria-labelledby="movements-heading"><h2 id="movements-heading">Notice the movement</h2><p>Consolation is more than a pleasant feeling, and desolation is more than an unpleasant one. Anxiety, intrusive thoughts, and mental-health symptoms are not proof of spiritual failure.</p><div className={formation.questions}>
      <fieldset><legend>What is the interior atmosphere? (optional)</legend><div className={formation.choiceGrid}><button type="button" className="focus-ring" aria-pressed={atmosphere === "peaceful"} onClick={() => { setAtmosphere("peaceful"); setSuggestion(null); }}>Peaceful or encouraged</button><button type="button" className="focus-ring" aria-pressed={atmosphere === "troubled"} onClick={() => { setAtmosphere("troubled"); setSuggestion(null); }}>Troubled or unsettled</button></div></fieldset>
      <fieldset><legend>Where does following this thought seem to lead? (optional)</legend><div className={formation.choiceGrid}><button type="button" className="focus-ring" aria-pressed={direction === "isolation"} onClick={() => { setDirection("isolation"); setSuggestion(null); }}>Toward harmful isolation or secrecy</button><button type="button" className="focus-ring" aria-pressed={direction === "fidelity"} onClick={() => { setDirection("fidelity"); setSuggestion(null); }}>Toward humble fidelity and charity</button></div></fieldset>
      <div className={styles.actions}><button type="button" className={`${styles.buttonPrimary} focus-ring`} onClick={() => setSuggestion(strongholdsDiscernmentSuggestion(atmosphere, direction))}>Consider a next step</button><button type="button" className={`${styles.buttonSecondary} focus-ring`} onClick={() => { setAtmosphere(null); setDirection(null); setSuggestion(null); }}>Clear choices</button></div>
    </div></section>
    {suggestion && <section ref={result} tabIndex={-1} className={`${formation.dayPanel} ${formation.result}`} aria-labelledby="discernment-suggestion-heading"><p className={styles.eyebrow}>A suggestion for reflection</p><h2 id="discernment-suggestion-heading">{suggestion.heading}</h2><p>{suggestion.text}</p><h3>One possible response</h3><p>{suggestion.action}</p><p className={styles.small}>This is an educational prompt, not a spiritual assessment. Your choices stay in memory and are not saved or sent anywhere.</p></section>}
    <section aria-labelledby="rules-heading"><p className={styles.eyebrow}>St. Ignatius · first-week rules</p><h2 id="rules-heading">Fourteen rules for discernment</h2><p className={formation.intro}>Original draft summaries for comparison with the Spiritual Exercises §§313–327. Section 313 introduces the rules; the fourteen rules follow in §§314–327. Primary-text verification and human editorial review are pending.</p><div className={formation.filters} role="group" aria-label="Filter discernment rules">{filters.map(item => <button type="button" className="focus-ring" key={item.id} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</button>)}</div><p className={styles.small} role="status">Showing {rules.length} of 14 rules. Filters are reading aids, not classifications of your experience.</p><div className={formation.rules}>{rules.map(rule => <details className={formation.rule} key={rule.number}><summary className="focus-ring"><span className={formation.ruleNumber} aria-hidden="true">{rule.number}</span><span className={formation.ruleTitle}><strong>Rule {rule.number}: {rule.title}</strong><small>Spiritual Exercises §{rule.paragraph} · draft summary</small></span></summary><div className={formation.ruleBody}><p>{rule.summary}</p><p><strong>A practical application</strong><br />{rule.application}</p><p className={styles.small}>Original summary and devotional application; not a direct quotation. Primary-source verification pending.</p></div></details>)}</div></section>
    <p className={`${formation.warning} ${styles.small}`}>Perseverance never requires remaining in danger, tolerating abuse, or refusing necessary help. Seek trusted pastoral or professional support when needed. These are the first-week rules; this page does not present the distinct second-week rules on further discernment, Spiritual Exercises §§328–336.</p>
    <nav className={styles.actions} aria-label="Continue from discernment"><Link className="btn btn-primary focus-ring" href="/strongholds/journey">Continue with Guided Prayer <span aria-hidden="true">→</span></Link><Link className="btn btn-secondary focus-ring" href="/strongholds/help-now">Help Me Right Now</Link></nav>
  </div>;
}
