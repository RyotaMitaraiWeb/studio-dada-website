export type CatalogueItem = {
  id: string;
  bg: {
    name: string;
    description: string;
  },
  en: {
    name: string;
    description: string;
  }
  imageFileName: string;
}

export const catalogue: CatalogueItem[] = [
  {
    id: 'leaflets-brochures-catalogues-and-folders',
    bg: {
      name: 'Рекламни листовки, брошури, каталози, папки',
      description: 'Lorem ipsum dolor'
    },
    en: {
      name: 'Advertising leaflets, brochures, catalogues, and folders',
      description: 'Lorem ipsum dolor',
    },
    imageFileName: '3D_Brown-Sugar_Box_100x4g_0922.png'
  },
  {
    id: 'posters-showcards-wobblers-and-shelftalkers',
    bg: {
      name: 'Плакати, шоу карти, уоблери, шелфтокъри',
      description: 'Lorem ipsum dolor'
    },
    en: {
      name: 'Posters, show cards, wobblers, and shelftalkers',
      description: 'Lorem ipsum dolor',
    },
    imageFileName: '3D_Brown-Sugar_Box_100x4g_0922.png'
  },
  {
    id: 'product-packages',
    bg: {
      name: 'Продуктови опаковки (кутии, бандероли, етикети, стикери)',
      description: 'Lorem ipsum dolor'
    },
    en: {
      name: 'Product packages (boxes, excise stamps, tags, and stickers)',
      description: 'Lorem ipsum dolor',
    },
    imageFileName: '3D_Brown-Sugar_Box_100x4g_0922.png'
  },
  {
    id: 'calendars-notebooks-sacks-and-envelopes',
    bg: {
      name: 'Календари, тефтери, торби, пликове',
      description: 'Lorem ipsum dolor'
    },
    en: {
      name: 'Calendars, notebooks, sacks, and envelopes',
      description: 'Lorem ipsum dolor',
    },
    imageFileName: '3D_Brown-Sugar_Box_100x4g_0922.png'
  },
  {
    id: 'design-and-development-of-product-packages',
    bg: {
      name: 'Проектиране и дизайн на продуктови опаковки',
      description: 'Lorem ipsum dolor'
    },
    en: {
      name: 'Design and development of product packages',
      description: 'Lorem ipsum dolor',
    },
    imageFileName: '3D_Brown-Sugar_Box_100x4g_0922.png'
  },
  {
    id: 'design-and-adaption-of-advertising-materials',
    bg: {
      name: 'Дизайн и адаптация на рекламни материали',
      description: 'Lorem ipsum dolor'
    },
    en: {
      name: 'Design and adaptation of advertising materials',
      description: 'Lorem ipsum dolor',
    },
    imageFileName: '3D_Brown-Sugar_Box_100x4g_0922.png'
  },
  {
    id: 'design-and-adaption-of-web-banners-boxes-and-advertising-pages',
    bg: {
      name: 'Дизайн и адаптация на уеб банери, карета и рекламни страници',
      description: 'Lorem ipsum dolor'
    },
    en: {
      name: 'Design and adaptation of web banners, boxes, and advertising pages',
      description: 'Lorem ipsum dolor',
    },
    imageFileName: '3D_Brown-Sugar_Box_100x4g_0922.png'
  },
  {
    id: 'branding-of-advertising-souvenirs-clothes-tools-and-others',
    bg: {
      name: 'Брандиране на рекламни сувенири, дрехи, инструменти и други',
      description: 'Lorem ipsum dolor'
    },
    en: {
      name: 'Branding of advertising souvenirs, clothes, tools, and others',
      description: 'Lorem ipsum dolor',
    },
    imageFileName: '3D_Brown-Sugar_Box_100x4g_0922.png'
  },
]