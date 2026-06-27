// The 16 content clusters of Zyrolin. Each one is a "mini-site" with its own
// topical authority. The `slug` becomes the URL folder (e.g. /ai/).
//
// `tier` controls the launch phase (1 = launch now, 2 = expand, 3 = long term).
// `accent` is a CSS color used for the category's visual identity.
//
// To add a new category, append an entry here and create matching article
// content under src/content/articles/<slug>/. No other wiring needed — the
// homepage grid, category pages and routing all read from this list.

export interface Category {
  slug: string;
  name: string;
  emoji: string;
  /** Short tagline shown on cards. */
  blurb: string;
  /** Longer description shown on the category page header. */
  description: string;
  accent: string; // hex color
  tier: 1 | 2 | 3;
}

export const CATEGORIES: Category[] = [
  // ── Tier 1 — launch now ────────────────────────────────────────────────
  {
    slug: 'ai',
    name: 'AI & Tools',
    emoji: '🤖',
    blurb: 'Master ChatGPT, image generators, and AI tools.',
    description:
      'Step-by-step guides to using artificial intelligence tools — from ChatGPT and image generators to writing prompts and automating your work.',
    accent: '#7c3aed',
    tier: 1,
  },
  {
    slug: 'tech',
    name: 'Tech & Software',
    emoji: '💻',
    blurb: 'Fix problems, install software, speed things up.',
    description:
      'Practical tutorials for Windows, software, and everyday tech problems. Install, fix, optimize, and secure your computer with confidence.',
    accent: '#2563eb',
    tier: 1,
  },
  {
    slug: 'money',
    name: 'Money & Finance',
    emoji: '💰',
    blurb: 'Budget, save, invest, and grow your money.',
    description:
      'Beginner-friendly personal finance guides: budgeting, saving, investing, paying off debt, and making smart money decisions. Not financial advice.',
    accent: '#16a34a',
    tier: 1,
  },
  {
    slug: 'recipes',
    name: 'Recipes & Cooking',
    emoji: '🍳',
    blurb: 'Easy, tasty recipes anyone can make.',
    description:
      'Simple, delicious recipes with clear instructions. From quick dinners to homemade bread — cook better without the fuss.',
    accent: '#ea580c',
    tier: 1,
  },

  // ── Tier 2 — expansion ─────────────────────────────────────────────────
  {
    slug: 'home',
    name: 'Home & DIY',
    emoji: '🏠',
    blurb: 'Clean, organize, repair, and improve your home.',
    description:
      'Home improvement, cleaning hacks, organization tips, and simple repairs. Make your home better without hiring a pro.',
    accent: '#0d9488',
    tier: 2,
  },
  {
    slug: 'pets',
    name: 'Pets & Animals',
    emoji: '🐾',
    blurb: 'Train, feed, and care for your pets.',
    description:
      'Everything about caring for dogs, cats, and other pets — training, feeding, health, and keeping them happy.',
    accent: '#d97706',
    tier: 2,
  },
  {
    slug: 'mobile',
    name: 'Mobile & Apps',
    emoji: '📱',
    blurb: 'Android, iPhone tips, and the best apps.',
    description:
      'Smartphone tips, tricks, and app recommendations for Android and iPhone. Get more out of your phone every day.',
    accent: '#0891b2',
    tier: 2,
  },
  {
    slug: 'gaming',
    name: 'Gaming & FPS',
    emoji: '🎮',
    blurb: 'Best settings, more FPS, and game fixes.',
    description:
      'Optimize your gaming PC, boost FPS, fix lag, and find the best settings for popular games like Fortnite, Valorant, and PUBG.',
    accent: '#dc2626',
    tier: 2,
  },

  // ── Tier 3 — long term ─────────────────────────────────────────────────
  {
    slug: 'hardware',
    name: 'Hardware & Drivers',
    emoji: '⚙️',
    blurb: 'Update drivers, cool your PC, maintain hardware.',
    description:
      'Update GPU and CPU drivers, replace components, manage temperatures, and maintain your PC hardware the right way.',
    accent: '#475569',
    tier: 3,
  },
  {
    slug: 'save-energy',
    name: 'Save Energy',
    emoji: '💡',
    blurb: 'Lower your electric bill with smart tips.',
    description:
      'Cut your electricity bill with practical energy-saving tips — air conditioning settings, LED lighting, standby power, and more.',
    accent: '#ca8a04',
    tier: 3,
  },
  {
    slug: 'software-config',
    name: 'Software Tweaks',
    emoji: '🔧',
    blurb: 'Hidden Windows settings and power tweaks.',
    description:
      'Advanced Windows tweaks, hidden settings, and configuration tips to customize and speed up your system.',
    accent: '#4f46e5',
    tier: 3,
  },
  {
    slug: 'internet',
    name: 'Internet & Wi-Fi',
    emoji: '🌐',
    blurb: 'Faster Wi-Fi, better DNS, fix connections.',
    description:
      'Improve your Wi-Fi speed, fix connection problems, set up your router, and make your internet faster and more reliable.',
    accent: '#0284c7',
    tier: 3,
  },
  {
    slug: 'health',
    name: 'Health & Wellness',
    emoji: '🏥',
    blurb: 'Exercise, sleep, nutrition, and well-being.',
    description:
      'Practical wellness guides for exercise, better sleep, nutrition, and mental health. Always consult a professional for medical advice.',
    accent: '#e11d48',
    tier: 3,
  },
  {
    slug: 'productivity',
    name: 'Productivity',
    emoji: '⚡',
    blurb: 'Study better, focus longer, do more.',
    description:
      'Study techniques, focus strategies, time management, and productivity apps to help you get more done with less stress.',
    accent: '#9333ea',
    tier: 3,
  },
  {
    slug: 'travel',
    name: 'Travel',
    emoji: '✈️',
    blurb: 'Plan trips, find cheap flights, travel smart.',
    description:
      'Travel planning guides, cheap flight tips, packing advice, and destination ideas to help you travel smarter and cheaper.',
    accent: '#0ea5e9',
    tier: 3,
  },
  {
    slug: 'design',
    name: 'Design & Creative',
    emoji: '🎨',
    blurb: 'Edit photos, design graphics, make videos.',
    description:
      'Creative tutorials for photo editing, graphic design, video creation, and using AI creative tools like a pro.',
    accent: '#db2777',
    tier: 3,
  },
];

// Maps each category to a line icon from src/components/Icon.astro.
// We use SVG icons instead of emojis for a more professional, editorial look.
export const CATEGORY_ICON: Record<string, string> = {
  ai: 'sparkles',
  tech: 'monitor',
  money: 'wallet',
  recipes: 'chef-hat',
  home: 'home',
  pets: 'paw',
  mobile: 'smartphone',
  gaming: 'gamepad',
  hardware: 'cpu',
  'save-energy': 'zap',
  'software-config': 'sliders',
  internet: 'wifi',
  health: 'heart',
  productivity: 'rocket',
  travel: 'plane',
  design: 'palette',
};

export function categoryIcon(slug: string): string {
  return CATEGORY_ICON[slug] ?? 'book-open';
}

// ── Helpers ────────────────────────────────────────────────────────────────

export const CATEGORY_MAP: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c]),
);

export function getCategory(slug: string): Category | undefined {
  return CATEGORY_MAP[slug];
}
