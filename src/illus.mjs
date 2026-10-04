// Flat illustrations by club type. Every product card shows the drawing for its type
// (driver, fairway wood, hybrid, iron, hybrid-iron, wedge, set, putter, ball) and is labeled
// "Illustration": these show the kind of club, not the exact model's paint job.
import { products } from "./products.mjs";
const W = 240, H = 180, BG = "#F4EFE3", INK = "#17352A", HEAD = "#1E2328", FACE = "#C9CED2", STEEL = "#AEB6BD", GRIP = "#2B2F34";
const svg = (body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" rx="14" fill="${BG}"/><ellipse cx="120" cy="160" rx="92" ry="6" fill="${INK}" opacity=".08"/>${body}</svg>`;
const shaft = (x1, y1, x2 = 196, y2 = 8) => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${STEEL}" stroke-width="4" stroke-linecap="round"/>`;
const grooves = (x, y, w, n, gap) => Array.from({ length: n }, (_, i) => `<path d="M${x} ${y + i * gap}h${w}" stroke="#8E979F" stroke-width="1.6"/>`).join("");

const wood = (s) => svg(`${shaft(150 - 40 * (1 - s), 104, 210, 10)}
<g transform="translate(${120 - 70 * s} ${118 - 50 * s}) scale(${s})"><path d="M10 70C-6 40 18 6 70 4c48-2 76 22 72 52-2 22-20 36-50 40-34 4-68-4-82-26z" fill="${HEAD}" stroke="${INK}" stroke-width="2"/>
<path d="M18 74c30 18 80 20 112 2" stroke="${FACE}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M40 30c20-12 54-14 76-2" stroke="#3A4048" stroke-width="3" fill="none"/></g>`);

const ART = {
  driver: () => wood(1),
  fairway: () => wood(0.78),
  hybrid: () => svg(`${shaft(146, 100, 210, 10)}<path d="M64 112c-8-20 6-42 40-46 32-4 52 10 52 28 0 16-14 26-40 28-26 2-46-2-52-10z" fill="${HEAD}" stroke="${INK}" stroke-width="2"/><path d="M68 116c22 10 60 10 84-4" stroke="${FACE}" stroke-width="6" fill="none" stroke-linecap="round"/>`),
  irons: () => svg(`${shaft(160, 64, 210, 8)}<path d="M150 66l12 4-8 62c-2 10-10 14-22 14H72c-12 0-18-8-14-18l8-24c4-10 12-14 24-14h40c8 0 14-6 18-14z" fill="${STEEL}" stroke="${INK}" stroke-width="2"/><path d="M78 108h56l-4 26H74z" fill="#C5CCD2"/>${grooves(82, 114, 46, 4, 5)}`),
  "hybrid-irons": () => svg(`${shaft(160, 60, 210, 8)}<path d="M150 62l12 4-6 64c-2 12-12 18-26 18H74c-16 0-24-10-18-24l10-26c6-12 16-16 30-16h36c8 0 14-8 18-20z" fill="${HEAD}" stroke="${INK}" stroke-width="2"/><path d="M80 104h56l-4 30H76z" fill="${STEEL}"/>${grooves(84, 112, 46, 4, 5)}`),
  wedge: () => svg(`${shaft(158, 56, 210, 6)}<path d="M148 58l12 4-6 66c-2 12-10 18-24 18H78c-14 0-20-10-16-22l14-30c6-12 16-16 30-16h26c8 0 12-10 16-20z" fill="${STEEL}" stroke="${INK}" stroke-width="2"/>${grooves(82, 104, 54, 7, 5)}`),
  putter: () => svg(`${shaft(122, 92, 200, 10)}<path d="M54 100c0-14 12-22 30-22h72c18 0 30 8 30 22v20c0 14-12 22-30 22H84c-18 0-30-8-30-22z" fill="${HEAD}" stroke="${INK}" stroke-width="2"/><path d="M60 92h120" stroke="${FACE}" stroke-width="5" stroke-linecap="round"/><path d="M120 104v30" stroke="#F4EFE3" stroke-width="4" stroke-linecap="round"/>`),
  "putter-retreve": () => svg(`${shaft(122, 92, 200, 10)}<path d="M54 100c0-14 12-22 30-22h72c18 0 30 8 30 22v20c0 14-12 22-30 22H84c-18 0-30-8-30-22z" fill="${HEAD}" stroke="${INK}" stroke-width="2"/><path d="M60 92h120" stroke="${FACE}" stroke-width="5" stroke-linecap="round"/><circle cx="152" cy="116" r="15" fill="${BG}" stroke="${FACE}" stroke-width="3"/><circle cx="152" cy="116" r="9" fill="#FFFFFF" stroke="#C9CED2"/>`),
  set: () => svg(`<g stroke="${STEEL}" stroke-width="4" stroke-linecap="round"><path d="M98 64L84 22"/><path d="M108 62L106 16"/><path d="M120 62l8-46"/><path d="M132 64l18-40"/></g>
<path d="M76 20c-8-6-4-14 6-12l14 4c4 2 4 8-2 10z" fill="${HEAD}"/><path d="M96 14c-4-8 4-12 12-8l8 6c2 4-2 8-8 6z" fill="${HEAD}"/><path d="M124 12l12-2 4 8-14 4z" fill="${STEEL}"/><path d="M146 20l12-2 4 8-14 4z" fill="${STEEL}"/>
<rect x="86" y="58" width="64" height="98" rx="16" fill="#2F6B4F" stroke="${INK}" stroke-width="2"/><rect x="82" y="56" width="72" height="16" rx="6" fill="${GRIP}"/><rect x="100" y="92" width="36" height="34" rx="6" fill="#245640"/><path d="M150 82c16 2 18 40 2 46" stroke="${GRIP}" stroke-width="5" fill="none"/>`),
  ball: () => svg(`<rect x="44" y="70" width="96" height="70" rx="8" fill="#FFFFFF" stroke="${INK}" stroke-width="2"/><rect x="44" y="70" width="96" height="18" rx="8" fill="#2F6B4F"/>
<circle cx="160" cy="104" r="34" fill="#FFFFFF" stroke="#B9C0C6" stroke-width="2.5"/>${Array.from({ length: 19 }, (_, i) => { const a = i * 2.4, r = 6 + (i % 4) * 6; return `<circle cx="${(160 + Math.cos(a) * r).toFixed(1)}" cy="${(104 + Math.sin(a) * r).toFixed(1)}" r="2.2" fill="#D9DEE2"/>`; }).join("")}
<circle cx="72" cy="112" r="12" fill="#FFFFFF" stroke="#B9C0C6" stroke-width="2"/><circle cx="104" cy="112" r="12" fill="#FFFFFF" stroke="#B9C0C6" stroke-width="2"/>`),
};

export const illus = Object.fromEntries(Object.values(products).map((p) => [p.id, ART[p.cat]()]));
