import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';

// progress type
export type ProgressType = 'circular' | 'linear';
// progress color
export type ProgressColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';
// progress size
export type ProgressSize = 'xs' | 'sm' | 'lg' | 'xl';

// props type
export interface IProgressProps {
  /** set class name */
  className?: string;
  /** set progress type: circular or linear */
  pgType?: ProgressType;
  /** set message size */
  pgSize?: ProgressSize;
  /** set progress color */
  pgColor?: ProgressColor;
  /** set progress value */
  pgValue: number;
}

export const Progress: FC<IProgressProps> = (props) => {
  // props destructure
  const { className, pgType, pgSize, pgColor, pgValue, ...rest } = props;

  // manage class names with different type
  let styleClasses;
  if (pgType === 'linear') {
    styleClasses = classNames('pg-linear', {
      [`pg-linear-${pgSize}`]: !!pgSize,
      [`pg-linear-${pgColor}`]: !!pgColor,
    });
  } else if (pgType === 'circular') {
    styleClasses = classNames('pg-circular', {
      [`pg-circular-${pgSize}`]: !!pgSize,
      [`pg-circular-${pgColor}`]: !!pgColor,
    });
  }
  // add user's custom class
  if (className) {
    styleClasses += ' ' + className;
  }

  // render different component based on type
  let renderComponent;
  if (pgType === 'linear') {
    renderComponent = (
      <div className={styleClasses}>
        <div style={{ width: `${pgValue}%` }} className="bar"></div>
      </div>
    );
  } else if (pgType === 'circular') {
    renderComponent = <div className={styleClasses}></div>;
  }

  return <>{renderComponent}</>;
};

Progress.defaultProps = {
  pgType: 'linear',
};

export default Progress;
