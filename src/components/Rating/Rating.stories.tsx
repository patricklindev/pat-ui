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
        <Rating rtSize='sm'/>
        <Rating rtSize='lg'/>
        <Rating rtSize= '2x'/>
    </div>
);


export const DiffEffectRating = () => (
    <div style = {RatingStyle}>
        <Rating rtShape= 'heart' rtAnimation= 'fade'/>

        <Rating rtShape='moon' rtAnimation= 'bounce' />

        <Rating rtShape='smile-wink' rtAnimation= 'swing'/>
    </div>
);
