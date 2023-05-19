import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

export type AlertType = 'standard' | 'filled' | 'outlined';
export type AlertIcon = 'error' | 'warning' | 'info' | 'success';
export type AlertSuffix = 'text' | 'button' | 'closable';
export type AlertTextStyle = 'one-line' | 'one-line-bold' | 'two-line' | 'two-line-bold';

export interface AlertProps {
  /** set customized style */
  className?: string;
  /** set alert Type */
  atType: AlertType;
  /** set alert Icon */
  atIcon: AlertIcon;
  /** set alert Suffix */
  atSuffix?: AlertSuffix;
  /** set alert text */
  atTextStyle: AlertTextStyle;
  /** set action on bottun clicked */
  btnOnClick?:() => void;
}

export const Alert: FC<AlertProps> = (props) => {
  const {atIcon, atSuffix, atTextStyle, atType, children, className, ...rest} = props;

  console.log(props)
  
  let styleClasses = classNames('alert', {
    [`alert-${atIcon}`]: true,
    [`alert-${atSuffix}`]: true,
    [`alert-${atTextStyle}`]: true,
    [`alert-${atType}`]: true,
  });
  console.log(styleClasses);
  
  // add user's custom class
  if (className) {
    styleClasses += ' ' + className;
  }

  // render different component based on type
  let alertComponent: JSX.Element | undefined;
  alertComponent = (
    <div className={styleClasses} data-testid='stanrdard-element'>
      <div className="alert-message">{children}</div>
      <div className='alert-suffix'>
        {atSuffix === 'button' && (
          <Button className="alert-action">
            Button
          </Button>
        )}
      </div>
    </div>
  );
  
  return <>{alertComponent}</>;
}


Alert.defaultProps = {
  atType: 'standard',
  atSuffix: 'text'
}

export default Alert;
