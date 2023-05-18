import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

export type AlertIcon = 'error' | 'warning' | 'info' | 'success';
export type AlertSuffix = 'close-icon' | 'button';
export type AlertTextStyle = 'one-line' | 'one-line-bold' | 'two-line' | 'two-line-bold';
export type AlertType = 'standard' | 'filled' | 'outlined';

export interface AlertProps {
  /** set customized style */
  className?: string;
  atIcon: AlertIcon;
  atSuffix?: AlertSuffix;
  /** set alert text */
  atTextStyle: AlertTextStyle;
  atType: AlertType;
  /** set action on bottun clicked */
  btnOnClick?:() => void;
}

export const Alert: FC<AlertProps> = (props) => {
  const {atIcon, atSuffix, atTextStyle, atType, children, className, ...rest} = props;

  let styleClasses = classNames('alert', {
    [`alert-${atIcon}`]: true,
    [`alert-${atSuffix}`]: true,
    [`alert-${atTextStyle}`]: true,
    [`alert-${atType}`]: true,
  });

  // add user's custom class
  if (className) {
    styleClasses += ' ' + className;
  }

  // render different component based on type
  let alertComponent: JSX.Element | undefined;
  if (atType === 'standard') {
    alertComponent = (
      <div className={styleClasses} data-testid='stanrdard-element'>
        <div className="alert-message">{children}</div>
        {atSuffix === 'button' && (
          <Button className="alert-action">
            Button
          </Button>
        )}
        {atSuffix === 'close-icon'}
      </div>
    );
  } else if (atType === 'filled') {
    alertComponent = (
      <div className={styleClasses} data-testid='filled-element'>
        <div className="alert-message">{children}</div>
        {atSuffix === 'button' && (
          <Button className="alert-action">
            Button
          </Button>
        )}
        {atSuffix === 'close-icon'}
      </div>
    );
  } else if (atType === 'outlined') {
    alertComponent = (
      <div className={styleClasses} data-testid='outlined-element'>
        <div className="alert-message">{children}</div>
        {atSuffix === 'button' && (
          <Button className="alert-action">
            Button
          </Button>
        )}
        {atSuffix === 'close-icon'}
      </div>
    );
  }

  return <>{alertComponent}</>;
}


Alert.defaultProps = {
  atType: 'standard'
}

export default Alert;
