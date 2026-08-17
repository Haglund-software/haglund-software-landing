import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { cspDirectives } from './src/lib/csp.ts';

export default defineConfig({
	build: {
		assetsInlineLimit: 0
	},
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			prerender: {
				origin: 'https://haglundsoftware.no'
			},
			csp: {
				mode: 'hash',
				directives: cspDirectives
			}
		})
	]
});
