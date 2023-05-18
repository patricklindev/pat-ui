import React, { CSSProperties, ElementType, HTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from '../../utils/classNames';

type SkeletonAnimation = 'pulse'
    | 'wave'
    | false;
type SkeletonSize = Array<Function | object | boolean> | Function | object;
type SkeletonVariant = 'circular'
    | 'rectangular'
    | 'rounded'
    | 'text'
    | string;

export interface ISkeletonProps {
    // The animation.If false the animation effect is disabled.
    animation?: SkeletonAnimation,
    // The component used for the root node.Either a string to use a HTML element or a component.
    component?: ElementType,
    // Height of the skeleton.Useful when you don't want to adapt the skeleton to a text element but for instance a card.
    height?: number | string,
    // The system prop that allows defining system overrides as well as additional CSS styles.See the `sx` page for more details.
    sx?: SkeletonSize,
    // The type of content that will be rendered.
    variant?: SkeletonVariant
    // Width of the skeleton.Useful when the skeleton is inside an inline element with no width of its own.
    width?: number | string,
}

export type PatSkeletonProps = PropsWithChildren<ISkeletonProps> & HTMLAttributes<HTMLDivElement>;

export const Skeleton: React.FC<PatSkeletonProps> = (props) => {
    const {
        animation,
        component: Component = 'div',
        height,
        sx,
        variant,
        width,
        children,
        ...otherProps
    } = props;

    const classes = classNames('skeleton', {
        [variant as string]: !!variant,
        [animation as string]: !!animation
    });

    const styles: CSSProperties = {
        height: height,
        width: width,
    };

    return (
        <Component className={classes} style={styles} {...otherProps}>
            {children}
        </Component>
    )
}

Skeleton.defaultProps = {
    animation: false,
    variant: 'text'
}

export default Skeleton;