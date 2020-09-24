import React, { FC } from 'react';
import { Header, List, Segment } from 'semantic-ui-react';

import { languages } from '../data/languages';

type Props = unknown;

const Languages: FC<Props> = () => (
  <Segment>
    <Header as="h2" dividing>
      Kielitaito
    </Header>
    <List as="ul" relaxed>
      {languages.map(({ title, level }) => (
        <List.Item as="li" key={title}>
          <List.Content>
            {title},{level}
          </List.Content>
        </List.Item>
      ))}
    </List>
  </Segment>
);

export default Languages;
