import React, { useState, InputHTMLAttributes, FC } from 'react';

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
  const { placeholder, value, err, onChange, ...rest } = props;
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className={'TextInput'}>
      <input
        className={err ? 'err' : ''}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        {...rest}
      />
      {err && <img src={mySVG} alt="" />}
    </div>
  );
};

export default TextInput;
