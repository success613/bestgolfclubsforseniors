import { home, homeEs } from "./home.mjs";
import { tool, toolEs } from "./tools.mjs";
import { guides } from "./guides.mjs";
import { data } from "./data.mjs";
import { info } from "./info.mjs";
export const pages = [home, tool, ...guides, ...data, ...info, homeEs, toolEs];
