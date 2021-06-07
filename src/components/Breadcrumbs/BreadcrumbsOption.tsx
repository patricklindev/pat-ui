import React, {
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    FC,
    MouseEvent,
    LiHTMLAttributes,
    CSSProperties,
    ReactNode,
    Children,
} from 'react';
import { classNames } from '../../utils/classNames';
import { IBreadProps } from './Breadcrumbs';


export type IBreadOptionProps = {
    children?: ReactNode,
    /** classname */
    className?: string,
    cssStyle?: CSSProperties,
    value?: any,
    /** href */
    anchor?:string,
}

export type nativeBreadOptionProps = IBreadOptionProps & LiHTMLAttributes<HTMLLIElement>

export const BreadOption: FC<nativeBreadOptionProps> = (props) => {
    const { children, className, cssStyle, anchor, value, ...rest } = props;
    let styleClasses = 'bread__option'
    if (className) {
        styleClasses += ' ' + className;
    }
    let content;
    if (anchor) {
        content = <a href={anchor}>{ children }</a>
    } else {
        content = children
    }
    // let devIcon = '';
    // if (divider == 'arrow') {
    //     devIcon = '⮞'
    // } else {
    //     devIcon = '/'
    // }
    return (
        <li className={styleClasses} 
        style={cssStyle} value={ value } 
        {...(rest as nativeBreadOptionProps)}>
            { content }
        </li>
    )
}

export default BreadOption;