import Head from 'next/head';
import React, { Fragment } from 'react';
import { Breadcrumb, Container, Header, Image } from 'semantic-ui-react';

import { links } from '../data/links';

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Eemeli Martti</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container text textAlign="center">
      <Image alt="Eemeli Martti" centered circular size="medium" src="/img/eemeli.jpg" />
      <Header as="h1">Eemeli Martti</Header>
      <p>
        Developer/Datajournalist from Helsinki. Currently working @{' '}
        <a href="https://wolt.com/en/discovery" rel="noreferrer" target="_blank">
          Wolt
        </a>
        .
      </p>
      <Breadcrumb>
        {links.map(({ title, url }, i) => (
          <Fragment key={title}>
            <Breadcrumb.Section content={title} href={url} target="_blank" />
            {i < links.length - 1 && <Breadcrumb.Divider />}
          </Fragment>
        ))}
      </Breadcrumb>
    </Container>
  </>
);

export default Home;
