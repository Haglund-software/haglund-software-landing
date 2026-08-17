<script lang="ts">
	import typescript from '$lib/assets/company-logos/typescript.svg?raw';
	import postgresql from '$lib/assets/company-logos/postgresql.svg?raw';
	import dotnet from '$lib/assets/company-logos/dotnet.svg?raw';
	import tanstack from '$lib/assets/company-logos/tanstack.svg?raw';
	import redis from '$lib/assets/company-logos/redis.svg?raw';
	import svelte from '$lib/assets/company-logos/svelte.svg?raw';
	import react from '$lib/assets/company-logos/react.svg?raw';
	import nextjs from '$lib/assets/company-logos/nextdotjs.svg?raw';
	import tailwind from '$lib/assets/company-logos/tailwindcss.svg?raw';
	import colors from '$lib/assets/company-logos/colors.json';

	function tintSvg(svg: string, color: string) {
		return svg
			.replace(/\sfill="[^"]*"/g, '')
			.replace(/<svg\b/, `<svg fill="${color}" aria-hidden="true" class="size-full"`);
	}

	const stack = [
		{ name: 'Svelte', color: colors.svelte, icon: tintSvg(svelte, colors.svelte) },
		{ name: 'React', color: colors.react, icon: tintSvg(react, colors.react) },
		{ name: 'Next.js', color: colors.nextJs, icon: tintSvg(nextjs, colors.nextJs) },
		{ name: 'TanStack', color: '#121212', icon: tintSvg(tanstack, '#121212') },
		{ name: 'TypeScript', color: colors.typescript, icon: tintSvg(typescript, colors.typescript) },
		{ name: 'Tailwind CSS', color: colors.tailwind, icon: tintSvg(tailwind, colors.tailwind) },
		{ name: '.NET', color: colors.dotnet, icon: tintSvg(dotnet, colors.dotnet) },
		{ name: 'PostgreSQL', color: colors.postgres, icon: tintSvg(postgresql, colors.postgres) },
		{ name: 'Redis', color: colors.redis, icon: tintSvg(redis, colors.redis) }
	];
</script>

<ul class="flex flex-wrap gap-2">
	{#each stack as tech (tech.name)}
		<li
			class="flex items-center gap-2 rounded-lg border border-base-300 bg-base-100 px-3 py-2 text-sm font-medium text-base-content"
		>
			<span class="inline-block size-5 shrink-0 [&>svg]:block [&>svg]:size-full">
				{@html tech.icon}
			</span>
			{tech.name}
		</li>
	{/each}
</ul>
