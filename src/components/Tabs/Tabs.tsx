import React, {
  Children,
  FC,
  ReactElement,
  cloneElement,
  ReactNode,
} from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

interface ITabsProps {
  children?: JSX.Element[];
  value?: any;
  label?: any;
  //placeholder?: string;
  btnOnClick?: (val: any) => void;
}

export const TabsPanel: FC<ITabsProps> = (props) => {
  const { children, label, btnOnClick, ...rest } = props;
  const handleTabClick = (e: any) => {
    console.log(e.target);
    if (btnOnClick) {
      btnOnClick(e.target.value);
    }
  };
  return (
    <div>
      {children
        ? Children.map(children, (child: ReactElement) => {
            return (
              <Button
                value={child.props.value}
                onClick={(e: any) => handleTabClick(e)}
                //onClick={btnOnClick}
              >
                {child.props.label}
              </Button>
            );
          })
        : children}
    </div>
  );
};
export const Tab: FC<ITabsProps> = (props) => {
  const { children, value, ...rest } = props;
  console.log('tab', children);
  return <div>{children}</div>;
};
// TabsPanel.defaultProps = {
//   placeholder: '',
// };

export default TabsPanel;
