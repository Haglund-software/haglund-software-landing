<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { DARK_THEME, LIGHT_THEME, THEME_STORAGE_KEY } from '$lib/theme';

	let { label }: { label: string } = $props();

	let dark = $state(false);

	$effect(() => {
		const current = document.documentElement.dataset.theme;
		dark = current
			? current === DARK_THEME
			: window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	function toggle() {
		dark = !dark;
		const theme = dark ? DARK_THEME : LIGHT_THEME;
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem(THEME_STORAGE_KEY, theme);
		} catch {
			// Storage can be unavailable (private mode, blocked site data); the toggle still works.
		}
	}
</script>

<!-- Icons follow the `dark:` variant rather than state, so the prerendered HTML is correct before hydration. -->
<button
	type="button"
	class="btn btn-square btn-ghost btn-sm"
	aria-label={label}
	aria-pressed={dark}
	title={label}
	onclick={toggle}
>
	<Moon class="size-5 dark:hidden" aria-hidden="true" strokeWidth={1.75} />
	<Sun class="hidden size-5 dark:block" aria-hidden="true" strokeWidth={1.75} />
</button>
