import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './ui';
import { defaultLang } from './ui';

// First path segment maps between Spanish (root) and English (/en) routes.
const ES_TO_EN: Record<string, string> = {
  proyectos: 'projects',
  escritura: 'writing',
  hobbies: 'hobbies',
  acerca: 'about',
  ahora: 'now',
  blog: 'blog',
};
const EN_TO_ES: Record<string, string> = Object.fromEntries(
  Object.entries(ES_TO_EN).map(([es, en]) => [en, es]),
);

/** Detect the active locale from a pathname. */
export function getLangFromUrl(pathname: string): Lang {
  const p = pathname.replace(/\/+$/, '');
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'es';
}

/**
 * Given any pathname, return the equivalent path in both locales.
 * Used by the language switcher so it points to the same page.
 */
export function getLocalePaths(pathname: string): { es: string; en: string } {
  const p = pathname.replace(/\/+$/, '');
  const isEn = p === '/en' || p.startsWith('/en/');
  const raw = (isEn ? p.replace(/^\/en/, '') : p).split('/').filter(Boolean);

  const esSegs = raw.length ? [EN_TO_ES[raw[0]] ?? raw[0], ...raw.slice(1)] : [];
  const enSegs = raw.length ? [ES_TO_EN[raw[0]] ?? raw[0], ...raw.slice(1)] : [];

  return {
    es: esSegs.length ? '/' + esSegs.join('/') : '/',
    en: enSegs.length ? '/en/' + enSegs.join('/') : '/en',
  };
}

/**
 * Content collections store English entries under an `en/` subfolder
 * (e.g. src/content/projects/en/anfitrio.md -> slug "en/anfitrio").
 * This returns the entries for a given locale, with the `en/` prefix
 * stripped from the routing slug so links stay clean.
 */
export async function getLocaleCollection<C extends 'projects' | 'hobbies' | 'talks' | 'posts'>(
  collection: C,
  lang: Lang,
): Promise<(CollectionEntry<C> & { routeSlug: string })[]> {
  const all = await getCollection(collection);
  const wantEn = lang === 'en';
  return all
    .filter((e) => e.slug.startsWith('en/') === wantEn)
    .map((e) => ({ ...e, routeSlug: e.slug.replace(/^en\//, '') }));
}

export { defaultLang };
