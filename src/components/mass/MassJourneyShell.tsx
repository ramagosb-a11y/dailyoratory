"use client";
import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import "./mass-journey.css";
type Step = {
    id: string;
    title: string;
    chapter: string;
    artwork: {
        src: string;
        alt: string;
        width: number;
        height: number;
        caption: string;
    };
};
type Preferences = {
    version: 1;
    lastStep?: string;
    quiet?: boolean;
    large?: boolean;
};
const key = "daily-oratory:mass-journey:v1";
const eventName = "mass-journey-change";
let memory = "";
function subscribe(callback: () => void) {
    window.addEventListener("popstate", callback);
    window.addEventListener("hashchange", callback);
    window.addEventListener(eventName, callback);
    window.addEventListener("storage", callback);
    return () => { window.removeEventListener("popstate", callback); window.removeEventListener("hashchange", callback); window.removeEventListener(eventName, callback); window.removeEventListener("storage", callback); };
}
function locationSnapshot() { return window.location.search + window.location.hash; }
function preferenceSnapshot() { if (memory)
    return memory; try {
    return window.localStorage.getItem(key) || "";
}
catch {
    return "";
} }
function emptySnapshot() { return ""; }
function readySnapshot() { return true; }
function serverReadySnapshot() { return false; }
function writePreferences(value: Preferences) {
    memory = JSON.stringify(value);
    try {
        window.localStorage.setItem(key, memory);
        return true;
    }
    catch {
        return false;
    }
}
function parse(raw: string): Preferences {
    try {
        const value = JSON.parse(raw);
        return value?.version === 1 ? {
            version: 1, lastStep: typeof value.lastStep === "string" ? value.lastStep : undefined,
            quiet: typeof value.quiet === "boolean" ? value.quiet : true,
            large: typeof value.large === "boolean" ? value.large : false
        } : { version: 1 };
    }
    catch {
        return { version: 1 };
    }
}
export function MassJourneyShell({ steps, chapters, lessons, guide }: {
    steps: Step[];
    chapters: readonly (readonly [
        string,
        string
    ])[];
    lessons: ReactNode[];
    guide: ReactNode;
}) {
    const ready = useSyncExternalStore(subscribe, readySnapshot, serverReadySnapshot);
    const location = useSyncExternalStore(subscribe, locationSnapshot, emptySnapshot);
    const raw = useSyncExternalStore(subscribe, preferenceSnapshot, emptySnapshot);
    const prefs = parse(raw);
    const query = new URLSearchParams(location.split("#")[0]);
    const hash = location.includes("#") ? location.slice(location.indexOf("#")) : "";
    const isGuide = query.get("view") === "guide" || Boolean(hash && hash !== "#main-content" && !hash.startsWith("#lesson-"));
    const index = steps.findIndex(step => step.id === query.get("step"));
    const step = steps[index];
    const last = steps.find(item => item.id === prefs.lastStep);
    const [warning, setWarning] = useState(false);
    const pendingFocus = useRef<string | null>(null);
    const dialog = useRef<HTMLDialogElement>(null);
    const opener = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (!ready || !step)
            return;
        const saved = parse(preferenceSnapshot());
        if (saved.lastStep !== step.id) {
            writePreferences({ ...saved, lastStep: step.id });
            window.dispatchEvent(new Event(eventName));
        }
    }, [ready, step]);
    useEffect(() => {
        if (!isGuide || !hash)
            return;
        let id: string;
        try {
            id = decodeURIComponent(hash.slice(1));
        }
        catch {
            return;
        }
        const target = document.getElementById(id);
        const heading = target?.querySelector<HTMLElement>("h2,h3") ?? target;
        if (heading) {
            heading.tabIndex = -1;
            heading.focus({ preventScroll: true });
            target?.scrollIntoView({ block: "start", behavior: "instant" });
        }
    }, [hash, isGuide]);
    useEffect(() => {
        const target = pendingFocus.current;
        if (!target)
            return;
        pendingFocus.current = null;
        const element = document.getElementById(target);
        element?.focus({ preventScroll: true });
        element?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }, [location]);
    function save(update: Partial<Preferences>) {
        const value: Preferences = { ...prefs, ...update, version: 1 };
        setWarning(!writePreferences(value));
        window.dispatchEvent(new Event(eventName));
    }
    function go(id?: string, view?: "guide") {
        dialog.current?.close();
        const url = view ? "/mass?view=guide" : id ? "/mass?step=" + id : "/mass";
        pendingFocus.current = view ? "mass-guide-heading" : id ? "mass-step-start" : "mass-welcome-heading";
        window.history.pushState(null, "", url);
        if (id)
            save({ lastStep: id });
        window.dispatchEvent(new Event(eventName));
    }
    function navigation(where: string) {
        return <nav className="mass-step-nav" aria-label={where + " lesson navigation"}>
      <button className="mass-continue" onClick={() => index === 23 ? go() : go(steps[index + 1].id)}>{index === 23 ? "Return to overview" : "Continue →"}</button>
      <span>Step {index + 1} of {steps.length}</span>
      <button disabled={index <= 0} onClick={() => go(steps[index - 1].id)}>← Previous</button>
      {index === 23 ? <button onClick={() => go(undefined, "guide")}>Explore the Full Guide</button> : null}
    </nav>;
    }
    return <div className="mass-experience" data-ready={ready} data-reading={Boolean(step) && !isGuide} data-quiet={!isGuide && prefs.quiet !== false ? "true" : "false"} data-large={prefs.large === true ? "true" : "false"}>
    <div className="mass-journey-ui" hidden={isGuide}>
      <header className="mass-topbar"><Link href="/">Home</Link><a href="/mass?view=guide" onClick={e => { e.preventDefault(); go(undefined, "guide"); }}>Full Guide / Exit journey</a>
        <button aria-pressed={prefs.quiet !== false} onClick={() => save({ quiet: prefs.quiet === false })}>Quiet mode: {prefs.quiet === false ? "off" : "on"}</button>
        <button aria-pressed={prefs.large === true} onClick={() => save({ large: prefs.large !== true })}>Text size: {prefs.large ? "large" : "standard"}</button>
      </header>
      {warning ? <p role="status" className="mass-small">Your browser could not save these preferences. You can still use every lesson; changes will last only for this page session.</p> : null}
      <div className="mass-masthead"><p className="mass-eyebrow">An illustrated learning journey</p><h1>The Holy Mass</h1><p>Learn the signs. Enter the mystery. Carry it into life.</p></div>
      <div hidden={index !== -1} className="mass-welcome">
        <Image src="/images/mass/journey/prepare.webp" width={1536} height={1024} alt="People quietly preparing for Mass in a sunlit parish church." loading="lazy"/>
        <div><p className="mass-eyebrow">24 moments · 7 chapters · At your own pace</p><h2 id="mass-welcome-heading" tabIndex={-1}>Not spectators.<br />A people called to worship.</h2>
        <p>The Mass is worship, thanksgiving, sacrifice, and communion: Christ gathers His Church into His one offering to the Father and nourishes us with His word and His Body and Blood.</p>
        <p>Jesus is the Bridegroom who gives Himself for His Bride, the Church. The Eucharist nourishes this covenant communion and anticipates the marriage supper of the Lamb in heaven. It is not a new marriage or a repetition of the Crucifixion at each Mass. Explore this love especially in the Consecration, Lamb of God, and Communion moments.</p>
        <p>Walk through the modern Roman Rite, one moment at a time. Discover what happens, why it matters, and how to participate with understanding.</p>
        <p className="mass-small">Use this guide before or after Mass, not as a substitute for attending or as a screen to follow throughout the liturgy. Beginners, returning Catholics, and curious visitors are welcome. Church arrangements and local customs vary.</p>
        <div className="mass-actions"><button className="mass-continue" onClick={() => go(steps[0].id)}>Begin the journey →</button>{last ? <button onClick={() => go(last.id)}>Resume: {last.title}</button> : null}</div>
        <p className="mass-small">Only your last visited step and display preferences are saved in this browser. They are not synchronized between devices.</p>
        {last ? <button onClick={() => { if (window.confirm("Clear your saved Mass journey position? Display preferences will stay unchanged."))
        save({ lastStep: undefined }); }}>Reset saved position</button> : null}
        </div>
      </div>
      <label className="mass-selector">Choose a moment<select value={step?.id ?? ""} onChange={e => go(e.target.value || undefined)}><option value="">Journey overview</option>{chapters.map(([id, label]) => <optgroup key={id} label={label}>{steps.filter(item => item.chapter === id).map(item => <option key={item.id} value={item.id}>{steps.indexOf(item) + 1}. {item.title}</option>)}</optgroup>)}</select></label>
      <div className="mass-active" hidden={!step}>
      {step ? <>
        <p id="mass-step-start" tabIndex={-1} className="mass-chapter-banner">{chapters.find(chapter => chapter[0] === step.chapter)?.[1]}</p>
        {navigation("Top")}
        <div className="mass-reading-grid">
          <figure className="mass-artwork"><Image key={step.id} src={step.artwork.src} width={step.artwork.width} height={step.artwork.height} alt={step.artwork.alt} loading="lazy"/>
            <button ref={opener} onClick={() => dialog.current?.showModal()}>View full image</button><figcaption>{step.artwork.caption}</figcaption>
          </figure>
          <div>{lessons.map((lesson, i) => <div key={steps[i].id} hidden={i !== index}>{lesson}</div>)}</div>
        </div>{navigation("Bottom")}
        <dialog ref={dialog} className="mass-image-dialog" aria-label="Full illustration" onKeyDown={e => { if (e.key === "Tab") {
            e.preventDefault();
            e.currentTarget.querySelector("button")?.focus();
        } }} onClose={() => opener.current?.focus()} onClick={e => { if (e.target === e.currentTarget)
            dialog.current?.close(); }}><button autoFocus onClick={() => dialog.current?.close()}>Close image</button><Image src={step.artwork.src} alt={step.artwork.alt} width={step.artwork.width} height={step.artwork.height}/></dialog>
      </> : <div hidden>{lessons}</div>}
      </div>
      <footer className="mass-journey-footer"><p>Learn slowly. Pray simply. Return whenever you need.</p><a href="/mass?view=guide" onClick={e => { e.preventDefault(); go(undefined, "guide"); }}>Explore the complete reference guide</a></footer>
    </div>
    <div className="mass-full-guide" data-hidden={!isGuide}><nav className="mass-guide-return"><a href="/mass" onClick={e => { e.preventDefault(); go(); }}>← Illustrated journey</a><span id="mass-guide-heading" tabIndex={-1}>The Holy Mass · Full Guide</span><Link href="/">Home</Link></nav>{guide}</div>
    <noscript><style>{".mass-experience .mass-journey-ui{display:none!important}.mass-experience .mass-full-guide{display:block!important}body:has(.mass-experience) .site-header{display:block!important}"}</style></noscript>
  </div>;
}
