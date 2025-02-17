import type { locale } from "../assets/types/i18n";

export type Client = {
  name: string;
  description: string;
};

export type ClientsData = Record<locale, Client>;

export const clients: ClientsData[] = [
  {
    bg: {
      name: 'Байер България',
      description: 'Представителство за България на концерна Байер АГ, производител на лекарствени продукти и препарати за растителна защита и борба с вредители'
    },
    en: {
      name: 'Bayer Bulgaria',
      description: 'Representation for Bulgaria of Bayer AG, manufacturer of pharmaceutical products and preparations for plant protection and pest control'
    }
  },
  {
    bg: {
      name: 'София Франс Ауто',
      description: 'Официален вносител на Peugeot, Citroen, BMW, Opel и други автомобилни марки'
    },
    en: {
      name: 'Sofia France Auto',
      description: 'Official importer of Peugeot, Citroen, BMW, Opel and other car brands'
    }
  },
  {
    bg: {
      name: 'Дермикос',
      description: 'Официален вносител и дистрибутор на дерматологична козметика (URIAGE, NUXE, ISDIN, APIVITA)'
    },
    en: {
      name: 'Dermicos',
      description: 'Official importer and distributor of dermatological cosmetics (URIAGE, NUXE, ISDIN, APIVITA)'
    }
  },
  {
    bg: {
      name: 'Панацеа',
      description: 'Производител на хранителни добавки и билкови екстракти'
    },
    en: {
      name: 'Panacea',
      description: 'Manufacturer of dietary supplements and herbal extracts'
    }
  },
  {
    bg: {
      name: 'Биотрейд България',
      description: 'Български производител на козметични продукти'
    },
    en: {
      name: 'Biotrade Bulgaria',
      description: 'Bulgarian manufacturer of cosmetic products'
    }
  },
  {
    bg: {
      name: 'Нико',
      description: 'Български производител и вносител на продукти за чай и кафе'
    },
    en: {
      name: 'Niko',
      description: 'Bulgarian manufacturer and importer of tea and coffee products'
    }
  },
  {
    bg: {
      name: 'TotalEnergies Bulgaria',
      description: 'Представителство за България на концерна Байер АГ, производител на лекарствени продукти и препарати за растителна защита и борба с вредители'
    },
    en: {
      name: 'TotalEnergies Bulgaria',
      description: 'Manufacturer of engine and transmission oils and engine lubricants (representation for Bulgaria)'
    }
  },
  {
    bg: {
      name: 'RENAULT-DACIA Group Bulgaria',
      description: 'Представителство за България на концерна Байер АГ, производител на лекарствени продукти и препарати за растителна защита и борба с вредители'
    },
    en: {
      name: 'RENAULT-DACIA Group Bulgaria',
      description: 'Official representative for Bulgaria of the RENAULT-DACIA Group'
    }
  },
  {
    bg: {
      name: 'KWS България',
      description: 'Производител и дистрибутор на сортови и хибридни семена за високи добиви в земеделието (представителство за България)'
    },
    en: {
      name: 'KWS Bulgaria',
      description: 'Manufacturer and distributor of varietal and hybrid seeds for high yields in agriculture (representation for Bulgaria)'
    }
  },
  {
    bg: {
      name: 'UPL България',
      description: 'Производител и дистрибутор на сортови и хибридни семена за високи добиви в земеделието и препарати за расистелна защита (представителство за България)'
    },
    en: {
      name: 'UPL Bulgaria',
      description: 'Producer and distributor of varietal and hybrid seeds for high yields in agriculture and pesticides for plant protection (representation for Bulgaria)'
    }
  },
  {
    bg: {
      name: 'DEKALB',
      description: 'Производител и дистрибутор на сортови и хибридни семена за високи добиви в земеделието (представителство за България)'
    },
    en: {
      name: 'DEKALB',
      description: 'Manufacturer and distributor of varietal and hybrid seeds for high yields in agriculture (representation for Bulgaria)'
    }
  },
  {
    bg: {
      name: 'Илиада',
      description: 'Вносител на марки професионални препарати за фризьорство'
    },
    en: {
      name: 'Iliada',
      description: 'Importer of professional hairdressing brands'
    }
  },
  {
    bg: {
      name: 'MG Beauty',
      description: 'Официален вносител на марката професионални продукти за фризьорство и козметика CHI'
    },
    en: {
      name: 'MG Beauty',
      description: 'Official importer of the professional hairdressing and cosmetics brand CHI'
    }
  },
]