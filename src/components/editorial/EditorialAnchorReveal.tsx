"use client";

import { useEffect } from "react";

/** Keep legacy deep links useful when secondary material moves into a disclosure. */
export function EditorialAnchorReveal() {
  useEffect(() => {
    function reveal() {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      let ancestor: HTMLElement | null = target;
      while (ancestor) {
        if (ancestor instanceof HTMLDetailsElement) ancestor.open = true;
        ancestor = ancestor.parentElement;
      }
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }
    reveal();
    window.addEventListener("hashchange", reveal);
    // Next links can target the current hash again without firing hashchange.
    function onClick(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (link?.hash && link.pathname === window.location.pathname) requestAnimationFrame(reveal);
    }
    document.addEventListener("click", onClick);
    const printStates = new Map<HTMLDetailsElement, boolean>();
    function beforePrint() {
      document.querySelectorAll<HTMLDetailsElement>("details").forEach((details) => {
        if (!printStates.has(details)) printStates.set(details, details.open);
        details.open = true;
      });
    }
    function afterPrint() {
      printStates.forEach((open, details) => { details.open = open; });
      printStates.clear();
    }
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);
    return () => {
      window.removeEventListener("hashchange", reveal);
      document.removeEventListener("click", onClick);
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, []);
  return null;
}
