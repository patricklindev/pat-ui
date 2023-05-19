import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';
import { ReactComponent as Button } from '../../asset/alert/button.svg';
import { ReactComponent as CloseIcon } from '../../asset/alert/close-icon.svg';
import { ReactComponent as ErrorIconStandard } from '../../asset/alert/error-standard.svg';
import { ReactComponent as ErrorIconFilled } from '../../asset/alert/error-filled.svg';
import { ReactComponent as InfoIconStandard } from '../../asset/alert/info-standard.svg';
import { ReactComponent as InfoIconFilled } from '../../asset/alert/info-filled.svg';
import { ReactComponent as SuccessStandard } from '../../asset/alert/success-standard.svg';
import { ReactComponent as SuccessFilled } from '../../asset/alert/success-filled.svg';
import { ReactComponent as WarningIconStandard } from '../../asset/alert/warning-standard.svg';
import { ReactComponent as WarningIconFilled } from '../../asset/alert/warning-filled.svg';

export type AlertType = 'standard' | 'filled' | 'outlined';
export type AlertIcon = 'error' | 'warning' | 'info' | 'success';
export type AlertSuffix = 'button' | 'closable';
export type AlertTextStyle = 'one-line' | 'one-line-bold' | 'two-line' | 'two-line-bold';

export interface AlertProps {
  /** set customized style */
  className?: string;
  /** set alert Type */
  altType: AlertType;
  /** set alert Icon */
  altIcon: AlertIcon;
  /** set alert Suffix */
  altSuffix?: AlertSuffix | ReactNode;
  /** set alert text */
  altTextStyle: AlertTextStyle;
  /** set action on button clicked */
  onButtonClick?: () => void;
  /** set actionon close button clicked */
  onCloseClick?: () => void;
}

export const Alert: FC<AlertProps> = (props) => {
  const { altType, altIcon, altSuffix, altTextStyle, children, className, onButtonClick, onCloseClick, ...rest } = props;

  let styleClasses = classNames('alert', {
    [`alert-${altType}`]: true,
    [`alert-${altType}-${altIcon}`]: true,
    [`alert-${altTextStyle}`]: true,
  });

  if (className) {
    styleClasses += ' ' + className;
  }
  
  console.log(styleClasses);
  
  let icon = null;
  switch (altIcon) {
    case 'error':
      if (altType === 'filled')
        icon = <ErrorIconFilled />;
      else
        icon = <ErrorIconStandard />;
      break;
    case 'warning':
      if (altType === 'filled')
        icon = <WarningIconFilled />;
      else
        icon = <WarningIconStandard />;
      break;
    case 'info':
      if (altType === 'filled')
        icon = <InfoIconFilled />;
      else
        icon = <InfoIconStandard />;
      break;
    case 'success':
      if (altType === 'filled')
        icon = <SuccessFilled />;
      else
        icon = <SuccessStandard />;
      break;
    default:
      break;
  }

  return (
    <div className={styleClasses} {...rest}>
      {icon && <span className="alert-icon">{icon}</span>}
      <span className="alert-text">{children}</span>
      {altSuffix === 'button' && onButtonClick && (
        <Button className="alert-button" onClick={onButtonClick}>Button</Button>
      )}
      {altSuffix === 'closable' && onCloseClick && (
        <button className="alert-close" onClick={onCloseClick}><CloseIcon /></button>
      )}
    </div>
  );
};

export default Alert;