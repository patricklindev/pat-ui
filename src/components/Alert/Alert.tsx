import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';
import { ReactComponent as ButtonSvg } from '../../asset/alert/button.svg';
import { ReactComponent as CloseSvg } from '../../asset/alert/close-icon.svg';
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
export type AlertTitle = string;
export type AlertTextStyle = 'one-line' | 'one-line-bold' | 'two-line' | 'two-line-bold';

export interface AlertProps {
  /** set customized style */
  className?: string;
  /** set alert Type */
  altType?: AlertType;
  /** set alert Icon */
  altIcon?: AlertIcon;
  /** set alert Suffix */
  altSuffix?: AlertSuffix | ReactNode;
  /** set alert text */
  altTitle?: string;
  /** set alert text */
  altTextStyle?: AlertTextStyle;
  /** set action on close-icon button clicked */
  onClose?: () => void;
  /** set action on button clicked */
  onClick?: () => void;
}


export const Alert: FC<AlertProps> = (props) => {
  const { altType, altIcon, altSuffix, altTitle, altTextStyle, children, className, onClose, onClick, ...rest } = props;

  let styleClasses = classNames('alert', {
    [`alert-${altType}`]: true,
    [`alert-${altType}-${altIcon}`]: true,
    [`alert-${altTextStyle}`]: true,
  });

  if (className) {
    styleClasses += ' ' + className;
  }
  
  console.log(styleClasses);
  
  // Alert Icon element
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

  // Alert Suffix element
  let suffixElement = null;
  if (altSuffix) {
    suffixElement = <div className="alert-suffix" data-testid="alert-suffix">{altSuffix}</div>;
  } else if (onClose) {
    suffixElement = (
      <button className="alert-suffix" onClick={onClose} data-testid="alert-suffix">
        <CloseSvg />
      </button>
    );
  } else if (onClick) {
    suffixElement = (
      <button className="alert-suffix" onClick={onClick} data-testid="alert-suffix">
        <ButtonSvg />
      </button>
    );
  }
  // console.log(altSuffix);

  // Alert Title element
  let titleElement = null;
  if (altTitle) {
    titleElement = <div className="alert-title">{altTitle}</div>;
    styleClasses += ' alert-with-title';
  }

  return (
    <div className={styleClasses} {...rest} data-testid='alert'>
      {icon && <span className="alert-icon">{icon}</span>}
      <div className='alert-text-container'>
        {titleElement}
        <div className="alert-content">{children}</div>
      </div>
      {suffixElement}
    </div>
  );
};

Alert.defaultProps = {
  altType: 'standard',
  altIcon: 'success',
  altSuffix: undefined,  // undefined is 'text-only', which is without any suffix
  altTitle: undefined,
  altTextStyle: 'one-line'
}

export default Alert;