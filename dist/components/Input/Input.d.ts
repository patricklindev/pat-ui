import { InputHTMLAttributes, FC } from 'react';
interface IInputProps {
    /** set customized style */
    className?: string;
    /** set input bar size */
    inputSize?: 'mini' | 'small' | 'large' | 'big' | 'huge' | 'massive';
    /** make input bar always focused */
    focus?: boolean;
    /** disabled the input bar */
    disabled?: boolean;
    /** apply error style to input bar */
    error?: boolean;
    /** make input bar transparent */
    transparent?: boolean;
    /** make input bar take whole space of parent container */
    fluid?: boolean;
    /** add specific icon to input bar */
    icon?: string | {
        [key: string]: string | boolean;
    };
    /** apply loading style to input bar */
    loading?: boolean;
    /** set icon to show on left or right, default is right */
    iconPosition?: 'left' | 'right';
}
export declare type PatInputProps = IInputProps & InputHTMLAttributes<HTMLInputElement>;
declare const Input: FC<PatInputProps>;
export default Input;
