import type { LiturgicalColor } from "@/types/liturgicalLiving";

export type HomeLiturgicalSurfaceTheme = {
  sectionClassName: string;
  eyebrowClassName: string;
  headingClassName: string;
  copyClassName: string;
  primaryButtonClassName: string;
  secondaryButtonClassName: string;
  cardClassName: string;
  cardEyebrowClassName: string;
  cardHeadingClassName: string;
  cardCopyClassName: string;
  cardLinkClassName: string;
};

export const homeLiturgicalSurfaceThemes: Record<LiturgicalColor, HomeLiturgicalSurfaceTheme> = {
  green: {
    sectionClassName: "bg-[#365742] text-ivory",
    eyebrowClassName: "text-gold-soft",
    headingClassName: "text-ivory",
    copyClassName: "text-parchment",
    primaryButtonClassName: "border-gold bg-gold text-navy hover:bg-gold-soft",
    secondaryButtonClassName: "border-gold-soft text-ivory hover:bg-ivory/10",
    cardClassName: "border-gold/30 bg-ivory/10",
    cardEyebrowClassName: "text-gold-soft",
    cardHeadingClassName: "text-ivory",
    cardCopyClassName: "text-parchment",
    cardLinkClassName: "hover:text-gold-soft",
  },
  violet: {
    sectionClassName: "bg-[#4d3d63] text-ivory",
    eyebrowClassName: "text-[#f1d7a4]",
    headingClassName: "text-ivory",
    copyClassName: "text-[#f4edf7]",
    primaryButtonClassName: "border-[#f1d7a4] bg-[#f1d7a4] text-[#352546] hover:bg-[#f6e4bc]",
    secondaryButtonClassName: "border-[#d9c6ea] text-ivory hover:bg-white/10",
    cardClassName: "border-[#cdb8de] bg-white/10",
    cardEyebrowClassName: "text-[#f1d7a4]",
    cardHeadingClassName: "text-ivory",
    cardCopyClassName: "text-[#f4edf7]",
    cardLinkClassName: "hover:text-[#f1d7a4]",
  },
  rose: {
    sectionClassName: "bg-[#8d5564] text-ivory",
    eyebrowClassName: "text-[#f7dcc8]",
    headingClassName: "text-ivory",
    copyClassName: "text-[#fbf0f2]",
    primaryButtonClassName: "border-[#f7dcc8] bg-[#f7dcc8] text-[#5b2735] hover:bg-[#fae6d8]",
    secondaryButtonClassName: "border-[#f2c7d2] text-ivory hover:bg-white/10",
    cardClassName: "border-[#f0c6d0] bg-white/10",
    cardEyebrowClassName: "text-[#f7dcc8]",
    cardHeadingClassName: "text-ivory",
    cardCopyClassName: "text-[#fbf0f2]",
    cardLinkClassName: "hover:text-[#f7dcc8]",
  },
  red: {
    sectionClassName: "bg-[#7a2d2d] text-ivory",
    eyebrowClassName: "text-[#f5d1a8]",
    headingClassName: "text-ivory",
    copyClassName: "text-[#f8ece6]",
    primaryButtonClassName: "border-[#f5d1a8] bg-[#f5d1a8] text-[#561919] hover:bg-[#f8dfbc]",
    secondaryButtonClassName: "border-[#efb8b8] text-ivory hover:bg-white/10",
    cardClassName: "border-[#eab2b2] bg-white/10",
    cardEyebrowClassName: "text-[#f5d1a8]",
    cardHeadingClassName: "text-ivory",
    cardCopyClassName: "text-[#f8ece6]",
    cardLinkClassName: "hover:text-[#f5d1a8]",
  },
  white: {
    sectionClassName: "bg-[#ebe4d5] text-navy",
    eyebrowClassName: "text-burgundy",
    headingClassName: "text-navy",
    copyClassName: "text-muted",
    primaryButtonClassName: "border-gold bg-gold text-navy hover:bg-gold-soft",
    secondaryButtonClassName: "border-navy text-navy hover:bg-navy/5",
    cardClassName: "border-stone bg-ivory/80",
    cardEyebrowClassName: "text-burgundy",
    cardHeadingClassName: "text-navy",
    cardCopyClassName: "text-muted",
    cardLinkClassName: "hover:text-burgundy",
  },
  gold: {
    sectionClassName: "bg-[#d6b35f] text-navy",
    eyebrowClassName: "text-[#5d4300]",
    headingClassName: "text-navy",
    copyClassName: "text-[#3f3420]",
    primaryButtonClassName: "border-navy bg-navy text-ivory hover:bg-[#142949]",
    secondaryButtonClassName: "border-[#5d4300] text-[#5d4300] hover:bg-white/15",
    cardClassName: "border-[#b38d2c] bg-ivory/70",
    cardEyebrowClassName: "text-[#7b5600]",
    cardHeadingClassName: "text-navy",
    cardCopyClassName: "text-[#4a3e2a]",
    cardLinkClassName: "hover:text-[#7b5600]",
  },
  blue: {
    sectionClassName: "bg-[#456b95] text-ivory",
    eyebrowClassName: "text-[#e3cf9d]",
    headingClassName: "text-ivory",
    copyClassName: "text-[#eef4fb]",
    primaryButtonClassName: "border-[#e3cf9d] bg-[#e3cf9d] text-[#24476b] hover:bg-[#ecddba]",
    secondaryButtonClassName: "border-[#c8d9ec] text-ivory hover:bg-white/10",
    cardClassName: "border-[#c6d8ea] bg-white/10",
    cardEyebrowClassName: "text-[#e3cf9d]",
    cardHeadingClassName: "text-ivory",
    cardCopyClassName: "text-[#eef4fb]",
    cardLinkClassName: "hover:text-[#e3cf9d]",
  },
  black: {
    sectionClassName: "bg-[#1f2430] text-ivory",
    eyebrowClassName: "text-gold-soft",
    headingClassName: "text-ivory",
    copyClassName: "text-stone-soft",
    primaryButtonClassName: "border-gold bg-gold text-navy hover:bg-gold-soft",
    secondaryButtonClassName: "border-stone-soft text-ivory hover:bg-white/10",
    cardClassName: "border-stone-soft/40 bg-white/5",
    cardEyebrowClassName: "text-gold-soft",
    cardHeadingClassName: "text-ivory",
    cardCopyClassName: "text-stone-soft",
    cardLinkClassName: "hover:text-gold-soft",
  },
};

