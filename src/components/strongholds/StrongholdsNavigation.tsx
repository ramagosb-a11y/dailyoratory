"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrongholdsIcon, type StrongholdsIconName } from "./StrongholdsIcon";
import styles from "./Strongholds.module.css";

const links: { href: string; label: string; icon: StrongholdsIconName }[] = [
  { href: "/strongholds", label: "Sanctuary", icon: "home" },
  { href: "/strongholds/journey", label: "6-Step Battle", icon: "shield" },
  { href: "/strongholds/defenses", label: "Defenses", icon: "faith" },
  { href: "/strongholds/weapons", label: "Weapons", icon: "sword" },
  { href: "/strongholds/discernment", label: "Discernment", icon: "compass" },
  { href: "/strongholds/my-journey", label: "My Journey", icon: "journal" },
];

export function StrongholdsNavigation() {
  const pathname = usePathname().replace(/\/+$/, "");
  return <nav className={styles.featureNav} aria-label="Strongholds"><div>{links.map(link => <Link key={link.href} className="focus-ring" href={link.href} aria-current={pathname === link.href ? "page" : undefined}><StrongholdsIcon name={link.icon} /><span>{link.label}</span></Link>)}</div></nav>;
}
