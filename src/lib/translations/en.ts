import type { Itranslations } from './Itranslation';

export const englishTranslations: Itranslations = {
	meta: {
		title: 'Haglund Software',
		description: 'Solo backend and full-stack developer in Norway — Vegard Haglund'
	},
	nav: {
		brand: 'Haglund Software',
		hero: 'Home',
		about: 'About',
		services: 'Services',
		projects: 'Projects',
		contact: 'Contact'
	},
	hero: {
		headline: 'Reliable backends, delivered end to end',
		tagline:
			'Solo developer from Norway — API design, backend systems, and full-stack web products.',
		cta: 'Get in touch'
	},
	about: {
		title: 'About',
		body: "I'm Vegard Haglund — a solo developer based in Norway, focused on backend systems and full-stack delivery. I design and build APIs, data layers, and the web apps that connect to them — from architecture and persistence through to deploy-ready code. I use AI thoughtfully to speed up prototyping and make debugging more efficient, without compromising code quality or maintainability. You work directly with me: clear communication, practical choices, and software that's straightforward to maintain.",
		location: 'Norway',
		org: 'Haglund Software',
		portraitAlt: 'Portrait of Vegard Haglund'
	},
	services: {
		title: 'Services',
		intro: 'How I typically help — scope and stack are tailored to each project.',
		items: [
			{
				title: 'Backend APIs',
				summary:
					'ASP.NET Core with PostgreSQL or SQL Server — API design, persistence, integrations, and OpenAPI.'
			},
			{
				title: 'Full-stack delivery',
				summary:
					'Backend through frontend — Docker Compose, migrations, and builds ready for deployment.'
			},
			{
				title: 'Web apps & sites',
				summary:
					'SvelteKit, React, and TypeScript — dashboards, internal tools, and marketing sites.'
			}
		]
	},
	projects: {
		title: 'Projects',
		subtitle: 'Selected client work and side projects.',
		items: [
			{
				title: '[Project name 1]',
				description: '[Short description — what it does and the outcome.]',
				tags: ['SvelteKit', 'TypeScript']
			},
			{
				title: '[Project name 2]',
				description: '[Short description — what it does and the outcome.]',
				tags: ['ASP.NET Core', 'PostgreSQL']
			}
		]
	},
	contact: {
		title: 'Get in touch',
		subtitle: "Have a backend or full-stack project in mind? I'd like to hear about it.",
		email: 'vegardhaglund@proton.me',
		emailLabel: 'Email',
		location: 'Norway',
		locationLabel: 'Location',
		ctaEmail: 'Send email',
		linkedInUrl: 'https://linkedin.com/in/vegardhaglund',
		ctaLinkedIn: 'LinkedIn'
	},
	footer: {
		tagline: 'Solo developer. Backend and full-stack.',
		rights: '© Haglund Software — Norway'
	}
};
