export const SITE_URL = 'https://astronaut-slot.vercel.app';

/** Official partner / tracking URL — use on all primary CTAs */
export const AFFILIATE_URL =
  'https://w-one909485.life/v3/aggressive-casino?p=o6tr';

export const LOCALES = ['ru', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ru';

export const MAIN_SLUGS = [
  'demo',
  'play',
  'strategy',
  'how-to-play',
  'how-to-win',
  'reviews',
  'bonus',
  'promo-code',
  'faq',
  'download',
  'mobile',
  '1win',
] as const;

export type MainSlug = (typeof MAIN_SLUGS)[number];

export const BLOG_SLUGS = [
  'astronaut-strategy',
  'astronaut-demo',
  'astronaut-1win-review',
  'how-to-win-astronaut',
  'crash-games-guide',
  'astronaut-mobile',
  'astronaut-real-money',
  'best-crash-games',
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];
