// Global site configuration. Edit these values to rebrand or update the site.

export const SITE = {
  name: 'Zyrolin',
  tagline: 'Learn how to do anything',
  description:
    'Zyrolin is your go-to hub for clear, step-by-step tutorials and guides. Learn how to use AI, fix tech problems, manage money, cook, and more.',
  url: 'https://zyrolin.com',
  // Default language. Other languages live under /es/, /de/, etc. in the future.
  locale: 'en',
  author: 'Zyrolin Team',
  // Where contact + newsletter submissions are delivered (via FormSubmit.co).
  email: 'adrian.contact.me.69@gmail.com',
  // FormSubmit endpoint — no account needed; confirm the first email to activate.
  // Tip: after activating, swap this email for the hashed alias FormSubmit gives
  // you (in the dashboard) so your address isn't exposed in the page source.
  formEndpoint: 'https://formsubmit.co/adrian.contact.me.69@gmail.com',
  formEndpointAjax: 'https://formsubmit.co/ajax/adrian.contact.me.69@gmail.com',
  social: {
    twitter: 'https://twitter.com/zyrolin',
    facebook: 'https://facebook.com/zyrolin',
    pinterest: 'https://pinterest.com/zyrolin',
    youtube: 'https://youtube.com/@zyrolin',
  },
} as const;

// Navigation shown in the header. Keep this short — only the most important
// categories. The full list lives on /categories.
export const MAIN_NAV = [
  { label: 'AI', href: '/ai' },
  { label: 'Tech', href: '/tech' },
  { label: 'Money', href: '/money' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'All Topics', href: '/categories' },
] as const;
