import React, { useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { colors, renderIcon } from './Icons';

type TToastColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

type TToastPostion = 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';

export interface IToastProps {
  /** determines if toast is visible */
  open: boolean;
  /** set toast to preset color */
  color?: TToastColor;
  /** set toast position on screen */
  position?: TToastPostion;
  /** set toast message title */
  title: string;
  /** set toast message body */
  message?: string;
  /** time in milliseconds for toast to close */
  autoHideDuration?: number;
  // /** set custom icon in toast; SVG support only */
  // customIcon?: string;
  /** callback function when user closes the toast */
  onClose: () => void;
}

/**
 * A toast is used to display a pop-up message without interference.
 * 
 * ```js
 * import { Toast } from 'pat-ui';
 * ```
 * 
 * Example use case
 * 
 * ```js
 * import React, { useState } from 'react';
 * import { Toast } from 'pat-ui';
 * 
 * function MyApp() {
 *    const [open, setOpen] = useState(false);
 * 
 *    const handleOpen = () => {
 *       setOpen(true);
 *    }
 * 
 *    const handleClose = () => {
 *       setOpen(true);
 *    }
 * 
 *    return (
 *       <Toast
 *          open={open}
 *          title={"Toast title here"}
 *          onClose={handleClose}
 *          autoHideDuration={3000}      
 *       />
 *       <button onClick={handleOpen}>
 *          Open Toast
 *       </button>
 *    );
 * };
 * 
 * ```
 */
export const Toast = ({
  open,
  color = 'success',
  position = 'top-right',
  title,
  message,
  autoHideDuration,
  // customIcon,
  onClose,
}: IToastProps) => {
  const [styles, setStyles] = useState('');
  const [didClose, setDidClose] = useState(false);

  const handleOnClose = () => {
    setDidClose(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (open) {
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

    // reset didClose checker so user will have the ability
    // to manually close the toast if opened again
    setDidClose(false);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    // check if user manually closes toast
    if (didClose) {
      setStyles('');
      onClose();
    }
  }, [didClose]);

  return (open && styles && (
    <div className={styles}>
      <div className={`toast__edge__${color}`}></div>
      <div className="toast__wrapper">
        <div className="toast__inner__wrapper">
          <div>
            <span className="toast__icon">{renderIcon(color)}</span>
          </div>
          <div className="toast__text__wrapper">
            <h6
              className={`${
                !renderIcon(color) ? 'toast__title' : 'toast__title__reset'
              }`}
            >
              {title}
            </h6>
            <p>{message}</p>
          </div>
        </div>
        <div onClick={handleOnClose}>
          <span className="toast__icon__close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill={colors[color].main}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )) as JSX.Element;
};

export default Toast;
