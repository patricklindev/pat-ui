import React, { useState, useEffect } from 'react';

interface ITextTypes {
  value: string;
  placeholder: string;
  error: boolean;
  onChange: Function;
}

function Text({
  value = '',
  placeholder = 'Placeholder',
  onChange,
  error,
  ...rest
}): ITextTypes {
  const [inputValue, setInputValue] = useState<string>(value);
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <div className={`input-text${error ? '-error' : ''}`}>
      <input
        value={inputValue}
        onChange={changeInputValue}
        placeholder={placeholder}
        {...rest}
        type="text"
      />
    </div>
  );
}

export default Text;
