import { homeLiturgicalSurfaceThemes } from "@/components/home/homeLiturgicalSurface";
import { getLiturgicalDashboardModel } from "@/lib/liturgicalLiving";
import { getLiturgicalThemeForToday } from "@/lib/liturgicalTheme";

export function HomeRosaryCta() {
  const model = getLiturgicalDashboardModel();
  const liturgicalTheme = getLiturgicalThemeForToday(model);
  const primaryColor = liturgicalTheme.liturgicalColor === "default" ? "gold" : liturgicalTheme.liturgicalColor;
  const theme = homeLiturgicalSurfaceThemes[primaryColor];

  return (
    <section className={`${theme.sectionClassName} pb-16`}>
      <div className={`mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-[1.5rem] border px-5 py-8 shadow-soft sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10 ${theme.cardClassName}`}>
        <div>
          <p className={`text-xs font-bold uppercase ${theme.eyebrowClassName}`}>The Holy Rosary</p>
          <h2 className={`font-display mt-2 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl ${theme.headingClassName}`}>
            Pray the mysteries of Christ with Mary.
          </h2>
          <p className={`mt-4 max-w-3xl text-sm leading-7 ${theme.copyClassName}`}>
            Enter a guided Rosary that brings Scripture, sacred imagination, and all seven senses
            into contemplative prayer.
          </p>
        </div>
        <div className="flex w-full max-w-sm lg:w-auto">
          <a
            href="https://daily-oratory-7-senses-holy-rosary.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className={`focus-ring inline-flex w-full items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition sm:w-auto ${theme.primaryButtonClassName}`}
          >
            7-Senses Rosary
          </a>
        </div>
      </div>
    </section>
  );
}
