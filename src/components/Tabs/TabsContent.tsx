import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';

export interface ITabsContentProps {
  /** set index for this tabsContent to associate with related tab   */
  index?: string | number;
  /** default tab state provided by tabs */
  tabValue?: string;
  /** set customized css class */
  className?: string;
}
export const TabsContent: FC<ITabsContentProps> = (props) => {
  const { children, className, tabValue, index, ...rest } = props;

  let styleClasses = classNames('tabs__content', {});
  if (className) {
    styleClasses += ' ' + className;
  }
  if (tabValue === index) {
    styleClasses += ' actived';
  }
  return <div className={styleClasses}>{children}</div>;
};

export default TabsContent;
