import React, { FC } from 'react';
import { Header, Icon, Item, Segment } from 'semantic-ui-react';

import { awards } from '../data/awards';

type Props = unknown;

const Awards: FC<Props> = () => (
  <Segment>
    <Header as="h2" dividing>
      Palkinnot ja kunniamaininnat
    </Header>
    <Item.Group divided relaxed>
      {awards.map((award) => (
        <Item key={`${award.title}-${award.description}`}>
          <Item.Content>
            <Item.Header as="h3">
              <Icon name={award.type === 'award' ? 'trophy' : 'gem'} /> {award.title}
            </Item.Header>
            <Item.Description as="p">
              {award.url ? (
                <>
                  <Icon name="linkify" />
                  <a href={award.url} rel="noreferrer" target="_blank">
                    {award.description}
                  </a>
                </>
              ) : (
                award.description
              )}
            </Item.Description>
            <Item.Meta as="p">
              <Icon name="calendar" /> {award.date}
            </Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </Segment>
);

export default Awards;
