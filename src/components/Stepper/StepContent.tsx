import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

export interface IStepContentProps {
  /** children must be React Element */
  children?: ReactNode;
  /** set customized css class */
  className?: string;
  /** define whether to show the content */
  active?: boolean;
}

export const StepContent: FC<IStepContentProps> = (props) => {
  const { children, className, active } = props;
  let styleClasses = classNames('stepper__content', className ? className : '');

  return (
    <>
      <div className="lineBreaker"></div>
      {active ? <div className={styleClasses}>{children}</div> : null}
    </>
  );
};

export default StepContent;
