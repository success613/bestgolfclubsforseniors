import { products } from "./products.mjs";
export const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const T = {
  en: { list: "Maker's list price", check: "Check price at Amazon", skip: "Skip it if:", ill: "Illustration", drawback: "The catch:", year: "Released" },
  es: { list: "Precio de lista del fabricante", check: "Ver precio en Amazon", skip: "No es para ti si:", ill: "Ilustración", drawback: "Lo malo:", year: "Lanzado" },
};

// One ranked product card. `skip` is an honest "skip it if…" line.
export function pick(id, role, skip, lang = "en") {
  const base = products[id];
  if (!base) throw new Error("Unknown product " + id);
  const p = lang === "es" && base.es ? { ...base, ...base.es } : base;
  const t = T[lang];
  const alt = `${t.ill}: ${p.name}`;
  return `<li class="pick has-img">
<figure class="pick-img"><img src="/assets/illus/${id}.svg" alt="${esc(alt)}" width="240" height="180" loading="lazy" decoding="async"><figcaption>${t.ill}</figcaption></figure>
<div><p class="role">${esc(role || p.best)}</p><h3>${esc(p.name)}</h3></div>
<p class="why">${esc(p.how)}</p>
<ul class="specs">${p.specs.map((s) => `<li>${esc(s)}</li>`).join("")}${p.year ? `<li>${t.year} ${p.year}</li>` : ""}</ul>
${skip ? `<p class="skip-if"><strong>${t.skip}</strong> ${esc(skip)}</p>` : `<p class="skip-if"><strong>${t.drawback}</strong> ${esc(p.drawback)}</p>`}
<div class="buy"><span class="price"><small>${t.list}</small>${esc(p.list)}</span>
<a class="btn" href="/go/${p.go}" rel="sponsored nofollow" data-product="${id}">${t.check}</a></div>
</li>`;
}
export const picks = (rows, lang = "en") => `<ol class="picks">${rows.map(([id, role, skip]) => pick(id, role, skip, lang)).join("")}</ol>`;

export function table(head, rows) {
  return `<div class="table-wrap"><table><thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join("")}</tr>`).join("")}</tbody></table></div>`;
}
export const note = (title, html) => `<div class="note" role="note"><strong>${title}</strong> ${html}</div>`;
export const buyLink = (id, text) => `<a href="/go/${products[id].go}" rel="sponsored nofollow" data-product="${id}">${esc(text || products[id].short)}</a>`;
