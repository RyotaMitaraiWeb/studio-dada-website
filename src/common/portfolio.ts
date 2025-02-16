export type category = 'packages' | 'sacks' | 'wobblers';
export type PortfolioItemImage = {
  imageFileName: string;
  bg: {
    caption: string;
  },
  en: {
    caption: string;
  }
}

export type PortfolioCategory = {
  category: category;
  images: PortfolioItemImage[];
  headerImage: string;
  bg: {
    name: string;
  },
  en: {
    name: string;
  },
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    category: "packages",
    headerImage: 'apivita_bee_radiant_cream_box.png',
    bg: {
      name: "Опаковки"
    },
    en: {
      name: "Packages"
    },
    images: [{
      imageFileName: 'apivita_bee_radiant_cream_box.png',
      bg: {
        caption: 'Кутия за крем за кожа "Bee Radiant" на Apivita, Дермикос',
      },
      en: {
        caption: 'Box for the "Bee Radiant" skin cream of Apivita, Dermicos',
      }
    }],
  }
];