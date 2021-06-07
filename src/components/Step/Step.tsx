import React from 'react';
import { FC } from 'react';
import StepItem from './StepItem';
import { classNames } from '../../utils/classNames';


export type StepSize = 'sm' | 'md' | 'lg';
export type StepStyle = 'horizontal' | 'vertical';

export interface ImainSteps {
  stepStyle?: StepStyle;
  stepSize?: StepSize;
  step?: any;
}

const Step: FC<ImainSteps> = (props) => {
  const { stepStyle, stepSize, step } = props;

  let styleClasses = classNames('step', {
    [`step-${stepStyle}`]: true,
    [`step-${stepSize}`]: true,
  });


  return (
    <div>
      {props.children}
      <div className={styleClasses}>
        {step.map((value: any, index: number) => (
          <div
            key={index}
            className={step[index].enable ? 'enable' : 'disable'}
          >
              <ul className='step'>
            <StepItem
              label={value.label}
              description={value.description}
              icons={value.icon}
            />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;
