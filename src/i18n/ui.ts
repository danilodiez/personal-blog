export const defaultLang = 'es' as const;
export type Lang = 'es' | 'en';

export const languages: Record<Lang, string> = {
  es: 'ES',
  en: 'EN',
};

// Shared UI strings used by SiteLayout (nav + footer + a11y labels).
export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.writing': 'Escritura',
    'nav.hobbies': 'Hobbies',
    'nav.about': 'Acerca',
    'nav.cv': 'CV',
    'a11y.menu.open': 'Abrir menú',
    'a11y.menu.close': 'Cerrar menú',
    'a11y.theme': 'Cambiar modo oscuro',
    'footer.tagline': '¿Querés mantenerte al día?',
    'meta.defaultDescription':
      'Ingeniero de software de Corrientes, Argentina. Construyo productos de IA y full-stack en Webflow y Cool Studio.',
    'og.locale': 'es_AR',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.writing': 'Writing',
    'nav.hobbies': 'Hobbies',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'a11y.menu.open': 'Open menu',
    'a11y.menu.close': 'Close menu',
    'a11y.theme': 'Toggle dark mode',
    'footer.tagline': 'Want to keep up to date?',
    'meta.defaultDescription':
      'Software engineer from Corrientes, Argentina. I build AI and full-stack products at Webflow and Cool Studio.',
    'og.locale': 'en_US',
  },
} as const;

export function t(lang: Lang) {
  return (key: keyof (typeof ui)['es']) => ui[lang][key] ?? ui[defaultLang][key];
}
