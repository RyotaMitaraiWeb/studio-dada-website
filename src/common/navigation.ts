import type { locale } from "../assets/types/i18n";

type Link = {
  bg: string;
  en: string;
  href: (language: locale) => string;
}

export const navigationLinks: Link[] = [
  {
    bg: 'Начало',
    en: 'Home',
    href: (language) => `/${language}`
  },
  {
    bg: 'Каталог',
    en: 'Catalogue',
    href: (language) => `/${language}/catalogue`
  },
  {
    bg: 'Портфолио',
    en: 'Portfolio',
    href: (language) => `/${language}/portfolio`
  },
  {
    bg: 'Клиенти',
    en: 'Clients',
    href: (language) => `/${language}/clients`
  },
  {
    bg: 'За нас',
    en: 'About us',
    href: (language) => `/${language}/about`
  },
  {
    bg: 'Контакти',
    en: 'Contacts',
    href: (language) => `/${language}/contacts`
  },
]