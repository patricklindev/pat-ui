import React, {
  FC,
  ReactNode,
  Children,
  ReactElement,
  cloneElement,
} from 'react';
import { IStepLableProps } from './StepLabel';

export interface IStepProps {
  /** children must be React Element */
  children?: ReactElement<IStepLableProps>;
  /** set customized css class */
  className?: string;
  index: number;
  activeStep?: number;
}

export const Step: FC<IStepProps> = (props) => {
  const { children, className, index, activeStep } = props;
  // console.log('index', index);

  return (
    <li>
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
  );
};

export default Step;
