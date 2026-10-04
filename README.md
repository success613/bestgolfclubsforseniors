# bestgolfclubsforseniors.com

Static site, no dependencies. `node build.mjs` writes `site/`; `node vercel.json.mjs` writes `vercel.json` (redirects for `/go/` affiliate links).

- Products and list prices: `src/products.mjs` (checked Oct 2026)
- Pages: `src/pages/` (English at `/`, Spanish at `/es/`)
- Club finder logic: `assets/finder.js`
- Set `GA_ID` in `build.mjs` once the GA4 property exists.
