import type { Itranslations } from './Itranslation';

export const norwegianTranslations: Itranslations = {
	meta: {
		title: 'Haglund Software',
		description: 'Programvareutvikling og rådgivning fra Vegard Haglund'
	},
	nav: {
		brand: 'Haglund Software',
		hero: 'Hjem',
		about: 'Om meg',
		services: 'Tjenester',
		projects: 'Prosjekter',
		contact: 'Kontakt'
	},
	hero: {
		headline: 'Gjennomtenkt programvare som varer',
		tagline:
			'Uavhengig programvareutvikling fra Norge — API-er, webapper og fullstack-produkter.',
		cta: 'Ta kontakt'
	},
	about: {
		title: 'Om meg',
		body: 'Jeg hjelper team og gründere med å levere pålitelig programvare — fra enkle landingssider til API-er og fullstack-produkter. Jeg jobber pragmatisk, kommuniserer tydelig og etterlater kodebaser du kan vedlikeholde.',
		location: 'Norge',
		org: 'Haglund Software ENK'
	},
	services: {
		title: 'Tjenester',
		intro: 'Eksempler på hvordan jeg kan bidra. Omfang og teknologi tilpasses hvert prosjekt.',
		items: [
			{
				title: 'Webapper og nettsider',
				summary: 'SvelteKit, React og TypeScript — markedsføringssider, dashbord og lette apper.'
			},
			{
				title: 'Backend-API-er',
				summary: 'ASP.NET Core med PostgreSQL eller SQL Server — design, persistens og OpenAPI.'
			},
			{
				title: 'Fullstack-leveranse',
				summary: 'API, frontend og lokalt utviklingsmiljø — Docker Compose, migrasjoner og deploy-klare bygg.'
			}
		]
	},
	projects: {
		title: 'Prosjekter',
		subtitle: 'Utvalgt arbeid og sideprosjekter.',
		items: [
			{
				title: '[Prosjektnavn 1]',
				description: '[Kort beskrivelse — hva det gjør og resultatet.]',
				tags: ['SvelteKit', 'TypeScript']
			},
			{
				title: '[Prosjektnavn 2]',
				description: '[Kort beskrivelse — hva det gjør og resultatet.]',
				tags: ['ASP.NET Core', 'PostgreSQL']
			}
		]
	},
	contact: {
		title: 'Ta kontakt',
		subtitle: 'Har du et prosjekt i tankene? Jeg hører gjerne fra deg.',
		email: 'vegardhaglund@proton.me',
		emailLabel: 'E-post',
		location: 'Norge',
		locationLabel: 'Sted',
		ctaEmail: 'Send e-post',
		linkedInUrl: 'https://linkedin.com/in/vegardhaglund',
		ctaLinkedIn: 'LinkedIn'
	},
	footer: {
		tagline: 'Bygger gjennomtenkt programvare.',
		rights: '© Haglund Software ENK — Norge'
	}
};
