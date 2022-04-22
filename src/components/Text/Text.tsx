import ErrorIcon from './ErrorIcon';
import React, { useState, useEffect } from 'react';
import { classNames } from '../../utils/classNames';
export interface ITextProps {
  /** set customized input style */
  className?: string;
  /** set invalid prop */
  invalid?: boolean;
  /** set value prop */
  value?: string;
}
export type TextProps = ITextProps & React.HTMLAttributes<HTMLInputElement>;

const Text: React.FC<TextProps> = (props) => {
  const { invalid, value, className, ...rest } = props;
  const [enteredInput, setEnteredInput] = useState(value);
  const err: string = invalid ? 'with-error' : '';
  let textClasses = classNames('input-container', err);
  let inputClasses = `input-text ${className}`;
  useEffect(() => {
    setEnteredInput(value);
  }, [value]);

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput(e.target.value);
  };

  return (
    <div className={textClasses}>
      <input
        className={inputClasses}
        value={enteredInput}
        onChange={updateInput}
        {...rest}
        type="text"
      />
      {invalid && <ErrorIcon />}
    </div>
  );
};
Text.defaultProps = {
  invalid: false,
  value: '',
};
export default Text;
