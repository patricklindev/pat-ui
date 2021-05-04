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
  className?: string;
  defaultTab?: string;
  vertical?: boolean;
  onClick?: (val: any) => void;
}
export const Tabs: FC<ITabsProps> = (props) => {
  const { children, defaultTab, className, vertical, onClick, ...rest } = props;
  //console.log(children);
  const [tabValue, setTabValue] = useState('');

  useEffect(() => {
    if (defaultTab) {
      setTabValue(defaultTab);
    }
  }, []);

  let styleClasses = classNames('tabs', {
    vertical: !!vertical,
  });
  if (className) {
    styleClasses += ' ' + className;
  }
  return (
    <div className={styleClasses}>
      {' '}
      {children
        ? Children.map(children, (child: ReactElement) =>
            cloneElement(child, { tabValue, vertical, onClick, setTabValue })
          )
        : children}
    </div>
  );
};

export default Tabs;
