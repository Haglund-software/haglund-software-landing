import type { TranslationLocale } from '$lib/translations';

const normalize = (path: string) => (path.startsWith('/') ? path : `/${path}`);

/** Locale-prefixed path: Norwegian uses unprefixed URLs; English uses `/en` prefix. */
export function withLocale(locale: TranslationLocale, path: string): string {
	const p = normalize(path);
	if (locale === 'en') {
		return p === '/' ? '/en' : `/en${p}`;
	}
	return p;
}
