import { InputHTMLAttributes, FC } from 'react';
interface IInputProps {
    className?: string;
    placeholder?: string;
    size?: 'mini' | 'small' | 'large' | 'big' | 'huge' | 'massive';
    focus?: boolean;
    disabled?: boolean;
    error?: boolean;
    transparent?: boolean;
    fluid?: boolean;
    icon?: string | {
        [key: string]: string | boolean;
    };
    loading?: boolean;
    iconPosition?: string;
    labeled?: string;
}
declare type PatInputProps = IInputProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
declare const Input: FC<PatInputProps>;
export default Input;
