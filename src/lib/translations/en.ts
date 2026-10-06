import type { Itranslations } from './Itranslation';

export const englishTranslations: Itranslations = {
	meta: {
		title: 'Haglund Software — Backend & Full-Stack Developer in Norway',
		description:
			'Solo backend and full-stack developer in Norway. APIs, cloud databases, static sites, and full-stack apps — from idea to production. Get in touch with Vegard Haglund.'
	},
	nav: {
		brand: 'Haglund Software',
		hero: 'Home',
		about: 'About',
		services: 'Services',
		projects: 'Projects',
		faq: 'FAQ',
		contact: 'Contact',
		localeLabel: 'Language',
		themeToggle: 'Toggle dark mode'
	},
	hero: {
		eyebrow: 'Backend & full-stack development',
		headline: 'From idea to production — backends and web apps that just work',
		tagline:
			"I'm Vegard, a solo developer in Norway. I design APIs, build backend systems, and ship the full-stack products around them — and you talk directly to the person writing the code.",
		cta: 'Tell me about your project',
		ctaSecondary: 'See what I do',
		trust: ['Based in Norway', 'Direct contact with the developer', 'Built to be maintained'],
		scrollHint: 'Scroll to learn more'
	},
	about: {
		title: 'About',
		body: [
			"I'm Vegard Haglund — a solo developer based in Norway, focused on backend systems and full-stack delivery. I design and build APIs, data layers, and the web apps that connect to them, from architecture and persistence through to deploy-ready code.",
			"I use AI thoughtfully to speed up prototyping and debugging, without compromising code quality or maintainability. Working with me means clear communication, practical choices, and software that's straightforward to keep running."
		],
		highlights: [
			'Direct contact — no account managers or middlemen',
			'Pragmatic tech choices, built to be maintained',
			'AI-assisted prototyping, human-reviewed code'
		],
		location: 'Norway',
		org: 'Haglund Software',
		portraitAlt: 'Portrait of Vegard Haglund',
		next: 'See what I can help with'
	},
	services: {
		title: 'Services',
		intro:
			'From a simple site with a domain to a full-stack product on a cloud database — I can take the piece you need, or the whole thing.',
		items: [
			{
				title: 'Static sites & domains',
				summary:
					'Landing pages and marketing sites, including domain setup, DNS, and hosting so the site actually goes live.'
			},
			{
				title: 'APIs',
				summary:
					'Dedicated APIs with or without authentication — design, persistence, and integrations, documented with OpenAPI so any client can use them.'
			},
			{
				title: 'Frontend integrations',
				summary:
					'Connect an existing UI to a backend, or build the frontend that talks to an API you already have.'
			},
			{
				title: 'Full-stack apps',
				summary:
					'End-to-end products with cloud databases, auth, APIs, and the web app your users see — or anything in between.'
			}
		],
		stackTitle: 'Stack',
		stackIntro: 'Tools I reach for most often — chosen to fit the job, not the other way around.',
		contactNote: 'Need something more specific? We can sort out scope, stack, and next steps.',
		contactCta: 'Get in touch'
	},
	process: {
		title: 'How I work',
		intro: 'A simple, transparent process — so you always know where your project stands.',
		steps: [
			{
				title: 'Intro chat',
				summary: 'We talk through what you want to build and the problem it should solve.'
			},
			{
				title: 'Scope & proposal',
				summary: 'You get a clear written proposal: what will be built, how, and in what order.'
			},
			{
				title: 'Build in iterations',
				summary: 'Working software along the way, so you can give feedback early and often.'
			},
			{
				title: 'Launch & hand-over',
				summary: 'Deployed, documented, and ready for you — with help afterwards if you need it.'
			}
		]
	},
	projects: {
		title: 'Projects',
		subtitle: 'Products I build and run myself.',
		visitCta: 'Visit',
		items: [
			{
				title: 'Kunbord',
				description:
					'A minimalist encrypted kanban board with workspaces, Free and Super tiers, Google or email login, and more.',
				highlights: [
					'Encrypted boards',
					'Workspaces',
					'Google & email login',
					'Free and Super tiers'
				],
				url: 'https://kunbord.com',
				favicon: 'https://www.kunbord.com/favicon.ico'
			}
		]
	},
	faq: {
		title: 'Frequently asked questions',
		intro: 'A few things people often wonder about before getting in touch.',
		items: [
			{
				question: 'What does a project cost?',
				answer:
					'It depends on the scope. Once I understand what you need, you get a written proposal with an estimate before any work begins.'
			},
			{
				question: 'Can you work with an existing codebase?',
				answer:
					'Yes. I can extend, refactor, or connect to what you already have — whether that is an API, a database, or a frontend.'
			},
			{
				question: 'Do you help after launch?',
				answer:
					'Yes. Maintenance, further development, and hosting can be arranged as needed, so the solution keeps running smoothly.'
			},
			{
				question: 'Which technologies do you use?',
				answer:
					'Often TypeScript, Svelte or React, .NET, and PostgreSQL — but the choice depends on your needs and what you already run.'
			},
			{
				question: 'Do I need a full specification before we talk?',
				answer:
					'No. A rough idea is a great starting point. Clarifying scope and priorities is part of the work.'
			}
		]
	},
	contact: {
		title: "Let's build something",
		subtitle:
			"Tell me briefly what you're building and where you're stuck. I'll get back to you with questions or a suggested next step.",
		email: 'contact@haglundsoftware.no',
		emailLabel: 'Email',
		emailSubject: 'Project inquiry',
		location: 'Norway',
		locationLabel: 'Location',
		ctaEmail: 'Send email',
		githubUrl: 'https://github.com/Haglund-software',
		ctaGithub: 'GitHub'
	},
	footer: {
		tagline: 'Solo developer. Backend and full-stack.',
		orgNumber: 'Org. no. 937 564 910',
		rights: 'Haglund Software — Norway'
	}
};
