import ErrorIcon from './ErrorIcon';
import React, { useState } from 'react';
import { classNames } from '../../utils/classNames';
export interface ITextProps {
  invalid?: boolean;
  value?: string;
}
export type TextProps = ITextProps & React.HTMLAttributes<HTMLInputElement>;

const Text: React.FC<TextProps> = (props) => {
  const { invalid, value, ...rest } = props;
  const [enteredInput, setEnteredInput] = useState(value);
  const err: string = invalid ? 'with-error' : '';
  let textClasses = classNames('input-container', err);

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput(e.target.value);
  };

  return (
    <div className={textClasses}>
      <input
        className="input-text"
        value={enteredInput}
        onChange={updateInput}
        {...rest}
        type="text"
      />
      {invalid && <ErrorIcon />}
    </div>
  );
};
export default Text;
