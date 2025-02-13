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
    id: 'leaflets-brochures-catalogues-folders',
    bg: {
      name: 'Рекламни листовки, брошури, каталози, папки',
      description: 'Lorem ipsum dolor'
    },
    en: {
      name: 'Advertising leaflets, brochures, catalogues, folders',
      description: 'Lorem ipsum dolor',
    },
    imageFileName: '3D_Brown-Sugar_Box_100x4g_0922.png'
  }
]