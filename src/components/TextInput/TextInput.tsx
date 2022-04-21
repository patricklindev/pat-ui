import React, { useState, InputHTMLAttributes, FC } from 'react';
import { classNames } from '../../utils/classNames';

import './TextInput.css';
import mySVG from '../../asset/icon/circle-exclamation-solid.svg';

interface ITextInputProps {
  /** set placeholder */
  placeholder?: string;
  /** set value */
  value?: string;
  /** apply error style to text input */
  err?: boolean;
}

export type DBTextInputProps = ITextInputProps &
  InputHTMLAttributes<HTMLInputElement>;

const TextInput: FC<DBTextInputProps> = (props) => {
  const { className, placeholder, value, err, onChange, ...rest } = props;
  const [inputValue, setInputValue] = useState(value);

  let styleClasses = classNames({
    'ti-error': !!err,
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  if (value !== inputValue) {
    setInputValue(value);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.currentTarget.value);

    if (onChange) {
      onChange(e);
    }
  }

  return (
    <div className={'TextInput'}>
      <input
        className={styleClasses}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        {...rest}
        type="text"
      />
      {err && <img src={mySVG} alt="" />}
    </div>
  );
};

export default TextInput;
