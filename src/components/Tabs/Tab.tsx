import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';

export interface ITabProps {
  value?: any;
  label?: any;
  wrapped?: boolean;
  disabled?: boolean;
  className?: string;
}
export const Tab: FC<ITabProps> = (props) => {
  const { children, className, ...rest } = props;

  return <div>{children}</div>;
};

export default Tab;