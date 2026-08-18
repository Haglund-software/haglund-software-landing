<script lang="ts">
	import haglundSoftwareLogo from '$lib/assets/haglund-software-logo-536px.webp';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import TechStack from '$lib/components/TechStack.svelte';

	import portrait from '$lib/assets/githubSelfie-171px.webp';
	import { withLocale } from '$lib/paths';
	import {
		absoluteUrl,
		alternateLocales,
		htmlLang,
		localeAbsoluteUrl,
		ogImagePath,
		ogLocale,
		ogLocaleAlternate,
		siteName,
		siteUrl
	} from '$lib/site';
	import type { TranslationLocale } from '$lib/translations';

	let { data } = $props();

	const locale = $derived(data.locale);
	const t = $derived(data.t);
	const canonicalUrl = $derived(localeAbsoluteUrl(locale));
	const ogImageUrl = $derived(absoluteUrl(ogImagePath));
	const pageLang = $derived(htmlLang(locale));
	const jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'ProfessionalService',
			name: siteName,
			url: siteUrl,
			description: t.meta.description,
			email: t.contact.email,
			areaServed: {
				'@type': 'Country',
				name: 'Norway'
			},
			founder: {
				'@type': 'Person',
				name: 'Vegard Haglund',
				url: siteUrl,
				sameAs: [t.contact.linkedInUrl]
			},
			sameAs: [t.contact.linkedInUrl]
		})
	);

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

		const dockMq = window.matchMedia('(max-width: 1023px)');

		const getRootMargin = () => {
			if (!dockMq.matches) return '-40% 0px -40% 0px';

			const dock = document.querySelector<HTMLElement>('nav.dock');
			const dockPx = dock?.offsetHeight ?? 0;
			const inset = Math.round(window.innerHeight * 0.4);
			return `-${inset}px 0px -${inset + dockPx}px 0px`;
		};

		let observer: IntersectionObserver;

		const observe = () => {
			observer?.disconnect();
			observer = new IntersectionObserver(
				(entries) => {
					const visible = entries
						.filter((entry) => entry.isIntersecting)
						.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
					if (visible[0]) {
						activeSection = visible[0].target.id;
					}
				},
				{ rootMargin: getRootMargin(), threshold: [0, 0.25, 0.5, 0.75, 1] }
			);

			for (const el of elements) observer.observe(el);
		};

		observe();
		dockMq.addEventListener('change', observe);
		window.addEventListener('resize', observe);
		return () => {
			dockMq.removeEventListener('change', observe);
			window.removeEventListener('resize', observe);
			observer?.disconnect();
		};
	});

	function localeHref(target: TranslationLocale) {
		return withLocale(target, '/');
	}

	$effect(() => {
		document.documentElement.lang = pageLang;
	});
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<link rel="canonical" href={canonicalUrl} />
	{#each alternateLocales as alt (alt.hreflang)}
		<link rel="alternate" hreflang={alt.hreflang} href={localeAbsoluteUrl(alt.locale)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={localeAbsoluteUrl('no')} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={t.meta.title} />
	<meta property="og:description" content={t.meta.description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:locale" content={ogLocale(locale)} />
	<meta property="og:locale:alternate" content={ogLocaleAlternate(locale)} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={t.meta.title} />
	<meta name="twitter:description" content={t.meta.description} />
	<meta name="twitter:image" content={ogImageUrl} />

	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<header class="absolute top-0 flex h-24 w-dvw flex-1 bg-white">
	<img
		src={haglundSoftwareLogo}
		alt="Logo"
		width="200px"
		height="auto"
		class="w-72 object-cover md:w-96 xl:w-lg"
	/>
	<!-- Locale toggle -->
	<div
		class="absolute top-2 right-2 z-50 flex gap-0 rounded-lg bg-secondary p-1 shadow-sm backdrop-blur"
	>
		<a
			href={localeHref('en')}
			// data-sveltekit-reload
			class="btn btn-ghost btn-xs {locale === 'en' ? 'btn-active' : ''}"
			aria-current={locale === 'en' ? 'page' : undefined}
		>
			EN
		</a>
		<a
			href={localeHref('no')}
			// data-sveltekit-reload
			class="btn btn-ghost btn-xs {locale === 'no' ? 'btn-active' : ''}"
			aria-current={locale === 'no' ? 'page' : undefined}
		>
			NO
		</a>
	</div>
</header>

<!--Side nav -->
<nav
	class="fixed top-50 z-40 hidden w-32 -translate-y-1/2 flex-col gap-2 rounded-2xl border border-base-300/20 bg-neutral p-4 lg:left-8 lg:flex"
	aria-label="Section navigation"
>
	{#each sections as section (section.id)}
		<a
			data-sveltekit-noscroll
			href="#{section.id}"
			class={activeSection === section.id
				? 'border-text-neutral-content border-e-2 pe-2 font-semibold text-neutral-content'
				: 'text-sm text-neutral-content/90 transition-colors hover:text-neutral-content'}
			aria-current={activeSection === section.id ? 'location' : undefined}
		>
			{section.label}
		</a>
	{/each}
</nav>

<nav
	class="dock z-40 md:dock-xl lg:hidden"
	aria-label="Section navigation"
>
	{#each sections as section (section.id)}
		<a
			data-sveltekit-noscroll
			href="#{section.id}"
			class={activeSection === section.id ? 'dock-active font-semibold text-base-content' : ''}
			aria-current={activeSection === section.id ? 'location' : undefined}
		>
			<span class="dock-label">{section.label}</span>
		</a>
	{/each}
</nav>

<main class="flex flex-1 flex-col">
	<!-- Hero -->

	<section id="hero" class="flex min-h-dvh flex-col justify-center bg-primary px-6 py-16 md:px-12">
		<div class="mx-auto max-w-2xl text-primary-content">
			<h1 class="mb-4 text-4xl font-bold tracking-tight text-primary-content/90 md:text-5xl">
				{t.hero.headline}
			</h1>
			<p class="mb-8 text-lg text-primary-content/90">{t.hero.tagline}</p>
			<a href="#contact" class="btn-primary-content btn">{t.hero.cta}</a>
		</div>
	</section>

	<!-- About -->
	<section
		id="about"
		class="flex min-h-dvh w-full flex-col justify-center bg-secondary/20 px-6 py-16 md:px-12"
	>
		<div
			class="mx-auto flex max-w-3xl flex-col items-center gap-8 text-secondary-content md:flex-row md:items-start"
		>
			<img
				src={portrait}
				alt={t.about.portraitAlt}
				width="192"
				height="192"
				class="h-48 w-48 shrink-0 rounded-2xl object-cover shadow-lg ring-2 ring-secondary-content/20"
			/>
			<div>
				<h2 class="mb-4 text-3xl font-bold">{t.about.title}</h2>
				<p class="mb-6 text-sm leading-relaxed text-pretty text-secondary-content md:text-lg">
					{t.about.body}
				</p>
				<p class="text-sm text-secondary-content/75">
					{t.about.org} · {t.about.location}
				</p>
			</div>
		</div>
	</section>

	<!-- Services -->
	<section
		id="services"
		class="flex min-h-dvh flex-col justify-center bg-accent/20 px-6 py-16 md:px-12"
	>
		<div class="mx-auto w-full max-w-3xl text-primary-content">
			<h2 class="mb-2 text-3xl font-bold">{t.services.title}</h2>
			<p class="mb-10 text-lg text-pretty text-primary-content/80">{t.services.intro}</p>
			<ul class="mb-12 grid gap-6 sm:grid-cols-2">
				{#each t.services.items as item (item.title)}
					<li class="rounded-xl border border-primary-content/15 bg-base-100/40 p-5">
						<h3 class="mb-2 font-semibold">{item.title}</h3>
						<p class="text-sm leading-relaxed text-primary-content/75">{item.summary}</p>
					</li>
				{/each}
			</ul>
			<h3 class="mb-2 text-xl font-semibold">{t.services.stackTitle}</h3>
			<p class="mb-5 text-sm text-primary-content/75">{t.services.stackIntro}</p>
			<TechStack />
			<p class="mt-8 text-sm text-primary-content/75">
				{t.services.contactNote}
				<a href="#contact" class="ms-1 link font-medium text-primary-content link-hover"
					>{t.services.contactCta}</a
				>
			</p>
		</div>
	</section>

	<!-- Projects -->
	<section
		id="projects"
		class="flex min-h-dvh flex-col justify-center bg-base-300 px-6 py-16 md:px-12"
	>
		<div class="mx-auto max-w-2xl text-base-content">
			<h2 class="mb-2 text-3xl font-bold">{t.projects.title}</h2>
			<p class="mb-8 text-base-content/90">{t.projects.subtitle}</p>
			<div class="space-y-6">
				{#each t.projects.items as project (project.title)}
					<ProjectCard {project} />
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section
		id="contact"
		class="flex min-h-dvh flex-col justify-center bg-info/20 px-6 py-16 md:px-12"
	>
		<div class="mx-auto max-w-2xl text-secondary-content">
			<h2 class="mb-2 text-3xl font-bold">{t.contact.title}</h2>
			<p class="mb-8 text-secondary-content/85">{t.contact.subtitle}</p>
			<dl class="mb-8 space-y-4">
				<div>
					<dt class="text-sm font-medium text-secondary-content/75">{t.contact.emailLabel}</dt>
					<dd class="text-secondary-content">
						<a href="mailto:{t.contact.email}" class="link-info-content link font-medium"
							>{t.contact.email}</a
						>
					</dd>
				</div>
				<div>
					<dt class="text-sm font-medium text-secondary-content/75">{t.contact.locationLabel}</dt>
					<dd class="text-secondary-content">{t.contact.location}</dd>
				</div>
			</dl>
			<div class="flex flex-wrap gap-3">
				<a href="mailto:{t.contact.email}" class="btn btn-outline text-primary-content btn-primary"
					>{t.contact.ctaEmail}</a
				>
				<a
					href={t.contact.linkedInUrl}
					class="btn btn-outline text-primary-content btn-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t.contact.ctaLinkedIn}
				</a>
			</div>
		</div>
	</section>
</main>

<footer class="with-dock-inset border-t border-base-300 px-6 pt-8 text-center md:pl-24 lg:py-8">
	<p class="mb-1 text-sm text-base-content/90">{t.footer.tagline}</p>
	<p class="mb-1 text-xs text-base-content/80">{t.footer.orgNumber}</p>
	<p class="text-xs text-base-content/80">{t.footer.rights}</p>
</footer>
