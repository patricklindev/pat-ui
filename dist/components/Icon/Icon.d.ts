import { FC } from 'react';
export declare type IconSize = 'tiny' | 'mini' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
export declare type IconColor = 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' | 'pink' | 'brown' | 'grey' | 'black';
export interface IIconProps {
    /** set customized style */
    className?: string;
    /** set icon size */
    size?: IconSize;
    /** set icon color */
    color?: IconColor;
    /** set icon type */
    name: string;
    /** set loading icon */
    loading?: boolean;
    /** set disabled icon */
    disabled?: boolean;
}
/**
 * An Icon is a symbol that helps user understand what does the content do.
 *
 * ```js
 * import {Icon} from 'pat-ui'
 * ```
 */
declare const Icon: FC<IIconProps>;
export default Icon;
