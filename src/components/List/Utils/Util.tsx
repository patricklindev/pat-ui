import React from 'react';


// export type PatShorthandItemFunc<T> = (
//   component: React.ReactType<T>,
//   props: T,
//   children?: React.ReactNode | React.ReactNodeArray,
// ) => React.ReactElement<any> | null

export type PatShorthandCollection<T> = PatShorthandItem<T>[]
export type PatShorthandContent = React.ReactNode
export type PatShorthandItem<T> =
  | React.ReactNode
  | T
  // | PatShorthandItemFunc<T>


