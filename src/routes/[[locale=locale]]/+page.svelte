<script lang="ts">
	import portrait from '$lib/assets/Portrait.webp';
	import { withLocale } from '$lib/paths';
	import type { TranslationLocale } from '$lib/translations';

	let { data } = $props();

	const locale = $derived(data.locale);
	const t = $derived(data.t);

	const sections = $derived([
		{ id: 'hero', label: t.nav.hero, theme: 'hero' as const },
		{ id: 'about', label: t.nav.about, theme: 'about' as const },
		{ id: 'services', label: t.nav.services, theme: 'services' as const },
		{ id: 'projects', label: t.nav.projects, theme: 'projects' as const },
		{ id: 'contact', label: t.nav.contact, theme: 'contact' as const }
	]);

	let activeSection = $state<string>('hero');

	$effect(() => {
		const ids = sections.map((s) => s.id);
		const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
		if (elements.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				}
			},
			{ rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5 , 0.75, 1] }
		);

		for (const el of elements) observer.observe(el);
		return () => observer.disconnect();
	});

	function localeHref(target: TranslationLocale) {
		return withLocale(target, '/');
	}

	$effect(() => {
		document.documentElement.lang = locale;
	});


</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
</svelte:head>

<!-- Locale toggle -->
<div class="fixed top-4 right-4 z-50 flex gap-1 rounded-lg bg-base-100/80 p-1 shadow-sm backdrop-blur">
	<a
		href={localeHref('en')}
		class="btn btn-ghost btn-sm {locale === 'en' ? 'btn-active' : ''}"
		aria-current={locale === 'en' ? 'page' : undefined}
	>
		EN
	</a>
	<a
		href={localeHref('no')}
		class="btn btn-ghost btn-sm {locale === 'no' ? 'btn-active' : ''}"
		aria-current={locale === 'no' ? 'page' : undefined}
	>
		NO
	</a>
</div>

<!--Side nav -->
<nav
	class="fixed bg-neutral p-4 rounded-2xl top-30 border border-base-300/20 z-40 hidden -translate-y-1/2 flex-col gap-2 md:left-8 md:flex w-32"
	aria-label="Section navigation"
>
	{#each sections as section (section.id)}
		<a
			href="#{section.id}"
			class="{activeSection === section.id ? 'font-semibold text-neutral-content border-e-2 border-text-neutral-content pe-2' : 'text-neutral-content/75 hover:text-neutral-content transition-colors text-sm'}"
			aria-current={activeSection === section.id ? 'location' : undefined}
		>
			{section.label}
		</a>
	{/each}
</nav>

<main class="flex flex-1 flex-col">
	<!-- Hero -->
	<section
		id="hero"
		class="bg-primary flex min-h-dvh flex-col justify-center px-6 py-16 md:px-12"
	>
		<div class="text-primary-content mx-auto max-w-2xl">
			<p class=" mb-2 text-sm font-medium tracking-wide uppercase">{t.nav.brand}</p>
			<h1 class="text-primary-content/80 mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t.hero.headline}</h1>
			<p class="text-primary-content/70 mb-8 text-lg">{t.hero.tagline}</p>
			<a href="#contact" class="btn btn-primary-content">{t.hero.cta}</a>
		</div>
	</section>


	<!-- About -->
	<section
		id="about"
		class="bg-secondary flex min-h-dvh w-full flex-col justify-center px-6 py-16 md:px-12"
	>
		<div class="text-secondary-content  mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-start">
			<img
				src={portrait}
				alt={t.about.portraitAlt}
				width="192"
				height="192"
				class="ring-secondary-content/20 h-48 w-48 shrink-0 rounded-2xl object-cover shadow-lg ring-2"
			/>
			<div>
				<h2 class="mb-4 text-3xl font-bold">{t.about.title}</h2>
				<p class="text-secondary-content text-pretty text-sm md:text-lg mb-6 leading-relaxed">{t.about.body}</p>
				<p class="text-secondary-content/75 text-sm">
					{t.about.org} · {t.about.location}
				</p>
			</div>
		</div>
	</section>

	<!-- Services -->
	<section
		id="services"
		class="bg-accent/20 flex min-h-dvh flex-col justify-center px-6 py-16 md:px-12"
	>
		<div class="mx-auto max-w-2xl text-accent-content">
			<h2 class=" mb-2 text-3xl font-bold">{t.services.title}</h2>
			<p class="text-accent-content/70 mb-8">{t.services.intro}</p>
			<ul class="space-y-6">
				{#each t.services.items as item (item.title)}
					<li class="border-accent-content/50 border-l-2 pl-4">
						<h3 class="mb-1 font-semibold">{item.title}</h3>
						<p class="text-accent-content/70 text-sm">{item.summary}</p>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Projects -->
	<section
		id="projects"
		class="bg-base-300 flex min-h-dvh flex-col justify-center px-6 py-16 md:px-12"
	>
		<div class="mx-auto max-w-2xl text-base-content">
			<h2 class="mb-2 text-3xl font-bold">{t.projects.title}</h2>
			<p class="text-base-content/70 mb-8">{t.projects.subtitle}</p>
			<div class="space-y-6">
				{#each t.projects.items as project, i (i)}
					<article class="card bg-base-100 shadow-sm text-base-content">
						<div class="card-body">
							{#if project.url}
								<h3 class="card-title text-lg">
									<a href={project.url} class="link link-hover" target="_blank" rel="noopener noreferrer">
										{project.title}
									</a>
								</h3>
							{:else}
								<h3 class="card-title text-lg">{project.title}</h3>
							{/if}
							<p class="text-base-content/90 text-sm">{project.description}</p>
							<div class="mt-2 flex flex-wrap gap-2">
								{#each project.tags as tag (tag)}
									<span class="badge badge-outline badge-sm ">{tag}</span>
								{/each}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section
		id="contact"
		class="bg-info/90 flex min-h-dvh flex-col justify-center px-6 py-16 md:px-12"
	>
		<div class="mx-auto max-w-2xl text-info-content">
			<h2 class="mb-2 text-3xl font-bold">{t.contact.title}</h2>
			<p class="text-info-content/85 mb-8">{t.contact.subtitle}</p>
			<dl class="mb-8 space-y-4">
				<div>
					<dt class="text-info-content/75 text-sm font-medium">{t.contact.emailLabel}</dt>
					<dd class="text-info-content">
						<a href="mailto:{t.contact.email}" class="link link-info-content font-medium">{t.contact.email}</a>
					</dd>
				</div>
				<div>
					<dt class="text-info-content/75 text-sm font-medium">{t.contact.locationLabel}</dt>
					<dd class="text-info-content">{t.contact.location}</dd>
				</div>
			</dl>
			<div class="flex flex-wrap gap-3">
				<a href="mailto:{t.contact.email}" class="btn btn-primary">{t.contact.ctaEmail}</a>
				<a
					href={t.contact.linkedInUrl}
					class="btn btn-outline btn-neutral"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t.contact.ctaLinkedIn}
				</a>
			</div>
		</div>
	</section>
</main>

<footer class="border-base-300 border-t px-6 py-8 text-center md:pl-24">
	<p class="text-base-content/70 mb-1 text-sm">{t.footer.tagline}</p>
	<p class="text-base-content/50 text-xs">{t.footer.rights}</p>
</footer>
