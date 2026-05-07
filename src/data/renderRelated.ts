import type { Locale } from '../config/site';
import { getRelatedLinks } from './related';
import { t } from '../i18n/ui';

export function renderRelatedAside(locale: Locale, currentSlug: string): string {
  const links = getRelatedLinks(locale, currentSlug);
  const title = t(locale).relatedTitle;
  const items = links
    .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
    .join('');
  return `<aside class="related"><h2>${title}</h2><ul>${items}</ul></aside>`;
}

const blogRelated: Record<string, string[]> = {
  'astronaut-strategy': ['strategy', 'how-to-win', 'demo', 'bonus', 'faq'],
  'astronaut-demo': ['demo', 'how-to-play', 'play', 'bonus'],
  'astronaut-1win-review': ['1win', 'reviews', 'bonus', 'play'],
  'how-to-win-astronaut': ['how-to-win', 'strategy', 'demo', 'play'],
  'crash-games-guide': ['how-to-play', 'strategy', 'demo', 'reviews'],
  'astronaut-mobile': ['mobile', 'download', 'play', 'faq'],
  'astronaut-real-money': ['play', 'bonus', 'strategy', '1win'],
  'best-crash-games': ['demo', 'play', 'reviews', 'bonus'],
};

export function renderBlogRelatedAside(locale: Locale, slug: string): string {
  const title = t(locale).relatedTitle;
  const slugs = blogRelated[slug] ?? ['demo', 'play', 'strategy', 'bonus'];
  const core = getRelatedLinks(locale, 'home');
  const extra = slugs.map((s) => ({
    href: `/${locale}/${s}/`,
    label:
      locale === 'ru'
        ? ({
            demo: 'Демо',
            play: 'Играть',
            strategy: 'Стратегия',
            bonus: 'Бонусы',
            faq: 'FAQ',
            'how-to-play': 'Как играть',
            'how-to-win': 'Как выигрывать',
            reviews: 'Отзывы',
            '1win': '1win',
            mobile: 'Мобильная',
            download: 'Скачать',
          }[s] ?? s)
        : ({
            demo: 'Demo',
            play: 'Play',
            strategy: 'Strategy',
            bonus: 'Bonus',
            faq: 'FAQ',
            'how-to-play': 'How to play',
            'how-to-win': 'How to win',
            reviews: 'Reviews',
            '1win': '1win',
            mobile: 'Mobile',
            download: 'Download',
          }[s] ?? s),
  }));
  const seen = new Set<string>();
  const merged = [...core, ...extra].filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });
  const items = merged
    .slice(0, 10)
    .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
    .join('');
  return `<aside class="related"><h2>${title}</h2><ul>${items}</ul></aside>`;
}
