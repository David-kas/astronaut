import type { Locale } from '../config/site';
import type { MainSlug } from '../config/site';

/** Core internal links every page should surface */
export const coreSlugs: MainSlug[] = ['demo', 'play', 'strategy'];

const relatedBySlug: Record<string, string[]> = {
  demo: ['play', 'how-to-play', 'strategy', 'bonus', 'faq'],
  play: ['demo', 'bonus', 'promo-code', 'mobile', '1win'],
  strategy: ['how-to-win', 'how-to-play', 'reviews', 'faq'],
  'how-to-play': ['demo', 'strategy', 'how-to-win', 'faq'],
  'how-to-win': ['strategy', 'reviews', 'bonus', 'play'],
  reviews: ['strategy', 'bonus', '1win', 'play'],
  bonus: ['promo-code', 'play', '1win', 'mobile'],
  'promo-code': ['bonus', 'play', 'faq', '1win'],
  faq: ['how-to-play', 'demo', 'strategy', 'bonus'],
  download: ['mobile', 'play', '1win', 'demo'],
  mobile: ['download', 'play', 'demo', 'bonus'],
  '1win': ['bonus', 'play', 'promo-code', 'reviews'],
  home: ['demo', 'play', 'strategy', 'bonus', 'reviews'],
};

const labels: Record<Locale, Record<string, string>> = {
  ru: {
    demo: 'Демо Astronaut',
    play: 'Играть онлайн',
    strategy: 'Стратегии и риск',
    'how-to-play': 'Как играть',
    'how-to-win': 'Как выигрывать',
    reviews: 'Отзывы игроков',
    bonus: 'Бонусы 1win',
    'promo-code': 'Промокод',
    faq: 'Частые вопросы',
    download: 'Скачать',
    mobile: 'Мобильная версия',
    '1win': 'Казино 1win',
    home: 'Главная',
  },
  en: {
    demo: 'Astronaut demo',
    play: 'Play online',
    strategy: 'Strategy & risk',
    'how-to-play': 'How to play',
    'how-to-win': 'How to win',
    reviews: 'Player reviews',
    bonus: '1win bonuses',
    'promo-code': 'Promo code',
    faq: 'FAQ',
    download: 'Download',
    mobile: 'Mobile',
    '1win': '1win casino',
    home: 'Home',
  },
};

export function getRelatedLinks(
  locale: Locale,
  currentSlug: string,
): { href: string; label: string }[] {
  const slugs = relatedBySlug[currentSlug] ?? relatedBySlug.home;
  const out: { href: string; label: string }[] = [];
  const add = (slug: string) => {
    const href =
      slug === 'home' ? `/${locale}/` : `/${locale}/${slug}/`;
    out.push({ href, label: labels[locale][slug] ?? slug });
  };
  add('home');
  for (const s of coreSlugs) {
    if (s !== currentSlug) add(s);
  }
  for (const s of slugs) {
    if (s !== currentSlug && !out.some((x) => x.href.endsWith(`/${s}/`))) {
      add(s);
    }
  }
  return out.slice(0, 8);
}
