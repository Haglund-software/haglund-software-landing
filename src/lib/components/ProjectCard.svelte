<script lang="ts">
	import { ArrowUpRight, Check } from '@lucide/svelte';
	import type { Project } from '$lib/translations/Itranslation';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement> & {
		project: Project;
		visitCta: string;
	};

	let { project, visitCta, ...restProps }: Props = $props();
</script>

<article class="card border border-base-300 bg-base-100 text-base-content shadow-sm" {...restProps}>
	<div class="card-body gap-4">
		<h3 class="card-title text-2xl">
			{#if project.favicon}
				<img
					class="size-7 shrink-0"
					width="28"
					height="28"
					alt=""
					src={project.favicon}
					referrerpolicy="no-referrer"
				/>
			{/if}
			{project.title}
		</h3>
		<p class="text-base-content/85">{project.description}</p>
		{#if project.highlights?.length}
			<ul class="grid gap-2 text-sm sm:grid-cols-2">
				{#each project.highlights as highlight (highlight)}
					<li class="flex items-center gap-2">
						<Check class="size-4 shrink-0 text-primary" aria-hidden="true" />
						{highlight}
					</li>
				{/each}
			</ul>
		{/if}
		{#if project.url}
			<div class="card-actions mt-2">
				<a href={project.url} class="btn btn-primary" target="_blank" rel="noopener noreferrer">
					{visitCta}
					{project.title}
					<ArrowUpRight class="size-4" aria-hidden="true" />
				</a>
			</div>
		{/if}
	</div>
</article>
