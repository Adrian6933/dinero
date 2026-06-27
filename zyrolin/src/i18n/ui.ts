// Internationalization (i18n) for Zyrolin.
// English is the base language (served at the root). Other languages live under
// /es, /de, /fr. UI strings are translated here; article content is translated
// as Markdown files under src/content/articles/<lang>/.

export const LOCALES = ['en', 'es', 'de', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  de: 'DE',
  fr: 'FR',
};

// UI string dictionary. Keep keys stable; add new strings to every locale.
export const UI = {
  en: {
    'nav.home': 'Home',
    'nav.search': 'Search',
    'nav.allTopics': 'All Topics',
    'hero.badge': 'Clear guides on everything',
    'hero.title.a': 'Learn how to do',
    'hero.title.b': 'anything',
    'hero.subtitle':
      'Clear, step-by-step tutorials on AI, tech, money, cooking and more. Find exactly what you need — no fluff.',
    'hero.searchPlaceholder': 'Search a tutorial… e.g. "speed up my PC"',
    'hero.popular': 'Popular:',
    'section.explore': 'Explore by topic',
    'section.exploreSub': 'Pick a category and start learning.',
    'section.viewAll': 'View all topics',
    'section.trending': 'Trending now',
    'section.latest': 'Latest tutorials',
    'section.related': 'Related guides',
    'card.readTime': 'min read',
    'category.guides': 'guides',
    'category.guide': 'guide',
    'category.comingSoon': 'Coming soon',
    'category.comingSoonText': "We're crafting guides for",
    'newsletter.title': 'Get the best tutorials every week',
    'newsletter.subtitle':
      'Join our newsletter for handpicked guides. No spam, just useful stuff.',
    'newsletter.placeholder': 'your@email.com',
    'newsletter.button': 'Subscribe',
    'footer.topics': 'Topics',
    'footer.site': 'Site',
    'footer.follow': 'Follow',
    'footer.rights': 'Crafted with care.',
    'lang.label': 'Language',
    'back.home': 'Back to home',
    'article.takeaways': 'Key takeaways',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.search': 'Buscar',
    'nav.allTopics': 'Todos los temas',
    'hero.badge': 'Guías claras sobre todo',
    'hero.title.a': 'Aprende a hacer',
    'hero.title.b': 'cualquier cosa',
    'hero.subtitle':
      'Tutoriales sencillos y paso a paso sobre IA, tecnología, dinero, cocina y más. Encuentra justo lo que necesitas, sin rodeos.',
    'hero.searchPlaceholder': 'Busca un tutorial… ej. "acelerar mi PC"',
    'hero.popular': 'Popular:',
    'section.explore': 'Explora por tema',
    'section.exploreSub': 'Elige una categoría y empieza a aprender.',
    'section.viewAll': 'Ver todos los temas',
    'section.trending': 'Tendencias ahora',
    'section.latest': 'Últimos tutoriales',
    'section.related': 'Guías relacionadas',
    'card.readTime': 'min de lectura',
    'category.guides': 'guías',
    'category.guide': 'guía',
    'category.comingSoon': 'Próximamente',
    'category.comingSoonText': 'Estamos creando guías de',
    'newsletter.title': 'Recibe los mejores tutoriales cada semana',
    'newsletter.subtitle':
      'Suscríbete a nuestra newsletter con guías seleccionadas. Sin spam, solo contenido útil.',
    'newsletter.placeholder': 'tu@email.com',
    'newsletter.button': 'Suscribirme',
    'footer.topics': 'Temas',
    'footer.site': 'Sitio',
    'footer.follow': 'Síguenos',
    'footer.rights': 'Hecho con cariño.',
    'lang.label': 'Idioma',
    'back.home': 'Volver al inicio',
    'article.takeaways': 'Puntos clave',
  },
  de: {
    'nav.home': 'Start',
    'nav.search': 'Suchen',
    'nav.allTopics': 'Alle Themen',
    'hero.badge': 'Klare Anleitungen zu allem',
    'hero.title.a': 'Lerne, wie man',
    'hero.title.b': 'alles macht',
    'hero.subtitle':
      'Wunderbar einfache Schritt-für-Schritt-Anleitungen zu KI, Technik, Geld, Kochen und mehr. Finde genau das, was du brauchst — ohne Schnickschnack.',
    'hero.searchPlaceholder': 'Anleitung suchen… z. B. "PC beschleunigen"',
    'hero.popular': 'Beliebt:',
    'section.explore': 'Nach Thema entdecken',
    'section.exploreSub': 'Wähle eine Kategorie und leg los.',
    'section.viewAll': 'Alle Themen ansehen',
    'section.trending': 'Gerade beliebt',
    'section.latest': 'Neueste Anleitungen',
    'section.related': 'Ähnliche Anleitungen',
    'card.readTime': 'Min. Lesezeit',
    'category.guides': 'Anleitungen',
    'category.guide': 'Anleitung',
    'category.comingSoon': 'Demnächst',
    'category.comingSoonText': 'Wir erstellen gerade Anleitungen für',
    'newsletter.title': 'Erhalte jede Woche die besten Anleitungen',
    'newsletter.subtitle':
      'Abonniere unseren Newsletter mit handverlesenen Anleitungen. Kein Spam, nur Nützliches.',
    'newsletter.placeholder': 'deine@email.com',
    'newsletter.button': 'Abonnieren',
    'footer.topics': 'Themen',
    'footer.site': 'Seite',
    'footer.follow': 'Folgen',
    'footer.rights': 'Mit Sorgfalt erstellt.',
    'lang.label': 'Sprache',
    'back.home': 'Zur Startseite',
    'article.takeaways': 'Das Wichtigste',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.search': 'Rechercher',
    'nav.allTopics': 'Tous les sujets',
    'hero.badge': 'Des guides clairs sur tout',
    'hero.title.a': 'Apprenez à faire',
    'hero.title.b': "n'importe quoi",
    'hero.subtitle':
      "Des tutoriels simples, étape par étape, sur l'IA, la tech, l'argent, la cuisine et plus encore. Trouvez exactement ce qu'il vous faut, sans blabla.",
    'hero.searchPlaceholder': 'Cherchez un tutoriel… ex. "accélérer mon PC"',
    'hero.popular': 'Populaire :',
    'section.explore': 'Explorer par thème',
    'section.exploreSub': 'Choisissez une catégorie et commencez.',
    'section.viewAll': 'Voir tous les sujets',
    'section.trending': 'Tendances du moment',
    'section.latest': 'Derniers tutoriels',
    'section.related': 'Guides similaires',
    'card.readTime': 'min de lecture',
    'category.guides': 'guides',
    'category.guide': 'guide',
    'category.comingSoon': 'Bientôt disponible',
    'category.comingSoonText': 'Nous préparons des guides pour',
    'newsletter.title': 'Recevez les meilleurs tutoriels chaque semaine',
    'newsletter.subtitle':
      'Abonnez-vous à notre newsletter de guides sélectionnés. Pas de spam, que de l’utile.',
    'newsletter.placeholder': 'votre@email.com',
    'newsletter.button': "S'abonner",
    'footer.topics': 'Sujets',
    'footer.site': 'Site',
    'footer.follow': 'Suivre',
    'footer.rights': 'Conçu avec soin.',
    'lang.label': 'Langue',
    'back.home': "Retour à l'accueil",
    'article.takeaways': 'Points clés',
  },
} as const;

export type UIKey = keyof (typeof UI)['en'];

/** Extract the active locale from a URL pathname (e.g. /es/ai → 'es'). */
export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  if (LOCALES.includes(seg as Locale) && seg !== DEFAULT_LOCALE) {
    return seg as Locale;
  }
  return DEFAULT_LOCALE;
}

/** Returns a translator function bound to a locale (falls back to English). */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return UI[locale][key] ?? UI[DEFAULT_LOCALE][key];
  };
}

/**
 * Build a localized path. English has no prefix; others get /<locale>/.
 * `path` is the locale-relative path without leading slash (e.g. 'ai' or
 * 'ai/how-to-use-chatgpt'); empty string = home.
 */
export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === DEFAULT_LOCALE) return `/${clean}`.replace(/\/$/, '') || '/';
  return `/${locale}/${clean}`.replace(/\/$/, '');
}
