import React, {
  Children,
  FC,
  ReactElement,
  cloneElement,
  ReactNode,
} from 'react';
import { classNames } from '../../utils/classNames';

interface ITabsContentProps {
  index:any
}
export const TabsContent: FC<ITabsContentProps> = (props) => {
  const { children, ...rest } = props;
  return <div>{children}</div>;
};

export default TabsContent;
