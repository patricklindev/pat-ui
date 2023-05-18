import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

export type AlertIcon = 'error' | 'warning' | 'info' | 'success';
export type AlertSuffix = 'close-icon' | 'button';
export type AlertText = 'one-line' | 'one-line-bold' | 'two-line' | 'two-line-bold';
export type AlertType = 'standard' | 'filled' | 'outlined';
export type AlertAction = 'text-only' | 'with-button' | 'closable';

export interface AlertProps {
  /** set customized style */
  className?: string;
  atIcon: AlertIcon;
  atSuffix: AlertSuffix;
  atText: AlertText;
  atType: AlertType;
  atAction:  AlertAction;
  /** set action on bottun clicked */
  btnOnClick?:() => void;
}

export const Alert: FC<AlertProps> = (props) => {
  const {atIcon, atSuffix, atText, atType, atAction, children, className, ...rest} = props;
  
  let styleClasses;
  if (atType == 'standard') {
    styleClasses = classNames('alert-standard', {
      [`alert-${atIcon}`]:true,
      [`alert-${atSuffix}`]:true,
      [`alert-${atText}`]:true,
      [`alert-${atAction}`]:true,
    });
  } else if (atType == 'filled') {
    styleClasses = classNames('alert-filled', {
      [`alert-${atIcon}`]:true,
      [`alert-${atSuffix}`]:true,
      [`alert-${atText}`]:true,
      [`alert-${atAction}`]:true,
    });
  } else if (atType == 'outlined') {
    styleClasses = classNames('alert-outlined', {
      [`alert-${atIcon}`]:true,
      [`alert-${atSuffix}`]:true,
      [`alert-${atText}`]:true,
      [`alert-${atAction}`]:true,
    });
  }

  // add user's custom class
  if (className) {
    styleClasses += ' ' + className;
  }

  // render different component based on type
  let alertComponent: JSX.Element | undefined;
  if (atType == 'standard') {
    alertComponent = (
      <div className={styleClasses}  data-testid='alert-element'>
        
      </div>
    );
  } else if (atType == 'filled') {

  } else if (atType == 'outlined') {

  }

  return <>{alertComponent}</>;
}


Alert.defaultProps = {
  atType: 'standard'
}

export default Alert;
