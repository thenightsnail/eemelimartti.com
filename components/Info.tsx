import React, { FC } from 'react';
import { Header, Image, List, Segment } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

import { links } from '../data/links';
import { info } from '../data/info';

type ListItemProps = {
  icon: SemanticICONS;
  title: string;
  url?: string;
};

const ListItem: FC<ListItemProps> = ({ icon, title, url }) => (
  <List.Item key={title}>
    <List.Icon name={icon} />
    <List.Content>{url ? <a href={url}>{title}</a> : title}</List.Content>
  </List.Item>
);

type InfoProps = unknown;

const Info: FC<InfoProps> = () => (
  <Segment>
    <Image alt="Eemeli Martti" centered circular size="medium" src="/img/eemeli.jpg" />
    <Header as="h1">Eemeli Martti</Header>
    <List relaxed>
      {info.map((info) => (
        <ListItem {...info} key={info.title} />
      ))}
      {links.map((link) => (
        <ListItem {...link} key={link.title} />
      ))}
    </List>
  </Segment>
);

export default Info;
