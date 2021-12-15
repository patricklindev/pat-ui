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
export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
  /** set customize style */
  className?: string;
  /** set progress type: circular or linear */
  pgType?: ProgressType;
  /** set progress size: 5 pre-set size or number (px)
   *  - when passing in number for linear progress, you are setting the height
   *  - when passing in number for circular progress, you are setting the radius of the inner circle
   *
   * use (pgSize * 5) / 2 to get the diametor of the whole circle
   */
  pgSize?: ProgressSize | number;
  /** set progress color */
  pgColor?: ProgressColor;
  /** show or hide percentage */
  showPercentage?: boolean;
  /** set progress value: from 0 to 100 (%) */
  pgValue: number;
}

/**
 * A progress bar shows the progression of a task
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
      [`pg-linear-${pgSize}`]: !!(pgSize && typeof pgSize !== 'number'),
      [`pg-linear-${pgColor}`]: !!pgColor,
    });
  } else if (pgType === 'circular') {
    styleClasses = classNames('pg-circular', {
      [`pg-circular-${pgSize}`]: !!(pgSize && typeof pgSize !== 'number'),
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
      <div role="progressbar" style={{ display: 'flex' }}>
        <div className={styleClasses}>
          <div
            data-testid="linear-bar"
            style={
              typeof pgSize !== 'number'
                ? { width: `${pgValue}%` }
                : {
                    width: `${pgValue}%`,
                    height: `${pgSize}px`,
                  }
            }
            className="pg-linear-bar"
          ></div>
        </div>
        {showPercentage ? (
          <div
            style={
              typeof pgSize === 'number'
                ? {
                    fontSize: pgSize >= 30 ? `${pgSize / 2}px` : `${pgSize}px`,
                  }
                : {}
            }
            className="pg-linear-text"
          >{`${Math.floor(pgValue)}%`}</div>
        ) : null}
      </div>
    );
  } else if (pgType === 'circular') {
    let ringProps: IRingProps;

    if (typeof pgSize === 'number') {
      ringProps = {
        height: (pgSize * 10) / 4,
        width: (pgSize * 10) / 4,
        cx: (pgSize * 5) / 4,
        cy: (pgSize * 5) / 4,
        radius: pgSize,
        strokeWidth: pgSize / 4,
      };
    } else {
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
    }

    const circumference = ringProps.radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (pgValue / 100) * circumference;

    renderComponent = (
      <div
        role="progressbar"
        style={
          typeof pgSize === 'number'
            ? {
                height: `${(pgSize * 10) / 4}px`,
                width: `${(pgSize * 10) / 4}px`,
              }
            : {}
        }
        className={styleClasses}
      >
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
            data-testid="circular-bar"
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
          <div
            style={
              typeof pgSize === 'number'
                ? {
                    fontSize: pgSize >= 14 ? `${pgSize / 2}px` : '0px',
                  }
                : {}
            }
            className="pg-circular-text"
          >{`${Math.floor(pgValue)}%`}</div>
        ) : null}
      </div>
    );
  }

  return <>{renderComponent}</>;
};

Progress.defaultProps = {
  pgType: 'linear',
  pgSize: 'md',
  showPercentage: false,
};

export default Progress;
