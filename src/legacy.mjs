// Redirects for the previous owner's WordPress URLs (2017–2018, from the Wayback Machine),
// so old links and bookmarks land on the closest current page. Off-topic posts (gift ideas)
// are left to 404 on purpose: redirecting them to unrelated pages counts as a soft 404.
const map = {
  "best-golf-clubs-for-seniors": "/", "best-golf-clubs-for-seniors-looking-improve": "/", "best-golf-clubs-for-seniors-play-better": "/",
  "best-rated-senior-golf-clubs": "/", "best-golf-clubs-for-senior-men": "/",
  "adams-golf-clubs-seniors": "/", "callaway-golf-clubs-for-seniors": "/", "cobra-golf-clubs-seniors": "/", "ping-golf-clubs-for-seniors": "/",
  "taylormade-golf-clubs-for-seniors": "/", "titleist-golf-clubs-for-seniors": "/", "wilson-golf-clubs-seniors": "/", "majek-golf-clubs-for-seniors": "/",
  "best-golf-driver-seniors": "/best-drivers-for-seniors/", "best-golf-drivers-for-seniors": "/best-drivers-for-seniors/", "what-is-the-best-golf-driver-for-seniors": "/best-drivers-for-seniors/",
  "best-golf-irons": "/best-irons-for-seniors/", "best-golf-irons-for-seniors-2018": "/best-irons-for-seniors/",
  "senior-flex-golf-club-shafts": "/senior-flex-vs-regular-flex/", "best-golf-club-grips-equipment-shafts": "/senior-flex-vs-regular-flex/",
  "senior-golf-club-sets-best-finds": "/best-golf-club-sets-for-seniors/", "discount-golf-clubs-seniors": "/best-golf-club-sets-for-seniors/",
  "senior-golf-clubs-what-to-look-for-in-a-hosel-and-clubhead": "/club-finder/", "hosel-golf-clubs-head-covers": "/",
  "how-to-clean-your-golf-clubs": "/", "everything-you-wanted-to-know-about-golf": "/", "golf-tips": "/",
  "buying-guides": "/", "club-reviews": "/", "category": "/", "author": "/about/", "page": "/", "2017": "/", "2018": "/",
  "about-me": "/about/", "contact-me": "/contact/", "privacy-policy": "/privacy/",
};
// Tag archives: send to the closest guide by keyword.
const tags = [
  ["driver|wood", "/best-drivers-for-seniors/"], ["iron", "/best-irons-for-seniors/"], ["putter", "/best-putters-for-seniors/"],
  ["set", "/best-golf-club-sets-for-seniors/"], ["shaft|flex|graphite", "/senior-flex-vs-regular-flex/"], ["women", "/best-golf-clubs-for-senior-women/"],
];
export const legacy = [
  ...Object.entries(map).map(([slug, dest]) => ({ source: `/${slug}/:path*`, destination: dest, permanent: true })),
  // The old putters post has the same address as our new guide; only its sub-pages (amp, feed, images) redirect.
  { source: "/best-putters-for-seniors/:path+", destination: "/best-putters-for-seniors/", permanent: true },
  ...tags.map(([re, dest]) => ({ source: `/tag/:t(.*(?:${re}).*)`, destination: dest, permanent: true })),
  { source: "/tag/:path*", destination: "/", permanent: true },
  { source: "/feed/:path*", destination: "/", permanent: true },
  { source: "/comments/feed/:path*", destination: "/", permanent: true },
];
