// Tells IndexNow (Bing, Yandex, Seznam, Naver…) about posts published today.
// Run by the scheduled-publish GitHub Action after the rebuild is pushed.
// Usage: SITE_HOST=example.com node scripts/indexnow.mjs [--date YYYY-MM-DD]
import { readdirSync } from "node:fs";
import { INDEXNOW_KEY } from "../src/indexnow.mjs";
const host = process.env.SITE_HOST;
const i = process.argv.indexOf("--date");
const day = i > 0 ? process.argv[i + 1] : new Date(Date.now() - 5 * 3600e3).toISOString().slice(0, 10);
const urls = [];
for (const f of readdirSync(new URL("../src/posts/", import.meta.url)).filter((f) => f.startsWith(day) && f.endsWith(".mjs"))) {
  const { post } = await import(new URL(`../src/posts/${f}`, import.meta.url));
  urls.push(`https://${host}/${post.slug}/`);
}
if (!urls.length) { console.log(`No post dated ${day}; nothing to submit.`); process.exit(0); }
urls.push(`https://${host}/blog/`, `https://${host}/`);
// Wait until the new page is live on Vercel (up to ~10 minutes).
for (let n = 0; n < 20; n++) {
  const r = await fetch(urls[0], { redirect: "follow" }).catch(() => null);
  if (r && r.ok) break;
  await new Promise((res) => setTimeout(res, 30000));
}
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation: `https://${host}/${INDEXNOW_KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow ${res.status}`, urls.join(" "));
if (res.status >= 400) process.exit(1);
