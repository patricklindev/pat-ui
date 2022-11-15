/* eslint-disable no-useless-computed-key */
export interface CheckboxPath {
  [name: string]: {
    checkedPath: string;
    uncheckedPath: string;
    indeterminatePath?: string;
    viewBox: string;
  };
};

export const CheckboxPaths: CheckboxPath = {
  ['checkbox']: {
    checkedPath: 'M 19 3 H 5 c -1.11 0 -2 0.9 -2 2 v 14 c 0 1.1 0.89 2 2 2 h 14 c 1.11 0 2 -0.9 2 -2 V 5 c 0 -1.1 -0.89 -2 -2 -2 Z m -9 14 l -5 -5 l 1.41 -1.41 L 10 14.17 l 7.59 -7.59 L 19 8 l -9 9 Z',
    uncheckedPath: 'M 19 5 v 14 H 5 V 5 h 14 m 0 -2 H 5 c -1.1 0 -2 0.9 -2 2 v 14 c 0 1.1 0.9 2 2 2 h 14 c 1.1 0 2 -0.9 2 -2 V 5 c 0 -1.1 -0.9 -2 -2 -2 Z',
    indeterminatePath: 'M 19 3 H 5 c -1.1 0 -2 0.9 -2 2 v 14 c 0 1.1 0.9 2 2 2 h 14 c 1.1 0 2 -0.9 2 -2 V 5 c 0 -1.1 -0.9 -2 -2 -2 Z m -2 10 H 7 v -2 h 10 v 2 Z',
    viewBox: '0 0 24 24',
  },
  ['favorite']: {
    checkedPath: 'm 12 21.35 l -1.45 -1.32 C 5.4 15.36 2 12.28 2 8.5 C 2 5.42 4.42 3 7.5 3 c 1.74 0 3.41 0.81 4.5 2.09 C 13.09 3.81 14.76 3 16.5 3 C 19.58 3 22 5.42 22 8.5 c 0 3.78 -3.4 6.86 -8.55 11.54 L 12 21.35 Z',
    uncheckedPath: 'M 16.5 3 c -1.74 0 -3.41 0.81 -4.5 2.09 C 10.91 3.81 9.24 3 7.5 3 C 4.42 3 2 5.42 2 8.5 c 0 3.78 3.4 6.86 8.55 11.54 L 12 21.35 l 1.45 -1.32 C 18.6 15.36 22 12.28 22 8.5 C 22 5.42 19.58 3 16.5 3 Z m -4.4 15.55 l -0.1 0.1 l -0.1 -0.1 C 7.14 14.24 4 11.39 4 8.5 C 4 6.5 5.5 5 7.5 5 c 1.54 0 3.04 0.99 3.57 2.36 h 1.87 C 13.46 5.99 14.96 5 16.5 5 c 2 0 3.5 1.5 3.5 3.5 c 0 2.89 -3.14 5.74 -7.9 10.05 Z',
    indeterminatePath: 'M 16.5 3 c -1.74 0 -3.41 0.81 -4.5 2.09 C 10.91 3.81 9.24 3 7.5 3 C 4.42 3 2 5.42 2 8.5 c 0 3.78 3.4 6.86 8.55 11.54 L 12 21.35 l 1.45 -1.32 C 18.6 15.36 22 12.28 22 8.5 C 22 5.42 19.58 3 16.5 3 Z m -4.4 15.55 l -0.1 0.1 l -0.1 -0.1 C 7.14 14.24 4 11.39 4 8.5 C 4 6.5 5.5 5 7.5 5 c 1.54 0 3.04 0.99 3.57 2.36 h 1.87 C 13.46 5.99 14.96 5 16.5 5 c 2 0 3.5 1.5 3.5 3.5 c 0 2.89 -3.14 5.74 -7.9 10.05 Z',
    viewBox: '0 0 24 24',
  },
  ['bookmark']: {
    checkedPath: 'M 17 3 H 7 c -1.1 0 -1.99 0.9 -1.99 2 L 5 21 l 7 -3 l 7 3 V 5 c 0 -1.1 -0.9 -2 -2 -2 Z',
    uncheckedPath: 'M 17 3 H 7 c -1.1 0 -1.99 0.9 -1.99 2 L 5 21 l 7 -3 l 7 3 V 5 c 0 -1.1 -0.9 -2 -2 -2 Z m 0 15 l -5 -2.18 L 7 18 V 5 h 10 v 13 Z',
    indeterminatePath: 'M 17 3 H 7 c -1.1 0 -1.99 0.9 -1.99 2 L 5 21 l 7 -3 l 7 3 V 5 c 0 -1.1 -0.9 -2 -2 -2 Z m 0 15 l -5 -2.18 L 7 18 V 5 h 10 v 13 Z',
    viewBox: '0 0 24 24',
  },
};