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
    images: [
      {
        imageFileName: 'apivita_bee_radiant_cream_box.png',
        bg: {
          caption: 'Кутия за крем за кожа "Bee Radiant" на APIVITA, Дермикос',
        },
        en: {
          caption: 'Box for the "Bee Radiant" skin cream of APIVITA, Dermicos',
        }
      },
      {
        imageFileName: '3D_Brown-Sugar_Box_100x4g_0922.png',
        bg: {
          caption: 'Кутия за кафява захар, Нико',
        },
        en: {
          caption: 'Box for brown sugar, Niko',
        },
      },
      {
        imageFileName: 'isdin_detox_beauty_box.png',
        bg: {
          caption: 'Кутия за ISDIN Detox Beauty, Дермикос',
        },
        en: {
          caption: 'Box for ISDIN Detox Beauty, Dermicos',
        },
      },
      {
        imageFileName: 'apivita_beevine_elixir.png',
        bg: {
          caption: 'Кутия за "Beevine Elixir", APIVITA, Дермикос',
        },
        en: {
          caption: 'Box for "Beevine Elixir", APIVITA, Dermicos',
        },
      }
    ],
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
      },
      {
        imageFileName: 'bayer_aspirin.png',
        bg: {
          caption: 'Брандиран плик за Аспирин, Байер'
        },
        en: {
          caption: 'Branded bag for Aspirin, Bayer'
        }
      },
      {
        imageFileName: 'iberogast_4.png',
        bg: {
          caption: 'Брандиран плик за Иберогаст, Байер'
        },
        en: {
          caption: 'Branded bag for Iberogast, Bayer'
        }
      },
      {
        imageFileName: 'renault_bag.png',
        bg: {
          caption: 'Брандиран плик за Renault'
        },
        en: {
          caption: 'Branded bag for Renai;t'
        }
      },
    ],
    headerImage: "peugeot_bag.png",
    bg: {
      name: "Пликове и торби"
    },
    en: {
      name: "Sacks and bags"
    }
  },
];