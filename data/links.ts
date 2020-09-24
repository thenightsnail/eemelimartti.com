import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

export type TListItem = {
  icon: SemanticICONS;
  title: string;
  url: string;
};

type Links = TListItem[];

export const links: Links = [
  {
    icon: 'github',
    title: 'GitHub',
    url: 'https://github.com/snailthrone',
  },
  {
    icon: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/snailthrone',
  },
  {
    icon: 'linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eemeli-martti/',
  },
  {
    icon: 'twitter',
    title: 'Twitter',
    url: 'https://twitter.com/snailthrone',
  },
];
