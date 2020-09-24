import { TListItem } from './links';

export type InfoItem = Omit<TListItem, 'url'>;

type TInfoItems = InfoItem[];

export const info: TInfoItems = [
  { icon: 'map signs', title: 'Helsinki, Viikki' },
  { icon: 'birthday cake', title: '30.6.1993' },
  { icon: 'mobile alternate', title: '+358 50 464 9339' },
  { icon: 'envelope', title: 'eemeli.martti@live.fi' },
];
