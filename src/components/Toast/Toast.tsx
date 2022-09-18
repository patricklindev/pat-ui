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
  // determines if toast is visible
  open: boolean;
  // set toast to preset color
  color?: TToastColor;
  // set toast position on screen
  position?: TToastPostion;
  // set toast message title
  title: string;
  // set toast message body
  message?: string;
  // time in milliseconds for toast to close
  autoHideDuration?: number;
  // set custom icon in toast; Material Icons support only (https://fonts.google.com/icons?selected=Material+Icons)
  customIcon?: string;
  // callback function when user closes the toast
  onClose: () => void;
}

export const Toast = ({
  open,
  color = 'primary',
  position = 'top-right',
  title,
  message,
  autoHideDuration,
  customIcon,
  onClose,
}: IToastProps) => {
  const [styles, setStyles] = useState('');
  const [didClose, setDidClose] = useState(false);

  const renderIcon = (color: string) => {
    if (customIcon) return customIcon;
    switch (color) {
      case 'success':
        return 'done';
      case 'info':
        return 'info_outline';
      case 'warning':
        return 'warning_amber';
      case 'danger':
        return 'highlight_off';
      default:
        return;
    }
  };

  const handleOnClose = () => {
    setDidClose(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (open) {
      setDidClose(false);
      let styleClasses = classNames('toast', {
        [`toast__${color}`]: true,
        [`toast__${position}`]: true,
      });
      setStyles(styleClasses);

      if (autoHideDuration) {
        timer = setTimeout(() => {
          setStyles('');
          onClose();
        }, autoHideDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (didClose) {
      setStyles('');
      onClose();
    }
  }, [didClose]);

  return (open && styles && (
    <div className={`${styles}`}>
      <div className={`toast__edge__${color}`}></div>
      <div className='toast__wrapper'>
        <div className='toast__inner-wrapper'>
          <div>
            {/* <img src=' alt=' /> */}
            <span className='material-icons toast__icon'>
              {renderIcon(color)}
            </span>
          </div>
          <div className='toast__text-wrapper'>
            <h6>{title}</h6>
            <p>{message}</p>
          </div>
        </div>
        <div onClick={handleOnClose}>
          <span className='material-icons toast__close-icon'>close</span>
        </div>
      </div>
    </div>
  )) as JSX.Element;
};
