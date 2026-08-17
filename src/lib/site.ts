import type { TranslationLocale } from '$lib/translations';
import { withLocale } from '$lib/paths';

export const siteUrl = 'https://haglundsoftware.no';
export const siteName = 'Haglund Software';
export const ogImagePath = '/og.png';

/** Absolute URL for a path (leading slash). */
export function absoluteUrl(path: string): string {
	const p = path.startsWith('/') ? path : `/${path}`;
	return p === '/' ? siteUrl : `${siteUrl}${p}`;
}

/** Locale home path: `/` for Norwegian, `/en` for English. */
export function localePath(locale: TranslationLocale): string {
	return withLocale(locale, '/');
}

export function localeAbsoluteUrl(locale: TranslationLocale): string {
	return absoluteUrl(localePath(locale));
}

/** BCP 47 language tag for html lang / hreflang. */
export function htmlLang(locale: TranslationLocale): string {
	return locale === 'no' ? 'nb' : 'en';
}

/** Open Graph locale codes. */
export function ogLocale(locale: TranslationLocale): string {
	return locale === 'no' ? 'nb_NO' : 'en_US';
}

export function ogLocaleAlternate(locale: TranslationLocale): string {
	return locale === 'no' ? 'en_US' : 'nb_NO';
}

export const alternateLocales: { hreflang: string; locale: TranslationLocale }[] = [
	{ hreflang: 'nb', locale: 'no' },
	{ hreflang: 'en', locale: 'en' }
];
