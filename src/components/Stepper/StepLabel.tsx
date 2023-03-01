import React, { FC, ReactNode, useEffect } from 'react';
import { classNames } from '../../utils/classNames';

export interface IStepLableProps {
  /** children must be React Element */
  children?: ReactNode;
  /** set customized css class */
  className?: string;
  /** Render given optional child */
  optional?: ReactNode;
  /** Render given step icon */
  StepIconComponent?: ReactNode;
  /**  */
  index?: number;
  /**  */
  active?: boolean;
  /**  */
  error?: boolean;
  /** Set the completed status of a step */
  completed?: boolean;
}

const errorLabel = (
  <svg
    width="22"
    height="19"
    viewBox="0 0 22 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z"
      fill="#F44336"
    />
  </svg>
);

const completedLabel = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
      fill="#3F51B5"
    ></path>
  </svg>
);

const numLabel = (active: boolean = false, index: number) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {active ? (
        <rect x="0.5" width="24" height="24" rx="12" fill="#3F51B5" />
      ) : (
        <rect
          x="0.5"
          width="24"
          height="24"
          rx="12"
          fill="black"
          fill-opacity="0.38"
        />
      )}
      {index >= 10 ? (
        <text x="50%" y="70%" fill="white" text-anchor="middle">
          {index + 1}
        </text>
      ) : (
        <text x="50%" y="70%" fill="white" text-anchor="middle">
          {index + 1}
        </text>
      )}
    </svg>
  );
};

const StepIcon = (
  index: number = 0,
  error = false,
  active = false,
  completed = false
) => {
  if (error) return errorLabel;
  else if (completed) return completedLabel;
  else return numLabel(active, index);
};

export const StepLabel: FC<IStepLableProps> = (props) => {
  const {
    children,
    className,
    optional,
    StepIconComponent,
    index,
    active,
    error,
    completed,
  } = props;

  let styleClasses = classNames(
    'stepper__label',
    active ? 'stepper__label-active' : '',
    completed ? 'stepper__label-completed' : '',
    error ? 'stepper__label-error' : '',
    className ? className : ''
  );

  return (
    <>
      <div className="stepper__icon">
        {StepIcon(index, error, active, completed)}
      </div>
      <div className={styleClasses}>
        {children}
        {optional ? (
          <div className="stepper__label-optional">{optional}</div>
        ) : null}
      </div>
    </>
  );
};

StepLabel.defaultProps = {
  completed: false,
  error: false,
};

export default StepLabel;
