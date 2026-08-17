export type { Itranslations } from './Itranslation';

import { englishTranslations } from './en';
import { norwegianTranslations } from './no';
import type { Itranslations } from './Itranslation';

export type TranslationLocale = 'en' | 'no';

export const translations: Record<TranslationLocale, Itranslations> = {
	en: englishTranslations,
	no: norwegianTranslations
};

export function getTranslations(locale: string = 'no'): Itranslations {
	return locale.toLowerCase().startsWith('no') ? translations.no : translations.en;
}
