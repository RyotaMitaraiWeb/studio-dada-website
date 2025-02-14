import type { JSX } from "astro/jsx-runtime";

type Reason = {
  title: string;
  content: string;
};

export const catalogueTranslations = {
  bg: {
    title: 'Продукти и услуги',
    viewMore: 'Виж повече',
    advantages: {
      title: 'Защо да изберете продуктите и услугите на Студио Дада',
      reasons: [
        {
          title: 'Кратки срокове на изпълнение',
          content: 'Ние сме затворили цикъла на производство на по-малките изделия и работим с различни подизпълнители за външни операции, което ни позволява да обслужим Вашите рекламни нужди дори и при спешност'
        },
        {
          title: 'Гарантирано високо качество на произведените изделия',
          content: 'Нашите служители имат дългогодишен опит в производството на рекламни изделия и имат внимателно и старателно отношение към процеса. Също така, ние подбираме подизпълнители, които използват съвременна модерна технология за довършителните операции'
        },
        {
          title: 'Възможност за персонализиане на изделията',
          content: 'Съдържание'
        },
      ] as Reason[],
    },
    productOrServiceNotFound: {
      title: 'Не намирате това, което търсите?',
      messageChunks: ['Възможностите на Студио Дада не се ограничават до описаните продукти и услуги и можем евентуално да обслужим по-нестандартни поръчки. Може да се ', 'свържете с нас', ', за да обсъдим Вашия конкретен случай, за да прецените дали и с какво можем да Ви бъдем полезни.'],
    },
  },
  en: {
    title: 'Products and services',
    viewMore: 'Learn more',
    advantages: {
      title: 'Why choose Studio Dada\'s products and services',
      reasons: [
        {
          title: 'Short execution deadlines',
          content: 'We have closed the production cycle of smaller items and work with a variety of subcontractors for outside operations, allowing us to fulfill your advertising needs even in moments of emergency'
        },
        {
          title: 'Guaranteed high quality of manufactured products',
          content: 'Our employees have years of experience in the production of promotional products and have a careful and thorough attitude to the process. Also, we select subcontractors who use advanced modern technology for finishing operations'
        },
        {
          title: 'Possibility for customization of the products',
          content: 'Content'
        },
      ] as Reason[],
    },
    productOrServiceNotFound: {
      title: 'Not finding what you are looking for?',
      messageChunks: ['Studio Dada\'s capabilities are not limited to the products and services described and we can potentially take on more custom orders. ', 'You can contact us', ' to discuss your specific case to see if and how we can be of assistance.'],
    },
  }
}