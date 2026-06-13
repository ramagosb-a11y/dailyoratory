import Link from "next/link";
import { homeLiturgicalSurfaceThemes } from "@/components/home/homeLiturgicalSurface";
import { getLiturgicalDashboardModel } from "@/lib/liturgicalLiving";
import { getLiturgicalThemeForToday } from "@/lib/liturgicalTheme";

export function HomeHeavenboundSpotlight() {
  const model = getLiturgicalDashboardModel();
  const liturgicalTheme = getLiturgicalThemeForToday(model);
  const primaryColor = liturgicalTheme.liturgicalColor === "default" ? "gold" : liturgicalTheme.liturgicalColor;
  const theme = homeLiturgicalSurfaceThemes[primaryColor];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <div className={`liturgical-home-toolspotlight overflow-hidden rounded-[1.75rem] border p-6 shadow-soft sm:p-8 lg:p-10 ${theme.sectionClassName}`}>
        <div>
          <p className={`text-xs font-bold uppercase tracking-[0.18em] ${theme.eyebrowClassName}`}>Spiritual companion</p>
          <h2 className={`font-display mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl ${theme.headingClassName}`}>
            Heavenbound spiritual companion for prayer, Scripture, and Catholic next steps.
          </h2>
          <p className={`mt-4 max-w-4xl text-base leading-8 ${theme.copyClassName}`}>
            Choose a Catholic spiritual path for the moment you are in, then continue in Heavenbound for guided prayer,
            Scripture, examen, Rosary meditation, Adoration, and spiritual growth.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tools/heavenbound"
              className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition ${theme.primaryButtonClassName}`}
            >
              Open Heavenbound
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
