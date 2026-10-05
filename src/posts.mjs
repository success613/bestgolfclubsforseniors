// Scheduled blog posts. Each file in src/posts/ exports `post` with a `publish` date (YYYY-MM-DD).
// A post goes live on the first build on or after its publish date (Bogotá time). A scheduled
// GitHub Action rebuilds the site on publishing days, so posts appear on their own.
import { readdirSync } from "node:fs";
export const TODAY = process.env.BUILD_DATE || new Date(Date.now() - 5 * 3600e3).toISOString().slice(0, 10);
const dir = new URL("./posts/", import.meta.url);
const all = [];
for (const f of readdirSync(dir).filter((f) => f.endsWith(".mjs")).sort()) {
  const m = await import(new URL(f, dir));
  all.push({ type: "article", modified: m.post.publish, ...m.post });
}
export const allPosts = all;
export const posts = all.filter((p) => p.publish <= TODAY).sort((a, b) => b.publish.localeCompare(a.publish));
export const scheduled = all.filter((p) => p.publish > TODAY).sort((a, b) => a.publish.localeCompare(b.publish));

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const card = (p) => `<li><a href="/${p.slug}/">${esc(p.h1)}</a><span>${esc(p.description)}</span></li>`;
// "More guides" box appended to the hub pages a post names in `hubs`, so new posts get internal links.
export function linkHubs(pages) {
  for (const pg of pages) {
    const rel = posts.filter((p) => p.slug !== pg.slug && (p.hubs || []).includes(pg.slug));
    if (rel.length && pg.body) pg.body += `<aside class="more-guides" aria-label="Related guides"><h2>Related guides</h2><ul>${rel.map(card).join("")}</ul></aside>`;
  }
  return pages;
}
export const blogIndex = (extra = {}) => ({
  slug: "blog", type: "plain", noRail: true, crumb: "Guides", h1: "Buying guides and how-tos",
  metaTitle: "Buying Guides and How-Tos",
  description: "Every buying guide and how-to on the site, newest first.",
  modified: posts[0] ? posts[0].publish : undefined, noindex: posts.length === 0,
  body: posts.length ? `<ul class="post-list">${posts.map(card).join("")}</ul>` : "<p>New guides are on the way.</p>",
  ...extra,
});
