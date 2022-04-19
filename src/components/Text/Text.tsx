import React, { useState } from "react";

//import "./_Text.scss";

interface ITextProps extends React.HTMLAttributes<HTMLInputElement> {
	/** display error styling */
	error?: boolean
	/** value set by parent */
	value?: string
}

export default function Text({ className = "", value = "", onChange, error, ...rest }: ITextProps) {
  const [internalValue, setInternalValue] : [string, Function] = useState(value);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.currentTarget.value);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      className={
        className + " " + (error ? "tx--error" : "tx")
      }
      type="text"
      value={internalValue}
      onChange={changeValue}
      {...rest}
    ></input>
  );
}
