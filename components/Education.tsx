import React, { FC } from 'react';
import { Divider, Header, Icon, Item, Segment } from 'semantic-ui-react';

import { education } from '../data/education';

type Props = unknown;

const Education: FC<Props> = () => (
  <Segment>
    <Header as="h2" dividing>
      Koulutus
    </Header>
    <Item.Group divided relaxed>
      {education.map(({ duration, name, school }) => (
        <Item key={`${duration}-${school}-${name}`}>
          <Item.Content>
            <Item.Header as="h3">
              <Icon name="graduation cap" />
              {name}
            </Item.Header>
            <Item.Description as="p">
              <Icon name="university" />
              {school}
            </Item.Description>
            <Item.Meta as="p">
              <Icon name="calendar" />
              {duration}
            </Item.Meta>
          </Item.Content>
        </Item>
      ))}
      <Divider />
      <p>
        Lisäksi olen suorittanut Helsingin yliopiston Avoimen yliopiston Tilastostiede tutuksi ja R
        I - kurssin syksyllä 2018.
      </p>
      <p>
        Tämän vuoden kesän ja syksyn aikana olen suorittanut Helsingin yliopiston Avoimen yliopiston
        Fullstack Open kurssia, joka on tenttiä vaille valmis.
      </p>
      <p>
        Loppuvuoden aikana suunnittelen suorittavani Helsingin yliopiston Avoimen yliopiston Full
        Stack -websovelluskehityksen harjoitustyön.
      </p>
    </Item.Group>
  </Segment>
);

export default Education;
