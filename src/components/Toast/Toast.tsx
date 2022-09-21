import React, { useEffect } from 'react';
import { classNames } from '../../utils/classNames';
import { colors, renderIcon } from './Icons';

export type TToastType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

type TToastPostion = 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';

export type TToastIcon = 'success' | 'info' | 'warning' | 'danger' | undefined;

export type TToastIconColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | undefined;

export interface IToastProps {
  /** determines if toast is visible */
  open: boolean;
  /** set toast to preset color */
  type?: TToastType;
  /** set toast position on screen */
  position?: TToastPostion;
  /** set toast message title */
  title: React.ReactNode | string;
  /** set toast message body */
  message?: React.ReactNode | string;
  /** set toast icon */
  iconType?: TToastIcon;
  /** set toast icon color */
  iconColor?: TToastIconColor;
  /** set custom image as icon */
  iconUri?: string;
  /** set custom text color */
  textColor?: string;
  /** set custom background color */
  bgColor?: string;
  /** time in milliseconds for toast to close */
  autoHideDuration?: number;
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
 * ---
 *
 * ##### Getting Started
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
 *          title="Toast title here"
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
  type = 'primary',
  position = 'top-right',
  title,
  message,
  iconType,
  iconColor,
  iconUri,
  textColor,
  bgColor,
  autoHideDuration,
  onClose,
}: IToastProps) => {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    // set timeout if autoHideDuration is provided
    if (autoHideDuration) {
      timer = setTimeout(() => {
        onClose();
      }, autoHideDuration);
    }

    return () => clearTimeout(timer);
  }, [open]);

  let styleClasses = classNames('toast', {
    [`toast__${type}`]: true,
    [`toast__${position}`]: true,
  });

  // return custom style object if user passes their own colors
  const customColors = () => {
    const customColors: React.CSSProperties = {};
    if (textColor && bgColor) {
      customColors.color = textColor;
      customColors.backgroundColor = bgColor;
    } else if (textColor) {
      customColors.color = textColor;
    } else if (bgColor) {
      customColors.backgroundColor = bgColor;
    } else {
      return {};
    }
    return customColors;
  };

  // same as above for toast edge
  const customEdge = () => {
    if (textColor && bgColor) {
      const customEdgeColor: React.CSSProperties = {
        backgroundColor: textColor,
        width: '10px',
        height: '76px',
        borderTopLeftRadius: '6px',
        borderBottomLeftRadius: '6px',
      };
      return customEdgeColor;
    } else {
      return {};
    }
  };

  // same as above for toast close icon
  const customCloseColor = () => {
    if (textColor && bgColor) {
      return textColor;
    } else {
      return colors[type].main;
    }
  };

  return (open && (
    <div className={styleClasses} data-testid="toast" style={customColors()}>
      <div className={`toast__edge__${type}`} style={customEdge()} />
      <div className="toast__wrapper">
        <div className="toast__inner__wrapper">
          {iconUri ? (
            <img
              className="toast__icon__custom"
              src={iconUri}
              alt="custom toast icon"
            />
          ) : (
            <span data-testid="icon">{renderIcon(iconType, iconColor)}</span>
          )}
          <div className="toast__text__wrapper">
            <h6>{title}</h6>
            <p>{message}</p>
          </div>
        </div>
        <div data-testid="close-link" onClick={onClose}>
          <span className="toast__icon__close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill={customCloseColor()}
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
