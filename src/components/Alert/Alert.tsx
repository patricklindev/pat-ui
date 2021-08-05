import React, {
    HTMLAttributes,
    FC,
} from "react";
import { classNames } from '../../utils/classNames';

export type AlertSize = 'lg' | 'sm';

export type AlertType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'info'
  | 'success'
  | 'default';

export interface IAlertProps {
    /** set customized style */
    className?: string;
    /** set Alert size */
    alertSize?: AlertSize;
    /** set Alert type */
    alertType?: AlertType;
}

export type PatAlertProps = IAlertProps & HTMLAttributes<HTMLDivElement>;

/**
 * Provide contextual feedback messages for typical user actions.
 *
 * ```js
 * import {Alert} from 'pat-ui'
 * ```
 */
export const Alert: FC<PatAlertProps> = (props) => {
    const { alertSize, alertType, children, className, ...rest } = props;
    let styleClasses = classNames('alert', {
        [`alert-${alertType}`]: true,
        [`alert-${alertSize}`]: !!alertSize,
      });
      if (className) {
        styleClasses += ' ' + className;
      }
    return (
        <div
          className={styleClasses}
          {...(rest as PatAlertProps)}
        >
            {children}
        </div>
    )
} 

Alert.defaultProps = {
    alertType: 'default',
  };

export default Alert;