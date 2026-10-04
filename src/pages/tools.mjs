import { table } from "../components.mjs";

function form(lang) {
  const es = lang === "es";
  const t = es ? {
    title: "Tu golpe con el driver", golfer: "Soy", man: "Hombre", woman: "Mujer",
    dist: "¿Cuánto llega normalmente tu drive (distancia total)?", mph: "¿Conoces tu velocidad de swing con el driver? (opcional, mph)",
    slice: "Mi golpe malo se va a la derecha (slice), soy diestro", hands: "Tengo artritis o manos cansadas", go: "Ver mis recomendaciones",
    tool: "Sugiere especificaciones de palos de golf (flex, loft, peso de la varilla, híbridos) a partir de la distancia o velocidad del driver de un golfista senior.",
    dDesc: "Distancia total típica del drive en yardas", mDesc: "Velocidad del palo con el driver en mph, si la conoces",
    opts: [["140", "Menos de 150 yardas"], ["163", "150–175 yardas"], ["188", "175–200 yardas"], ["212", "200–225 yardas"], ["235", "Más de 225 yardas"]],
  } : {
    title: "Your driver", golfer: "I am a", man: "Man", woman: "Woman",
    dist: "How far does your drive usually go (total distance)?", mph: "Know your driver swing speed? (optional, mph)",
    slice: "My bad shot curves right (a slice), right-handed", hands: "I have arthritis or tired hands", go: "Show my specs",
    tool: "Suggests starting golf club specs (shaft flex, driver loft, shaft weight, hybrids) from a senior golfer's driver distance or swing speed.",
    dDesc: "Typical total drive distance in yards", mDesc: "Driver club speed in mph, if known",
    opts: [["140", "Under 150 yards"], ["163", "150–175 yards"], ["188", "175–200 yards"], ["212", "200–225 yards"], ["235", "Over 225 yards"]],
  };
  return `<form id="finder" class="finder" toolname="${es ? "buscar_specs_palos_senior" : "find_senior_club_specs"}" tooldescription="${t.tool}">
<fieldset><legend>${t.title}</legend>
<p class="field"><span class="label">${t.golfer}</span><label><input type="radio" name="golfer" value="man" checked> ${t.man}</label> <label><input type="radio" name="golfer" value="woman"> ${t.woman}</label></p>
<p class="field"><label for="distance" class="label">${t.dist}</label><select id="distance" name="distance" toolparamdescription="${t.dDesc}">${t.opts.map(([v, l], i) => `<option value="${v}"${i === 2 ? " selected" : ""}>${l}</option>`).join("")}</select></p>
<p class="field"><label for="mph" class="label">${t.mph}</label><input id="mph" name="mph" type="number" inputmode="numeric" min="40" max="130" placeholder="85" toolparamdescription="${t.mDesc}"></p>
<p class="field"><label><input type="checkbox" name="slice" value="1"> ${t.slice}</label></p>
<p class="field"><label><input type="checkbox" name="hands" value="1"> ${t.hands}</label></p>
<button class="btn big" type="submit">${t.go}</button>
</fieldset></form>
<div id="finder-result" aria-live="polite"></div>`;
}

const SRC = [
  ["GOLF.com: Shaft flex by swing speed (True Spec Golf chart)", "https://golf.com/instruction/shaft-flex-you-should-play-based-on-swing-speed/"],
  ["Golf Monthly: What loft driver should I use?", "https://golfmonthly.com/gear/gear-blog/what-loft-of-driver-should-i-use-69479"],
  ["Golf Digest: TrackMan driver loft test", "https://www.golfdigest.com/story/hltrackmanloft"],
  ["Golf Digest: Average golfer TrackMan numbers (club speed vs distance)", "https://www.golfdigest.com/story/fitness-friday-fantasy-vs-real"],
  ["GolfWRX: Tom Wishon's keys to set make-up", "https://golfwrx.com/279517/tom-wishons-keys-to-set-makeup/"],
  ["Golf Digest: Does a lighter shaft create more swing speed?", "https://www.golfdigest.com/story/does-a-lighter-shaft-create-more-swing-speed-not-so-fast"],
  ["Golf Pride: Benefits of oversize grips", "https://golfpride.com/us/en-us/blog/benefits-of-oversize-grips.html"],
  ["MyGolfSpy: Why compression alone is the wrong way to choose a ball", "https://mygolfspy.com/buyers-guide/why-compression-alone-is-the-wrong-way-for-slower-swing-speed-golfers-to-choose-a-golf-ball/"],
];

export const tool = {
  slug: "club-finder", lang: "en", alt: "es/buscador-de-palos", type: "tool", crumb: "Club finder", noRail: true, scripts: ["finder.js"],
  h1: "Senior golf club finder",
  metaTitle: "Senior Golf Club Finder: Flex, Loft and Set-Up From Your Driver Distance",
  description: "Free tool: enter how far you hit your driver and get a suggested shaft flex, driver loft, shaft weight and bag set-up for senior golfers, with the sources behind each rule.",
  body: `<p class="lede">Enter your usual driver distance (or your swing speed, if you know it). You'll get a starting shaft flex, driver loft, shaft weight and bag set-up, plus models to compare.</p>
${form("en")}
<h2>How the finder works</h2>
<p>It estimates driver speed from distance using about 2.3 yards of total distance per mph, the ratio in TrackMan's average-golfer numbers (93.4 mph and about 214 yards total, as reported by Golf Digest). Slower swingers usually get a little less distance per mph, so it may slightly underestimate a slow swing. Then it applies published rules of thumb:</p>
${table(["Driver speed", "Flex (True Spec chart)", "Driver loft", "Shaft weight"], [["Under 72 mph", "Ladies (L)", "12°–14°", "40–50 g"], ["72–83 mph", "Senior (A)", "12°–14°", "40–50 g"], ["84–96 mph", "Regular (R)", "10.5°–12° (12°–14° up to 85 mph)", "50–60 g"], ["97 mph+", "Stiff (S)", "9°–10.5°", "60 g+"]])}
<p>Bag set-up follows fitter Tom Wishon's advice: replace the longest irons you can't hit consistently with hybrids or high-lofted woods, because at slower speeds the gaps between long irons shrink to just a few yards.</p>
<h2>What it can't tell you</h2>
<ul><li>Flex letters aren't standardized; one brand's Regular can play like another's Stiff.</li><li>Distance depends on strike, course firmness and altitude, not just speed.</li><li>Lighter isn't always longer: in Golf Digest's shaft test, only 12% of golfers swung fastest with the lightest shaft.</li></ul>
<p>Use the result to narrow your shortlist, then confirm on a launch monitor if you're spending real money.</p>`,
  sources: SRC,
};

export const toolEs = {
  slug: "es/buscador-de-palos", lang: "es", alt: "club-finder", type: "tool", crumb: "Buscador de palos", noRail: true, scripts: ["finder.js"],
  h1: "Buscador de palos de golf para seniors",
  metaTitle: "Buscador de palos de golf para seniors: flex, loft y armado de la bolsa",
  description: "Herramienta gratis: escribe cuánto mandas el driver y recibe flex, loft, peso de la varilla y cómo armar la bolsa para golfistas senior, con las fuentes de cada regla.",
  body: `<p class="lede">Escribe tu distancia normal con el driver (o tu velocidad de swing, si la sabes). Te sugiere flex, loft, peso de la varilla y cómo armar la bolsa, con modelos para comparar.</p>
${form("es")}
<h2>Cómo funciona</h2>
<p>Estima la velocidad del driver con unas 2,3 yardas de distancia total por cada mph, la relación de los números promedio de TrackMan (93,4 mph y unas 214 yardas totales, según Golf Digest). Luego aplica reglas publicadas:</p>
${table(["Velocidad del driver", "Flex (tabla True Spec)", "Loft del driver", "Peso de la varilla"], [["Menos de 72 mph", "Ladies (L)", "12°–14°", "40–50 g"], ["72–83 mph", "Senior (A)", "12°–14°", "40–50 g"], ["84–96 mph", "Regular (R)", "10,5°–12° (12°–14° hasta 85 mph)", "50–60 g"], ["97 mph o más", "Stiff (S)", "9°–10,5°", "60 g o más"]])}
<p>El armado de la bolsa sigue el consejo del fitter Tom Wishon: cambia los hierros largos que no pegas con consistencia por híbridos o maderas de mucho loft.</p>
<h2>Lo que no puede saber</h2>
<ul><li>Las letras de flex no son estándar: el Regular de una marca puede jugar como el Stiff de otra.</li><li>La distancia depende del contacto, la cancha y la altura sobre el nivel del mar (en Bogotá o Ciudad de México la bola vuela más).</li><li>Más liviano no siempre es más largo.</li></ul>`,
  sources: SRC,
};
