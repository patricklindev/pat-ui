import React, {
  Children,
  FC,
  ReactElement,
  cloneElement,
  ReactNode,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react';
import { classNames } from '../../utils/classNames';

export interface ITabsProps {
  //index:any
  children?: JSX.Element[] | JSX.Element;
  tabOnClick?: (val: any) => void;
}
export const Tabs: FC<ITabsProps> = (props) => {
  const { children, tabOnClick, ...rest } = props;
  //console.log(onChange);
  const [tabValue, setTabValue] = useState('');
  console.log(children);
  return (
    <div className="tabs">
      {' '}
      {children
        ? Children.map(children, (child: ReactElement) =>
            cloneElement(child, { tabOnClick, tabValue, setTabValue })
          )
        : children}
    </div>
  );
};

export default Tabs;
