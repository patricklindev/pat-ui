import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';

export interface ITabProps {
  /** set value for this tab to display related tab content  */
  value?: string | number;
  /** set label for this tab as display content */
  label?: string | number;
  /** set wrapped tab */
  wrapped?: boolean;
  /** set disabled tab */
  disabled?: boolean;
  /** set customized css class */
  className?: string;
}
export const Tab: FC<ITabProps> = (props) => {
  const { children, className, ...rest } = props;

  return <div>{children}</div>;
};

export default Tab;