import React, { FC, ReactNode } from 'react';

export interface IStepContentProps {
  /** children must be React Element */
  children?: ReactNode;
  /** set customized css class */
  className?: string;
}

export const StepContent: FC<IStepContentProps> = (props) => {
  const { children } = props;

  return <>{children}</>;
};

export default StepContent;
