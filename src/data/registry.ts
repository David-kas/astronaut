import type { Locale, MainSlug } from '../config/site';
import type { BlogSlug } from '../config/site';
import type { BlogContent, PageContent } from './types';
import { ruHome } from './main/ru/home';
import {
  ruBonus,
  ruDemo,
  ruDownload,
  ruFaq,
  ruHowToPlay,
  ruHowToWin,
  ruMobile,
  ruOneWin,
  ruPlay,
  ruPromoCode,
  ruReviews,
  ruStrategy,
} from './main/ru/subpages';
import { enHome } from './main/en/home';
import {
  enBonus,
  enDemo,
  enDownload,
  enFaq,
  enHowToPlay,
  enHowToWin,
  enMobile,
  enOneWin,
  enPlay,
  enPromoCode,
  enReviews,
  enStrategy,
} from './main/en/subpages';
import { ruBlog } from './blog/ru';
import { enBlog } from './blog/en';

const ruMain: Record<MainSlug, PageContent> = {
  demo: ruDemo,
  play: ruPlay,
  strategy: ruStrategy,
  'how-to-play': ruHowToPlay,
  'how-to-win': ruHowToWin,
  reviews: ruReviews,
  bonus: ruBonus,
  'promo-code': ruPromoCode,
  faq: ruFaq,
  download: ruDownload,
  mobile: ruMobile,
  '1win': ruOneWin,
};

const enMain: Record<MainSlug, PageContent> = {
  demo: enDemo,
  play: enPlay,
  strategy: enStrategy,
  'how-to-play': enHowToPlay,
  'how-to-win': enHowToWin,
  reviews: enReviews,
  bonus: enBonus,
  'promo-code': enPromoCode,
  faq: enFaq,
  download: enDownload,
  mobile: enMobile,
  '1win': enOneWin,
};

export function getHome(locale: Locale): PageContent {
  return locale === 'ru' ? ruHome : enHome;
}

export function getMainPage(
  locale: Locale,
  slug: MainSlug,
): PageContent | undefined {
  const map = locale === 'ru' ? ruMain : enMain;
  return map[slug];
}

export function getBlogPage(
  locale: Locale,
  slug: BlogSlug,
): BlogContent | undefined {
  const map = locale === 'ru' ? ruBlog : enBlog;
  return map[slug];
}
