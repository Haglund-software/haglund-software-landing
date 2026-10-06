import type { Itranslations } from './Itranslation';

export const norwegianTranslations: Itranslations = {
	meta: {
		title: 'Haglund Software — Backend- og fullstackutvikler i Norge',
		description:
			'Selvstendig backend- og fullstackutvikler i Norge. API-er, skydatabaser, nettsider og fullstackapplikasjoner — fra idé til produksjon. Ta kontakt med Vegard Haglund.'
	},
	nav: {
		brand: 'Haglund Software',
		hero: 'Hjem',
		about: 'Om meg',
		services: 'Tjenester',
		projects: 'Prosjekter',
		faq: 'FAQ',
		contact: 'Kontakt',
		localeLabel: 'Språk',
		themeToggle: 'Bytt mellom lys og mørk modus'
	},
	hero: {
		eyebrow: 'Backend- og fullstackutvikling',
		headline: 'Fra idé til produksjon — backend og webløsninger som bare fungerer',
		tagline:
			'Jeg heter Vegard og er selvstendig utvikler i Norge. Jeg designer API-er, bygger backendsystemer og leverer komplette webløsninger rundt dem — og du snakker direkte med den som skriver koden.',
		cta: 'Fortell om prosjektet ditt',
		ctaSecondary: 'Se hva jeg tilbyr',
		trust: ['Basert i Norge', 'Direkte kontakt med utvikleren', 'Bygget for vedlikehold'],
		scrollHint: 'Bla ned for å lese mer'
	},
	about: {
		title: 'Om meg',
		body: [
			'Jeg heter Vegard Haglund og er selvstendig utvikler med base i Norge. Jeg spesialiserer meg på backendsystemer, men leverer også komplette webløsninger. Jeg utvikler API-er, datalag og brukergrensesnittene som knytter alt sammen — fra arkitektur og datamodellering til produksjonsklar kode.',
			'Kunstig intelligens bruker jeg som et praktisk verktøy for å lage prototyper raskere og feilsøke mer effektivt, uten at det går på bekostning av kvalitet eller vedlikeholdbarhet. Hos meg får du direkte dialog, tydelige råd og løsninger som er enkle å videreutvikle.'
		],
		highlights: [
			'Direkte kontakt — ingen mellomledd',
			'Pragmatiske teknologivalg, bygget for vedlikehold',
			'AI-assistert prototyping, menneskelig kvalitetssikret kode'
		],
		location: 'Norge',
		org: 'Haglund Software',
		portraitAlt: 'Portrett av Vegard Haglund',
		next: 'Se hva jeg kan hjelpe med'
	},
	services: {
		title: 'Tjenester',
		intro:
			'Fra en enkel nettside med domene til et fullstackprodukt på en skydatabase — jeg tar den biten du trenger, eller hele løsningen.',
		items: [
			{
				title: 'Statiske nettsider og domener',
				summary:
					'Landingssider og markedsføringssider, inkludert domeneoppsett, DNS og hosting, slik at siden faktisk kommer på nett.'
			},
			{
				title: 'API-er',
				summary:
					'Dedikerte API-er med eller uten autentisering — design, datalagring og integrasjoner, dokumentert med OpenAPI slik at hvilken som helst klient kan bruke dem.'
			},
			{
				title: 'Frontendintegrasjoner',
				summary:
					'Koble et eksisterende brukergrensesnitt til en backend, eller bygg frontenden som snakker med et API du allerede har.'
			},
			{
				title: 'Fullstackapplikasjoner',
				summary:
					'Komplette produkter med skydatabaser, autentisering, API-er og webappen brukerne møter — eller hva som helst derimellom.'
			}
		],
		stackTitle: 'Teknologier',
		stackIntro: 'Verktøyene jeg bruker mest — valgt etter oppgaven, ikke omvendt.',
		contactNote:
			'Trenger du noe mer konkret? Vi finner ut av omfang, teknologivalg og veien videre.',
		contactCta: 'Ta kontakt'
	},
	process: {
		title: 'Slik jobber jeg',
		intro: 'En enkel og åpen prosess — så du alltid vet hvor prosjektet står.',
		steps: [
			{
				title: 'Innledende prat',
				summary: 'Vi går gjennom hva du vil bygge og hvilket problem det skal løse.'
			},
			{
				title: 'Omfang og forslag',
				summary:
					'Du får et tydelig skriftlig forslag: hva som skal bygges, hvordan og i hvilken rekkefølge.'
			},
			{
				title: 'Utvikling i iterasjoner',
				summary:
					'Fungerende programvare underveis, slik at du kan gi tilbakemeldinger tidlig og ofte.'
			},
			{
				title: 'Lansering og overlevering',
				summary:
					'Satt i drift, dokumentert og klart for deg — med hjelp i etterkant om du trenger det.'
			}
		]
	},
	projects: {
		title: 'Prosjekter',
		subtitle: 'Produkter jeg bygger og drifter selv.',
		visitCta: 'Besøk',
		items: [
			{
				title: 'Kunbord',
				description:
					'Et minimalistisk kryptert kanbanbrett med arbeidsområder, Free- og Super-nivå, innlogging med Google eller e-post, og mer.',
				highlights: [
					'Krypterte brett',
					'Arbeidsområder',
					'Google- og e-postinnlogging',
					'Free- og Super-nivå'
				],
				url: 'https://kunbord.com',
				favicon: 'https://www.kunbord.com/favicon.ico'
			}
		]
	},
	faq: {
		title: 'Ofte stilte spørsmål',
		intro: 'Noen ting mange lurer på før de tar kontakt.',
		items: [
			{
				question: 'Hva koster et prosjekt?',
				answer:
					'Det avhenger av omfanget. Når jeg har forstått hva du trenger, får du et skriftlig forslag med estimat før arbeidet starter.'
			},
			{
				question: 'Kan du jobbe med en eksisterende kodebase?',
				answer:
					'Ja. Jeg kan videreutvikle, refaktorere eller koble meg på det du allerede har — enten det er et API, en database eller en frontend.'
			},
			{
				question: 'Hjelper du etter lansering?',
				answer:
					'Ja. Vedlikehold, videreutvikling og hosting kan avtales etter behov, slik at løsningen fortsetter å fungere godt.'
			},
			{
				question: 'Hvilke teknologier bruker du?',
				answer:
					'Ofte TypeScript, Svelte eller React, .NET og PostgreSQL — men valget avhenger av behovene dine og det du allerede har.'
			},
			{
				question: 'Trenger jeg en ferdig kravspesifikasjon før vi snakker?',
				answer:
					'Nei. En grov idé er et godt utgangspunkt. Å avklare omfang og prioriteringer er en del av jobben.'
			}
		]
	},
	contact: {
		title: 'La oss bygge noe sammen',
		subtitle:
			'Fortell kort hva du bygger og hvor du står fast. Jeg svarer med spørsmål eller et forslag til neste steg.',
		email: 'kontakt@haglundsoftware.no',
		emailLabel: 'E-post',
		emailSubject: 'Prosjektforespørsel',
		location: 'Norge',
		locationLabel: 'Sted',
		ctaEmail: 'Send e-post',
		githubUrl: 'https://github.com/Haglund-software',
		ctaGithub: 'GitHub'
	},
	footer: {
		tagline: 'Selvstendig utvikler innen backend og fullstack.',
		orgNumber: 'Org.nr. 937 564 910',
		rights: 'Haglund Software — Norge'
	}
};
