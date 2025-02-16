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
  },
  {
    category: "wobblers",
    images: [
      {
        imageFileName: 'talcid_1.png',
        bg: {
          caption: 'Уоблер за дъвки за дъвчене "Талцид", Байер'
        },
        en: {
          caption: 'Wobbler for chewing gum "Talcid", Bayer'
        }
      }
    ],
    headerImage: "talcid_1.png",
    bg: {
      name: "Уоблери"
    },
    en: {
      name: "Wobblers"
    }
  },
  {
    category: "sacks",
    images: [
      {
        imageFileName: 'peugeot_bag.png',
        bg: {
          caption: 'Брандиран плик за Peugeot, София Франс Ауто'
        },
        en: {
          caption: 'Branded bag for Peugeot, Sofia France Auto'
        }
      }
    ],
    headerImage: "peugeot_bag.png",
    bg: {
      name: "Пликове"
    },
    en: {
      name: "Sacks and bags"
    }
  },
];