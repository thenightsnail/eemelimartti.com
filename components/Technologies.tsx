import React, { FC } from 'react';
import { Header, List, Rating, Segment } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

type Techology = {
  icon?: SemanticICONS;
  title: string;
  rating: number;
  items?: { title: string; rating: number }[];
};

type Technologies = Techology[];

type Props = unknown;

const technologies: Technologies = [
  {
    icon: 'js',
    title: 'JavaScript',
    rating: 2,
    items: [
      { title: 'D3', rating: 3 },
      { title: 'jQuery', rating: 3 },
      { title: 'React', rating: 3 },
      { title: 'styled-components', rating: 3 },
      { title: 'TypeScript', rating: 3 },
      { title: 'Webpack', rating: 3 },
      { title: 'Express', rating: 2 },
      { title: 'Node.js', rating: 2 },
      { title: 'Redux', rating: 2 },
      { title: 'Storybook', rating: 2 },
      { title: 'Cypress', rating: 1 },
      { title: 'Jest', rating: 1 },
      { title: 'Vue.js', rating: 1 },
    ],
  },
  { icon: 'css3 alternate', title: 'CSS', rating: 3 },
  { icon: 'html5', title: 'HTML', rating: 3 },
  {
    icon: 'python',
    title: 'Python',
    rating: 2,
    items: [{ title: 'pandas', rating: 2 }],
  },
  {
    title: 'GraphQL',
    rating: 2,
    items: [
      { title: 'Apollo Server', rating: 2 },
      { title: 'Apollo Client (React)', rating: 2 },
    ],
  },
  { title: 'R', rating: 1 },
  {
    icon: 'database',
    title: 'SQL',
    rating: 2,
    items: [
      { title: 'MongoDB', rating: 2 },
      { title: 'PostgreSQL', rating: 2 },
    ],
  },
  { icon: 'git', title: 'Git', rating: 2 },
  {
    icon: 'aws',
    title: 'AWS',
    rating: 1,
    items: [
      { title: 'Lambda', rating: 2 },
      { title: 'S3', rating: 2 },
      { title: 'API Gateway', rating: 1 },
    ],
  },
  { icon: 'file excel', title: 'Excel / Google Sheets', rating: 3 },
  { icon: 'map', title: 'GIS', rating: 2 },
];

const Technologies: FC<Props> = () => (
  <Segment>
    <Header as="h2" dividing>
      Teknologiat
    </Header>
    <List horizontal>
      <List.Item>
        <List.Content>
          Perusteet
          <Rating defaultRating={1} disabled maxRating={3} />
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          Hyvä
          <Rating defaultRating={2} disabled maxRating={3} />
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          Erinomainen
          <Rating defaultRating={3} disabled maxRating={3} />
        </List.Content>
      </List.Item>
    </List>
    <List relaxed>
      {technologies.map(({ icon = 'code', items, title, rating }) => (
        <List.Item key={title}>
          <List.Icon name={icon} />
          <List.Content>
            {title} {!items && <Rating defaultRating={rating} disabled maxRating={3} />}
            {items && (
              <List.List bulleted>
                {items.map((item) => (
                  <List.Item key={item.title}>
                    {item.title} <Rating defaultRating={item.rating} disabled maxRating={3} />
                  </List.Item>
                ))}
              </List.List>
            )}
          </List.Content>
        </List.Item>
      ))}
    </List>
  </Segment>
);

export default Technologies;
