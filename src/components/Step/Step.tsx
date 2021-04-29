import React, { FC } from 'react';
import { classNames } from '../../utils/classNames'
import Icon from '../Icon/Icon'

export type StepperSize = 'lg' | 'md' | 'sm';
interface IStepper {
  stepperType?: 'horizontal' | 'vertical';
  stepperSize?: StepperSize;
}

/**
 * A Stepper consists of multiple steps and indicates a series of activities.
 *
 * ```js
 * import { Stepper, Step } from 'pat-ui'
 * ```
 */
export const Stepper: FC<IStepper> = (props) => {
  const { children, stepperType, stepperSize } = props

  // add order to Steps
  const childrenWithProps = React.Children.map(children, (child, index) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { order: index + 1 });
    }
    return child;
  });

  // add connections between steps
  const content = React.Children.toArray(childrenWithProps).flatMap(
    (value, index, array) =>
      array.length - 1 !== index // check for the last item
        ? [value, <StepConnection key={index} connectionType={stepperType}></StepConnection>]
        : value,
  );
  return (
    <div className={`stepper stepper-${stepperType} stepper-${stepperSize}`} data-testid='stepper-element'>{content}</div>
  )
}

Stepper.defaultProps = {
  stepperType: 'horizontal',
  stepperSize: 'md',
};

export interface IStepConnection {
  connectionType?: 'horizontal' | 'vertical';
}

export const StepConnection: FC<IStepConnection> = (props) => {
  const { connectionType } = props
  let content;
  if (connectionType === 'horizontal') {
    content = <hr />
  }
  else if (connectionType === 'vertical') {
    content = <div className='vl'></div>
  }
  return (
    <div className='step-connection'>
      {content}
    </div>
  )
}

export type StepStatus =
  | 'active'
  | 'completed'
  | 'incompleted';

export interface IStep {
  order?: number | string;
  stepStatus?: StepStatus;
}

export const Step: FC<IStep> = (props) => {
  const { children, order, stepStatus } = props;

  // integrate props to string
  let styleClasses = classNames('step', {
    [`step-${stepStatus}`]: true,
    // [`btn-${btnSize}`]: !!btnSize // undefined -> false 
  });
  const svgContent = stepStatus === 'completed' ?
    <Icon
      className='step-icon-check'
      disabled
      loading={false}
      name='check'
    /> :
    <>
      <circle cx='12' cy='12' r='12' className='step-icon-circle'></circle>
      <text className='step-icon-text' x='12' y='17' textAnchor='middle'>
        {order}
      </text>
    </>

  return (
    <div className={styleClasses} data-testid={`step-${order}-element`}>
      <span className='step-icon-container'>
        <svg className='step-icon' height='28' viewBox='0 0 24 24'>

          {svgContent}
        </svg>
      </span>
      <span className='step-label-container'>
        <span className='step-label'>{children}</span>
      </span>
    </div>
  )
}

Step.defaultProps = {
  stepStatus: 'incompleted',
};

