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
    <Rating  rtAjax={(score)=> console.log(score)} rtKey='1'/>
);


export const DiffInitRating = () => (
    <div style = {RatingStyle}>
    <Rating rtScore = {1} rtKey='1'/>
    <Rating rtScore = {2} rtKey='2'/>
    <Rating rtScore = {3} rtKey='3'/>
    <Rating rtScore = {4} rtKey='4'/>
    <Rating rtScore = {5} rtKey='5'/>
    </div>
)

export const DiffShapeRating = () => (
    <div style = {RatingStyle}>
        <div className='rt-title'>Moon</div>
        <Rating rtShape='moon' rtKey='1'/>
        <div className='rt-title'>Wink</div>
        <Rating rtShape='smile-wink' rtKey='2'/>
        <div className='rt-title'>Heart</div>
        <Rating rtShape= 'heart' rtKey='3'/>
    </div>
);

export const DiffSizeRating = () => (
    <div style = {RatingStyle}>
        <div className='rt-title'>Small</div>
        <Rating rtSize='sm' rtKey='1'/>
        <div className='rt-title' >Regular</div>
        <Rating rtKey='2'/>
        <div className='rt-title'>Large</div>
        <Rating rtSize='lg' rtKey='3'/>
        <div className='rt-title' >Larger</div>
        <Rating rtSize= '2x' rtKey='4'/>
    </div>
);


export const DiffEffectRating = () => (
    <div style = {RatingStyle}>
        <div className='rt-title'>Fade</div>
        <Rating rtShape= 'heart' rtAnimation= 'fade' rtKey='1'/>
        <div className='rt-title'>Bounce</div>
        <Rating rtShape='moon' rtAnimation= 'bounce' rtKey='2'/>
        <div className='rt-title'>Swing</div>
        <Rating rtShape='smile-wink' rtAnimation= 'swing' rtKey='3'/>
    </div>
);
