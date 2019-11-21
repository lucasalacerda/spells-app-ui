import { Spell } from './spell';
import { ClassChar } from './classChar';

export const SPELLS: Spell[] = [
  { _id: '1', title: 'spell 1', description: 'this is an awesome spell 1', level: 1, class: { className: 'bard' } as ClassChar, img: '' },
  { _id: '2', title: 'spell 2', description: 'this is an awesome spell 2', level: 2, class: { className: 'bard' } as ClassChar, img: '' },
  { _id: '3', title: 'spell 3', description: 'this is an awesome spell 2', level: 2, class: { className: 'bard' } as ClassChar, img: '' },
  { _id: '4', title: 'spell 4', description: 'this is an awesome spell 2', level: 2, class: { className: 'bard' } as ClassChar, img: '' },
  { _id: '5', title: 'spell 5', description: 'this is an awesome spell 2', level: 2, class: { className: 'bard' } as ClassChar, img: '' },
];