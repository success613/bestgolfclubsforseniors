import { picks, table, note, buyLink } from "../components.mjs";

const S = {
  arccos22: ["GOLF.com: How much distance golfers lose with age (Arccos data)", "https://golf.com/instruction/driving/how-much-distance-golfers-lose-age/"],
  arccos24: ["Golf Digest: Arccos data on driving distance (2024)", "https://www.golfdigest.com/story/arccos-new-data-driving-distance-at-standstill-for-average-golfers-golf-ball-rollback-looms"],
  shotscope: ["MyGolfSpy: Shot Scope case study, 30-year-olds vs 60-year-olds", "https://mygolfspy.com/news-opinion/shot-scope-case-study-30-year-olds-versus-60-year-olds-putts-per-round-driving-distance/"],
  loft: ["Golf Digest: TrackMan driver loft test", "https://www.golfdigest.com/story/hltrackmanloft"],
  hybrid: ["Golf Digest: TrackMan hybrid vs 3-iron test", "https://www.golfdigest.com/story/hltrackmanhybrid"],
  flex: ["GOLF.com: Shaft flex by swing speed (True Spec Golf)", "https://golf.com/instruction/shaft-flex-you-should-play-based-on-swing-speed/"],
  ball: ["MyGolfSpy: Is there a right ball compression for your swing speed?", "https://mygolfspy.com/news-opinion/is-there-a-right-golf-ball-compression-for-your-swing-speed/"],
  fit: ["MyGolfSpy: The real cost of getting fitted in 2026", "https://mygolfspy.com/news-opinion/the-real-cost-of-getting-fitted-for-golf-clubs-in-2026/"],
  ping: ["MyGolfSpy: PING drops G440 prices (Aug 2026)", "https://mygolfspy.com/news-opinion/ping-drops-g440-driver-prices-but-not-the-g440k/"],
};

export const home = {
  slug: "", lang: "en", alt: "es", type: "home", rail: "qi4d-max-lite",
  h1: "Best Golf Clubs for Seniors (2026)",
  metaTitle: "Best Golf Clubs for Seniors (2026): Drivers, Irons, Hybrids, Sets",
  description: "The best golf clubs for seniors in 2026, picked for slower swing speeds: light drivers with more loft, easy-launch irons, hybrids, complete senior sets and balls. Plus a free club finder.",
  hero: `<section class="hero"><div class="wrap hero-grid"><div>
<p class="eyebrow">Updated October 2026 · For golfers 55+</p>
<h1>Best Golf Clubs for Seniors (2026)</h1>
<p class="lede">On average, men in their 70s drive the ball about 45 yards shorter than men in their 20s. The right clubs win some of that back: more loft, lighter shafts, and hybrids where the long irons used to be. Here's what to buy, by category, and why.</p>
<p class="hero-ctas"><a class="btn big" href="/club-finder/">Find my specs in 1 minute</a><a class="btn big ghost" href="#picks">See the picks</a></p>
</div>
<figure class="hero-stat"><p class="stat-k">−45 yd</p><p>Average driver distance lost by men between their 20s and their 70s, in Arccos data from about 4 million rounds.</p><a href="/driving-distance-by-age/">Distance by age</a></figure>
</div></section>`,
  answer: `<p>For most senior golfers: a <strong>light driver with 12° or more of loft</strong>, <strong>Senior (A) flex graphite shafts</strong>, <strong>hybrids or 7- and 9-woods instead of the 4, 5 and maybe 6 irons</strong>, and <strong>wide-sole game-improvement irons</strong>. Our overall picks are the ${buyLink("qi4d-max-lite")} driver, ${buyLink("qi-max-hl-irons")} irons and the PING G440 hybrid in its light HL build. On a budget, the ${buyLink("wilson-profile-senior")} set covers everything for about $600.</p>`,
  body: `
<h2 id="picks">Our top picks by category</h2>
${picks([
  ["qi4d-max-lite", "Best driver for seniors"],
  ["qi-max-hl-irons", "Best irons for seniors"],
  ["g440-hybrid-hl", "Best hybrid for seniors"],
  ["wilson-profile-senior", "Best complete set for seniors"],
  ["hb-soft-2-retreve", "Best putter for seniors"],
  ["srixon-soft-feel", "Best golf ball for seniors"],
])}
<p>Full rankings: <a href="/best-drivers-for-seniors/">drivers</a> · <a href="/best-irons-for-seniors/">irons and wedges</a> · <a href="/best-hybrids-for-seniors/">hybrids and fairway woods</a> · <a href="/best-golf-club-sets-for-seniors/">complete sets</a> · <a href="/best-putters-for-seniors/">putters</a> · <a href="/best-golf-balls-for-seniors/">balls</a> · <a href="/best-golf-clubs-for-senior-women/">senior women</a>.</p>

<h2>What actually changes after 55</h2>
<p>Distance drops, but scoring doesn't have to. Arccos data shows average drives falling from about 216 yards for golfers in their 50s to 205 in their 60s and 194 in their 70s. Shot Scope found golfers lose around 30 yards between 30 and 60, yet their handicaps barely change, and Arccos data shows older golfers hit more fairways. The lost yards are what equipment can help with.</p>
${table(["Age", "Average drive (Arccos, 2022)"], [["50s", "216 yd"], ["60s", "205 yd"], ["70s", "194 yd"]])}
<p>Slower clubhead speed has two effects: the ball launches lower, and it carries less. The fixes all point the same way: more loft to launch it, lighter clubs to keep speed up, and clubs that are easier to hit than long irons.</p>

<h2>The four specs that matter most</h2>
<h3>1. Driver loft: go up, not down</h3>
<p>In Golf Digest's TrackMan test, a golfer swinging 75 mph carried a 12°–14° driver about 15 yards farther than a 9°. The test also found that going too high (16°) added carry but almost no total distance. Most seniors under about 85 mph do best between 12° and 14°.</p>
<h3>2. Shaft flex: match it to speed, not pride</h3>
<p>One widely used chart from True Spec Golf puts Senior (A) flex at 72–83 mph of driver speed and Regular at 84–96. Flex letters aren't standardized between brands, so treat this as a starting point. More in <a href="/senior-flex-vs-regular-flex/">senior vs regular flex</a>.</p>
<h3>3. Weight: lighter helps, up to a point</h3>
<p>Light drivers (about 40–50 g shafts) are the norm for seniors now. Golf Digest reports that the right shaft weight is worth about 1–1.5 mph, and only 12% of golfers swing fastest with the lightest club, so lighter helps many seniors but not automatically. That's why every "lite" pick here also has a forgiving head.</p>
<h3>4. Bag set-up: hybrids and high-lofted woods</h3>
<p>In another Golf Digest TrackMan test, both the fastest and slowest swingers carried a 21° hybrid more than 20 yards farther than a 3-iron, and it landed more steeply, so it held greens better. Fitters commonly suggest replacing the longest irons you can't hit consistently.</p>
${note("Try the club finder.", `Enter your usual driver distance and get a suggested flex, loft, shaft weight and bag set-up in one minute. <a href="/club-finder/">Open the club finder</a>.`)}

<h2>Do you need a fitting?</h2>
<p>Not to buy well, but it's the best $80–$175 you can spend before a $600 driver. In 2026, a driver fitting costs about $80 at Golf Galaxy, $100 at PGA TOUR Superstore and $175 at True Spec or Club Champion; full-bag fittings run $300–$475. The finder and these guides narrow your shortlist; a fitting confirms the exact loft and shaft.</p>

<h2>When to buy</h2>
<p>New models mostly launch between January and March, and last year's models get cheaper soon after. In 2026, PING cut its G440 driver to $449 from $619 in August, and Titleist cut its GT drivers by $200 in January. If you don't need the newest paint job, the previous model is often the best deal.</p>
`,
  faq: [
    ["What golf clubs are best for seniors?", "Clubs that help a slower swing launch the ball higher: a light driver with 12° or more loft, Senior (A) flex graphite shafts, hybrids or high-lofted fairway woods in place of long irons, and wide-sole game-improvement irons."],
    ["What flex should a senior golfer use?", "Match flex to driver swing speed, not age. A common chart puts Senior (A) flex at about 72–83 mph and Regular at 84–96 mph. Brands differ, so test both if you can."],
    ["What driver loft is best for seniors?", "Most seniors swinging under about 85 mph do best with 12°–14°. In Golf Digest's TrackMan testing, a 75-mph swing carried 12°–14° about 15 yards farther than 9°."],
    ["Should seniors use hybrids instead of irons?", "Usually, for the longest irons. In small launch-monitor tests, hybrids launched higher, carried farther and landed more softly than long irons, though the irons were more consistent in direction."],
    ["Are senior golf clubs worth it?", "Senior-specific builds (lighter shafts, more loft, softer flex) help if your driver speed is under about 85 mph. If you still swing 95 mph or more, standard game-improvement clubs may suit you better."],
  ],
  sources: [S.arccos22, S.arccos24, S.shotscope, S.loft, S.flex, S.hybrid, S.ball, S.fit, S.ping],
};

export const homeEs = {
  slug: "es", lang: "es", alt: "", type: "home", rail: "qi4d-max-lite",
  h1: "Los mejores palos de golf para seniors (2026)",
  metaTitle: "Mejores palos de golf para seniors (2026): drivers, hierros, híbridos",
  description: "Los mejores palos de golf para seniors en 2026, elegidos para velocidades de swing más lentas: drivers livianos con más loft, hierros fáciles, híbridos, sets y bolas. Con buscador gratis.",
  hero: `<section class="hero"><div class="wrap hero-grid"><div>
<p class="eyebrow">Actualizado en octubre de 2026 · Para golfistas de 55+</p>
<h1>Los mejores palos de golf para seniors (2026)</h1>
<p class="lede">En promedio, los hombres de 70 años mandan el driver unas 45 yardas menos que los de 20. Los palos correctos recuperan parte de eso: más loft, varillas más livianas e híbridos donde antes iban los hierros largos.</p>
<p class="hero-ctas"><a class="btn big" href="/es/buscador-de-palos/">Encontrar mis palos en 1 minuto</a><a class="btn big ghost" href="#picks">Ver los palos</a></p>
</div>
<figure class="hero-stat"><p class="stat-k">−45 yd</p><p>Distancia promedio que pierden los hombres con el driver entre los 20 y los 70 años, según datos de Arccos de unos 4 millones de rondas.</p></figure>
</div></section>`,
  answer: `<p>Para la mayoría de seniors: un <strong>driver liviano con 12° o más de loft</strong>, <strong>varillas de grafito flex Senior (A)</strong>, <strong>híbridos o maderas 7 y 9 en lugar de los hierros 4, 5 y a veces 6</strong>, y <strong>hierros de suela ancha</strong>. Nuestras elecciones: el driver ${buyLink("qi4d-max-lite")}, los hierros ${buyLink("qi-max-hl-irons")} y el híbrido PING G440 en versión HL. Con poco presupuesto, el set ${buyLink("wilson-profile-senior")} trae todo por unos US$600.</p>`,
  body: `
${note("Nota para Latinoamérica:", "los enlaces llevan a Amazon Estados Unidos. Las bolas y accesorios suelen poder enviarse a Latinoamérica, pero muchos palos no; revisa en la página si se envía a tu país y los impuestos de importación antes de comprar. Los precios son precios de lista del fabricante en dólares.")}
<h2 id="picks">Nuestras elecciones por categoría</h2>
${picks([
  ["qi4d-max-lite", "Mejor driver para seniors"],
  ["qi-max-hl-irons", "Mejores hierros para seniors"],
  ["g440-hybrid-hl", "Mejor híbrido para seniors"],
  ["wilson-profile-senior", "Mejor set completo"],
  ["hb-soft-2-retreve", "Mejor putter: no tienes que agacharte"],
  ["srixon-soft-feel", "Mejor bola para seniors"],
], "es")}
<p class="meta">Las descripciones de cada palo están en inglés porque vienen de las fichas del fabricante.</p>

<h2>Qué cambia después de los 55</h2>
<p>Se pierde distancia, pero no necesariamente golpes. Según Arccos, el drive promedio baja de unas 216 yardas en los 50 a 205 en los 60 y 194 en los 70. Shot Scope encontró que entre los 30 y los 60 años se pierden unas 30 yardas, pero el hándicap casi no cambia, y según Arccos los golfistas mayores pegan más fairways. Esas yardas perdidas son lo que el equipo puede ayudar a recuperar.</p>

<h2>Las cuatro specs que más importan</h2>
<h3>1. Loft del driver: sube, no bajes</h3>
<p>En la prueba con TrackMan de Golf Digest, un golfista que pega a 75 mph llevó la bola unas 15 yardas más lejos con un driver de 12°–14° que con uno de 9°. Pasarse (16°) agregó vuelo pero casi nada de distancia total.</p>
<h3>2. Flex de la varilla: según la velocidad, no el orgullo</h3>
<p>Una tabla muy usada (True Spec Golf) pone el flex Senior (A) entre 72 y 83 mph de velocidad de driver y el Regular entre 84 y 96. Las marcas no usan el mismo estándar, así que tómalo como punto de partida.</p>
<h3>3. Peso: más liviano ayuda, hasta cierto punto</h3>
<p>Los drivers livianos (varillas de 40–50 g) son lo normal para seniors. Según Golf Digest, el peso correcto de varilla suma 1–1,5 mph y solo el 12% de los golfistas pega más rápido con el palo más liviano.</p>
<h3>4. La bolsa: híbridos y maderas de mucho loft</h3>
<p>En otra prueba de Golf Digest, tanto el golfista más rápido como el más lento llevaron un híbrido de 21° más de 20 yardas más lejos que un hierro 3, y la bola cayó más vertical, así que se quedó mejor en el green.</p>
${note("Prueba el buscador.", `Escribe cuánto mandas el driver y te sugiere flex, loft, peso de la varilla y cómo armar la bolsa. <a href="/es/buscador-de-palos/">Abrir el buscador</a>.`)}

<h2>Cuándo comprar</h2>
<p>Los modelos nuevos salen casi siempre entre enero y marzo, y los del año anterior bajan de precio. En 2026, PING bajó su driver G440 de US$619 a US$449 en agosto. Si no necesitas el modelo más nuevo, el anterior suele ser la mejor compra.</p>
`,
  faq: [
    ["¿Qué palos de golf son mejores para seniors?", "Los que ayudan a un swing más lento a levantar la bola: driver liviano con 12° o más de loft, varillas de grafito flex Senior (A), híbridos o maderas de mucho loft en lugar de hierros largos, y hierros de suela ancha."],
    ["¿Qué flex debe usar un golfista senior?", "Depende de la velocidad del driver, no de la edad. Una tabla común pone el flex Senior (A) entre 72 y 83 mph y el Regular entre 84 y 96 mph. Cada marca es distinta, así que prueba ambos si puedes."],
    ["¿Qué loft de driver es mejor para seniors?", "La mayoría de seniors por debajo de unas 85 mph rinden mejor con 12°–14°."],
    ["¿Los envíos llegan a Latinoamérica?", "Depende del producto. Las bolas y accesorios suelen poder enviarse; muchos palos no son elegibles para envío internacional. Revisa en la página del producto si se envía a tu país, el costo y los impuestos."],
  ],
  sources: [S.arccos22, S.arccos24, S.shotscope, S.loft, S.flex, S.hybrid],
};
