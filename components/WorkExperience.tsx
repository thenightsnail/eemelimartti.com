import React, { FC } from 'react';
import { Header, Icon, Item, Segment } from 'semantic-ui-react';

import { workExperience } from '../data/workExperience';

type Props = unknown;

const WorkExperience: FC<Props> = () => (
  <Segment>
    <Header as="h2" dividing>
      Työkokemus
    </Header>
    <Item.Group divided relaxed>
      {workExperience.map(({ duration, jobTitle, workplace }) => (
        <Item key={`${duration}-${jobTitle}-${workplace}`}>
          <Item.Content>
            <Item.Header as="h3">
              <Icon name="briefcase" />
              {jobTitle}
            </Item.Header>
            <Item.Description as="p">
              <Icon name="building" />
              {workplace}
            </Item.Description>
            <Item.Meta as="p">
              <Icon name="calendar" /> {duration}
            </Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </Segment>
);

export default WorkExperience;
