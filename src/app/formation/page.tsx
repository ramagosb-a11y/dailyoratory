import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { DoctrineFormationSection } from "@/components/formation/DoctrineFormationSection";
import { FormationAndChurchFathers } from "@/components/formation/FormationAndChurchFathers";
import { FormationAndDevotions } from "@/components/formation/FormationAndDevotions";
import { FormationAndSacraments } from "@/components/formation/FormationAndSacraments";
import { FormationAndScripture } from "@/components/formation/FormationAndScripture";
import { FormationByLiturgicalSeason } from "@/components/formation/FormationByLiturgicalSeason";
import { FormationByStateOfLife } from "@/components/formation/FormationByStateOfLife";
import { FormationHero } from "@/components/formation/FormationHero";
import { FormationLadder } from "@/components/formation/FormationLadder";
import { FormationLibraryGrid } from "@/components/formation/FormationLibraryGrid";
import { FormationObstacles } from "@/components/formation/FormationObstacles";
import { FormationPastoralNote } from "@/components/formation/FormationPastoralNote";
import { FormationPathwaySelector } from "@/components/formation/FormationPathwaySelector";
import { FormationPillarCards } from "@/components/formation/FormationPillarCards";
import { FormationTrustedSources } from "@/components/formation/FormationTrustedSources";
import { RelatedFormationTools } from "@/components/formation/RelatedFormationTools";
import { SpiritualGrowthSection } from "@/components/formation/SpiritualGrowthSection";
import { ThirtyDayFormationChallenge } from "@/components/formation/ThirtyDayFormationChallenge";
import { VirtueFormationSection } from "@/components/formation/VirtueFormationSection";
import { WeeklyFormationPlan } from "@/components/formation/WeeklyFormationPlan";
import { WhatIsFormation } from "@/components/formation/WhatIsFormation";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import {
  getFormationChallenge,
  getFormationObstacles,
  getFormationPillars,
  getFormationTopicsByCategory,
  getSpiritualGrowthPractices,
  getVirtueFormationItems,
} from "@/lib/formation";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Formation | Doctrine, Virtue, and Spiritual Growth",
  description:
    "Grow in Catholic doctrine, virtue, prayer, Scripture, sacraments, and daily discipleship with formation pathways for Catholics, returning Catholics, and anyone exploring the Catholic faith.",
  path: "/formation",
  keywords: [
    "Catholic formation",
    "doctrine",
    "virtue",
    "spiritual growth",
    "Catholic discipleship",
    "Catechism",
    "prayer life",
    "rule of life",
    "Catholic moral life",
    "Catholic spiritual formation",
  ],
});

export default function FormationPage() {
  const pillars = getFormationPillars();
  const doctrineTopics = getFormationTopicsByCategory("doctrine").concat(
    getFormationTopicsByCategory("sacraments"),
    getFormationTopicsByCategory("prayer"),
    getFormationTopicsByCategory("service"),
  );
  const virtues = getVirtueFormationItems();
  const practices = getSpiritualGrowthPractices();
  const obstacles = getFormationObstacles();
  const challenge = getFormationChallenge();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Formation",
              description:
                "Grow in Catholic doctrine, virtue, prayer, Scripture, sacraments, and daily discipleship with formation pathways for Catholics, returning Catholics, and anyone exploring the Catholic faith.",
              path: "/formation",
            }),
            buildArticleStructuredData({
              headline: "Catholic Formation",
              description:
                "Grow in Catholic doctrine, virtue, prayer, Scripture, sacraments, and daily discipleship with formation pathways for Catholics, returning Catholics, and anyone exploring the Catholic faith.",
              path: "/formation",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Formation", path: "/formation" },
            ]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Formation" }]} />

        <div className="mt-8">
          <FormationHero />
        </div>

        <div className="mt-14">
          <WhatIsFormation />
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Featured formation topic</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Catholic Life Roadmap</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Find a simple path through prayer, Confession, Mass, the Rosary, Scripture, grace,
              liturgical seasons, family faith, and hope in eternal life.
            </p>
            <div className="mt-6">
              <a href="/catholic-life" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Open the Roadmap
              </a>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Featured formation topic</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Grace</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Learn how God’s grace heals, strengthens, sanctifies, and helps us respond to His will through prayer,
              sacraments, virtue, and charity.
            </p>
            <div className="mt-6">
              <a href="/formation/grace" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Learn About Grace
              </a>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related conversion topic</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Complete Detachment from Sin</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Learn how sincere rejection of sin, Confession, Eucharist, prayer, virtue, and trust in mercy help
              the soul grow in deeper freedom before God.
            </p>
            <div className="mt-6">
              <a href="/indulgences/detachment-from-sin" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Learn About Detachment from Sin
              </a>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Featured formation topic</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Catholic Eschatology: The Last Things</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Learn Catholic teaching on death, judgment, Heaven, Hell, Purgatory, the resurrection of the body,
              and the Second Coming of Christ.
            </p>
            <div className="mt-6">
              <a href="/formation/eschatology" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Explore the Last Things
              </a>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Featured formation topic</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Catholic Burial and Funeral Rites</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Understand Catholic burial, cremation, funeral rites, prayers for the dead, and planning a Catholic funeral with hope in the resurrection.
            </p>
            <div className="mt-6">
              <a href="/formation/catholic-burial" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Learn About Catholic Burial
              </a>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <FormationPillarCards pillars={pillars} />
        </div>

        <div className="mt-14">
          <FormationPathwaySelector />
        </div>

        <div className="mt-14">
          <DoctrineFormationSection topics={doctrineTopics} />
        </div>

        <div className="mt-14">
          <VirtueFormationSection virtues={virtues} />
        </div>

        <div className="mt-14">
          <SpiritualGrowthSection practices={practices} />
        </div>

        <div className="mt-14">
          <WeeklyFormationPlan />
        </div>

        <div className="mt-14">
          <FormationLadder />
        </div>

        <div className="mt-14">
          <FormationByStateOfLife />
        </div>

        <div className="mt-14">
          <FormationByLiturgicalSeason />
        </div>

        <div className="mt-14">
          <FormationAndSacraments />
        </div>

        <div className="mt-14">
          <FormationAndScripture />
        </div>

        <div className="mt-14">
          <FormationAndChurchFathers />
        </div>

        <div className="mt-14">
          <FormationAndDevotions />
        </div>

        <div className="mt-14">
          <FormationObstacles obstacles={obstacles} />
        </div>

        <div className="mt-14">
          <ThirtyDayFormationChallenge challenge={challenge} />
        </div>

        <div className="mt-14">
          <FormationLibraryGrid />
        </div>

        <div className="mt-14">
          <FormationTrustedSources />
        </div>

        <div className="mt-14">
          <RelatedFormationTools />
        </div>

        <div className="mt-14">
          <FormationPastoralNote />
        </div>
      </main>
    </div>
  );
}
