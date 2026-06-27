import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from '../i18n/ui';

export type Article = CollectionEntry<'articles'>;

const IS_DEV = import.meta.env.DEV;

// Article ids look like "<lang>/<category>/<slug>", e.g. "es/ai/como-usar-chatgpt".

/** Language folder the article lives in. */
export function articleLang(entry: Article): Locale {
  return entry.id.split('/')[0] as Locale;
}

/** The article's slug within its category (the filename). */
export function articleSlug(entry: Article): string {
  const parts = entry.id.split('/');
  return parts[parts.length - 1];
}

/** Canonical URL path. English at root, other languages prefixed. */
export function articleUrl(entry: Article): string {
  const lang = articleLang(entry);
  const path = `${entry.data.category}/${articleSlug(entry)}`;
  return lang === DEFAULT_LOCALE ? `/${path}` : `/${lang}/${path}`;
}

/** Estimate reading time in minutes from the raw markdown body. */
export function readingTime(entry: Article): number {
  if (entry.data.readingTime) return entry.data.readingTime;
  const words = (entry.body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Human-friendly localized date. */
export function formatDate(date: Date, locale: Locale = DEFAULT_LOCALE): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Published articles for a language, newest first. Drafts hidden in production.
 * Pass no language to get every article.
 */
export async function getPublishedArticles(lang?: Locale): Promise<Article[]> {
  const all = await getCollection('articles');
  let visible = IS_DEV ? all : all.filter((a) => !a.data.draft);
  if (lang) visible = visible.filter((a) => articleLang(a) === lang);
  return visible.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

/** Articles in a category for a language, newest first. */
export async function getArticlesByCategory(
  categorySlug: string,
  lang: Locale = DEFAULT_LOCALE,
): Promise<Article[]> {
  const all = await getPublishedArticles(lang);
  return all.filter((a) => a.data.category === categorySlug);
}

/** Count of published articles per category slug, for one language. */
export async function getCategoryCounts(
  lang: Locale = DEFAULT_LOCALE,
): Promise<Record<string, number>> {
  const all = await getPublishedArticles(lang);
  const counts: Record<string, number> = {};
  for (const a of all) {
    counts[a.data.category] = (counts[a.data.category] ?? 0) + 1;
  }
  return counts;
}

/** Related articles (same language): same category first, then any. */
export async function getRelatedArticles(
  entry: Article,
  limit = 3,
): Promise<Article[]> {
  const lang = articleLang(entry);
  const all = await getPublishedArticles(lang);
  const others = all.filter((a) => a.id !== entry.id);
  const sameCategory = others.filter(
    (a) => a.data.category === entry.data.category,
  );
  const rest = others.filter((a) => a.data.category !== entry.data.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/**
 * Find which languages have a translation of this article (same category +
 * slug). Used by the language switcher on article pages so it links to the
 * translated article when it exists.
 */
export async function getArticleTranslations(
  entry: Article,
): Promise<Partial<Record<Locale, string>>> {
  const all = await getCollection('articles');
  const slug = articleSlug(entry);
  const map: Partial<Record<Locale, string>> = {};
  for (const a of all) {
    if (a.data.category === entry.data.category && articleSlug(a) === slug) {
      map[articleLang(a)] = articleUrl(a);
    }
  }
  return map;
}
