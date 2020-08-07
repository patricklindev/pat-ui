import React from 'react';
import Rating from './Rating';

export default {
    title: 'Rating',
    component: Rating,
};

const RatingStyle:React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

export const defaultRating = () => (
    <Rating/>
);

export const DiffShapeRating = () => (
    <div style = {RatingStyle}>
        <div className='rt-title'>Moon</div>
        <Rating rtShape='moon'/>
        <div className='rt-title'>Wink</div>
        <Rating rtShape='smile-wink'/>
        <div className='rt-title'>Heart</div>
        <Rating rtShape= 'heart'/>
    </div>
);

export const DiffSizeRating = () => (
    <div style = {RatingStyle}>
        <div className='rt-title'>Small</div>
        <Rating rtSize='sm'/>
        <div className='rt-title'>Regular</div>
        <Rating />
        <div className='rt-title'>Large</div>
        <Rating rtSize='lg'/>
        <div className='rt-title'>Larger</div>
        <Rating rtSize= '2x'/>
    </div>
);


export const DiffEffectRating = () => (
    <div style = {RatingStyle}>
        <div className='rt-title'>Fade</div>
        <Rating rtShape= 'heart' rtAnimation= 'fade'/>
        <div className='rt-title'>Bounce</div>
        <Rating rtShape='moon' rtAnimation= 'bounce' />
        <div className='rt-title'>Swing</div>
        <Rating rtShape='smile-wink' rtAnimation= 'swing'/>
    </div>
);
