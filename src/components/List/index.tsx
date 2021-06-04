import { FC } from 'react';
import List, { IListProps } from './List';
import ListOption, { IListOptionProps } from './ListOption';

export type PatListComponent = FC<IListProps> & {
  Option: FC<IListOptionProps>;
};

const TransList = List as PatListComponent;
TransList.Option = ListOption;

export default TransList;