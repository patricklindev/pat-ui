import React, { FC, useState, InputHTMLAttributes } from 'react';


interface ITextProps {
    /** set text content */
    value?: string;
    /** set text vtype */
    vaild?: boolean;
    /** set text placeholder */
    placeholder?: string;
    /** set text change action */
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