# Production release authorization — Gospel Movements

2026-10-28. Owner instruction: “commit, deploy to production and main not preview”. This supersedes the local-only release boundary recorded in the implementation specification and report, and authorizes release of the reviewed revision 1 music feature to main and production.

- Canonical repository: brotherhood-of-ascension; main and origin/main both at 161e43507d1158e6d267d2fd74ff000e74b55fca after fetch.
- Project: daily-oratory (prj_kM1HXZ5Khk9obPsXtOR0hlzwKaLE), team_8Xid966rrKeRSq2AkpoAi6RL.
- Previous production / rollback reference: dpl_4aAjVXstwWNHAFwaQZN8bMaEuUnj, daily-oratory-d00p51m9l-ramagosb-6300s-projects.vercel.app; READY on the previous main SHA; dailyoratory.faith alias verified before release.
- Release approach: commit only feature sources, thirteen optimized WebP assets, metadata provenance and feature documentation; push main and verify the Git-triggered production deployment. No preview deployment or substitute artifact.
- Final local checks: production build passed (client-store, image and rendering audits included); focused ESLint and typecheck passed; URL validation and SEO preflight passed; diff whitespace check passed.
- Full repository lint: 46 errors / 41 warnings. Of these, three require-import errors are in the uncommitted local-only prepare-music-images.cjs helper, excluded from this release; 43 errors are in unchanged files, including existing browser helpers, layout and WayOfCrossQuietRoom. No release source lint error. See local output/gospel-movements-release-lint.log.
- Artwork storage: 5,727,437 original bytes to 935,784 WebP bytes (84% reduction). Original art, local preparation helper and QA logs stay uncommitted. Public covers are sourced from the owner's supplied Suno links; provenance is recorded in SUNO-METADATA.json.
- Human visual review: owner selected the designs and requested release after receiving the full local-site review URLs. No independent code/theological review is claimed.
- Production status and smoke results will be reported after Git push. No version, dependency, settings, content or configuration changes are part of the release step.
