import React, { CSSProperties, ElementType, HTMLAttributes, PropsWithChildren, memo } from 'react';
import { classNames } from '../../utils/classNames';

// Animation types for the skeleton component.
type SkeletonAnimation = 'pulse'
    | 'wave'
    | false;

// Skeleton variant types. 
type SkeletonVariant = 'circular'
    | 'rectangular'
    | 'rounded'
    | 'text'
    | string;

export interface ISkeletonProps {
    // The animation type. If false, the animation effect is disabled.
    animation: SkeletonAnimation,
    // The component used for the root node. Either a string to use a HTML element or a component.
    component?: ElementType,
    // Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card.
    height?: number | string,
    // The type of content that will be rendered.
    variant?: SkeletonVariant,
    // Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.
    width?: number | string,
}

export type PatSkeletonProps = PropsWithChildren<ISkeletonProps> & HTMLAttributes<HTMLDivElement>;

const Skeleton: React.FC<PatSkeletonProps> = memo((props) => {
    const {
        animation,
        component: Component = 'div',
        height,
        variant,
        width,
        children,
        style,
        ...otherProps
    } = props;

    const classes = classNames('skeleton', {
        [variant as string]: !!variant,
        [animation as string]: !!animation
    });

    const styles: CSSProperties = { ...style };

    if (width !== undefined) {
        styles['width'] = width
    }

    if (height !== undefined) {
        styles['height'] = height;
    }

    return (
        <Component className={classes} style={styles} {...otherProps}>
            {children}
        </Component>
    );
});

Skeleton.defaultProps = {
    animation: false,
    variant: 'text',
    component: 'div'
}

export default Skeleton;
