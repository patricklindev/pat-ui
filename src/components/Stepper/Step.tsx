import React, {
  FC,
  ReactNode,
  Children,
  ReactElement,
  cloneElement,
} from 'react';
import { classNames } from '../../utils/classNames';
import { IStepLableProps } from './StepLabel';

export interface IStepProps {
  /** children must be React Element */
  children?: ReactElement | ReactElement[];
  /** set customized css class */
  className?: string;
  index?: number;
  activeStep?: number;
  /**  */
  onClick?: () => void;
}

export const Step: FC<IStepProps> = (props) => {
  const { children, className, index, activeStep, onClick } = props;
  let styleClasses = classNames('stepper__step', className ? className : '');
  return (
    <>
      <li className={styleClasses} onClick={onClick}>
        {children
          ? Children.map(children, (child: ReactElement) =>
              cloneElement(child, {
                index: index,
                active: activeStep === index,
                // completed: activeStep > index,
              })
            )
          : children}
      </li>
      <div className="stepper__divider">
        <div className="stepper__divider-child"></div>
      </div>
    </>
  );
};

export default Step;
