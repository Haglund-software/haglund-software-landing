export const sectionThemes = {
	hero: {
		tint: 'section-tint-primary',
		heading: 'text-primary-content',
		border: 'border-primary',
		badge: 'badge-primary',
		navActive: 'font-semibold text-primary border-e-2 border-primary pe-2'
	},
	about: {
		tint: 'section-tint-secondary',
		heading: 'section-secondary',
		border: 'border-secondary',
		badge: 'badge-secondary',
		navActive: 'nav-active-accent font-semibold border-e-2 pe-2'
	},
	services: {
		tint: 'section-tint-accent',
		heading: 'text-accent',
		border: 'border-accent',
		badge: 'badge-accent',
		navActive: 'font-semibold text-accent border-e-2 border-accent pe-2'
	},
	projects: {
		tint: 'section-tint-info',
		heading: 'text-info',
		border: 'border-info',
		badge: 'badge-info',
		navActive: 'font-semibold text-info border-e-2 border-info pe-2'
	},
	contact: {
		tint: 'section-tint-neutral',
		heading: 'section-heading-neutral',
		border: 'border-base-content/25',
		badge: 'badge-neutral',
		navActive: 'nav-active-neutral font-semibold border-e-2 pe-2'
	}
} as const;

export type SectionThemeKey = keyof typeof sectionThemes;

