import { writeFileSync } from "node:fs";
import { redirects } from "./src/products.mjs";
const cfg = {
  buildCommand: "node build.mjs",
  outputDirectory: "site",
  cleanUrls: true,
  trailingSlash: true,
  redirects: [
    { source: "/:path((?!.*\\.).*[^/])", destination: "/:path/", permanent: true },
    ...redirects,
  ].slice(1),
  headers: [
    { source: "/go/(.*)", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
    { source: "/assets/(.*)", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    { source: "/(.*)", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ] },
  ],
};
writeFileSync("vercel.json", JSON.stringify(cfg, null, 2) + "\n");
