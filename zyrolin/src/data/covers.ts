// Real cover photos per category, sourced from Unsplash.
// Unsplash License: free to use (incl. commercial), no permission or attribution
// required (attribution still appreciated). https://unsplash.com/license
//
// These are sensible defaults so every article shows a real, thematic photo.
// To use your own image for a specific article, set `cover:` in its frontmatter
// (a local image in the same folder) — that takes priority over these.
//
// Each value is an Unsplash photo id (the part after "photo-" in the CDN URL).
// Add or swap ids freely.

export const CATEGORY_PHOTOS: Record<string, string[]> = {
  ai: ['1674027444485-cec3da58eef4', '1677442135703-1787eea5ce01'],
  tech: ['1525547719571-a2d4ac8945e2', '1496181133206-80ce9b88a853'],
  money: ['1579621970795-87facc2f976d', '1526304640581-d334cdbbf45e'],
  recipes: ['1482049016688-2d3e1b311543', '1528712306091-ed0763094c98'],
  home: ['1618221195710-dd6b41faaea6', '1618220179428-22790b461013'],
  pets: ['1592194996308-7b43878e84a6', '1514888286974-6c03e2ca1dba'],
  mobile: ['1592890288564-76628a30a657', '1511707171634-5f897ff02aa9'],
  gaming: ['1542751371-adc38448a05e', '1616588589676-62b3bd4ff6d2'],
  hardware: ['1593640408182-31c70c8268f5', '1587831990711-23ca6441447b'],
  'save-energy': ['1529310399831-ed472b81d589', '1531379410502-63bfe8cdaf6f'],
  'software-config': ['1515879218367-8466d910aaa4', '1542831371-29b0f74f9713'],
  internet: ['1645725677294-ed0843b97d5c', '1606904825846-647eb07f5be2'],
  health: ['1607962837359-5e7e89f86776', '1571019613454-1cb2f99b2d8b'],
  productivity: ['1499750310107-5fef28a66643', '1611269154421-4e27233ac5c7'],
  travel: ['1436491865332-7a61a109cc05', '1606768666853-403c90a981ad'],
  design: ['1626785774573-4b799315345d', '1561070791-2526d30994b5'],
};

// Exact, hand-picked photos for specific articles (keyed by slug). These take
// priority over the category default so featured articles get a precise image.
// Translations share the slug, so they get the same photo automatically.
export const ARTICLE_PHOTOS: Record<string, string> = {
  'how-to-use-chatgpt': '1751448582395-27fc57293f1a',
  'how-to-make-a-budget': '1633158829585-23ba8f7c8caf',
  'how-to-make-perfect-rice': '1536304993881-ff6e9eefa2a6',
  'how-to-train-a-dog': '1620289052446-202137ffa876',
  'how-to-improve-wifi-speed': '1645725677294-ed0843b97d5c',
  'how-to-sleep-better': '1658928784381-6f68bbcf92f6',
  'how-to-increase-fps': '1626218174358-7769486c4b79',
  'how-to-find-cheap-flights': '1436491865332-7a61a109cc05',
  'how-to-speed-up-your-computer': '1511385348-a52b4a160dc2',
  'how-to-declutter-your-home': '1767800766429-7179fd80948f',
  'how-to-speed-up-android': '1423784346385-c1d4dac9893a',
  'save-energy-air-conditioning': '1718203862467-c33159fdc504',
  'how-to-focus-better': '1499750310107-5fef28a66643',
  'how-to-update-nvidia-drivers': '1587202372775-e229f172b9d7',
  'how-to-speed-up-windows': '1588872657578-7efd1f1555ed',
  'how-to-edit-photos-like-a-pro': '1574717025058-2f8737d2e2b7',
};

/** Build an optimized Unsplash CDN URL for a photo id. */
export function unsplashUrl(id: string, width = 800): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;
}

/** Stable string hash so an article always gets the same photo from its pool. */
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/**
 * Pick a real cover photo URL for an article. Articles in the same category get
 * different photos from the small pool (deterministically by slug), so listing
 * pages don't look repetitive. Returns undefined if the category has no photos.
 */
export function categoryCoverUrl(
  categorySlug: string,
  articleSlug: string,
  width = 800,
): string | undefined {
  // Exact per-article photo wins; otherwise pick from the category pool.
  const exact = ARTICLE_PHOTOS[articleSlug];
  if (exact) return unsplashUrl(exact, width);
  const pool = CATEGORY_PHOTOS[categorySlug];
  if (!pool || pool.length === 0) return undefined;
  const id = pool[hash(articleSlug) % pool.length];
  return unsplashUrl(id, width);
}

/**
 * A second photo for the article body (different from the cover when possible),
 * used to break up long text. Returns undefined if the category has no pool.
 */
export function secondaryPhotoUrl(
  categorySlug: string,
  articleSlug: string,
  width = 1000,
): string | undefined {
  const pool = CATEGORY_PHOTOS[categorySlug];
  if (!pool || pool.length === 0) return undefined;
  // Offset by one from the cover's pick so the two images differ.
  const id = pool[(hash(articleSlug) + 1) % pool.length];
  return unsplashUrl(id, width);
}
