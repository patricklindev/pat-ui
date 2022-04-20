import ErrorIcon from './ErrorIcon.js';
import React, { useState, MouseEvent } from 'react';
export interface TextProps {
  className?: string;
  invalid: boolean;
  value?: string;
  placeholder?: string;
}

const Text: React.FC<TextProps> = (props) => {
  const { invalid, value, placeholder } = props;
  const [enteredInput, setEnteredInput] = useState(value);
  const err: string = invalid ? 'with-error' : '';
  const updateInput = (e: React.EventTarget) => {
    setEnteredInput(e.target.value);
  };
  return (
    <div className={`input-container ${err}`}>
      <input
        className="input-text"
        value={enteredInput}
        onChange={updateInput}
        placeholder={placeholder}
      />
      {invalid && <ErrorIcon />}
    </div>
  );
};
export default Text;
