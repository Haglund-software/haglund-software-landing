export interface Itranslations {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		brand: string;
		hero: string;
		about: string;
		services: string;
		projects: string;
		faq: string;
		contact: string;
		localeLabel: string;
		themeToggle: string;
	};
	hero: {
		eyebrow: string;
		headline: string;
		tagline: string;
		cta: string;
		ctaSecondary: string;
		trust: string[];
		scrollHint: string;
	};
	about: {
		title: string;
		body: string[];
		highlights: string[];
		location: string;
		org: string;
		portraitAlt: string;
		next: string;
	};
	services: {
		title: string;
		intro: string;
		items: {
			title: string;
			summary: string;
		}[];
		stackTitle: string;
		stackIntro: string;
		contactNote: string;
		contactCta: string;
	};
	process: {
		title: string;
		intro: string;
		steps: {
			title: string;
			summary: string;
		}[];
	};
	projects: {
		title: string;
		subtitle: string;
		visitCta: string;
		items: {
			title: string;
			description: string;
			highlights?: string[];
			url?: string;
			favicon?: string;
		}[];
	};
	faq: {
		title: string;
		intro: string;
		items: {
			question: string;
			answer: string;
		}[];
	};
	contact: {
		title: string;
		subtitle: string;
		email: string;
		emailLabel: string;
		emailSubject: string;
		location: string;
		locationLabel: string;
		ctaEmail: string;
		githubUrl: string;
		ctaGithub: string;
	};
	footer: {
		tagline: string;
		orgNumber: string;
		rights: string;
	};
}

export type Project = Itranslations['projects']['items'][number];
