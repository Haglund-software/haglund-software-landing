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
					'Dedicated APIs with or without authentication — design, persistence, integrations, and OpenAPI you can call from any client.'
			},
			{
				title: 'Frontend integrations',
				summary:
					'Connect an existing UI to a backend, or build the frontend that talks to an API you already have.'
			},
			{
				title: 'Full-stack apps',
				summary:
					'End-to-end products with cloud databases, auth, APIs, and the web app in front — or anything in between.'
			}
		],
		stackTitle: 'Stack',
		stackIntro: 'Tools I reach for most often — chosen to fit the job, not the other way around.',
		contactNote: 'Need something more specific? We can sort out scope, stack, and next steps.',
		contactCta: 'Get in touch'
	},
	projects: {
		title: 'Projects',
		subtitle: 'Selected client work and side projects.',
		items: [
			{
				title: 'Kunbord',
				description:
					'A minimalist encrypted kanban board with workspaces, Free and Super tiers, Google or email login, and more.',
				url: 'https://kunbord.com',
				favicon: 'https://www.kunbord.com/favicon.ico'
			}
		]
	},
	contact: {
		title: 'Get in touch',
		subtitle: "Have a backend or full-stack project in mind? I'd like to hear about it.",
		email: 'contact@haglundsoftware.no',
		emailLabel: 'Email',
		location: 'Norway',
		locationLabel: 'Location',
		ctaEmail: 'Send email',
		linkedInUrl: 'https://github.com/Haglund-software',
		ctaLinkedIn: 'GitHub'
	},
	footer: {
		tagline: 'Solo developer. Backend and full-stack.',
		orgNumber: 'Org. no. 937 564 910',
		rights: 'Haglund Software — Norway'
	}
};
