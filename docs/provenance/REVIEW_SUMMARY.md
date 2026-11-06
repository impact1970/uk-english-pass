# Editorial and review record

## Honest status

The corpus was AI-assisted and has completed automated structural validation and
AI editorial review. It has **not yet been signed off by an independent human
English-language teacher or examination specialist**. The application and data
must not describe the corpus as human-reviewed until the human review ledger has
been completed and signed.

## Recorded stages

| Date (UTC) | Stage | Evidence |
| --- | --- | --- |
| 2026-11-04 | Original React/Vite application and 120-question replacement corpus created | Git commit `a01a5d1` |
| 2026-11-05 | Kokoro `bf_isabella` audio pipeline introduced | Git commit `4915a3f` |
| 2026-11-05 | Corpus expanded to 200 and then 500 questions | Git commits `5fe08eb`, `8040063` |
| 2026-11-06 | Corpus expanded to 800 questions | Git commit `bc35098` |
| 2026-11-06 | Final 400 questions drafted with Terra; B1 and B2 content reviewed with Sol; counts, IDs and answer references validated with Luna | Git commit `22cf648` and source-controlled scenario files |
| 2026-11-06 | Remaining Kokoro audio generated and validated | Git commit `5a0da0b` |

The Sol review corrected speaker mismatches, weak evidence, distractors,
duplicated scenarios and timing or inference logic. Luna validation checked the
400-lesson/1,200-question target, B1/B2 balance, unit coverage, unique IDs,
answer references and required metadata. These are AI/tool-assisted controls,
not a substitute for a named human reviewer.

## Human sign-off process

`human-review-log.csv` contains one row per lesson. A qualified reviewer should
enter their name or reviewer ID, date, outcome, notes and any correction commit.
Only rows with `approved` or `approved_with_changes` count as human-reviewed.

