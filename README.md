# WorldVista — Explore Beyond Borders

A responsive English-language country and place discovery website. Country list includes 249 ISO 3166-1 countries and territories. Country selection triggers live Wikipedia searches and displays up to 20 relevant encyclopedia results with available thumbnails and summaries. Place cards open a detail dialog with a source link.

## Important content limitation

**This is NOT a verified database of the top 20 tourist attractions in each of 200 countries.** The live Wikipedia search returns up to 20 potentially relevant pages, and can include general or tangential results. Some places have no thumbnails and some countries may return fewer than 20 results. Results depend on Wikipedia availability and the user's network. For editorially verified top attractions, build and maintain a curated destination dataset with reviewed imagery, source attribution and licensing.

## Cloudflare Pages deployment (GitHub)

1. Extract ZIP and upload its contents to the root of a new GitHub repository (do not upload the ZIP itself as the only file).
2. In Cloudflare dashboard open **Workers & Pages → Create → Pages → Connect to Git** (menu names may vary).
3. Select the GitHub repository. Framework preset: **None**. Build command: `npm run build`. Build output directory: `dist`. Root directory: `/`.
4. Deploy. Open the `*.pages.dev` URL. Country images and place information load via external services.
5. Optionally add a custom domain in the Pages project settings.

## Local testing

- Node.js 18+ required for build/tests.
- `npm test`
- `npm run build`
- For a local preview use `python -m http.server 8000` and open `http://localhost:8000`. Do not open `index.html` using a file:// URL because `fetch('/countries.json')` needs a web server.

## Architecture

- Frontend: static HTML/CSS/vanilla JS, no npm dependencies to deploy.
- Data: bundled ISO country names and codes, regions and optional coordinates.
- Place content: public Wikipedia MediaWiki API, called directly from browser using CORS. No API key or database required.
- Hosting: Cloudflare Pages static hosting; no Workers, D1, Supabase, authentication or admin required for the current public discovery features.
- SEO: landing-page metadata. Dynamically generated place results are client-side, so place-specific pages are not search-engine optimized.

## Licensing / data accuracy

Wikipedia content and Wikimedia photos have varying licensing and attribution obligations. The app links to original pages; for production publishing, review and display full image-specific license attribution. The homepage hero image is served from Unsplash; verify its license and availability. Country flags use flagcdn.com. Google Fonts are used for typography. The site does not provide verified travel advice.

## Security

All remote text is escaped before insertion into HTML. External links use `noopener noreferrer`. Security headers included for Cloudflare Pages. No login, payments, personal data collection or server secrets.

## Known limitations

- No editorially curated top-20 lists; results are Wikipedia search suggestions.
- Some results may be irrelevant, missing imagery, or fewer than 20.
- External API/thumbnail hosts may be unavailable or blocked in some regions.
- No offline support, translations, itinerary booking, or travel advisory feeds.
- Browser integration and live Wikipedia calls require validation on the deployed site.
