import { Header, Icon, Item, Segment } from 'semantic-ui-react';
import React, { FC } from 'react';

export type Referee = {
  name: string;
  phone: string;
  title: string;
  workplace: string;
};

export type TReferees = Referee[];

type Props = {
  data: TReferees;
};

const Referees: FC<Props> = ({ data }) => (
  <Segment>
    <Header as="h2" dividing>
      Suosittelijat
    </Header>
    <Item.Group divided relaxed>
      {data.map(({ name, phone, title, workplace }) => (
        <Item key={name}>
          <Item.Content>
            <Item.Header as="h3">
              <Icon name="user" />
              {name}
            </Item.Header>
            <Item.Description as="p">
              <Icon name="briefcase" />
              {title},{workplace}
            </Item.Description>
            <Item.Description as="p">
              <Icon name="mobile alternate" />
              {phone}
            </Item.Description>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </Segment>
);

export default Referees;
