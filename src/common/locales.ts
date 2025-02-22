import type { locale } from "../assets/types/i18n";

export const locales: locale[] = ['bg', 'en'];

export const languageLabels: Record<locale, LanguageLabel> = {
  bg: {
    bulgarian: 'Български',
    english: 'Английски'
  },
  en: {
    bulgarian: 'Bulgarian',
    english: 'English',
  }
}

type LanguageLabel = {
  bulgarian: string;
  english: string;
}