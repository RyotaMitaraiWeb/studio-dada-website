import type { locale } from "../assets/types/i18n";
import { locales } from "../common/locales";

export function determine404Language(): locale {
  const path = location.pathname;

  for (const locale of locales) {
    if (path.startsWith(`/${locale}`)) {
      return locale;
    }
  }

  if (navigator.languages) {
    const languages = navigator.languages as locale[];
    for (const language of languages) {
      if (locales.includes(language)) {
        return language;
      }
    }
  } else {
    const language = navigator.language as locale;
    if (locales.includes(language)) {
      return language;
    }
  }

  return 'bg';
}