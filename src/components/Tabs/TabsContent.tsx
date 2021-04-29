import React, {
  Children,
  FC,
  ReactElement,
  cloneElement,
  ReactNode,
} from 'react';
import { classNames } from '../../utils/classNames';
import { ITabsProps } from './Tabs';

interface ITabsContentProps {
  index?: any;
  tabValue?: string;
  //children?: ReactNode;
}
export const TabsContent: FC<ITabsContentProps> = (props) => {
  const { children, tabValue, index, ...rest } = props;
  //console.log(tabValue,index);

  return (
    <div className={`content ${tabValue === index ? 'actived' : ''}`}>
      {children}
    </div>
  );
};

export default TabsContent;
