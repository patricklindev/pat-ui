import React, {
  Children,
  FC,
  ReactElement,
  cloneElement,
  useState,
  useEffect,
} from 'react';
import { classNames } from '../../utils/classNames';

export interface ITabsProps {
  children?: JSX.Element[];
  defaultTab?: string;
  onClick?: (val: any) => void;
}
export const Tabs: FC<ITabsProps> = (props) => {
  const { children, defaultTab, onClick, ...rest } = props;

  console.log(children);
  const [tabValue, setTabValue] = useState('');

  useEffect(() => {
    if (defaultTab) {
      setTabValue(defaultTab);
    }
  }, []);
  return (
    <div className="tabs">
      {' '}
      {children
        ? Children.map(children, (child: ReactElement) =>
            cloneElement(child, { tabValue, onClick, setTabValue })
          )
        : children}
    </div>
  );
};

export default Tabs;
