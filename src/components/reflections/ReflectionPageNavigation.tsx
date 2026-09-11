"use client";
import type { MouseEvent } from "react";

const destinations = [
  ["current-reflection", "Current Reflection"], ["find-reflection", "Find a Reflection"],
  ["reflection-calendar", "Calendar"], ["upcoming-reflections", "Upcoming"],
  ["sunday-reflections", "Sundays"], ["daily-reflections", "Daily"], ["archive-reflections", "Archive"],
];
function navigate(event: MouseEvent<HTMLAnchorElement>) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const id = event.currentTarget.hash.slice(1);
  const marker = document.getElementById(id);
  if (!marker) return;
  event.preventDefault();
  const heading = marker.hasAttribute("data-jump-marker")
    ? marker.nextElementSibling?.querySelector<HTMLElement>("h2") ?? marker
    : marker;
  heading.setAttribute("tabindex", "-1");
  heading.focus({ preventScroll: true });
  heading.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  history.pushState(null, "", "#" + id);
}
export function ReflectionPageNavigation() {
  return <nav aria-label="Reflection page navigation" data-reflection-navigation>
    {destinations.map(([id,label]) => <a key={id} href={"#" + id} onClick={navigate}>{label}</a>)}
  </nav>;
}
export function ReflectionBackLink() {
  return <p data-back-navigation><a href="#page-navigation" onClick={navigate}>↑ Back to page navigation</a></p>;
}
export function ReflectionAnchor({ id }: { id: string }) {
  return <div id={id} data-jump-marker />;
}
