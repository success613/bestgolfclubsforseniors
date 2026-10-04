const plain = (o) => ({ type: "plain", lang: "en", noRail: true, ...o });

export const info = [
plain({
  slug: "about", crumb: "About", h1: "About Best Golf Clubs for Seniors",
  description: "Who runs this site, how the guides are researched, and how it's funded.",
  body: `
<p>I'm Alejandro, and I run this site. I research golf equipment for players over 55 and write these guides so you can match what you buy to the speed you actually swing, not the speed you swung at 35.</p>
<h2>How the guides are written</h2>
<ul><li>Fitting advice comes from launch-monitor research and data: TrackMan and Golf Digest tests, Arccos and Shot Scope distance data, True Spec Golf's flex chart, MyGolfSpy's lab and robot tests, and USGA equipment rules. Each page lists its sources.</li><li>Club specs and list prices come from maker pages and independent reviews, checked in October 2026.</li><li>When the evidence is thin or mixed (shaft weight, grips for arthritis), the page says so.</li></ul>
<h2>What I'm not</h2>
<p>I'm not a PGA professional or club fitter, and I haven't hit every club here. Picks are based on published specs and independent testing, not my own launch-monitor sessions. For a big purchase, a fitting is worth it.</p>
<h2>How the site is funded</h2>
<p>Some links earn a commission when you buy, at no extra cost to you. As an Amazon Associate I earn from qualifying purchases. See <a href="/how-we-pick/">how we pick</a> and the <a href="/affiliate-disclosure/">affiliate disclosure</a>.</p>
<p>Found an error? <a href="/contact/">Tell me</a> and I'll fix it.</p>`,
}),
plain({
  slug: "how-we-pick", crumb: "How we pick", h1: "How we pick golf clubs for seniors",
  description: "The method behind every recommendation: launch-monitor evidence first, matched to current models and specs, with honest drawbacks.",
  body: `
<h2>1. Start from the swing, not the brand</h2>
<p>Every guide begins with what slower swing speeds need: more loft, lighter and softer shafts, forgiveness, and fewer long irons. We only recommend clubs that deliver those things.</p>
<h2>2. Use current models</h2>
<p>We check which model is current (for example, Callaway's Quantum replaced Elyte in 2026, and TaylorMade's Qi4D replaced Qi35) and say when an older model is still worth buying.</p>
<h2>3. Show the evidence, including when it's weak</h2>
<p>Where testing exists, we cite it. Where it's thin, like flex charts that differ by brand, or grips for arthritis, we say so.</p>
<h2>4. Every pick has a drawback</h2>
<p>Each card includes "the catch" or "skip it if," because no club suits everyone.</p>
<h2>5. Prices</h2>
<p>We show the maker's list price so you can compare. We don't show static Amazon prices (Amazon only allows live prices through its API, and they change constantly); each pick links to the current price.</p>
<h2>6. Commissions don't pick clubs</h2>
<p>Some links earn a commission. That never moves a club up the list.</p>`,
}),
plain({
  slug: "affiliate-disclosure", crumb: "Affiliate disclosure", h1: "Affiliate disclosure",
  description: "How this site earns money through affiliate links, and how that is kept separate from recommendations.",
  body: `
<p>Some links on this site are affiliate links. If you click one and buy, the seller may pay us a commission. You pay the same price either way.</p>
<p>Affiliate links go through addresses that start with <code>/go/</code> on this site and are marked as sponsored for search engines.</p>
<p><strong>Amazon:</strong> As an Amazon Associate we earn from qualifying purchases. Bestgolfclubsforseniors.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
<p>We may also join programs run by golf brands, golf retailers and affiliate networks. Commissions never decide which clubs we recommend. See <a href="/how-we-pick/">how we pick</a>.</p>
<p lang="es"><strong>En español:</strong> algunos enlaces son de afiliado. Si compras, podemos recibir una comisión sin costo extra para ti. Como Afiliado de Amazon ganamos con compras que califican.</p>`,
}),
plain({
  slug: "privacy", crumb: "Privacy", h1: "Privacy policy",
  description: "What data Best Golf Clubs for Seniors collects, including analytics and affiliate cookies, how it's used, and how to opt out.",
  body: `
<p>Last updated October 4, 2026.</p>
<h2>What we collect</h2>
<p>This site doesn't use accounts or ads. Our hosting provider (Vercel) keeps standard server logs, such as IP address, browser and pages requested, to run and secure the site.</p>
<h2>Analytics</h2>
<p>We use Google Analytics to understand which pages are useful. It sets cookies and collects information such as pages viewed, approximate location, device type, which seller links are clicked, and anonymous club-finder results (estimated speed, flex and loft). It doesn't tell us who you are. You can opt out with Google's <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow">Analytics opt-out add-on</a>.</p>
<h2>The club finder</h2>
<p>The finder runs in your browser. Your answers aren't sent to us or stored, apart from the anonymous analytics event described above.</p>
<h2>Affiliate links</h2>
<p>When you follow a link to a seller, that seller and its affiliate network may set cookies to record that you came from this site. Their privacy policies apply on their sites.</p>
<h2>Email</h2>
<p>If you email us, we use your address only to reply. We don't sell or share it.</p>
<h2>Contact</h2>
<p>Questions: <a href="mailto:hello@bestgolfclubsforseniors.com">hello@bestgolfclubsforseniors.com</a>.</p>`,
}),
plain({
  slug: "contact", crumb: "Contact", h1: "Contact",
  description: "How to reach Best Golf Clubs for Seniors with corrections, questions or suggestions.",
  body: `<p>Email <a href="mailto:hello@bestgolfclubsforseniors.com">hello@bestgolfclubsforseniors.com</a>. Corrections are especially welcome: if a spec, price or model name is out of date, tell me and I'll check and fix it.</p><p lang="es">También puedes escribir en español.</p>`,
}),
];
