import type { Handle } from '@sveltejs/kit';
import { htmlLang } from '$lib/site';
import type { TranslationLocale } from '$lib/translations';

function localeFromPath(pathname: string): TranslationLocale {
	const segment = pathname.split('/').filter(Boolean)[0];
	return segment === 'en' ? 'en' : 'no';
}

function applySecurityHeaders(headers: Headers) {
	headers.set('X-Content-Type-Options', 'nosniff');
	headers.set('X-Frame-Options', 'DENY');
	headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	headers.set('Cross-Origin-Opener-Policy', 'same-origin');
	headers.set('Cross-Origin-Resource-Policy', 'same-origin');
	headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=()');
}

export const handle: Handle = async ({ event, resolve }) => {
	const lang = htmlLang(localeFromPath(event.url.pathname));

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});

	applySecurityHeaders(response.headers);

	return response;
};
