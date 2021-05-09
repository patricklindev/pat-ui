import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';

type SpinnerSize = 'sm' | 'md' | 'lg';
type SpinnerColor = 'light' | 'dark';

interface SpinnerProps {
  // size of the spinner, medium is the default
  size?: SpinnerSize;
  color?: SpinnerColor;
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({ size, color, className }) => {
  let classes = classNames('spinner', {
    [`spinner-${size}`]: !!size,
    [`spinner-${color}`]: !!color,
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
  color: 'dark',
};

export default Spinner;
