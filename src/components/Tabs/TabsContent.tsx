import React, {
  FC,
} from 'react';
import { classNames } from '../../utils/classNames';

export interface ITabsContentProps {
  index?: string | number;
  tabValue?: string;
  className?: string;
}
export const TabsContent: FC<ITabsContentProps> = (props) => {
  const { children, className, tabValue, index, ...rest } = props;

  let styleClasses = classNames('tabs__content', {
  });
  if (className) {
    styleClasses += ' ' + className;
  }
  if (tabValue === index){
    styleClasses += ' actived';
  }
    return (
      <div
        className={styleClasses}
      >
        {children}
      </div>
    );
};

export default TabsContent;
