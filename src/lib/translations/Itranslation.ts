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
		contact: string;
	};
	hero: {
		headline: string;
		tagline: string;
		cta: string;
	};
	about: {
		title: string;
		body: string;
		location: string;
		org: string;
	};
	services: {
		title: string;
		intro: string;
		items: {
			title: string;
			summary: string;
		}[];
	};
	projects: {
		title: string;
		subtitle: string;
		items: {
			title: string;
			description: string;
			tags: string[];
			url?: string;
		}[];
	};
	contact: {
		title: string;
		subtitle: string;
		email: string;
		emailLabel: string;
		location: string;
		locationLabel: string;
		ctaEmail: string;
		linkedInUrl: string;
		ctaLinkedIn: string;
	};
	footer: {
		tagline: string;
		rights: string;
	};
}
