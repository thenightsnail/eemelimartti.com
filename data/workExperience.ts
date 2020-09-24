export type Work = {
  duration: string;
  jobTitle: string;
  workplace: string;
};

export type WorkExperience = Work[];

export const workExperience: WorkExperience = [
  {
    duration: '01/2018–',
    jobTitle: 'Koodaava toimittaja',
    workplace: 'Yle Uutiset, Plus-deski',
  },
  {
    duration: '09/2017–12/2017',
    jobTitle: 'Koodaava toimittaja, tarvittaessa töihin tuleva',
    workplace: 'Yle Uutiset, Plus-deski',
  },
  {
    duration: '02/2017–08/2017',
    jobTitle: 'Koodaava toimittaja, määräaikainen',
    workplace: 'Yle Uutiset, Plus-deski',
  },
  {
    duration: '08/2015–05/2017',
    jobTitle: 'Projektityöntekijä',
    workplace: 'Haaga-Helia ammattikorkeakoulu',
  },
  {
    duration: '08/2016–12/2016',
    jobTitle: 'Koodaava toimittaja, määräaikainen',
    workplace: 'Yle Uutiset, Plus-deski',
  },
  {
    duration: '02/2016-07/2016',
    jobTitle: 'Koodaava toimittaja, harjoittelija',
    workplace: 'Yle Uutiset, Plus-deski',
  },
  {
    duration: '05/2015–08/2015',
    jobTitle: 'Toimittaja',
    workplace: 'Sampo-lehti',
  },
  {
    duration: '05/2014–07/2014',
    jobTitle: 'Toimittaja',
    workplace: 'Sampo-lehti',
  },
];
