import React from 'react';
import { classNames } from '../../utils/classNames';

type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface SpinnerProps {
  // size of the spinner, medium is the default
  size?: SpinnerSize;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size, className }) => {
  let classes = classNames('spinner', {
    [`spinner-${size}`]: !!size,
  });
  if (className) classes += ' ' + className;

  let spinner = (
    <div className={classes}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  return spinner;
};

Spinner.defaultProps = {
  size: 'md',
};

export default Spinner;
