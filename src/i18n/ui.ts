import type { Locale } from '../config/site';

export type NavItem = { slug: string; label: Record<Locale, string> };

export const navItems: NavItem[] = [
  { slug: '', label: { ru: 'Главная', en: 'Home' } },
  { slug: 'demo', label: { ru: 'Демо', en: 'Demo' } },
  { slug: 'play', label: { ru: 'Играть', en: 'Play' } },
  { slug: 'strategy', label: { ru: 'Стратегия', en: 'Strategy' } },
  { slug: 'bonus', label: { ru: 'Бонусы', en: 'Bonus' } },
  { slug: 'reviews', label: { ru: 'Отзывы', en: 'Reviews' } },
  { slug: 'faq', label: { ru: 'FAQ', en: 'FAQ' } },
  { slug: 'blog', label: { ru: 'Блог', en: 'Blog' } },
];

export const ui = {
  ru: {
    ctaPlay: 'Играть в Astronaut',
    ctaBonus: 'Получить бонус',
    langLabel: 'Язык',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть',
    blogIndexTitle: 'Материалы по Astronaut',
    blogIndexLead:
      'Глубокие гайды по crash-механике, демо-режиму, мобильному опыту и ответственной игре на реальные деньги.',
    footerResponsible: 'Играйте ответственно. Азартные игры могут вызывать зависимость.',
    footerPrivacy: 'Политика конфиденциальности',
    footerTerms: 'Условия использования',
    footerDisclaimer:
      'Сайт носит информационный характер и может содержать партнёрские ссылки на 1win. Мы не являемся оператором азартных игр. Условия бонусов и выплат определяются правилами бренда.',
    relatedTitle: 'Связанные страницы',
    midCtaText: 'Готовы к старту? Заберите бонус и запустите ракету в Astronaut на 1win.',
    tableOfContents: 'Кратко по странице',
  },
  en: {
    ctaPlay: 'Play Astronaut',
    ctaBonus: 'Claim bonus',
    langLabel: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close',
    blogIndexTitle: 'Astronaut guides & articles',
    blogIndexLead:
      'Long-form guides on crash mechanics, demo play, mobile sessions, and responsible real-money sessions.',
    footerResponsible: 'Gamble responsibly. Gambling can be addictive.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Use',
    footerDisclaimer:
      'This site is informational and may include affiliate links to 1win. We are not a gambling operator. Bonus and payout rules are defined by the brand.',
    relatedTitle: 'Related pages',
    midCtaText: 'Ready for liftoff? Claim your bonus and launch Astronaut at 1win.',
    tableOfContents: 'On this page',
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}
