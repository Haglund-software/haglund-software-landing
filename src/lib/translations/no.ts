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
			'Fra en enkel nettside med domene til et fullstack-produkt på en skydatabase — jeg tar den biten du trenger, eller hele løsningen.',
		items: [
			{
				title: 'Statiske nettsider og domener',
				summary:
					'Landingssider og markedsføringssider, inkludert domeneoppsett, DNS og hosting, slik at siden faktisk kommer på nett.'
			},
			{
				title: 'API-er',
				summary:
					'Dedikerte API-er med eller uten autentisering — design, datalagring, integrasjoner og OpenAPI som kan brukes fra hvilken som helst klient.'
			},
			{
				title: 'Frontendintegrasjoner',
				summary:
					'Koble et eksisterende brukergrensesnitt til en backend, eller bygg frontenden som snakker med et API du allerede har.'
			},
			{
				title: 'Fullstack-applikasjoner',
				summary:
					'Komplette produkter med skydatabaser, autentisering, API-er og webappen foran — eller hva som helst derimellom.'
			}
		],
		stackTitle: 'Teknologier',
		stackIntro: 'Verktøyene jeg bruker mest — valgt etter oppgaven, ikke omvendt.',
		contactNote:
			'Trenger du noe mer konkret? Vi finner ut av omfang, teknologivalg og veien videre.',
		contactCta: 'Ta kontakt'
	},
	projects: {
		title: 'Prosjekter',
		subtitle: 'Et utvalg kundeprosjekter og egne prosjekter.',
		items: [
			{
				title: 'Kunbord',
				description:
					'Et minimalistisk kryptert kanban-brett med arbeidsområder, Free- og Super-nivå, Google- eller e-postinnlogging, og mer.',
				url: 'https://kunbord.com',
				favicon: 'https://www.kunbord.com/favicon.ico'
			}
		]
	},
	contact: {
		title: 'Ta kontakt',
		subtitle: 'Planlegger du et backend- eller fullstackprosjekt? Jeg tar gjerne en prat.',
		email: 'kontakt@haglundsoftware.no',
		emailLabel: 'E-post',
		location: 'Norge',
		locationLabel: 'Sted',
		ctaEmail: 'Send e-post',
		linkedInUrl: 'https://github.com/Haglund-software',
		ctaLinkedIn: 'GitHub'
	},
	footer: {
		tagline: 'Selvstendig utvikler innen backend og fullstack.',
		orgNumber: 'Org.nr. 937 564 910',
		rights: 'Haglund Software — Norge'
	}
};
