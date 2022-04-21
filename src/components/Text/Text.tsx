import React, { useState } from 'react';

interface ITextTypes {
  value: string;
  placeholder: string;
  error: boolean;
}

function Text({
  value,
  placeholder = 'Search',
  onChange,
  error,
  ...rest
}): ITextTypes {
  const [inputValue, setInputValue] = useState<string>(value);
  const changeInputValue = (e) => {
    if (onChange) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className={`input-text${error ? '-error' : ''}`}>
      <input
        value={inputValue}
        onChange={changeInputValue}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default Text;
