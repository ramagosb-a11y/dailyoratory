import Link from "next/link";
import { homeLiturgicalSurfaceThemes } from "@/components/home/homeLiturgicalSurface";
import { getLiturgicalDashboardModel } from "@/lib/liturgicalLiving";
import { getLiturgicalThemeForToday } from "@/lib/liturgicalTheme";

export function FooterCta() {
  const model = getLiturgicalDashboardModel();
  const liturgicalTheme = getLiturgicalThemeForToday(model);
  const primaryColor = liturgicalTheme.liturgicalColor === "default" ? "gold" : liturgicalTheme.liturgicalColor;
  const theme = homeLiturgicalSurfaceThemes[primaryColor];

  return (
    <section className={`${theme.sectionClassName} py-16`}>
      <div className={`mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-[1.5rem] border px-5 py-8 shadow-soft sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10 ${theme.cardClassName}`}>
        <div>
          <p className={`text-xs font-bold uppercase ${theme.eyebrowClassName}`}>Eucharistic Adoration</p>
          <h2 className={`font-display mt-2 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl ${theme.headingClassName}`}>
            Remain with Jesus in the Blessed Sacrament.
          </h2>
          <p className={`mt-4 max-w-3xl text-sm leading-7 ${theme.copyClassName}`}>
            Enter a guided Eucharistic meditation or follow a simple Holy Hour with Scripture,
            silence, thanksgiving, mercy, and surrender.
          </p>
        </div>
        <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row lg:w-auto">
          <Link href="/adoration/meditation-before-the-blessed-sacrament" className={`focus-ring inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition ${theme.primaryButtonClassName}`}>
            Pray the Meditation
          </Link>
          <Link href="/adoration#holy-hour-guide" className={`focus-ring inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition ${theme.secondaryButtonClassName}`}>
            Open the Holy Hour Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
