import React,  { useState } from 'react'

function Text({ vaild = true, value, placeholder, ...rest }) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <input
      vaild={vaild}
      className={`${vaild ? "input-box" : "error-box"}`}
      type="text"
      value={inputValue}
      placeholder={placeholder}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      {...rest}
    ></input>
  );
}
  

export default Text;