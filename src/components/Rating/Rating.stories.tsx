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

const mockAjax = function() {
    return new Promise<number>((res,rej)=> {
        setTimeout(()=>{
            res(2)
        }, 2000)
    })
}

const mockOnSLog = function(score:number) {
    console.log(score)
}


export const defaultRating = () => (
        <Rating rtInitScore={mockAjax} rtOnSelect={mockOnSLog}/>

);



export const DiffInitRating = () => (
    <div style = {RatingStyle}>
    <Rating rtInitScore = {1}/>
    <Rating rtInitScore = {2}/>
    <Rating rtInitScore = {3}/>
    <Rating rtInitScore = {4}/>
    <Rating rtInitScore = {5}/>
    </div>
)

export const DiffMaxRating = () => (
    <div style = {RatingStyle}>
    <Rating rtMaxScore = {1} />
    <Rating rtMaxScore = {3} />
    <Rating rtMaxScore = {4} />
    <Rating rtMaxScore = {5} />
    <Rating rtMaxScore = {10} />
    </div>
)

export const DiffShapeRating = () => (
    <div style = {RatingStyle}>
        <div className='rt-title'>Moon</div>
        <Rating rtShape='moon' />
        <div className='rt-title'>Wink</div>
        <Rating rtShape='smile wink' />
        <div className='rt-title'>Heart</div>
        <Rating rtShape= 'heart'/>
    </div>
);

export const DiffSizeRating = () => (
    <div style = {RatingStyle}>
        <div className='rt-title'>Small</div>
        <Rating rtSize='small'/>
        <div className='rt-title' >Medium</div>
        <Rating />
        <div className='rt-title'>Large</div>
        <Rating rtSize='large'/>
        <div className='rt-title' >Huge</div>
        <Rating rtSize= 'huge' />
    </div>
);



export const DiffEffectRating = () => (
    <div style = {RatingStyle}>
        <div className='rt-title'>Fade</div>
        <Rating rtShape= 'heart' rtAnimation= 'fade' />
        <div className='rt-title'>Bounce</div>
        <Rating rtShape='moon' rtAnimation= 'bounce'/>
        <div className='rt-title'>Swing</div>
        <Rating rtShape='smile wink' rtAnimation= 'swing' />
    </div>
);
