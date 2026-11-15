# WorldVista V4 — Luxury World Explorer

## Cloudflare Pages deployment
GitHub repository: upload the **contents** of this folder to the repository root. Framework preset: None. Build command: `npm run build`. Build output directory: `dist`. Root directory: blank. No database or API keys required.

## Development and testing
`npm test` — automated structural tests. `npm run build` — generates `dist`.

## Country search
Country directory is local (`countries.json`), so country selection does not depend on a third-party API. 12 countries have editorially curated 20-place lists (`curated.json`). For these, Wikipedia descriptions and photos are loaded client-side, and the names remain usable even if Wikipedia is offline. Other countries use live Wikidata country-relation results, which can be slow, incomplete, or unavailable. This is **not** a verified 20-attractions-per-country database.

## Data and image cautions
Editorial place names are manually compiled; some titles can be ambiguous or change. Wikipedia API may not resolve every title. Unsplash imagery in hero/inspiration is decorative, not necessarily a photo of the labeled place. Wikimedia photos require license/attribution review before commercial reuse. No ratings, visitor counts, or live prices are fabricated.
