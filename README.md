# sud-patient-education

Patient education hub for substance use disorder and addiction psychiatry topics.

## Purpose

Static GitHub Pages site providing plain-language education materials for adults in inpatient addiction treatment. Designed to support clinician-led conversations. Not a medical advice tool.

## Structure

```
sud-patient-education/
  index.html                                    Hub page
  topics/
    benzodiazepines-anxiety-recovery.html       Topic page
  assets/
    css/
      styles.css                                Mobile-first styles
      print.css                                 Print / PDF styles
    js/
      app.js                                    Accordion expand/collapse
      print.js                                  Print current view / full handout
    img/
      anxiety-circuit.svg
      therapy-workout.svg
      alcohol-benzo-parallel.svg
      ssri-timeline.svg
      chemical-quieting-vs-learning.svg
  content/
    benzodiazepines-anxiety-sud-content.md      Content source
  README.md
```

## Deployment (GitHub Pages)

1. Go to **Settings > Pages**
2. Set Source to **Deploy from a branch** > branch `main` > folder `/ (root)`
3. Save. GitHub Pages will build and publish the site.
4. Expected URL: `https://TroyFowlerMD.github.io/sud-patient-education/`

The hub page is `index.html` at the root.
The topic page is `topics/benzodiazepines-anxiety-recovery.html`.

## Dashboard link (future)

Once the GitHub Pages URL is live, add one link from the main dashboard:
- Link text: **SUD Patient Education**
- Description: Patient education hub for addiction psychiatry topics, medications, diagnoses, and recovery-focused handouts.

Do not link individual topic pages directly from the dashboard.

## Technical notes

- Plain HTML / CSS / vanilla JavaScript only
- No backend, no forms, no PHI collection, no authentication, no analytics
- All SVG diagrams are original and stored locally in `assets/img/`
- Print CSS hides navigation and toolbar, expands all content, and formats topic pages as patient handouts
- The "Print full handout" button expands all sections before opening the browser print dialog

## Safety / compliance

- All pages include a disclaimer that content is general education only
- No individualized medical advice, symptom checkers, calculators, or taper schedules
- Emergency guidance is visible in the page footer and Safety sidebar on every topic page
- No patient data is collected or stored

## Adding new topics

1. Create a new HTML file in `topics/` following the pattern of `benzodiazepines-anxiety-recovery.html`
2. Add a new topic card in the appropriate category section of `index.html`
3. No CSS or JS changes required for standard topic pages

## Project Files

- `CONTEXT.md` - Short Codex briefing for project purpose, stack, conventions, phase, and open questions.
- `TASKS.md` - Live task seed from the current project state.
- `WORKLOG.md` - Stub for future Codex session-end notes.
- `DECISIONS.md` - Extracted project decisions about audience separation, routing, and privacy-preserving static hosting.
- `docs/sud-patient-education.md` - Clean Markdown snapshot of the patient education hub setup and operating notes.
