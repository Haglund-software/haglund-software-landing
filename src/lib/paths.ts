import type { TranslationLocale } from '$lib/translations';

const normalize = (path: string) => (path.startsWith('/') ? path : `/${path}`);

/** Locale-prefixed path: English uses unprefixed URLs; Norwegian uses `/no` prefix. */
export function withLocale(locale: TranslationLocale, path: string): string {
	const p = normalize(path);
	if (locale === 'no') {
		return p === '/' ? '/no' : `/no${p}`;
	}
	return p;
}
