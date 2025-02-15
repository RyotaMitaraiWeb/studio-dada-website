export type category = 'packages' | 'sacks' | 'wobblers';

export type PortfolioCategory = {
  category: category;
  imageFileNames: string[];
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
    imageFileNames: ['apivita_bee_radiant_cream_box.png'],
    bg: {
      name: "Опаковки"
    },
    en: {
      name: "Packages"
    },
  }
];