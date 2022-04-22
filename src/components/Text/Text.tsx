// import "./Text.css";
// import "./_Text.scss";
import errorSvg from '../../asset/icon/error.svg';
import searchSvg from '../../asset/icon/search.svg';
import React, { useState, useEffect, InputHTMLAttributes, FC } from 'react';
import { classNames } from '../../utils/classNames';


interface ITextProps {
  /** set customized error */
  error?: boolean;
  /** set customized className */
  className?: string;
  /** set customized value */
  value?: string;
}

type TextProps = ITextProps & React.InputHTMLAttributes<HTMLInputElement>


const Text = ({ className, value = '', onChange, error, ...rest }: TextProps) => {
  const [internalValue, setInternalValue] = useState<string>(value);

  let styleClasses = classNames({
    'inputContainer': !error,
    'inputContainer-error': !!error
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  // Synchronize internal value with prop value.
  useEffect(() => setInternalValue(value), [value]);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.currentTarget.value);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      {!error && (
        <div className={styleClasses}>
          <input
            placeholder="Search..."
            className="inputField"
            onChange={changeValue}
            {...rest}
          ></input>
          <img src={searchSvg} />
        </div>
      )}
      {error && (
        <div className={styleClasses}>
          <input
            placeholder="Enter valid term"
            className="inputField-error"
            onChange={changeValue}
            {...rest}
          ></input>
          <img src={errorSvg} />
        </div>
      )}
    </>
  );

}

export default Text;
