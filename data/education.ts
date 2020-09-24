export type Degree = {
  duration: string;
  name: string;
  school: string;
};

export type Education = Degree[];

export const education: Education = [
  {
    duration: '01/2014–06/2017',
    name: 'Medianomi (AMK), Journalismin koulutusohjelma',
    school: 'Haaga-Helia ammattikorkeakoulu',
  },
  { duration: '08/2009–06/2012', name: 'Ylioppilas', school: 'Kosken lukio' },
];
