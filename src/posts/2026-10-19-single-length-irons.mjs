import { picks, table, note, buyLink } from "../components.mjs";
import { products } from "../products.mjs";

const src = (ids) => ids.map((id) => [products[id].name + " (maker or review)", products[id].src]);

export const post = {
  slug: "single-length-irons",
  publish: "2026-10-19",
  published: "2026-10-19",
  crumb: "Single length irons",
  rail: "b-king-tec-x-ol",
  h1: "Single Length Irons (2026): Pros, Cons and the Best Sets",
  metaTitle: "Single Length Irons (2026): Pros, Cons and Best Sets",
  description: "What single length irons are, who they help (and who they don't), and the sets you can still buy in 2026: Cobra One Length, Majek, Avoda and more.",
  answer: `<p>Single length irons are built so every iron, from the long irons to the wedges, is the same length (usually a 7-iron's, about 37 inches) with the same lie angle and head weight. Only the loft changes. They help golfers who struggle to repeat their setup from club to club. The best current set is the ${buyLink("b-king-tec-x-ol")}; seniors on a budget should look at the ${buyLink("b-majek-sl-hybrids")}, which comes in senior-flex graphite.</p>`,
  body: `
<p>Bryson DeChambeau made single length irons famous when he won the 2020 U.S. Open with them, but the idea is much older. We didn't test these sets ourselves; this guide is based on maker specs, published reviews and independent tests (<a href="/how-we-pick/">how we pick</a>). The evidence on single length irons is thinner than for most clubs, and we say where it runs out.</p>

<h2>Our picks</h2>
${picks([
  ["b-king-tec-x-ol", "Best current one-length set"],
  ["b-majek-sl-hybrids", "Best budget set for seniors"],
  ["b-darkspeed-ol", "Most forgiving Cobra option (older model)", "you can't find it new at a fair discount; a used 2024 set is worth only so much."],
  ["b-king-tec-ol-hybrid", "One-length hybrid to replace long irons"],
  ["b-avoda-origin-sl", "Forged set for better ball-strikers", "you need forgiveness or a light graphite shaft; this is a compact, forged iron."],
])}

<h2>What are single length irons?</h2>
<p>In a standard set, each iron is usually about half an inch longer than the next, from the wedges up to the long irons. Lie angle and head weight change with the length. In a single length set:</p>
<ul><li><strong>Every iron is one length.</strong> Cobra builds its One Length irons at 37.25 inches, about a standard 7-iron. Tom Wishon's Sterling irons used 36.5 inches, an 8-iron length. Majek's hybrid set uses 38 inches.</li><li><strong>Every head weighs the same.</strong> Pinhawk's single length heads, for example, all weigh 272 grams.</li><li><strong>Every club has the same lie angle</strong>, so you stand the same way and play the ball in the same spot.</li><li><strong>Only the loft changes</strong>, so loft does the job of spacing your distances.</li></ul>

<h2>Pros and cons</h2>
${table(["", "Single length", "Standard (variable) length"], [
  ["Setup", "One posture, ball position and swing for every iron", "Changes a little with every club"],
  ["Long irons (4–6)", "Shorter, so easier to control", "Longer, harder to hit consistently"],
  ["Short irons and wedges", "Longer than usual; some golfers lose touch", "Short and precise"],
  ["Distance gaps", "Can bunch up in the long irons", "Built into the set by length and loft"],
  ["Choice and fitting", "Few makers; Cobra is the main brand", "Every brand, every fitter"],
  ["Resale", "Smaller used market", "Easy to sell or trade in"],
])}

<h3>What the testing shows</h3>
<p>GOLF.com tested a single length set against a standard set on TrackMan. Players got more even gaps from club to club with single length; with the standard set, some hit their 4- and 5-irons the same distance. The single length long irons launched lower, though, which means less stopping power on greens. From 8-iron to pitching wedge, both sets performed about the same. GOLF.com concluded they suit beginners and high handicappers more than low handicappers, who took longer to adjust.</p>
<p>The main drawback is physics. GolfWRX's Paul Wood points out that shortening a 4-iron to 7-iron length makes it hard to produce the same height and distance. Makers compensate: Cobra uses weaker lofts and wider soles in the 4–6 irons, and Wishon used hotter, high-COR faces in the 5-, 6- and 7-irons. Wishon chose an 8-iron length because most golfers hit their 8-iron more consistently than their 6-iron, accepting a loss of 4–7 mph of ball speed in the long irons.</p>
<p>That's about as far as the independent evidence goes. Cobra says Arccos users who switched to One Length hit more greens in regulation, but that's the maker's own claim, not an independent test.</p>

<h2>Are single length irons good for seniors?</h2>
<p>They can be, for one specific problem: you hit some irons solidly and others badly because your setup keeps changing. If your 8-iron feels easy and your 5-iron feels like a different club, a one-length set is worth trying.</p>
<p>They're less useful if you've already replaced your long irons with <a href="/best-hybrids-for-seniors/">hybrids</a>. A senior set that starts at the 6- or 7-iron only spans a couple of inches from top to bottom anyway, so making them all one length changes less. For many slower swingers, the bigger win is easier long clubs, not one length; our <a href="/best-irons-for-seniors/">best irons for seniors</a> guide covers that route.</p>
<p>Weight matters too. Cobra's King Tec-X One Length comes with 105-gram KBS Tour Lite steel shafts, heavier than most seniors need. If your driver speed is under about 83 mph, ask for graphite in a Lite or Senior flex (see <a href="/senior-flex-vs-regular-flex/">senior flex vs regular flex</a>), or start with the Majek set, which comes in senior-flex graphite.</p>
${note("Try before you commit.", "Hit a one-length 5-iron and wedge next to your own before buying a set. The wedge is where most golfers notice the difference first.")}

<h2>Other single length options</h2>
<ul>
<li><strong>Wishon EQ1-NX:</strong> Tom Wishon's newest single length irons, plus matching fairway woods and hybrids, sold only through independent clubfitters. Wishon didn't publish prices online when we checked.</li>
<li><strong>Sterling Irons:</strong> Wishon's earlier set is sold out. The company says a second generation is planned but has no launch date.</li>
<li><strong>Pinhawk SL (ValueGolf):</strong> about $50 per club, built to order in lengths from 36.5 to 38 inches, with Ladies to X-Stiff shafts and left-handed heads. A low-cost way to try the idea.</li>
<li><strong>Used Cobra sets:</strong> Cobra has made One Length versions of its King F7, F8, F9 and later irons. Check the shaft flex carefully; many used sets are Stiff steel.</li>
</ul>

<h2>How to choose a single length set</h2>
<h3>1. Pick the length that fits you</h3>
<p>Most sets are built around 37 to 37.25 inches. Taller players may want +½ or +1 inch; Majek and Pinhawk both offer longer and shorter builds. A fitter can check that the lie angle suits your posture, since every club shares it.</p>
<h3>2. Check the gaps at the top of the set</h3>
<p>Because the long irons lose some speed, the 4- and 5-irons can fly almost the same distance. Many golfers drop the 4-iron and use a fairway wood or hybrid instead. Cobra's One Length hybrid keeps the same length if you want everything to match.</p>
<h3>3. Get the shaft right</h3>
<p>One length doesn't fix a shaft that's too heavy or stiff. Use the <a href="/club-finder/">club finder</a> to estimate your flex before you order.</p>
<h3>4. Think about the wedges</h3>
<p>At 37 inches, a sand wedge is about two inches longer than usual. Some golfers keep standard-length wedges and play one-length irons only through the 9-iron or pitching wedge.</p>

<h2>Mistakes to avoid</h2>
<ul>
<li><strong>Expecting more distance.</strong> Single length is about consistency. Your long irons may go a little shorter.</li>
<li><strong>Buying heavy steel to save money.</strong> A set you can't swing late in the round won't be consistent either.</li>
<li><strong>Judging after one range session.</strong> GOLF.com's testers needed time to adjust, especially with the long irons.</li>
<li><strong>Mixing lengths at random.</strong> If you combine one-length irons with standard hybrids, check the gap where they meet.</li>
</ul>
<p>Shopping for a whole new bag instead? See our <a href="/best-golf-club-sets-for-seniors/">best golf club sets for seniors</a>.</p>
`,
  faq: [
    ["What are single length irons?", "Irons that are all the same length, usually a 7-iron's (about 37 inches), with the same lie angle and head weight. Only the loft changes from club to club, so you use one setup and one swing for every iron."],
    ["Are single length irons good for seniors?", "They can help seniors whose setup changes from club to club and who hit some irons much better than others. If you already play hybrids instead of long irons, the benefit is smaller. Choose light graphite in a Senior or Lite flex."],
    ["Do single length irons go farther?", "No. The long irons are shorter than usual, so they usually fly a little lower and shorter. Makers use weaker lofts or hotter faces to make up some of it. The goal is consistency, not distance."],
    ["Does Cobra still make One Length irons?", "Yes. The current set is the King Tec-X One Length (released in late 2024 as a 2025 model), $1,299 for seven clubs at list, and still sold new at retailers in October 2026. Cobra also sells the King Tec One Length hybrid."],
    ["What did Bryson DeChambeau use?", "Single length irons built to about 37.5 inches. He played Cobra One Length irons for years and won the 2020 U.S. Open with them."],
    ["What are the disadvantages of single length irons?", "Long irons can lose height and distance, short irons and wedges feel longer than normal, the 4- and 5-irons may fly similar distances, there are few brands to choose from, and used sets are harder to sell."],
  ],
  sources: [
    ["GOLF.com: Single length irons tested against standard irons", "https://golf.com/gear/single-length-irons-against-standard-irons-tested/"],
    ["GolfWRX: Should everyone play single length irons? (Paul Wood)", "https://golfwrx.com/378342/should-everyone-play-single-length-irons/"],
    ["GolfWRX: Tom Wishon's new single length Sterling irons", "https://golfwrx.com/350296/tom-wishons-new-single-length-sterling-irons/"],
    ["Sterling Irons: First generation is wrapped up", "https://sterlingirons.com/first-generation-is-wrapped-up/"],
    ["Wishon Golf: EQ1-NX single length", "https://wishongolf.com/eq1-nx/"],
    ["ValueGolf: Pinhawk SL single length irons", "https://www.valuegolf.com/pinhawk-sl-single-length-irons"],
    ["PGA Tour Superstore: Cobra King Tec-X 2025 One Length irons", "https://www.pgatoursuperstore.com/king-tec-x-2025-one-length-irons-w%2F-steel-shafts/2000000048100.html"],
    ["Cobra: King Tec-X One Length hybrid", "https://www.cobragolf.com/products/king-tec-x-one-length-hybrid"],
    ["MyGolfSpy: Cobra King Utility Black One (7-iron length explained)", "https://mygolfspy.com/news-opinion/first-look-cobras-king-utility-black-and-king-utility-black-one/"],
    ["GOLF.com: Shaft flex by swing speed (True Spec Golf)", "https://golf.com/instruction/shaft-flex-you-should-play-based-on-swing-speed/"],
    ...src(["b-king-tec-x-ol", "b-darkspeed-ol", "b-majek-sl-hybrids", "b-king-tec-ol-hybrid", "b-avoda-origin-sl"]),
  ],
  hubs: ["best-irons-for-seniors", "best-golf-club-sets-for-seniors"],
};
