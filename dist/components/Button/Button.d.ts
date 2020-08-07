import { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';
export declare type ButtonSize = 'lg' | 'sm';
export declare type ButtonType = 'primary' | 'secondary' | 'danger' | 'default' | 'link';
export interface IButtonProps {
    /** set customized style */
    className?: string;
    /** set button size */
    btnSize?: ButtonSize;
    /** set button type */
    btnType?: ButtonType;
    /** set disabled button */
    disabled?: boolean;
}
declare type NativeButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
declare type NativeAchorButtonProps = IButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export declare type PatButtonProps = NativeButtonProps | NativeAchorButtonProps;
/**
 * A Button indicates a possible user action.
 *
 * ```js
 * import {Button} from 'pat-ui'
 * ```
 */
export declare const Button: FC<PatButtonProps>;
export default Button;
