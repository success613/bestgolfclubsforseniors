import { table, note } from "../components.mjs";

export const data = [
{
  slug: "senior-flex-vs-regular-flex", lang: "en", type: "article", crumb: "Senior vs regular flex",
  h1: "Senior Flex vs Regular Flex: Which Should You Play?",
  metaTitle: "Senior Flex vs Regular Flex: Swing Speed Chart and How to Choose",
  description: "Senior (A) flex vs regular flex explained: the swing speed ranges, why flex letters differ between brands, what testing shows about flex and shaft weight, and how seniors should choose.",
  answer: `<p>As a starting point, play <strong>Senior (A) flex if your driver speed is about 72–83 mph</strong> and <strong>Regular at about 84–96 mph</strong> (True Spec Golf's chart). But flex letters aren't standardized between brands, and testing shows speed alone doesn't reliably predict the best shaft, so try both if you can.</p>`,
  body: `
<h2>Flex by swing speed</h2>
<p>Two widely published charts, which disagree a little:</p>
${table(["Flex", "True Spec Golf (via GOLF.com)", "TGW"], [["Ladies (L)", "Under 72 mph", "Under 60 mph"], ["A / Senior", "72–83 mph", "A (Amateur) 60–75; Senior 75–85"], ["Regular (R)", "84–96 mph", "85–95 mph"], ["Stiff (S)", "97–104 mph", "95–110 mph"]])}
<p>Most brands treat "A" and "Senior" as the same flex; TGW lists A (Amateur) and Senior separately. Don't know your speed? Total driver distance divided by about 2.3 gives a rough estimate (TrackMan's average golfer: 93.4 mph, about 214 yards total), or use the <a href="/club-finder/">club finder</a>.</p>

<h2>Why the letter on the shaft isn't the whole story</h2>
<p>There's no industry standard. True Spec's Kris McCormack told GOLF.com that one company's Stiff could be another's X-Stiff. The objective measure is frequency (cycles per minute), which fitters can test.</p>
<p>Testing also shows individual results vary. In a small MyGolfSpy Labs test (three golfers swinging 94–111 mph, faster than most seniors; flex the only change), there was "not one consistent trend," and one tester lost 9 mph of ball speed in the flex the chart recommended for him.</p>
${note("Bottom line:", "use the chart to pick what to try, not what to buy blind. If two flexes feel similar, the softer one usually launches higher, which helps most seniors.")}

<h2>What about shaft weight?</h2>
<p>Senior shafts are usually lighter as well as softer. Golf Digest reports that finding the right shaft weight adds about 1–1.5 mph, and that only 12% of golfers swing fastest with the lightest shaft. A MyGolfSpy test of 55 g vs 75 g was split: lighter gave more swing speed for some, but heavier gave more ball speed for others. Lighter helps many seniors, but not automatically.</p>

<h2>Signs your shaft is too stiff</h2>
<ul><li>Low, weak shots that fall out of the air, especially to the right (for a right-hander).</li><li>It feels "boardy" and harsh at impact.</li><li>You have to swing hard to get any height.</li></ul>
<h2>Signs it's too soft</h2>
<ul><li>Ballooning, high-spinning drives.</li><li>Hooks and inconsistent direction when you swing harder.</li></ul>
`,
  faq: [
    ["What swing speed is senior flex for?", "About 72–83 mph of driver speed on True Spec Golf's chart. Other charts differ slightly, and brands don't share one standard."],
    ["Is senior flex the same as A flex?", "Usually yes. Most brands use A, Senior and sometimes Lite for the same flex between Ladies and Regular."],
    ["Will senior flex add distance?", "If your speed is in the senior range and your current shaft is too stiff, a softer, lighter shaft can launch higher and carry farther. Testing shows results vary by golfer."],
  ],
  sources: [
    ["GOLF.com: Shaft flex by swing speed (True Spec Golf)", "https://golf.com/instruction/shaft-flex-you-should-play-based-on-swing-speed/"],
    ["TGW: Golf shaft flex guide", "https://www.tgw.com/golf-guide/golf-shaft-flex-guide/"],
    ["GOLF.com: Shaft flex letters are essentially irrelevant, according to an expert", "https://golf.com/gear/shaft-flex-letters-are-essentially-irrelevant-according-to-an-expert/"],
    ["MyGolfSpy Labs: Wrong shaft flex", "https://mygolfspy.com/labs/mygolfspy-labs-wrong-shaft-flex/"],
    ["Golf Digest: Does a lighter shaft create more swing speed?", "https://www.golfdigest.com/story/does-a-lighter-shaft-create-more-swing-speed-not-so-fast"],
    ["MyGolfSpy: Driver shaft weight testing", "https://mygolfspy.com/labs/driver-shaft-weight-testing/"],
    ["Golf Digest: Average golfer TrackMan numbers", "https://www.golfdigest.com/story/fitness-friday-fantasy-vs-real"],
  ],
},
{
  slug: "driving-distance-by-age", lang: "en", type: "article", crumb: "Driving distance by age", noRail: false,
  h1: "Average Driving Distance by Age (and What Seniors Can Do About It)",
  metaTitle: "Average Driving Distance by Age: Arccos and Shot Scope Data",
  description: "Average driving distance by age for men and women, from Arccos and Shot Scope data: about 216 yards in your 50s, 205 in your 60s and 194 in your 70s. Plus why handicaps barely change and how equipment helps.",
  answer: `<p>In Arccos data, average drives are about <strong>216 yards in your 50s, 205 in your 60s and 194 in your 70s</strong>. Men in their 70s drive about 45 yards shorter than men in their 20s; women in their 60s about 43 yards (21%) shorter than women in their 20s. Shot Scope found handicaps barely change between 30 and 60, even after losing about 30 yards.</p>`,
  body: `
<h2>Average drive by age</h2>
${table(["Age", "Average drive"], [["20s", "237 yd"], ["30s", "234 yd"], ["40s", "225 yd"], ["50s", "216 yd"], ["60s", "205 yd"], ["70s", "194 yd"]])}
<p class="meta">Arccos, about 20 million driver shots from 2022 (average Handicap Index 14.1), reported by GOLF.com.</p>
<h2>Men and women</h2>
<p>In Arccos's 2024 data (about 4 million rounds), men averaged 224.7 yards and women 176.2. Men's average fell from 240.4 yards in their 20s to 195.5 in their 70s, with more than 30 yards of that drop coming between the 50s and the 70s. Women's fell from 201 yards in their 20s to 158 in their 60s, about 21% less. Arccos also found older golfers are more accurate: men in their 70s hit 56.5% of fairways, against about 40% in their 20s.</p>
<h2>Shorter, but not worse</h2>
<p>Shot Scope compared golfers in their 30s and 60s and found about 30 yards less off the tee, but nearly identical handicaps. Accuracy, course management and short game make up for a lot.</p>
<h2>What equipment can win back</h2>
<ul><li><strong>Loft:</strong> at 75 mph, a 12°–14° driver carried about 15 yards farther than 9° in Golf Digest's TrackMan test.</li><li><strong>Hybrids:</strong> carried 20+ yards farther than a 3-iron for slow and fast swingers alike in another Golf Digest test.</li><li><strong>Fitting:</strong> in a Plugged In Golf study of 25 golfers, all gained driving distance after a fitting, averaging over 16 yards.</li></ul>
<p>See the <a href="/best-drivers-for-seniors/">best drivers for seniors</a> or get starting specs from the <a href="/club-finder/">club finder</a>.</p>
<h2>Staying in the game</h2>
<p>The 2018 International Consensus Statement on Golf and Health found golf likely provides strength and balance benefits for older adults, with more benefit from walking than riding. Low back pain is the most common golf complaint; warming up and using a push cart rather than carrying are common prevention tips. This is general information, not medical advice.</p>
`,
  faq: [
    ["What is the average driving distance for a 60-year-old?", "About 205 yards in Arccos data from 2022. Shot Scope's data shows a similar drop of about 30 yards between age 30 and 60."],
    ["What is the average driving distance for a 70-year-old?", "About 194 yards (Arccos, 2022 data); men in their 70s averaged 195.5 yards in Arccos's 2024 data."],
    ["How far should a senior woman hit a driver?", "Arccos's 2024 data shows women in their 60s averaging about 158 yards."],
  ],
  sources: [
    ["GOLF.com: How much distance golfers lose with age (Arccos)", "https://golf.com/instruction/driving/how-much-distance-golfers-lose-age/"],
    ["Golf Digest: Arccos driving distance data (2024)", "https://www.golfdigest.com/story/arccos-new-data-driving-distance-at-standstill-for-average-golfers-golf-ball-rollback-looms"],
    ["MyGolfSpy: Shot Scope case study, 30-year-olds vs 60-year-olds", "https://mygolfspy.com/news-opinion/shot-scope-case-study-30-year-olds-versus-60-year-olds-putts-per-round-driving-distance/"],
    ["Golf Digest: TrackMan driver loft test", "https://www.golfdigest.com/story/hltrackmanloft"],
    ["Golf Digest: TrackMan hybrid vs 3-iron test", "https://www.golfdigest.com/story/hltrackmanhybrid"],
    ["Plugged In Golf: Does club fitting work? (25 golfers)", "https://pluggedingolf.com/?p=39718"],
    ["Murray et al., International Consensus Statement on Golf and Health (BJSM, 2018)", "https://www.pure.ed.ac.uk/ws/files/75503444/2018_International_consensus_statement_on_golf_and_health.pdf"],
    ["Lindsay & Vandervoort (2014), review of golf-related low back pain", "https://pmc.ncbi.nlm.nih.gov/articles/PMC4335481"],
  ],
},
];
