import React, { InputHTMLAttributes} from 'react';
import ErrorIcon from "../../asset/icon/ErrorIcon";
// import errorIcon from "../../asset/icon/error-icon.svg"
import { useState } from "react";
// import Icon from '../Icon';

interface ITextProps {
  error?: boolean
  value?: string
}
export type InputProps = ITextProps & InputHTMLAttributes<HTMLInputElement>;

function Text({error, value, ...rest}: InputProps) {
    // const {error, value, ...rest} = props;
  let inputClass = "noError";
  if (error) {
    inputClass = "isError";
  }

  const [inputValue, setInputValue] = useState(value);

  return (
    <>
      <div className="textbox-container">
        <input
          className={"textbox " + inputClass}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          {...rest}
        />
        {error && <ErrorIcon className="svg-error" />}
        {/* {error && <img src={errorIcon} className="svg-error" />} */}
        {/* {error && <Icon name="error" className="svg-error" color="red"/>} */}
        {/* <img src={errorIcon} className="svg-error"/> */}
      </div>
    </>
  );
}

export default Text;
