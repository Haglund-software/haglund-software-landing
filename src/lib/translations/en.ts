import type { Itranslations } from './Itranslation';

export const englishTranslations: Itranslations = {
	meta: {
		title: 'Haglund Software',
		description: 'Software development and consulting by Vegard Haglund'
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
		headline: 'Thoughtful software, built to last',
		tagline:
			'Independent software development from Norway — APIs, web apps, and full-stack products.',
		cta: 'Get in touch'
	},
	about: {
		title: 'About',
		body: 'I help teams and founders ship reliable software — from lean landing pages to APIs and full-stack products. I work pragmatically, communicate clearly, and leave codebases you can maintain.',
		location: 'Norway',
		org: 'Haglund Software ENK'
	},
	services: {
		title: 'Services',
		intro: 'Examples of how I can help. Scope and stack are tailored to each project.',
		items: [
			{
				title: 'Web apps & sites',
				summary: 'SvelteKit, React, and TypeScript — marketing sites, dashboards, and lightweight apps.'
			},
			{
				title: 'Backend APIs',
				summary: 'ASP.NET Core with PostgreSQL or SQL Server — design, persistence, and OpenAPI.'
			},
			{
				title: 'Full-stack delivery',
				summary: 'API, frontend, and local dev setup — Docker Compose, migrations, and deploy-ready builds.'
			}
		]
	},
	projects: {
		title: 'Projects',
		subtitle: 'Selected work and side projects.',
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
		subtitle: 'Have a project in mind? I would love to hear about it.',
		email: 'vegardhaglund@proton.me',
		emailLabel: 'Email',
		location: 'Norway',
		locationLabel: 'Location',
		ctaEmail: 'Send email',
		linkedInUrl: 'https://linkedin.com/in/vegardhaglund',
		ctaLinkedIn: 'LinkedIn'
	},
	footer: {
		tagline: 'Building thoughtful software.',
		rights: '© Haglund Software ENK — Norway'
	}
};
