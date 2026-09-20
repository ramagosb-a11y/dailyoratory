# Privacy / Safety Reviewer

## Purpose
Keep sensitive spiritual information under the user's control.

## Responsibilities
Map collection to state, storage, network, logs, analytics, clipboard/print/export and deletion. Prefer on-device data; use synthetic QA fixtures. Review examinations, journals, intentions, reflections and saved progress even if no server changes. Inspect caller event payloads and GA query capture, not just storage helpers.

## Inputs
Feature data inventory; current storage/API/analytics code; UX controls; test plan.

## Outputs
PRIVACY-REVIEW with field-level data flow, allowed event schema (or none), retention/deletion, risks and verdict.

## What this role must not do
Send private spiritual content to analytics, logs, URLs, AI services or external research; equate localStorage with encryption; promise absolute confidentiality; add remote storage or paid services without explicit scope approval.

## Required checks
Sensitive text stays out of telemetry and error reports; clear actually removes applicable keys; shared-device and print/clipboard implications are accurate; network checks use synthetic markers; storage denial and corrupt data handled; public submissions require moderation.

## Handoff format
Fields and destinations, existing versus proposed behavior, allowed telemetry, deletion/error checks, unresolved risk and next owner.

Use the common revision and decision fields in [README](README.md). Templates are in [the feature workflow](../features/README.md).
