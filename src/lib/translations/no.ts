import type { Itranslations } from './Itranslation';

export const norwegianTranslations: Itranslations = {
	meta: {
		title: 'Haglund Software',
		description: 'Backend- og fullstackutvikler i Norge — Vegard Haglund'
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
		headline: 'Robuste backendløsninger, fra idé til produksjon',
		tagline: 'Jeg utvikler API-er, backendsystemer og komplette webløsninger — fra Norge.',
		cta: 'Ta kontakt'
	},
	about: {
		title: 'Om meg',
		body: 'Jeg heter Vegard Haglund og er selvstendig utvikler med base i Norge. Jeg spesialiserer meg på backendsystemer, men leverer også komplette webløsninger. Jeg utvikler API-er, datalag og brukergrensesnittene som knytter alt sammen — fra arkitektur og datamodellering til produksjonsklar kode. Kunstig intelligens bruker jeg som et praktisk verktøy for å lage prototyper raskere og feilsøke mer effektivt, uten at det går på bekostning av kvalitet eller vedlikeholdbarhet. Hos meg får du direkte dialog, tydelige råd og løsninger som er enkle å videreutvikle.',
		location: 'Norge',
		org: 'Haglund Software',
		portraitAlt: 'Portrett av Vegard Haglund'
	},
	services: {
		title: 'Tjenester',
		intro:
			'Dette kan jeg hjelpe deg med. Omfang og teknologivalg tilpasses behovene i hvert prosjekt.',
		items: [
			{
				title: 'API-er og backendløsninger',
				summary:
					'Utvikling med ASP.NET Core, PostgreSQL eller SQL Server — fra API-design og datalagring til integrasjoner og OpenAPI.'
			},
			{
				title: 'Komplette webløsninger',
				summary:
					'Fra backend og database til frontend — inkludert Docker Compose, migrasjoner og produksjonsklare bygg.'
			},
			{
				title: 'Webapplikasjoner og nettsider',
				summary:
					'SvelteKit, React og TypeScript — for dashbord, interne verktøy og markedsføringssider.'
			}
		]
	},
	projects: {
		title: 'Prosjekter',
		subtitle: 'Et utvalg kundeprosjekter og egne prosjekter.',
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
		subtitle: 'Planlegger du et backend- eller fullstackprosjekt? Jeg tar gjerne en prat.',
		email: 'vegardhaglund@proton.me',
		emailLabel: 'E-post',
		location: 'Norge',
		locationLabel: 'Sted',
		ctaEmail: 'Send e-post',
		linkedInUrl: 'https://linkedin.com/in/vegardhaglund',
		ctaLinkedIn: 'LinkedIn'
	},
	footer: {
		tagline: 'Selvstendig utvikler innen backend og fullstack.',
		rights: '© Haglund Software — Norge'
	}
};
