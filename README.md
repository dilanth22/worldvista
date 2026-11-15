# WorldVista V3 — Wonders of the World

Premium cinematic redesign of WorldVista V2. Static Cloudflare Pages project.

## Deploy
GitHub repo root -> Cloudflare Pages. Framework: None. Build command: `npm run build`. Output: `dist`. Node >=18. No secrets or database.

## Data limitations
The country selector contains 249 countries and territories. Attraction discovery queries Wikidata by country and attraction classification, with English Wikipedia articles and Wikimedia Commons images. This is **not** a curated or guaranteed top-20 list. The SPARQL service may be slow, incomplete or rate-limited. Verify place details before travel. Images in the editorial hero and mosaic are illustrative Unsplash photos, not country-specific search results.

## Run tests
`npm test` and `npm run build`.
