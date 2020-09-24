import { GetStaticProps } from 'next';
import { Grid } from 'semantic-ui-react';
import fs from 'fs';
import Head from 'next/head';
import path from 'path';
import React, { FC } from 'react';

import Awards from '../components/Awards';
import Education from '../components/Education';
import Info from '../components/Info';
import Languages from '../components/Languages';
import Referees, { TReferees } from '../components/Referees';
import Skills from '../components/Skills';
import Technologies from '../components/Technologies';
import WorkExperience from '../components/WorkExperience';

type Props = {
  referees: TReferees;
};

const Cv: FC<Props> = ({ referees }) => (
  <>
    <Head>
      <title>CV</title>
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Grid columns={2} container relaxed stackable>
      <Grid.Row>
        <Grid.Column width={6}>
          <Info />
          <Technologies />
          <Languages />
          <Referees data={referees} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Skills />
          <WorkExperience />
          <Education />
          <Awards />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default Cv;

export const getStaticProps: GetStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const fileName = path.join(dataDirectory, 'referees.json');
  const fileContents = fs.readFileSync(fileName, 'utf8');
  return { props: { referees: JSON.parse(fileContents) } };
};
