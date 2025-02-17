export const homeTranslations = {
  bg: {
    title: 'Рекламна агенция Студио Дада',
    introduction: 'Ние сме агенция с над 25 години опит в рекламната индустрия в България. Ние предлагаме цялостни решения за печатна и дигитална реклама и комбинираме креативност и иновации, за да помогнем на бизнеса да комуникира ефективно своята идентичност. Нашият фокус е в качеството, надеждността и персонализирания подход към всеки клиент.',
    sections: [
      {
        title: 'Какво предлагаме',
        text: 'Ние предлагаме пълен спектър от рекламни решения – от печатни материали (листовки, брошури, каталози, папки, плакати, шоу-карти, уоблери, шелфтолкъри) и продуктови опаковки (кутии, бандероли, етикети, стикери), календари, тефтери, торби и пликове, до креативен дизайн и адаптация на уеб-банери, карета, рекламни страници и професионално брандиране на рекламни сувенири, дрехи, инструменти и други промоционални артикули.',
        buttonText: 'Разгледайте пълния каталог',
      },
      {
        title: 'Доверен партньор на различни компании',
        text: 'Ние сме дългогодишен партньор на водещи компании в почти всички пазарни сектори и най-вече в сферите на фармацевтика и козметика, внос и продажба на автомобили и авточасти, селско стопанство, хранително-вкусова индустрия и други',
        buttonText: 'Запознайте се с нашите клиенти',
      },
      {
        title: 'Портфолио',
        text: 'Разгледайте реални дизайни, опаковки и други изделия, които сме разработили за нашите клиенти.',
        buttonText: 'Прегледайте нашите проекти'
      },
      {
        title: 'Компания с дългогодишна история',
        text: 'Стартирахме преди близо 25 години като малко рекламно студио, а днес сме надежден партньор за печатни и дигитални рекламни решения.',
        buttonText: 'Научете повече за нас',
      },
    ] as HomeSection[],
  },
  en: {
    title: 'Advertising agency Studio Dada',
    introduction: 'We are an agency with over 25 years of experience in the advertising industry in Bulgaria. We offer complete print and digital advertising solutions and combine creativity and innovation to help businesses communicate their identity effectively. Our focus is on quality, reliability and a personalized approach to each client.',
    sections: [
      {
        title: 'What we offer',
        text: 'We offer a full range of advertising solutions - from printed materials (leaflets, brochures, catalogues, folders, posters, show cards, wrappers, shelf talkers) and product packaging (boxes, excise stamps, labels, stickers), calendars, notebooks, bags, and envelopes, to creative design and adaptation of web banners, boxes, advertising pages and professional branding of promotional gifts, clothing, tools, and other promotional items.',
        buttonText: 'View the full catalogue',
      },
      {
        title: 'Trusted partner of various companies',
        text: 'We are a long-standing partner of leading companies in almost all market sectors, especially in the fields of the pharmaceutics and cosmetics, automotive and auto parts import and sales, agriculture, and food and beverages, among others',
        buttonText: 'Meet our customers',
      },
      {
        title: 'Portfolio',
        text: 'Take a look at real designs, packages, and other products we have developed for our customers.',
        buttonText: 'Browse our works'
      },
      {
        title: 'A company with a long history',
        text: 'We started nearly 25 years ago as a small advertising studio, and today we are a trusted partner for print and digital advertising solutions.',
        buttonText: 'Learn more about us',
      },
    ] as HomeSection[],
  }
}

export type HomeSection = {
  title: string;
  text: string;
  buttonText: string;
}