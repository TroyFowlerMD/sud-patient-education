<!-- last-reviewed: 2026-05-19 -->
<!-- source: notion -->

# SUD Patient Education

Patient education hub for substance use disorder and addiction psychiatry topics.

## Purpose

Static GitHub Pages site providing plain-language education materials for adults in inpatient addiction treatment. Designed to support clinician-led conversations. Not a medical advice tool.

## Structure

- `index.html` - Hub page
- `topics/benzodiazepines-anxiety-recovery.html` - Topic page
- `assets/css/styles.css` - Mobile-first styles
- `assets/css/print.css` - Print / PDF styles
- `assets/js/app.js` - Accordion expand/collapse
- `assets/js/print.js` - Print current view / full handout
- `assets/img/` - Original local SVG diagrams
- `content/benzodiazepines-anxiety-sud-content.md` - Content source

## Deployment

GitHub Pages should deploy from branch `main`, folder `/ (root)`. The expected public URL is `https://TroyFowlerMD.github.io/sud-patient-education/`.

The hub page is `index.html` at the root. The current topic page is `topics/benzodiazepines-anxiety-recovery.html`.

## Dashboard Link

Once the GitHub Pages URL is live, add one link from the main dashboard:

- Link text: `SUD Patient Education`
- Description: Patient education hub for addiction psychiatry topics, medications, diagnoses, and recovery-focused handouts.

Do not link individual topic pages directly from the dashboard.

## Technical Notes

- Plain HTML / CSS / vanilla JavaScript only
- No backend, no forms, no PHI collection, no authentication, no analytics
- All SVG diagrams are original and stored locally in `assets/img/`
- Print CSS hides navigation and toolbar, expands all content, and formats topic pages as patient handouts
- The `Print full handout` button expands all sections before opening the browser print dialog

## Safety / Compliance

- All pages include a disclaimer that content is general education only
- No individualized medical advice, symptom checkers, calculators, or taper schedules
- Emergency guidance is visible in the page footer and safety sidebar on every topic page
- No patient data is collected or stored

## Adding New Topics

1. Create a new HTML file in `topics/` following the pattern of `benzodiazepines-anxiety-recovery.html`.
2. Add a new topic card in the appropriate category section of `index.html`.
3. No CSS or JS changes are required for standard topic pages.
