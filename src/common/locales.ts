import type { Props } from "astro";
import type { locale } from "../assets/types/i18n";
import FlagBulgaria from "../components/icons/FlagBulgaria.astro";
import FlagUK from "../components/icons/FlagUK.astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export const locales: locale[] = ['bg', 'en'];

export const languageLabels: Record<locale, LanguageLabel> = {
  bg: {
    bg: 'Български',
    en: 'Английски',
    flag: FlagBulgaria,
  },
  en: {
    bg: 'Bulgarian',
    en: 'English',
    flag: FlagUK,
  }
}

interface LanguageLabel extends Record<locale, string> {
  flag: AstroComponentFactory
}