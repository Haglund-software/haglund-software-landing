<script lang="ts">
	import type { Project } from '$lib/translations/Itranslation';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement> & {
		project: Project;
	};

	let { project, ...restProps }: Props = $props();
</script>

<article class="card bg-base-100 text-base-content shadow-sm" {...restProps}>
	<div class="card-body">
		{#if project.url}
			<h3 class="w-100% card-title text-2xl">
				<a href={project.url} class="link link-hover" target="_blank" rel="noopener noreferrer">
					{project.title}
				</a>
				{#if project.favicon}<img
						class="ms- justify-end"
						width="24"
						height="32"
						alt="Icon for project {project.title}"
						src={project.favicon}
						referrerpolicy="no-referrer"
					/>
				{/if}
			</h3>
		{:else}
			<h3 class="card-title">{project.title}</h3>
		{/if}
		<p class="text-md text-base-content/90">{project.description}</p>
	</div>
</article>
