# Decisions

This file records durable architectural, workflow, safety, and publishing decisions for SUD Patient Education. Each entry should include Context, Decision, Rationale, and Consequences.

---

### 2026-05-19 - Keep Patient Education Separate From Clinician Education
Context: The portfolio contains both clinician-facing SUD education and patient-facing handout material.
Decision: Keep patient-facing education in `sud-patient-education` and clinician-facing material in `sud-education-hub`.
Rationale: Separate repos reduce accidental audience mixing and keep patient handouts plain-language and safety-focused.
Consequences: Cross-links should be deliberate, and dashboard routing should make the patient/clinician distinction clear.

### 2026-05-19 - Link The Dashboard To The Hub Only
Context: Individual patient topic pages may expand over time.
Decision: The main dashboard should link to the patient education hub page rather than deep-linking individual topics.
Rationale: The hub provides controlled navigation, categories, and current safety framing.
Consequences: New topics can be added without changing the main dashboard every time.

### 2026-05-19 - Keep The Site Static And Privacy-Preserving
Context: Patient education pages may be opened in clinical settings and shared outside the primary workspace.
Decision: Use static HTML/CSS/vanilla JavaScript only, with no backend, forms, PHI collection, authentication, analytics, or remote embeds.
Rationale: Static pages are easier to host, audit, print, and share without creating privacy risk.
Consequences: Interactive behavior should stay local to the browser and avoid collecting or transmitting patient information.

### 2026-05-22 - Explain Repo Work With Beginner Context
Context: Dr. Fowler is new to Git, GitHub, GitHub Desktop, Codex, and local-vs-remote repository workflows.
Decision: Codex should explain repo work with extra beginner-friendly context by default, including definitions, why each step matters, exact local paths/button names when useful, and a clear distinction between local files, local commits, pushed GitHub commits, pull requests, and deployed site changes.
Rationale: Better context reduces accidental duplicate clones, OneDrive/Git confusion, and uncertainty about whether work is local, synced, or live.
Consequences: Future repo instructions and shutdown summaries should favor plain outcome language and step-by-step guidance over unexplained Git shorthand.

### 2026-05-22 - Surface Workflow Streamlining Opportunities
Context: Dr. Fowler wants Codex to notice chances to make his coding, GitHub, GitHub Desktop, deployment, and cross-machine workflows smoother.
Decision: When Codex sees a practical workflow improvement, it should present the opportunity proactively with the expected benefit, any risk or cost, and the smallest safe next step.
Rationale: Small workflow improvements compound, especially while Dr. Fowler is learning Git and using Codex across multiple machines.
Consequences: Future sessions should separate optional workflow suggestions from required task work so recommendations help without derailing the current task.
