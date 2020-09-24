export type Award = {
  date: string;
  description: string;
  title: string;
  type: 'award' | 'honorable mention';
  url: string | null;
};

export type Awards = Award[];

export const awards: Awards = [
  {
    date: '09/2020',
    description: 'Elämäsi sää',
    title: 'SNDS Best Digital Design – Bronze',
    type: 'award',
    url: 'https://yle.fi/uutiset/3-10700289',
  },
  {
    date: '09/2020',
    description: 'Elämäsi uutiset',
    title: 'SNDS Best Digital Design – Silver',
    type: 'award',
    url: 'https://yle.fi/uutiset/3-10955498',
  },
  {
    date: '11/2019',
    description:
      'Myönnetty erityistä journalistisista taitoa vaatineesta ohjelmallisesta työstä Yleisradiossa.',
    title: 'Ohjelmastipendi',
    type: 'award',
    url: null,
  },
  {
    date: '11/2019',
    description: 'Vuoteni köyhyysrajalla',
    title: 'Nordic Data Journalism Awards 2019',
    type: 'award',
    url: 'https://yle.fi/uutiset/3-10509829',
  },
  {
    date: '11/2019',
    description: 'Elämäsi sää',
    title: 'Nordic Data Journalism Awards 2019 (ehdokkuus)',
    type: 'honorable mention',
    url: 'https://yle.fi/uutiset/3-10700289',
  },
  {
    date: '04/2019',
    description: 'Liian rankka räp',
    title: 'Koura (kunniamaininta)',
    type: 'honorable mention',
    url: 'https://yle.fi/uutiset/3-10099239',
  },
  {
    date: '04/2018',
    description: 'Puolueanalyysit: Tätä saat kun äänestät',
    title: 'Koura (kunniamaininta)',
    type: 'honorable mention',
    url: 'https://yle.fi/uutiset/3-9514391',
  },
  {
    date: '04/2018',
    description: 'Pjongjang – päivä suljetun kaupungin kaduilla',
    title: 'Koura (kunniamaininta)',
    type: 'honorable mention',
    url: 'https://yle.fi/uutiset/3-9652278',
  },
  {
    date: '11/2017',
    description: 'Kyllä ennen oli nuoriso kunnollista – vai oliko?',
    title: 'Tilastot mediassa 2017',
    type: 'award',
    url: 'https://yle.fi/uutiset/3-9646059',
  },
  {
    date: '03/2017',
    description: 'Ihmiskoe',
    title: 'Koura-palkinto',
    type: 'award',
    url: 'https://uusi.yle.fi/uutiset/3-9061050',
  },
  {
    date: '03/2017',
    description: 'Sinut on käännytetty',
    title: 'Koura (kunniamaininta)',
    type: 'honorable mention',
    url: 'https://yle.fi/uutiset/3-9136482',
  },
];
