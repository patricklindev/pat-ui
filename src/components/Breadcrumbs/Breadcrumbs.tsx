import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';

export type BreadSize = 'lg' | 'sm';
export type BreadType = 'primary' | 'secondary' | 'default';
export type Breaddivider = 'slash' | 'arrow';

export interface IBreadProps {
    /** classname */
    className?: string,
    /** divider symbol */
    divider?: Breaddivider,
    /** color theme */
    breadType?: BreadType,
}


export const Bread: FC<IBreadProps> = (props) => {
    const { className, breadType, divider, children, ...rest } = props;
    let styleClasses = classNames('bread', {
        [`bread-${breadType}`]: true,
        [`bread-${divider}`]: true,
    });
    if (className) {
        styleClasses += ' ' + className;
    }
    let bread;
    bread = (
        <ul role='bread' className={styleClasses} {...(rest as IBreadProps)}>
            <li className='home'>Home </li> { children }
        </ul>
    )
    return bread
};

Bread.defaultProps = {
    breadType: 'default',
    divider: 'arrow',
}


export default Bread;