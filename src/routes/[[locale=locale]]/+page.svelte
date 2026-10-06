<script lang="ts">
	import logoLight from '$lib/assets/haglund-software-logo.svg?url';
	import logoDark from '$lib/assets/haglund-software-logo-dark.svg?url';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import {
		ArrowDown,
		ArrowRight,
		Briefcase,
		CircleCheck,
		CircleHelp,
		FolderKanban,
		House,
		Mail,
		MapPin,
		User
	} from '@lucide/svelte';
	import type { IconProps } from '@lucide/svelte';
	import type { Component } from 'svelte';
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
			'@graph': [
				{
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
						sameAs: [t.contact.githubUrl]
					},
					sameAs: [t.contact.githubUrl]
				},
				{
					'@type': 'FAQPage',
					mainEntity: t.faq.items.map((item) => ({
						'@type': 'Question',
						name: item.question,
						acceptedAnswer: { '@type': 'Answer', text: item.answer }
					}))
				}
			]
		})
	);
	const mailtoHref = $derived(
		`mailto:${t.contact.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`
	);

	type SectionIcon = Component<IconProps>;

	const sections = $derived([
		{ id: 'hero', label: t.nav.hero, theme: 'hero' as const, icon: House as SectionIcon },
		{ id: 'about', label: t.nav.about, theme: 'about' as const, icon: User as SectionIcon },
		{
			id: 'services',
			label: t.nav.services,
			theme: 'services' as const,
			icon: Briefcase as SectionIcon
		},
		{
			id: 'projects',
			label: t.nav.projects,
			theme: 'projects' as const,
			icon: FolderKanban as SectionIcon
		},
		{ id: 'faq', label: t.nav.faq, theme: 'faq' as const, icon: CircleHelp as SectionIcon },
		{ id: 'contact', label: t.nav.contact, theme: 'contact' as const, icon: Mail as SectionIcon }
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

<header
	class="absolute top-0 z-30 flex h-20 w-full items-center justify-between gap-4 px-4 md:px-8"
>
	<a href={localeHref(locale)} class="shrink-0" aria-label={t.nav.brand}>
		<img
			src={logoLight}
			alt={t.nav.brand}
			width="560"
			height="140"
			class="h-10 w-auto md:h-12 dark:hidden"
		/>
		<img
			src={logoDark}
			alt={t.nav.brand}
			width="560"
			height="140"
			class="hidden h-10 w-auto md:h-12 dark:block"
		/>
	</a>
	<div class="flex items-center gap-1 rounded-lg bg-base-100/80 p-1 shadow-sm backdrop-blur">
		<ThemeToggle label={t.nav.themeToggle} />
		<div class="flex" role="group" aria-label={t.nav.localeLabel}>
			<a
				href={localeHref('en')}
				hreflang="en"
				class="btn btn-ghost btn-sm {locale === 'en' ? 'btn-active' : ''}"
				aria-current={locale === 'en' ? 'page' : undefined}
			>
				EN
			</a>
			<a
				href={localeHref('no')}
				hreflang="nb"
				class="btn btn-ghost btn-sm {locale === 'no' ? 'btn-active' : ''}"
				aria-current={locale === 'no' ? 'page' : undefined}
			>
				NO
			</a>
		</div>
	</div>
</header>

<!--Side nav -->
<nav
	class="fixed top-1/2 z-40 hidden w-32 -translate-y-1/2 flex-col gap-2 rounded-2xl bg-neutral p-4 shadow-lg lg:left-8 lg:flex"
	aria-label="Section navigation"
>
	{#each sections as section (section.id)}
		<a
			data-sveltekit-noscroll
			href="#{section.id}"
			class={activeSection === section.id
				? 'border-e-2 border-primary pe-2 font-semibold text-neutral-content'
				: 'text-sm text-neutral-content/85 transition-colors hover:text-neutral-content'}
			aria-current={activeSection === section.id ? 'location' : undefined}
		>
			{section.label}
		</a>
	{/each}
</nav>

<nav class="dock z-40 md:dock-xl lg:hidden" aria-label="Section navigation">
	{#each sections as section (section.id)}
		<a
			data-sveltekit-noscroll
			href="#{section.id}"
			class={activeSection === section.id ? 'dock-active font-semibold text-primary' : ''}
			aria-current={activeSection === section.id ? 'location' : undefined}
			aria-label={section.label}
		>
			<section.icon class="size-5 shrink-0 md:size-6" aria-hidden="true" strokeWidth={1.75} />
			<span class="dock-label">{section.label}</span>
		</a>
	{/each}
</nav>

<main class="flex flex-1 flex-col text-base-content">
	<!-- Hero -->
	<section
		id="hero"
		class="hero-glow relative flex min-h-dvh flex-col justify-center px-6 pt-28 pb-32 md:px-12"
	>
		<div class="mx-auto max-w-3xl">
			<p class="mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
				{t.hero.eyebrow}
			</p>
			<h1 class="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl">
				{t.hero.headline}
			</h1>
			<p class="mb-8 max-w-2xl text-lg text-pretty text-base-content/85 md:text-xl">
				{t.hero.tagline}
			</p>
			<div class="mb-10 flex flex-wrap gap-3">
				<a href="#contact" class="btn btn-lg btn-primary">
					{t.hero.cta}
					<ArrowRight class="size-5" aria-hidden="true" />
				</a>
				<a href="#services" class="btn btn-outline btn-lg">{t.hero.ctaSecondary}</a>
			</div>
			<ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-base-content/80">
				{#each t.hero.trust as item (item)}
					<li class="flex items-center gap-2">
						<CircleCheck class="size-4 text-primary" aria-hidden="true" />
						{item}
					</li>
				{/each}
			</ul>
		</div>
		<a
			href="#about"
			data-sveltekit-noscroll
			class="btn absolute bottom-24 left-1/2 btn-circle -translate-x-1/2 btn-ghost motion-safe:animate-bounce md:bottom-28 lg:bottom-8"
			aria-label={t.hero.scrollHint}
		>
			<ArrowDown class="size-6" aria-hidden="true" />
		</a>
	</section>

	<!-- About -->
	<section id="about" class="bg-base-100 px-6 py-20 md:px-12 md:py-28">
		<div class="mx-auto flex max-w-3xl flex-col items-center gap-10 md:flex-row md:items-start">
			<img
				src={portrait}
				alt={t.about.portraitAlt}
				width="192"
				height="192"
				class="h-48 w-48 shrink-0 rounded-2xl object-cover shadow-lg ring-2 ring-primary/30"
			/>
			<div>
				<h2 class="mb-6 text-3xl font-bold tracking-tight md:text-4xl">{t.about.title}</h2>
				{#each t.about.body as paragraph, i (i)}
					<p class="mb-4 leading-relaxed text-pretty text-base-content/85 md:text-lg">
						{paragraph}
					</p>
				{/each}
				<ul class="my-6 space-y-3">
					{#each t.about.highlights as highlight (highlight)}
						<li class="flex items-start gap-3 font-medium">
							<CircleCheck class="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
							{highlight}
						</li>
					{/each}
				</ul>
				<p class="mb-6 flex items-center gap-1.5 text-sm text-base-content/75">
					<MapPin class="size-4" aria-hidden="true" />
					{t.about.org} · {t.about.location}
				</p>
				<a href="#services" class="link inline-flex items-center gap-1 font-semibold link-primary">
					{t.about.next}
					<ArrowRight class="size-4" aria-hidden="true" />
				</a>
			</div>
		</div>
	</section>

	<!-- Services -->
	<section id="services" class="bg-base-200 px-6 py-20 md:px-12 md:py-28">
		<div class="mx-auto w-full max-w-3xl">
			<h2 class="mb-3 text-3xl font-bold tracking-tight md:text-4xl">{t.services.title}</h2>
			<p class="mb-10 text-lg text-pretty text-base-content/85">{t.services.intro}</p>
			<ul class="mb-12 grid gap-6 sm:grid-cols-2">
				{#each t.services.items as item (item.title)}
					<li
						class="rounded-box border border-base-300 border-t-4 border-t-primary bg-base-100 p-6 shadow-sm"
					>
						<h3 class="mb-2 text-lg font-semibold">{item.title}</h3>
						<p class="text-sm leading-relaxed text-base-content/85">{item.summary}</p>
					</li>
				{/each}
			</ul>
			<h3 class="mb-2 text-xl font-semibold">{t.services.stackTitle}</h3>
			<p class="mb-5 text-sm text-base-content/80">{t.services.stackIntro}</p>
			<TechStack />
			<p class="mt-8 text-base-content/85">
				{t.services.contactNote}
				<a href="#contact" class="ms-1 link font-semibold link-primary">{t.services.contactCta}</a>
			</p>
		</div>
	</section>

	<!-- Process -->
	<section id="process" class="bg-base-100 px-6 py-20 md:px-12 md:py-28">
		<div class="mx-auto w-full max-w-3xl">
			<h2 class="mb-3 text-3xl font-bold tracking-tight md:text-4xl">{t.process.title}</h2>
			<p class="mb-10 text-lg text-pretty text-base-content/85">{t.process.intro}</p>
			<ol class="grid gap-6 sm:grid-cols-2">
				{#each t.process.steps as step, i (step.title)}
					<li class="flex gap-4">
						<span
							class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-content"
							aria-hidden="true">{i + 1}</span
						>
						<div>
							<h3 class="mb-1 font-semibold">{step.title}</h3>
							<p class="text-sm leading-relaxed text-base-content/85">{step.summary}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- Projects -->
	<section id="projects" class="bg-base-200 px-6 py-20 md:px-12 md:py-28">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-3 text-3xl font-bold tracking-tight md:text-4xl">{t.projects.title}</h2>
			<p class="mb-8 text-lg text-base-content/85">{t.projects.subtitle}</p>
			<div class="space-y-6">
				{#each t.projects.items as project (project.title)}
					<ProjectCard {project} visitCta={t.projects.visitCta} />
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="bg-base-100 px-6 py-20 md:px-12 md:py-28">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-3 text-3xl font-bold tracking-tight md:text-4xl">{t.faq.title}</h2>
			<p class="mb-8 text-lg text-base-content/85">{t.faq.intro}</p>
			<div class="join join-vertical w-full">
				{#each t.faq.items as item (item.question)}
					<details
						class="collapse-arrow collapse join-item border border-base-300 bg-base-200"
						name="faq"
					>
						<summary class="collapse-title font-semibold">{item.question}</summary>
						<div class="collapse-content">
							<p class="leading-relaxed text-base-content/85">{item.answer}</p>
						</div>
					</details>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section id="contact" class="bg-primary px-6 py-20 text-primary-content md:px-12 md:py-28">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-3 text-3xl font-bold tracking-tight md:text-4xl">{t.contact.title}</h2>
			<p class="mb-8 max-w-2xl text-lg text-pretty text-primary-content/90">
				{t.contact.subtitle}
			</p>
			<dl class="mb-8 space-y-4">
				<div>
					<dt class="text-sm font-medium text-primary-content/85">{t.contact.emailLabel}</dt>
					<dd>
						<a href={mailtoHref} class="link text-lg font-semibold">{t.contact.email}</a>
					</dd>
				</div>
				<div>
					<dt class="text-sm font-medium text-primary-content/85">{t.contact.locationLabel}</dt>
					<dd>{t.contact.location}</dd>
				</div>
			</dl>
			<div class="flex flex-wrap gap-3">
				<a
					href={mailtoHref}
					class="btn border-base-100 bg-base-100 btn-lg text-base-content hover:bg-base-200"
				>
					<Mail class="size-5" aria-hidden="true" />
					{t.contact.ctaEmail}
				</a>
				<a
					href={t.contact.githubUrl}
					class="btn btn-outline btn-lg border-primary-content/70 text-primary-content hover:border-primary-content hover:bg-primary-content hover:text-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t.contact.ctaGithub}
				</a>
			</div>
		</div>
	</section>
</main>

<footer
	class="with-dock-inset border-t border-base-300 bg-base-200 px-6 pt-8 text-center md:pl-24 lg:py-8"
>
	<p class="mb-1 text-sm text-base-content/90">{t.footer.tagline}</p>
	<p class="mb-1 text-xs text-base-content/80">{t.footer.orgNumber}</p>
	<p class="text-xs text-base-content/80">{t.footer.rights}</p>
</footer>
