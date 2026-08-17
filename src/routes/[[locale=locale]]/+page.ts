import { redirect } from '@sveltejs/kit';
import { getTranslations, type TranslationLocale } from '$lib/translations';
import type { PageLoad } from './$types';

export const prerender = true;
export const entries = () => [
	{ locale: undefined },
	{ locale: 'no' as const },
	{ locale: 'en' as const }
];

export const load: PageLoad = ({ params }) => {
	if (params.locale === 'no') throw redirect(308, '/');
	const locale: TranslationLocale = params.locale === 'en' ? 'en' : 'no';
	return { locale, t: getTranslations(locale) };
};
