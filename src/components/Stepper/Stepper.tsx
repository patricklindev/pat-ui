import React, { Children, cloneElement, FC, ReactElement } from 'react';
import { classNames } from '../../utils/classNames';
import { IStepProps } from './Step';

export interface IStepperProps {
  /** children must be React Element */
  children?: ReactElement<IStepProps> | ReactElement<IStepProps>[];
  /** set customized css class */
  className?: string;
  /** set current step, starts from 0 */
  activeStep?: number;
  /** set orientation */
  orientation?: string;
  /** set non-linear feature */
  nonLinear?: boolean;
}

/**
 * Steppers display progress through a sequence of logical and numbered steps.
 *
 * ```js
 * import { Stepper } from 'pat-ui'
 * ```
 */
export const Stepper: FC<IStepperProps> = (props) => {
  const { children, className, activeStep, orientation, nonLinear } = props;
  let styleClasses = classNames(
    'stepper',
    orientation ? orientation : '',
    nonLinear ? 'nonLinear' : '',
    className ? className : ''
  );
  return (
    <ul className={styleClasses}>
      {children
        ? Children.map(children, (child: ReactElement) =>
            cloneElement(child, { activeStep })
          )
        : children}
    </ul>
  );
};

Stepper.defaultProps = {
  activeStep: 0,
  orientation: 'horizontal',
};

export default Stepper;
