import React, {
  Children,
  FC,
  ReactElement,
  cloneElement,
  ReactNode,
  useState,
  useRef,
} from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

interface ITabsPanelProps {
  children?: JSX.Element[];
  value?: any;
  label?: any;
  //placeholder?: string;
  tabOnClick?: (val: any) => void;
  tabValue?: string;
  setTabValue?: (val: any) => {};
}

export const TabsPanel: FC<ITabsPanelProps> = (props) => {
  const { children, label, tabOnClick, tabValue, setTabValue, ...rest } = props;
  // const [tabValue, setTabValue] = useState('');
  // let tabRef = useRef(tabValue);
  // tabRef.current = tabValue;
  //console.log(onChange);
  const handleTabClick = (e: any) => {
    //console.log(e.target);
    if (tabOnClick) {
      tabOnClick(e.target.value);
      setTabValue && setTabValue(e.target.value);
      // setTabValue(e.target.value);
      // console.log(tabRef);
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
export const Tab: FC<ITabsPanelProps> = (props) => {
  const { children, value, ...rest } = props;
  console.log('tab', children);
  return <div>{children}</div>;
};
// TabsPanel.defaultProps = {
//   placeholder: '',
// };

export default TabsPanel;
