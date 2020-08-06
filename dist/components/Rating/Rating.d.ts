import { FC } from 'react';
export declare type RatingShape = 'star' | 'moon' | 'heart' | 'smile-wink';
export declare type RatingSize = 'lg' | 'sm' | '1x' | '2x';
export declare type RatingAnimation = 'none' | 'fade' | 'bounce' | 'swing';
export interface IRatingProps {
    className?: string;
    rtShape?: RatingShape;
    rtSize?: RatingSize;
    rtAnimation?: RatingAnimation;
}
export declare const Rating: FC<IRatingProps>;
export default Rating;
