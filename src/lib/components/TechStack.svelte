<script lang="ts">
	import typescript from '$lib/assets/company-logos/typescript.svg?url';
	import postgresql from '$lib/assets/company-logos/postgresql.svg?url';
	import dotnet from '$lib/assets/company-logos/dotnet.svg?url';
	import tanstack from '$lib/assets/company-logos/tanstack.svg?url';
	import redis from '$lib/assets/company-logos/redis.svg?url';
	import svelte from '$lib/assets/company-logos/svelte.svg?url';
	import react from '$lib/assets/company-logos/react.svg?url';
	import nextjs from '$lib/assets/company-logos/nextdotjs.svg?url';
	import tailwind from '$lib/assets/company-logos/tailwindcss.svg?url';
	import colors from '$lib/assets/company-logos/colors.json';

	type MonochromeTech = { name: string; color: string; icon: string; multicolor?: false };
	type MulticolorTech = { name: string; icon: string; multicolor: true };
	type Tech = MonochromeTech | MulticolorTech;

	function iconMaskStyle(icon: string, color: string) {
		return `background-color: ${color}; mask-image: url(${icon}); -webkit-mask-image: url(${icon});`;
	}

	const stack: Tech[] = [
		{ name: 'Svelte', color: colors.svelte, icon: svelte },
		{ name: 'React', color: colors.react, icon: react },
		{ name: 'Next.js', color: 'currentColor', icon: nextjs },
		{ name: 'TanStack', color: 'currentColor', icon: tanstack },
		{ name: 'TypeScript', color: colors.typescript, icon: typescript },
		{ name: 'Tailwind CSS', color: colors.tailwind, icon: tailwind },
		{ name: '.NET', icon: dotnet, multicolor: true },
		{ name: 'PostgreSQL', icon: postgresql, multicolor: true },
		{ name: 'Redis', color: colors.redis, icon: redis }
	];
</script>

<ul class="flex flex-wrap gap-2">
	{#each stack as tech (tech.name)}
		<li
			class="flex items-center gap-2 rounded-lg border border-base-300 bg-base-100 px-3 py-2 text-sm font-medium text-base-content"
		>
			{#if tech.multicolor}
				<img src={tech.icon} alt="" class="size-5 shrink-0" aria-hidden="true" />
			{:else}
				<span
					class="icon-mask inline-block size-5 shrink-0"
					style={iconMaskStyle(tech.icon, tech.color)}
					aria-hidden="true"
				></span>
			{/if}
			{tech.name}
		</li>
	{/each}
</ul>

<style>
	.icon-mask {
		mask-size: contain;
		mask-repeat: no-repeat;
		mask-position: center;
		-webkit-mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: center;
	}
</style>
