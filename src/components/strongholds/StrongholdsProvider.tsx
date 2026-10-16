"use client";

import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";
import { newStrongholdsDraft, type StrongholdsDraft } from "@/lib/strongholdsState";

type Appearance = { theme: "midnight" | "ivory"; large: boolean; reduced: boolean };
const StrongholdsContext = createContext<{ draft: StrongholdsDraft; setDraft: Dispatch<SetStateAction<StrongholdsDraft>>; appearance: Appearance; setAppearance: Dispatch<SetStateAction<Appearance>> } | null>(null);
export function StrongholdsProvider({ children }: { children: React.ReactNode }) {
  const [draft, setDraft] = useState(newStrongholdsDraft);
  const [appearance, setAppearance] = useState<Appearance>({ theme: "midnight", large: true, reduced: false });
  return <StrongholdsContext.Provider value={{ draft, setDraft, appearance, setAppearance }}>{children}</StrongholdsContext.Provider>;
}
export function useStrongholds() {
  const context = useContext(StrongholdsContext);
  if (!context) throw new Error("Strongholds provider is missing.");
  return context;
}
