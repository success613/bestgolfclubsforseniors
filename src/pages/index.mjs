import { home, homeEs } from "./home.mjs";
import { tool, toolEs } from "./tools.mjs";
import { guides } from "./guides.mjs";
import { data } from "./data.mjs";
import { info } from "./info.mjs";
import { posts, linkHubs, blogIndex } from "../posts.mjs";
export const pages = linkHubs([home, tool, ...guides, ...data, ...posts.map((p) => ({ lang: "en", ...p })), blogIndex({ lang: "en" }), ...info, homeEs, toolEs]);
