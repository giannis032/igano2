---
name: run-igano
description: Run, screenshot, and drive the Igano Next.js restaurant site. Use when asked to start, run, screenshot, verify, or test the igano app.
---

Igano is a single-page Next.js 16 restaurant website (App Router, Tailwind v4, React 19) with an EN/ΕΛ language toggle. The agent path is a Playwright smoke script at `.claude/skills/run-igano/smoke.mjs` that launches a headless Chromium browser, navigates the page, exercises the toggle, and saves screenshots. No tmux or xvfb needed.

## Prerequisites

```bash
npm install                        # installs @playwright/test (already in devDependencies)
npx playwright install chromium    # downloads the Chromium browser (~130 MB, one-time)
```

## Build

```bash
npm run build    # ~5 s — Turbopack, confirms TypeScript passes
```

## Run — agent path

**Start the dev server first** (separate terminal or background process):

```bash
npm run dev &
# wait until "Ready in Xms" appears in output, then:
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
# → 200 means it's up
```

**Then run the smoke script:**

```bash
node .claude/skills/run-igano/smoke.mjs
# optional: node .claude/skills/run-igano/smoke.mjs --url http://localhost:3000
```

The script:
1. Loads `http://localhost:3000` and takes a screenshot
2. Verifies English navbar ("Order Online", "Bestsellers") is present
3. Clicks the `EN / ΕΛ` toggle button → verifies "Μενού" appears
4. Scrolls to `#location` → verifies Greek opening hours ("Δευτέρα")
5. Toggles back to English, reloads the page, verifies Greek preference survived the reload (localStorage persistence check)
6. Repeats toggle check at 390×844 mobile viewport

**Screenshots** land in `.claude/skills/run-igano/screenshots/`:

| File | What it shows |
|---|---|
| `01-home-en.png` | Hero in English — "NOODLES & BUNS IN KAVALA" |
| `02-home-gr.png` | Hero in Greek — "ΣΤΗΝ ΚΑΒΑΛΑ", Greek body copy |
| `03-location-gr.png` | Location section, Greek hours |
| `04-home-en-again.png` | Toggle back to English |
| `05-gr-after-reload.png` | Greek persisted after full page reload |
| `06-mobile-gr.png` | 390px mobile, Greek, EN/ΕΛ toggle visible in navbar |

Exit code 0 = all checks passed. Exit code 1 = failure with message.

## Run — human path

```bash
npm run dev
# open http://localhost:3000 in browser
# click EN / ΕΛ in the top-right navbar to switch languages
# Ctrl-C to stop
```

## Gotchas

- **`playwright` vs `@playwright/test`**: The project uses `@playwright/test` (not the bare `playwright` package). The smoke script imports from `@playwright/test`. Don't change the import to `playwright` — it won't resolve.

- **Dev server already running**: If another Next.js dev server is on port 3000, `npm run dev` prints a warning and exits. The existing server on 3000 works fine — just skip starting a second one. Check with `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/`.

- **Language flash on first load**: The first render always shows English (localStorage is read after hydration). Users who previously selected Greek will see a brief English flash before the page switches. This is expected — not a bug.

- **Anton font has no Greek glyphs**: Anton (display font used for all headings) only ships Latin glyphs from Google Fonts. Greek heading text falls back to the system sans-serif (typically Arial on Windows). The visual result is acceptable but Greek headings look noticeably different from Latin headings. A drop-in fix would be swapping Anton for Oswald (`subsets: ["latin", "greek"]` in layout.tsx), which keeps the condensed style and supports Greek.

- **`html lang` update is client-only**: `<html lang>` starts as `"en"` (set by the server in layout.tsx). The `LangSync` component in `LanguageContext.tsx` updates it via `useEffect` on the client. Screen readers hitting the static HTML before JS runs will see `lang="en"` regardless of stored preference.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Cannot find package '@playwright/test'` | Run `npm install` — it's in devDependencies |
| `browserType.launch: Executable doesn't exist` | Run `npx playwright install chromium` |
| `curl → 000` or connection refused | Dev server isn't running. Start it with `npm run dev` |
| `Timeout waiting for selector 'text=Μενού'` | Toggle button selector changed. Check the `LangToggle` component in page.tsx — the button contains `ΕΛ` text |
| Screenshot is blank / white | Hydration issue. Add `await page.waitForLoadState('domcontentloaded')` before the first screenshot |
