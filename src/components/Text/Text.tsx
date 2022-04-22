import React, { useState, useEffect } from 'react';
import { classNames } from '../../utils/classNames';

interface ITextProps {
  /** display error styling */
  error?: boolean
  /** value set by parent */
  value?: string
}
type InputProps = ITextProps & React.HTMLAttributes<HTMLInputElement>;

function Text({ className, value='', onChange, error, ...rest }: InputProps) {
  let inputClass;
  if (error) {
    inputClass = 'isError';
  }

  let styleClasses = classNames({
    'textbox': !error,
    [`textbox ${inputClass}`]: !!error,
  })
  if (className) {
    styleClasses += ' ' + className;
  }

  const [inputValue, setInputValue] = useState(value);
  useEffect(() => setInputValue(value), [value])
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <div className="textbox-container">
        <input
          className={styleClasses}
          value={inputValue}
          onChange={changeValue}
          {...rest}
        />
        {error &&
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-error"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>}
      </div>
    </>
  );
}

export default Text;
