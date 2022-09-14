import React from 'react';
import { classNames } from '../../utils/classNames';

type TToastColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

type TToastPostion = 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';

export interface IToastProps {
  color: TToastColor;
  position?: TToastPostion;
  title?: string;
  description: string;
  autoHide?: boolean;
  duration?: number;
  icon?: string;
}

export const Toast = ({
  color,
  position = 'top-right',
  title,
  description,
  autoHide = true,
  duration = 3000,
  icon,
}: IToastProps) => {
  let styleClasses = classNames('toast', {
    [`toast-${color}`]: true,
    [`toast-${position}`]: true,
  });
  return <div className={`toast ${position}`}>Toast</div>;
};
