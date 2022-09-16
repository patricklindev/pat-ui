import React, { useEffect, useState } from 'react';
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
  open: boolean;
  color?: TToastColor;
  position?: TToastPostion;
  title: string;
  message?: string;
  autoHideDuration?: number;
  icon?: string;
  onClose?: () => void;
}

export const Toast = ({
  open,
  color = 'primary',
  position = 'top-right',
  title,
  message,
  autoHideDuration,
  icon,
  onClose
}: IToastProps) => {
  const [styles, setStyles] = useState('');

  useEffect(() => {
    if (open) {
      let styleClasses = classNames({
        [`toast__${color}`]: true,
        [`toast__${position}`]: true,
      });
      setStyles(styleClasses);

      if (autoHideDuration) {
        setTimeout(() => {
          setStyles('');
          // onClose();
        }, autoHideDuration);
      }
    }
  }, [open]);

  return (
    <div className={`toast ${styles}`}>
      <div />
      <div>
        <img src='' alt='' />
      </div>
      <div>
        <h6>{title}</h6>
        <p>{message}</p>
      </div>
      <div>
        <img src='' alt='' />
      </div>
    </div>
  );
};
