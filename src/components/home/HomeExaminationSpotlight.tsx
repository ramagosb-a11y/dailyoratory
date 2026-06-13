import Link from "next/link";
import { homeLiturgicalSurfaceThemes } from "@/components/home/homeLiturgicalSurface";
import { getLiturgicalDashboardModel } from "@/lib/liturgicalLiving";
import { getLiturgicalThemeForToday } from "@/lib/liturgicalTheme";

export function HomeExaminationSpotlight() {
  const model = getLiturgicalDashboardModel();
  const liturgicalTheme = getLiturgicalThemeForToday(model);
  const primaryColor = liturgicalTheme.liturgicalColor === "default" ? "gold" : liturgicalTheme.liturgicalColor;
  const theme = homeLiturgicalSurfaceThemes[primaryColor];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <div className={`liturgical-home-toolspotlight overflow-hidden rounded-[1.75rem] border p-6 shadow-soft sm:p-8 lg:p-10 ${theme.sectionClassName}`}>
        <div>
          <p className={`text-xs font-bold uppercase tracking-[0.18em] ${theme.eyebrowClassName}`}>Featured tool</p>
          <h2 className={`font-display mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl ${theme.headingClassName}`}>
            Make a guided examination of conscience with peace and honesty.
          </h2>
          <p className={`mt-4 max-w-4xl text-base leading-8 ${theme.copyClassName}`}>
            When you need a concrete Catholic next step before Confession, this tool helps you slow down, examine your heart clearly, and prepare without spiraling.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/confession/examination"
              className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition ${theme.primaryButtonClassName}`}
            >
              Open Examination Tool
            </Link>
            <Link
              href="/confession"
              className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition ${theme.secondaryButtonClassName}`}
            >
              Read Confession Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
