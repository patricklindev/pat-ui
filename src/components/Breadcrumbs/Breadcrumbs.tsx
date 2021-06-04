import React, {
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    FC,
    MouseEvent,
    LiHTMLAttributes,
    ReactNode,
} from 'react';
import { classNames } from '../../utils/classNames';
import PropTypes from 'prop-types';

export type BreadSize = 'lg' | 'sm';
export type BreadType = 'primary' | 'secondary' | 'default';
export type Breaddivider = 'slash' | 'arrow';

export interface IBreadProps {
    /** classname */
    className?: string,
    /** divider sla */
    divider?: Breaddivider,
    /** bre */
    breadType?: BreadType,
    /** fdd */
    role?: string,
}

// export type nativaBreadProps = BreadProps & LiHTMLAttributes<HTMLLIElement>;

const Bread: FC<IBreadProps> = (props) => {
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