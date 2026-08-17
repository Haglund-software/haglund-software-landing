import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { KitConfig } from '@sveltejs/kit';

/** CSP fetch/document directives. Inline script hashes are merged after static prerender. */
export const cspDirectives = {
	'default-src': ['self'],
	'base-uri': ['none'],
	'object-src': ['none'],
	'frame-src': ['none'],
	'child-src': ['none'],
	'worker-src': ['none'],
	'manifest-src': ['none'],
	'media-src': ['none'],
	'form-action': ['none'],
	'frame-ancestors': ['none'],
	'upgrade-insecure-requests': true,
	'script-src': ['self'],
	'script-src-attr': ['none'],
	'style-src': ['self'],
	// Inline SVG presentation styles + any remaining style attributes
	'style-src-attr': ['unsafe-inline'],
	// DaisyUI mask/noise textures in CSS (mask-image, --fx-noise)
	'img-src': ['self', 'data:', 'https://www.kunbord.com/favicon.ico'],
	'font-src': ['self'],
	'connect-src': ['self']
} satisfies NonNullable<NonNullable<KitConfig['csp']>['directives']>;

const INLINE_SCRIPT_RE = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
const CSP_META_RE = /<meta\s+http-equiv="content-security-policy"\s+content="([^"]*)"\s*\/?>/i;

function sha256(content: string): string {
	return createHash('sha256').update(content).digest('base64');
}

function inlineScriptHashes(html: string): string[] {
	const hashes: string[] = [];
	for (const match of html.matchAll(INLINE_SCRIPT_RE)) {
		hashes.push(`'sha256-${sha256(match[1])}'`);
	}
	return hashes;
}

function withScriptHashes(cspContent: string, hashes: string[]): string {
	const missing = hashes.filter((hash) => !cspContent.includes(hash));
	if (missing.length === 0) return cspContent;

	return cspContent.replace(/script-src ([^;]*)/, (_, sources: string) => {
		return `script-src ${sources} ${missing.join(' ')}`;
	});
}

/**
 * Static prerender writes one HTML file per route. Each page can have different inline
 * scripts (e.g. locale-specific JSON-LD), but client-side navigation keeps the first
 * page's CSP meta tag. Merge every inline script hash into every prerendered HTML file.
 */
export function mergePrerenderedCspScriptHashes(buildDir: string) {
	const htmlFiles = readdirSync(buildDir)
		.filter((name) => name.endsWith('.html'))
		.map((name) => join(buildDir, name));

	if (htmlFiles.length === 0) return;

	const allHashes = new Set<string>();
	for (const file of htmlFiles) {
		for (const hash of inlineScriptHashes(readFileSync(file, 'utf8'))) {
			allHashes.add(hash);
		}
	}

	for (const file of htmlFiles) {
		const html = readFileSync(file, 'utf8');
		const meta = html.match(CSP_META_RE);
		if (!meta) continue;

		const nextContent = withScriptHashes(meta[1], [...allHashes]);
		if (nextContent === meta[1]) continue;

		writeFileSync(file, html.replace(meta[0], meta[0].replace(meta[1], nextContent)));
	}
}
