# BioPharma Updates

Free dashboards for the biotech & pharma world, built with plain HTML/CSS/JavaScript
and open public APIs. No build tools, no server, no cost.

## Pages

| File | What it does | Data source |
|---|---|---|
| `index.html` | Homepage with navigation to every section | ClinicalTrials.gov (live study count) |
| `stocks.html` | Top 10 global pharma/biotech stocks with live quotes | Finnhub (free API key required) |
| `pipeline.html` | Pharma Pipeline Tracker — trials by phase for any disease/company | ClinicalTrials.gov API v2 |
| `drugs.html` | Drug Explorer — reported adverse events, trial countries & US states, FDA status | openFDA + ClinicalTrials.gov |
| `approvals.html` | Rolling feed of recent original FDA drug approvals | openFDA (Drugs@FDA) |
| `learn.html` | Plain-English guide to trial phases and reading the data | Static content |
| `styles.css` | Shared design system (light + dark themes) | — |
| `app.js` | Shared code: theme toggle, nav highlighting, helpers | — |

## Deploy on GitHub Pages (free)

1. Open your `BioPharma` repository on github.com.
2. Click **Add file → Upload files**, drag in ALL the files from this folder, and commit.
3. Go to **Settings → Pages** (left sidebar).
4. Under "Build and deployment", set Source to **Deploy from a branch**,
   choose branch **main** and folder **/ (root)**, then Save.
5. Wait 1–2 minutes. Your site goes live at
   `https://YOUR-USERNAME.github.io/BioPharma/`

Any time you edit a file and commit, the site updates automatically.

## Enable live stock prices (one time, optional)

1. Create a free account at https://finnhub.io (no credit card).
2. Copy your API key from the dashboard.
3. Open your site's Stocks page, paste the key, click "Save & load prices".
   The key is stored only in your own browser (localStorage), never uploaded.

Note: on a public website, any visitor can see network requests in their own
browser, so each visitor uses their own key. For a future version, a tiny
backend (e.g. a free Cloudflare Worker) could hide one shared key.

## Customizing

- **Colors**: edit the `:root` variables at the top of `styles.css`.
- **Stock list**: edit the `COMPANIES` array at the top of `stocks.html`.
- **Brand name / tagline**: edit the `<header>` block in each HTML page.

## Honest data notes (keep these on the site)

- Adverse-event reports (FAERS) are unverified signals, not proven side effects.
- The approvals feed covers the US FDA only; other regulators publish separately.
- Free-tier stock quotes are delayed ~15 minutes.
