# Worklog

This file records completed Codex work sessions for SUD Patient Education. Append new entries during the shutdown routine so future sessions can resume without prior chat context.

---

## Entry Format

    ### YYYY-MM-DD - [machine/profile] - [session summary]
    - Completed: ...
    - In progress: ...
    - Blockers/notes: ...

### 2026-05-19 - Codex desktop - Repository maintenance sweep
- Completed: Fast-forward pulled `origin/main` and confirmed the working tree was clean before maintenance logging.
- Completed: Smoke-checked the public SUD Patient Education Hub live URL; it returned HTTP 200 with expected patient-education/recovery text.
- Completed: Ran a local relative href/src scan with no missing local targets found for this repo.
- In progress: Existing new-topic, dashboard-to-hub verification, print/PDF review, and safety-disclaimer checks remain open in TASKS.md.
- Blockers/notes: No app code changed; TASKS.md and DECISIONS.md were not changed.

### 2026-05-22 - Codex desktop - Beginner-friendly repo communication preference
- Completed: Added `AGENTS.md` Owner Communication guidance so future Codex sessions explain Git, GitHub, GitHub Desktop, Codex workspace behavior, local-vs-remote state, commits, pushes, pulls, branches, and deployments with extra beginner-friendly context.
- Completed: Documented that explanations should define concepts, distinguish local files from pushed/deployed changes, and use exact paths/button names when Dr. Fowler is operating tools manually.
- In progress: Existing patient-education content tasks remain unchanged.
- Blockers/notes: Instruction-only change; no app runtime code changed.

