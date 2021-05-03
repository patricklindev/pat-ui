import React, { Children, FC, ReactElement } from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

export type PanelType = 'primary' | 'default';

export interface ITabsPanelProps {
  children?: JSX.Element[];
  value?: any;
  label?: any;
  wrapped?: boolean;
  centered?: boolean;
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
    onClick,
    setTabValue,
    ...rest
  } = props;

  let styleClasses = classNames('tabs__panel', {
    [`panel-type-${type}`]: true,
    centered: !!centered,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  const handleTabClick = (e: any) => {
    if (onClick) {
      onClick(e.target.value);
      setTabValue && setTabValue(e.target.value);
    }
  };
  return (
    <div className={styleClasses}>
      {children
        ? Children.map(children, (child: ReactElement) => {
            const { className, value, label, wrapped, ...rest } = child.props;
            console.log(child.props);
            let btnStyleClasses = classNames('tabs__panel__tab-button', {
              [`tab-type-${type}`]: true,
              wrapped: !!wrapped,
            });
            if (className) {
              btnStyleClasses += ' ' + className;
            }
            if (tabValue === value) {
              btnStyleClasses += ' ' + 'actived';
            }
            return (
              <div className={`tabs__panel__tab`}>
                <Button
                  className={btnStyleClasses}
                  value={value}
                  onClick={(e: any) => handleTabClick(e)}
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
