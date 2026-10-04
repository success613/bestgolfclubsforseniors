// Static site generator for bestgolfclubsforseniors.com. No dependencies.
// Run: node build.mjs  → writes ./site   (English at /, Spanish at /es/)
import { mkdirSync, writeFileSync, copyFileSync, rmSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { products } from "./src/products.mjs";
import { pages } from "./src/pages/index.mjs";
import { illus } from "./src/illus.mjs";

const SITE = "https://bestgolfclubsforseniors.com";
const NAME = "Best Golf Clubs for Seniors";
const GA_ID = process.env.GA_ID ?? "G-PCQ82K5SEE";
const EMAIL = "hello@bestgolfclubsforseniors.com";
const AUTHOR = "Alejandro";
const OUT = "site";
const TODAY = "2026-10-04";

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const url = (slug) => (slug === "" ? "/" : `/${slug}/`);
const abs = (slug) => SITE + url(slug);
const fmtDate = (d, lang) => new Date(d + "T12:00:00Z").toLocaleDateString(lang === "es" ? "es-CO" : "en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

const UI = {
  en: {
    nav: [["club-finder", "Club finder"], ["best-drivers-for-seniors", "Drivers"], ["best-irons-for-seniors", "Irons"], ["best-hybrids-for-seniors", "Hybrids"], ["best-golf-club-sets-for-seniors", "Sets"], ["best-golf-balls-for-seniors", "Balls"]],
    cta: ["club-finder", "Find my specs"], other: ["es", "Español"], skip: "Skip to content", home: "Home",
    by: "By", upd: "Updated", srcs: "sources", how: "How we pick", faq: "Common questions", sources: "Sources", short: "Short answer",
    disc: `Buying through our links can earn us a commission at no cost to you. As an Amazon Associate we earn from qualifying purchases. <a href="/affiliate-disclosure/">How that works</a>. Many club makers don't sell new clubs on Amazon directly, so check who the seller is and whether the maker's warranty applies.`,
    footAbout: `Honest buying guides for golfers over 55: which drivers, irons, hybrids, sets and balls actually help slower swing speeds, based on launch-monitor research and maker specs. We earn a commission when you buy through some links, at no extra cost to you. As an Amazon Associate we earn from qualifying purchases.`,
    railFind: ["Not sure what fits?", "Enter how far you hit your driver. The finder suggests a starting flex, loft and bag set-up.", "Open the club finder"],
    railFit: ["Before you spend $500+", "A driver fitting costs about $80–175 in the US and settles flex and loft on a launch monitor.", "Flex and loft explained"],
  },
  es: {
    nav: [["es/buscador-de-palos", "Buscador de palos"], ["es", "Guía en español"]],
    cta: ["es/buscador-de-palos", "Encontrar mis palos"], other: ["", "English"], skip: "Ir al contenido", home: "Inicio",
    by: "Por", upd: "Actualizado", srcs: "fuentes", how: "Cómo elegimos", faq: "Preguntas frecuentes", sources: "Fuentes", short: "Respuesta corta",
    disc: `Si compras por nuestros enlaces podemos ganar una comisión sin costo para ti. Como Afiliado de Amazon ganamos con compras que califican. <a href="/affiliate-disclosure/">Cómo funciona (en inglés)</a>. Muchas marcas no venden palos nuevos directamente en Amazon: revisa quién es el vendedor y si aplica la garantía del fabricante.`,
    footAbout: `Guías honestas para golfistas de más de 55 años: qué drivers, hierros, híbridos, sets y bolas ayudan de verdad a una velocidad de swing más lenta. Ganamos una comisión cuando compras por algunos enlaces, sin costo extra para ti. Como Afiliado de Amazon ganamos con compras que califican.`,
    railFind: ["¿No sabes qué te sirve?", "Escribe cuánto mandas el driver. El buscador te sugiere flex, loft y cómo armar la bolsa.", "Abrir el buscador"],
    railFit: ["Antes de gastar US$500+", "Un fitting de driver cuesta unos US$80–175 en EE. UU. y define flex y loft con monitor de lanzamiento.", "Flex y loft explicados (en inglés)"],
  },
};

const LOGO = `<svg aria-hidden="true" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#F4EFE3"/><path d="M27 12v34" stroke="#17352A" stroke-width="3" stroke-linecap="round"/><path d="M28 12l16 6-16 6z" fill="#D9541E"/><ellipse cx="32" cy="48" rx="15" ry="4" fill="#2F6B4F"/><circle cx="40" cy="44" r="4.5" fill="#fff" stroke="#17352A" stroke-width="1.5"/></svg>`;

function header(p) {
  const u = UI[p.lang];
  const links = u.nav.map(([s, l]) => `<a href="${url(s)}"${s === p.slug ? ' aria-current="page"' : ""}>${l}</a>`).join("");
  const other = p.alt != null ? url(p.alt) : url(u.other[0]);
  return `<a class="skip" href="#content">${u.skip}</a>
<header class="site-header"><div class="wrap">
<a class="brand" href="${p.lang === "es" ? "/es/" : "/"}">${LOGO}<span>Best Golf Clubs <em>for Seniors</em></span></a>
<nav class="nav" aria-label="Main">${links}<a class="lang" href="${other}" hreflang="${p.lang === "es" ? "en" : "es"}" lang="${p.lang === "es" ? "en" : "es"}">${u.other[1]}</a><a class="nav-cta" href="${url(u.cta[0])}">${u.cta[1]}</a></nav>
</div></header>`;
}

function footer(p) {
  const u = UI[p.lang];
  return `<footer class="site-footer"><div class="wrap footer-grid">
<div><h2>${NAME}</h2><p>${u.footAbout}</p></div>
<div><h2>${p.lang === "es" ? "Guías (en inglés)" : "Guides"}</h2><ul>
<li><a href="/">Best golf clubs for seniors</a></li><li><a href="/best-drivers-for-seniors/">Drivers</a></li><li><a href="/best-irons-for-seniors/">Irons and wedges</a></li><li><a href="/best-hybrids-for-seniors/">Hybrids and fairway woods</a></li><li><a href="/best-golf-club-sets-for-seniors/">Complete sets</a></li><li><a href="/best-putters-for-seniors/">Putters</a></li><li><a href="/best-golf-balls-for-seniors/">Golf balls</a></li><li><a href="/best-golf-clubs-for-senior-women/">Senior women</a></li></ul></div>
<div><h2>${p.lang === "es" ? "Datos y herramientas" : "Data and tools"}</h2><ul>
<li><a href="/club-finder/">Club finder</a></li><li><a href="/es/buscador-de-palos/" hreflang="es">Buscador de palos (español)</a></li><li><a href="/senior-flex-vs-regular-flex/">Senior vs regular flex</a></li><li><a href="/driving-distance-by-age/">Driving distance by age</a></li><li><a href="/es/" hreflang="es">Guía en español</a></li></ul></div>
<div><h2>About</h2><ul>
<li><a href="/about/">About Alejandro</a></li><li><a href="/how-we-pick/">How we pick</a></li><li><a href="/affiliate-disclosure/">Affiliate disclosure</a></li><li><a href="/privacy/">Privacy</a></li><li><a href="/contact/">Contact</a></li><li><a href="/sitemap.xml">Sitemap</a></li></ul></div>
</div></footer>`;
}

function trail(p) { return [[p.lang === "es" ? "es" : "", UI[p.lang].home], [p.slug, p.crumb || p.h1]]; }
function breadcrumbs(p) {
  if (p.slug === "" || p.slug === "es") return "";
  const items = trail(p).map(([s, l], i, a) => i === a.length - 1 ? `<li aria-current="page">${esc(l)}</li>` : `<li><a href="${url(s)}">${esc(l)}</a></li>`).join("");
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${items}</ol></nav>`;
}

function rail(p) {
  if (p.noRail) return "";
  const u = UI[p.lang];
  const pk = p.rail && products[p.rail];
  const pick = pk ? `<div class="rail-box rail-pick"><h2>${p.lang === "es" ? "Nuestra elección" : "Our top pick"}</h2><img src="/assets/illus/${pk.id}.svg" alt="" width="240" height="180"><strong>${esc(pk.name)}</strong><p>${esc(pk.best)}.</p><a class="btn" href="/go/${pk.go}" rel="sponsored nofollow" data-product="${pk.id}">${p.lang === "es" ? "Ver precio en Amazon" : "Check price at Amazon"}</a></div>` : "";
  return `<aside class="rail" aria-label="${p.lang === "es" ? "Ayuda rápida" : "Quick help"}">${pick}
<div class="rail-box"><h2>${u.railFind[0]}</h2><p>${u.railFind[1]}</p><a class="btn secondary" href="${url(u.cta[0])}">${u.railFind[2]}</a></div>
<div class="rail-box"><h2>${u.railFit[0]}</h2><p>${u.railFit[1]}</p><a href="/senior-flex-vs-regular-flex/">${u.railFit[2]}</a></div>
</aside>`;
}
function mobileCta(p) {
  const pk = p.rail && products[p.rail];
  if (!pk) return "";
  return `<div class="mobile-cta" role="complementary" aria-label="Top pick"><span>${esc(pk.short)}</span><a class="btn" href="/go/${pk.go}" rel="sponsored nofollow" data-product="${pk.id}">${p.lang === "es" ? "Ver precio" : "Check price"}</a></div>`;
}
const faqHtml = (p) => !p.faq || !p.faq.length ? "" : `<section class="faq" aria-labelledby="faq-h"><h2 id="faq-h">${UI[p.lang].faq}</h2>${p.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${a}</p></details>`).join("")}</section>`;
const sourcesHtml = (p) => !p.sources || !p.sources.length ? "" : `<section aria-labelledby="src-h"><h2 id="src-h">${UI[p.lang].sources}</h2><ol class="sources">${p.sources.map(([l, u]) => `<li><a href="${u}" rel="noopener">${esc(l)}</a></li>`).join("")}</ol></section>`;
const strip = (h) => h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

function jsonLd(p) {
  const graph = [];
  if (p.slug === "") {
    graph.push({ "@type": "WebSite", "@id": SITE + "/#website", url: SITE + "/", name: NAME, inLanguage: ["en-US", "es"], publisher: { "@id": SITE + "/#org" } });
    graph.push({ "@type": "Organization", "@id": SITE + "/#org", name: NAME, url: SITE + "/", logo: SITE + "/assets/icon-512.png", email: EMAIL });
  }
  if (p.slug !== "" && p.slug !== "es") graph.push({ "@type": "BreadcrumbList", itemListElement: trail(p).map(([s, l], i) => ({ "@type": "ListItem", position: i + 1, name: l, item: abs(s) })) });
  if (["article", "home", "tool"].includes(p.type)) {
    graph.push({ "@type": p.type === "tool" ? "WebPage" : "Article", headline: p.h1, description: p.description, inLanguage: p.lang === "es" ? "es" : "en-US", url: abs(p.slug),
      datePublished: p.published || TODAY, dateModified: p.modified || TODAY, author: { "@type": "Person", name: AUTHOR, url: SITE + "/about/" },
      publisher: { "@type": "Organization", name: NAME, url: SITE + "/" }, mainEntityOfPage: abs(p.slug) });
  }
  const ids = [...new Set([...(p.body || "").matchAll(/<li class="pick[^"]*">[\s\S]*?data-product="([^"]+)"/g)].map((m) => m[1]))];
  if (ids.length) graph.push({ "@type": "ItemList", name: p.h1, itemListElement: ids.map((id, i) => ({ "@type": "ListItem", position: i + 1, name: products[id].name })) });
  if (p.faq && p.faq.length) graph.push({ "@type": "FAQPage", mainEntity: p.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: strip(a) } })) });
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`;
}

const BUILD = Date.now().toString(36);
function head(p) {
  const title = p.metaTitle || `${p.h1} | ${NAME}`;
  const alts = p.alt != null ? `<link rel="alternate" hreflang="${p.lang === "es" ? "es" : "en"}" href="${abs(p.slug)}"><link rel="alternate" hreflang="${p.lang === "es" ? "en" : "es"}" href="${abs(p.alt)}"><link rel="alternate" hreflang="x-default" href="${abs(p.lang === "es" ? p.alt : p.slug)}">` : "";
  const ga = GA_ID ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="/go/"]');if(!a)return;gtag('event','affiliate_click',{product:a.dataset.product||a.getAttribute('href').split('/')[2],link_url:a.getAttribute('href'),page_path:location.pathname,transport_type:'beacon'});});</script>` : "";
  return `<!doctype html><html lang="${p.lang === "es" ? "es" : "en-US"}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${abs(p.slug)}">${alts}
<meta name="robots" content="${p.noindex ? "noindex,follow" : "index,follow,max-image-preview:large,max-snippet:-1"}">
<meta property="og:type" content="${p.slug === "" ? "website" : "article"}"><meta property="og:site_name" content="${NAME}"><meta property="og:locale" content="${p.lang === "es" ? "es_LA" : "en_US"}">
<meta property="og:title" content="${esc(p.h1)}"><meta property="og:description" content="${esc(p.description)}"><meta property="og:url" content="${abs(p.slug)}">
<meta property="og:image" content="${SITE}/assets/og.png"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#17352A">
<link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600..800&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/style.css?v=${BUILD}">
${ga}
${jsonLd(p)}
</head>`;
}

function render(p) {
  const u = UI[p.lang];
  const byline = p.type === "article" ? `<p class="byline">${u.by} <a href="/about/">${AUTHOR}</a> · ${u.upd} ${fmtDate(p.modified || TODAY, p.lang)} · ${p.sources ? p.sources.length : 0} ${u.srcs} · <a href="/how-we-pick/">${u.how}</a></p>` : "";
  const disc = /data-product=/.test(p.body || "") ? `<p class="disclosure">${u.disc}</p>` : "";
  const answer = p.answer ? `<section class="answer" aria-labelledby="ans-h"><h2 id="ans-h">${u.short}</h2>${p.answer}</section>` : "";
  const main = p.type === "home"
    ? `<main id="content">${p.hero || ""}<div class="article"><div class="col">${disc}${answer}${p.body}${faqHtml(p)}${sourcesHtml(p)}</div>${rail(p)}</div></main>`
    : `<div class="article"><main id="content">${breadcrumbs(p)}<h1>${esc(p.h1)}</h1>${byline}${disc}${answer}${p.body}${faqHtml(p)}${sourcesHtml(p)}</main>${rail(p)}</div>`;
  const cta = mobileCta(p);
  const scripts = (p.scripts || []).map((s) => `<script src="/assets/${s}?v=${BUILD}" defer></script>`).join("");
  return `${head(p)}<body${cta ? ' class="has-cta"' : ""}>${header(p)}${main}${cta}${footer(p)}${scripts}</body></html>`;
}

// --- Build ---
rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, "assets", "illus"), { recursive: true });
for (const f of readdirSync("assets")) copyFileSync(join("assets", f), join(OUT, "assets", f));
for (const [id, s] of Object.entries(illus)) writeFileSync(join(OUT, "assets", "illus", id + ".svg"), s);
if (existsSync("favicon.ico")) copyFileSync("favicon.ico", join(OUT, "favicon.ico"));
writeFileSync(join(OUT, "site.webmanifest"), JSON.stringify({ name: NAME, short_name: "Senior Golf Clubs", start_url: "/", display: "browser", background_color: "#F4EFE3", theme_color: "#17352A", icons: [{ src: "/assets/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/assets/icon-512.png", sizes: "512x512", type: "image/png" }] }, null, 2));

for (const p of pages) {
  const file = p.slug === "" ? join(OUT, "index.html") : join(OUT, p.slug, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(p));
}
writeFileSync(join(OUT, "404.html"), render({ slug: "404", lang: "en", h1: "That page isn't here", type: "plain", noRail: true, noindex: true, description: "Page not found.", body: `<p>The page may have moved. Start from the <a href="/">home page</a> or try the <a href="/club-finder/">club finder</a>.</p>` }));

const sm = pages.filter((p) => !p.noindex).map((p) => {
  const alt = p.alt != null ? `<xhtml:link rel="alternate" hreflang="${p.lang === "es" ? "es" : "en"}" href="${abs(p.slug)}"/><xhtml:link rel="alternate" hreflang="${p.lang === "es" ? "en" : "es"}" href="${abs(p.alt)}"/>` : "";
  return `<url><loc>${abs(p.slug)}</loc><lastmod>${p.modified || TODAY}</lastmod>${alt}</url>`;
}).join("");
writeFileSync(join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${sm}</urlset>`);
writeFileSync(join(OUT, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /go/\n\nSitemap: ${SITE}/sitemap.xml\n`);

const llm = [`# ${NAME}`, "", "> Honest buying guides for golfers over 55 with slower swing speeds: drivers, irons, hybrids and fairway woods, complete sets, putters and golf balls, plus a club finder that turns driver distance into starting specs (flex, loft, shaft weight, bag set-up). English, with a Spanish section at /es/.", "", "Specs come from maker pages and independent testing (Golf Digest, MyGolfSpy, GOLF.com, GolfWRX). Fitting guidance cites TrackMan, Arccos, True Spec Golf and USGA data. Maker list prices as of October 2026.", "", "## Tools", `- [Club finder](${abs("club-finder")}): driver distance or swing speed → flex, loft, shaft weight, set-up.`, `- [Buscador de palos (español)](${abs("es/buscador-de-palos")})`, "", "## Guides"]
  .concat(pages.filter((p) => (p.type === "article" || p.type === "home") && !p.noindex).map((p) => `- [${p.h1}](${abs(p.slug)}): ${p.description}`))
  .concat(["", "## About", `- [About](${abs("about")})`, `- [How we pick](${abs("how-we-pick")})`, `- [Affiliate disclosure](${abs("affiliate-disclosure")})`]);
writeFileSync(join(OUT, "llms.txt"), llm.join("\n") + "\n");
console.log(`Built ${pages.length} pages → ${OUT}/`);
