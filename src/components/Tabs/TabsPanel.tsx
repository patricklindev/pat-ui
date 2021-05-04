import React, {
  Children,
  createRef,
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

export type PanelType = 'primary' | 'default';

export interface ITabsPanelProps {
  children?: JSX.Element[];
  value?: any;
  label?: any;
  wrapped?: boolean;
  centered?: boolean;
  scrollable?: boolean;
  vertical?: boolean;
  className?: string;
  tabValue?: string;
  type?: PanelType;

  onClick?: (val: any) => void;
  setTabValue?: (val: any) => {}; //?????
}

export interface ITabProps {
  value: any;
  label: any;
  wrapped?: boolean;
  className?: string;
}

export const TabsPanel: FC<ITabsPanelProps> = (props) => {
  const {
    children,
    className,
    tabValue,
    type,
    centered,
    scrollable,
    vertical,
    onClick,
    setTabValue,
    ...rest
  } = props;

  let styleClasses = classNames('tabs__panel', {
    [`panel-type-${type}`]: true,
    centered: !!centered,
    [`scrollable-row`]: !!scrollable && !vertical,
    [`scrollable-col`]: !!scrollable && !!vertical,
    vertical: !!vertical,
  });
  if (className) {
    styleClasses += ' ' + className;
  }
  const arrLength = children?.length;
  const [elRefs, setElRefs] = useState([] as any);
  useEffect(() => {

    setElRefs((elRefs: any) =>
      Array(arrLength)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);
  console.log(elRefs);

  const handleTabClick = (e: any,i:number) => {
    if (onClick) {
      onClick(e.target.value);
      setTabValue && setTabValue(e.target.value);
    }
    if (elRefs[i].current !== null) {

      elRefs[i].current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return (
    <div className={styleClasses}>
      {children
        ? Children.map(children, (child: ReactElement, i) => {
            const { className, value, label, wrapped, ...rest } = child.props;
            //console.log(child.props);
            let btnStyleClasses = classNames('tabs__panel__tab-button', {
              [`tab-type-${type}`]: true,
              wrapped: !!wrapped,
            });
            if (className) {
              btnStyleClasses += ' ' + className;
            }
            if (tabValue === value) {
              btnStyleClasses +=
                ' ' + `${vertical ? 'actived-vertical' : 'actived'}`;
   
            }
            return (
              <div className={`tabs__panel__tab`} ref={elRefs[i]}>
                <Button
                  className={btnStyleClasses}
                  value={value}
                  onClick={(e: any) => handleTabClick(e,i)}
                >
                  {label}
                </Button>
              </div>
            );
          })
        : children}
    </div>
  );
};
export const Tab: FC<ITabProps> = (props) => {
  const { children, className, ...rest } = props;

  return <div>{children}</div>;
};
TabsPanel.defaultProps = {
  type: 'default',
};

export default TabsPanel;
