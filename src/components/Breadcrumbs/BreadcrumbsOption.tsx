import React, { FC,
    LiHTMLAttributes,
    CSSProperties,
    ReactNode,
} from 'react';

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
    return (
        <li className={styleClasses} 
        style={cssStyle} value={ value } 
        {...(rest as nativeBreadOptionProps)}>
            { content }
        </li>
    )
}

export default BreadOption;