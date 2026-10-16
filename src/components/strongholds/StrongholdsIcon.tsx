export type StrongholdsIconName = "shield" | "prayer" | "book" | "faith" | "humility" | "path" | "heart" | "flame" | "mercy" | "eucharist" | "rosary" | "lock" | "arrow" | "home" | "sword" | "compass" | "journal" | "settings" | "close";

const paths: Record<StrongholdsIconName, React.ReactNode> = {
  home: <><path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-8h6v8" /></>,
  sword: <><path d="m14 3 7-1-1 7L8 21l-5-5L14 3ZM5 13l6 6M3 21l3-3M15 8l3-3" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-2 6-6 2 2-6 6-2Z" /></>,
  journal: <><path d="M5 3h14v18l-7-4-7 4V3Z" /></>,
  settings: <><path d="m10 3-1 3-3 1-3 3 2 3-1 3 3 2 3-1 3 3 3-2v-3l3-2-1-3-3-1-1-3-4-1Z" /><circle cx="11" cy="11" r="3" /></>,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.5 3.2 7.4 7.5 9.5 4.3-2.1 7.5-5 7.5-9.5V6L12 3Z" /><path d="M12 7v10M8.5 10.5h7" /></>,
  prayer: <><path d="m11 4-2 7-5 6 4 3 4-6 4 6 4-3-5-6-2-7M12 5v9M3 8l2 1M19 9l2-1" /></>,
  book: <><path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14" /><path d="M6 8h3M6 11h3M15 8h3M15 11h3" /></>,
  faith: <path d="M10 3h4v5h5v4h-5v9h-4v-9H5V8h5V3Z" />,
  humility: <><path d="M4 17c5-7 11-7 16 0M7 20h10M12 4v5M8 6l1 2M16 6l-1 2" /><path d="M5 17v3M19 17v3" /></>,
  path: <><path d="M7 21v-5c0-4 10-3 10-7V3M13 6l4-3 4 3M3 21h8" /></>,
  heart: <path d="M12 20 4 12C0 7 7 2 12 7c5-5 12 0 8 5l-8 8Z" />,
  flame: <path d="M13 2c2 6-4 7-2 11 2-1 3-2 3-4 7 6 4 13-2 13S2 17 6 11c0 3 2 4 3 4-3-7 5-7 4-13Z" />,
  mercy: <><path d="M5 21V10a7 7 0 0 1 14 0v11M3 21h18M12 7v9M9 10h6" /></>,
  eucharist: <><circle cx="12" cy="6" r="3" /><path d="M12 4.5v3M10.5 6h3M6 12h12c0 4-2 6-6 6s-6-2-6-6Zm6 6v3M8 21h8" /></>,
  rosary: <><circle cx="8" cy="5" r="1" /><circle cx="14" cy="4" r="1" /><circle cx="19" cy="8" r="1" /><circle cx="18" cy="14" r="1" /><circle cx="12" cy="16" r="1" /><circle cx="6" cy="13" r="1" /><circle cx="4" cy="8" r="1" /><path d="M12 17v6M9.5 20h5" /></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
};

export function StrongholdsIcon({ name = "shield", className }: { name?: StrongholdsIconName; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
