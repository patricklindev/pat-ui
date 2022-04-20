import React, { FC, ReactNode, useState, InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';


interface ITextProps {
    /** set message content */
    value?: string;
    /** set message list */
    vaild?: boolean;
    /** set message icon */
    placeholder?: string;
    /** set message click action */
    onChange?: () => void;
}

export type JTextProps = ITextProps & InputHTMLAttributes<HTMLInputElement>;

export const Text: FC<JTextProps> = (props) => {
    const { 
        vaild, 
        value, 
        placeholder,
        onChange,
        ...rest } = props;

    const [inputValue, setInputValue] = useState(value);

    let text = (
            <input
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

    return text;
};

Text.defaultProps = {
    type: 'text',
    vaild: true,
};

export default Text;