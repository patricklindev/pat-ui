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

export interface IRingProps {
  height: number;
  width: number;
  cx: number;
  cy: number;
  radius: number;
  strokeWidth: number;
}

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
  /** show or hide progress text */
  showPercentage?: boolean;
  /** set progress value from 0 to 100 (%) */
  pgValue: number;
}

/**
 * A progress component shows the process of a task
 *
 * ```js
 * import {Progress} from 'pat-ui'
 * ```
 */
export const Progress: FC<IProgressProps> = (props) => {
  // props destructure
  const { className, pgType, pgSize, pgColor, showPercentage, pgValue } = props;

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
  let renderComponent: JSX.Element | undefined;
  if (pgType === 'linear') {
    renderComponent = (
      <div style={{ display: 'flex' }}>
        <div
          style={{ width: showPercentage ? '95%' : '100%' }}
          className={styleClasses}
        >
          <div style={{ width: `${pgValue}%` }} className="pg-linear-bar"></div>
        </div>
        {showPercentage ? (
          <div className="pg-linear-text">{`${Math.floor(pgValue)}%`}</div>
        ) : null}
      </div>
    );
  } else if (pgType === 'circular') {
    let ringProps: IRingProps;

    switch (pgSize) {
      case 'xs':
        ringProps = {
          height: 25,
          width: 25,
          cx: 12.5,
          cy: 12.5,
          radius: 10,
          strokeWidth: 2.5,
        };
        break;

      case 'sm':
        ringProps = {
          height: 50,
          width: 50,
          cx: 25,
          cy: 25,
          radius: 20,
          strokeWidth: 5,
        };
        break;

      case 'lg':
        ringProps = {
          height: 100,
          width: 100,
          cx: 50,
          cy: 50,
          radius: 40,
          strokeWidth: 10,
        };
        break;

      case 'xl':
        ringProps = {
          height: 150,
          width: 150,
          cx: 75,
          cy: 75,
          radius: 60,
          strokeWidth: 15,
        };
        break;

      default:
        ringProps = {
          height: 75,
          width: 75,
          cx: 37.5,
          cy: 37.5,
          radius: 30,
          strokeWidth: 7.5,
        };
        break;
    }

    const circumference = ringProps.radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (pgValue / 100) * circumference;

    renderComponent = (
      <div className={styleClasses}>
        <svg
          className="backgroud"
          height={ringProps.height}
          width={ringProps.width}
        >
          <circle
            className="ring"
            strokeWidth={ringProps.strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            r={ringProps.radius}
            cx={ringProps.cx}
            cy={ringProps.cy}
          />
        </svg>
        <svg
          className="progress"
          height={ringProps.height}
          width={ringProps.width}
        >
          <circle
            className="progress-ring"
            style={{ strokeDashoffset }}
            strokeWidth={ringProps.strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference + ' ' + circumference}
            fill="transparent"
            r={ringProps.radius}
            cx={ringProps.cx}
            cy={ringProps.cy}
          />
        </svg>
        {showPercentage ? (
          <div className="pg-circular-text">{`${Math.floor(pgValue)}%`}</div>
        ) : null}
      </div>
    );
  }

  return <>{renderComponent}</>;
};

Progress.defaultProps = {
  pgType: 'linear',
};

export default Progress;
