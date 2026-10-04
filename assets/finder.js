// Senior club finder: turns driver distance (or a measured swing speed) into starting specs.
// Runs in the browser. Also answers agent-invoked form submits (WebMCP) with JSON.
// Rules of thumb and their sources are listed on /club-finder/ and /es/buscador-de-palos/.
(function () {
  var form = document.getElementById("finder");
  if (!form) return;
  var out = document.getElementById("finder-result");
  var es = document.documentElement.lang.indexOf("es") === 0;
  var L = es ? {
    speed: "Velocidad estimada del driver", mph: "mph", flex: "Flex de la varilla", loft: "Loft del driver", weight: "Peso de la varilla del driver",
    set: "Armado de la bolsa", grip: "Grips", ball: "Bola", picks: "Para empezar a comparar", note: "Son puntos de partida, no una medición. Un fitting con monitor de lanzamiento en una tienda lo confirma.",
    flexL: "Ladies (L)", flexA: "Senior (A)", flexR: "Regular (R)", flexS: "Stiff (S)",
    set1: "Cambia los hierros 4, 5 y 6 por híbridos o maderas 7 y 9, y empieza los hierros en el 7.",
    set2: "Cambia los hierros 4 y 5 por híbridos o una madera 7, y empieza los hierros en el 6.",
    set3: "Cambia el hierro 4 (y el 3 si lo tienes) por un híbrido.",
    gripY: "Prueba grips midsize u oversize y de goma suave: muchos golfistas con manos cansadas o artritis los sienten más cómodos (la evidencia es de comodidad, no de rendimiento).",
    gripN: "Tamaño estándar, salvo que uses guante L o XL.",
    ballTxt: "No elijas por compresión: a baja velocidad no cambia la distancia del driver. Elige por sensación, precio y color.",
    slice: "Como tu golpe tiende a ir a la derecha (slice), busca un driver con sesgo de draw.",
    drv: "Driver", hyb: "Híbrido", iro: "Hierros", see: "Ver la guía (en inglés)"
  } : {
    speed: "Estimated driver speed", mph: "mph", flex: "Shaft flex", loft: "Driver loft", weight: "Driver shaft weight",
    set: "Bag set-up", grip: "Grips", ball: "Ball", picks: "Good places to start comparing", note: "These are starting points, not a measurement. A launch-monitor fitting confirms them.",
    flexL: "Ladies (L)", flexA: "Senior (A)", flexR: "Regular (R)", flexS: "Stiff (S)",
    set1: "Swap the 4, 5 and 6 irons for hybrids or a 7- and 9-wood, and start your irons at the 7.",
    set2: "Swap the 4 and 5 irons for hybrids or a 7-wood, and start your irons at the 6.",
    set3: "Swap the 4-iron (and 3-iron if you carry one) for a hybrid.",
    gripY: "Try midsize or oversize soft grips: many golfers with tired hands or arthritis find them more comfortable (the evidence is about comfort, not performance).",
    gripN: "Standard size, unless you wear a Large or XL glove.",
    ballTxt: "Don't pick by compression: at slower speeds it doesn't change driver distance. Pick by feel, price and color.",
    slice: "Because your miss goes right (a slice), look for a draw-biased driver.",
    drv: "Driver", hyb: "Hybrid", iro: "Irons", see: "See the guide"
  };
  var PICKS = {
    slow: [["drv", "Tour Edge Exotics Lite (15° option)", "/best-drivers-for-seniors/"], ["hyb", "PING G440 hybrid, HL build", "/best-hybrids-for-seniors/"], ["iro", "Cleveland Halo XL Full-Face", "/best-irons-for-seniors/"]],
    mid: [["drv", "TaylorMade Qi4D Max Lite", "/best-drivers-for-seniors/"], ["hyb", "TaylorMade Qi4D Max Lite Rescue", "/best-hybrids-for-seniors/"], ["iro", "TaylorMade Qi Max HL", "/best-irons-for-seniors/"]],
    fast: [["drv", "PING G440 SFT HL", "/best-drivers-for-seniors/"], ["hyb", "PING G440 hybrid", "/best-hybrids-for-seniors/"], ["iro", "PING G740", "/best-irons-for-seniors/"]],
    slice: ["drv", "Cobra OPTM Max-D", "/best-drivers-for-seniors/"]
  };
  // Total driver distance (yards) per mph of club speed for average amateurs is about 2.3
  // (TrackMan average: 93.4 mph, about 214 yards total, per Golf Digest).
  function speedFrom(form) {
    var mph = parseFloat(form.mph && form.mph.value);
    if (mph >= 40 && mph <= 130) return { v: Math.round(mph), measured: true };
    var yd = parseFloat(form.distance.value);
    return { v: Math.round(yd / 2.3), measured: false };
  }
  function run() {
    var s = speedFrom(form), v = s.v;
    var woman = form.querySelector("input[name=golfer]:checked") && form.querySelector("input[name=golfer]:checked").value === "woman";
    var slice = !!form.querySelector("input[name=slice]:checked");
    var hands = !!form.querySelector("input[name=hands]:checked");
    // Flex bands: True Spec Golf via GOLF.com (driver speed). Brands differ.
    var flex = v < 72 ? L.flexL : v <= 83 ? L.flexA : v <= 96 ? L.flexR : L.flexS;
    if (!woman && v < 72) flex = L.flexA + " / " + L.flexL;
    // Loft: Golf Monthly and Golf Digest TrackMan loft tests.
    var loft = v <= 85 ? "12°–14°" : v <= 95 ? "10.5°–12°" : "9°–10.5°";
    var weight = v < 85 ? "40–50 g" : v <= 95 ? "50–60 g" : "60 g+";
    var set = v < 80 ? L.set1 : v < 90 ? L.set2 : L.set3;
    var tier = v < 80 ? "slow" : v < 92 ? "mid" : "fast";
    var picks = PICKS[tier].slice();
    if (slice) picks[0] = PICKS.slice;
    var range = s.measured ? v + " " + L.mph : (v - 4) + "–" + (v + 4) + " " + L.mph;
    var data = { estimated_driver_speed_mph: range, shaft_flex: flex, driver_loft: loft, driver_shaft_weight: weight, bag_setup: set, grips: hands ? L.gripY : L.gripN, ball: L.ballTxt, slice_tip: slice ? L.slice : null, picks: picks.map(function (p) { return { type: L[p[0]], model: p[1], guide: location.origin + p[2] }; }), note: L.note };
    var rows = [[L.speed, range], [L.flex, flex], [L.loft, loft], [L.weight, weight], [L.set, set], [L.grip, hands ? L.gripY : L.gripN], [L.ball, L.ballTxt]];
    var html = '<div class="result-card"><dl>' + rows.map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + r[1] + "</dd>"; }).join("") + "</dl>";
    if (slice) html += '<p class="tip">' + L.slice + "</p>";
    html += "<h3>" + L.picks + "</h3><ul>" + picks.map(function (p) { return "<li><strong>" + L[p[0]] + ":</strong> " + p[1] + ' · <a href="' + p[2] + '">' + L.see + "</a></li>"; }).join("") + '</ul><p class="meta">' + L.note + "</p></div>";
    out.innerHTML = html;
    try { if (window.gtag) gtag("event", "club_finder_result", { speed: v, flex: flex, loft: loft, slice: slice }); } catch (e) {}
    return data;
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = run();
    if (e.agentInvoked && e.respondWith) e.respondWith(Promise.resolve(JSON.stringify(data)));
    out.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
