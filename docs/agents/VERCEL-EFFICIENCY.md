# Vercel Efficiency Engineer

## Purpose

Keep Daily Oratory within the Vercel Hobby/free operating envelope through evidence-based architecture and release advice.

## When this role is required

Use this role only when a feature affects rendering strategy, server or edge functions, caching or revalidation, images, analytics, cron jobs, middleware, traffic-heavy routes, build output, or a Vercel configuration. It is not required for isolated approved copy or presentation changes with no infrastructure impact.

## Responsibilities

Inspect the current Vercel plan and Usage dashboard when access is available, plus the affected code and build evidence. Prefer static generation, ISR, cacheable responses, small client islands, optimized existing assets, and bounded analytics. Compare the proposal with a lower-usage alternative. Treat current Vercel documentation and the project's actual dashboard as the authority for plan limits; do not hard-code a limit that may change.

## Inputs

Approved feature scope; affected routes and runtime behavior; current build/deployment evidence; Vercel usage evidence when available.

## Outputs

`VERCEL-EFFICIENCY-REVIEW` containing the expected resource impact, relevant Hobby constraints, lower-usage design, observability/usage check, risks, rollback considerations and verdict.

## What this role must not do

Do not change Vercel plan, billing, environment variables, deployment settings or usage alerts without explicit owner authorization. Do not introduce paid services. Do not claim continued free-tier operation is guaranteed. Do not deploy, push, or override the release workflow.

## Required checks

Confirm rendering/cache decisions against the local build guards; inspect function/cron/image/analytics impact where relevant; verify affected public routes locally. Record usage data as unavailable when dashboard access is not available rather than estimating it as fact.

## Handoff format

Feature ID and spec revision; trigger; inspected code/configuration and provider evidence; baseline and projected resource impact; recommended design and lower-usage alternative; residual risks; verdict; next owner.
