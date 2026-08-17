import type { Handle } from '@sveltejs/kit';
import { htmlLang } from '$lib/site';
import type { TranslationLocale } from '$lib/translations';

function localeFromPath(pathname: string): TranslationLocale {
	const segment = pathname.split('/').filter(Boolean)[0];
	return segment === 'en' ? 'en' : 'no';
}

export const handle: Handle = async ({ event, resolve }) => {
	const lang = htmlLang(localeFromPath(event.url.pathname));

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
