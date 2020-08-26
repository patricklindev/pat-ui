import React, {FunctionComponent, MouseEvent, useEffect, useState, useRef,RefObject} from 'react';


import Icon from '../Icon/Icon'

export type RatingShape = 'star' | 'moon' | 'heart' | 'smile wink';

// export enum RatingShape {
//     Star = 'star',
//     Moon = 'moon',
//     Heart = 'heart',
//     Wink = 'smile-wink'

// }

// export type RatingSize =  'sm' | '1x' | 'lg' | '2x' ;
export type RatingSize =  'small' | 'medium' | 'large' | 'huge' ;


// export enum RatingSize {
//     Small = 'sm',
//     Middle = '1x',
//     Large = 'lg',
//     Larger = '2x'

// }

export type RatingAnimation = 'none' | 'fade' | 'bounce' | 'swing';

// export enum RatingAnimation {
//     Default = 'none',
//     Fade = 'fade',
//     Bounce = 'bounce',
//     Swing = 'swing',

// }


export interface IRatingProps {      
    /** set customized style */
    className?: string;
    /** set icon shape */
    rtShape?: RatingShape;
    /** set icon size */
    rtSize?: RatingSize;
    /** set initial score */
    rtInitScore?: number | (()=> Promise<number>);
    /** set max score */
    rtMaxScore?:number;
    /** set customiized function */
    rtOnSelect?: (score:number) => any;
    /** set click effect */
    rtAnimation?: RatingAnimation;


}

/**
 * 
 * ```js
 * 
 * ```
 */


export const Rating: FunctionComponent<IRatingProps> = (props) => {
    let {className, rtShape, rtSize, rtAnimation, rtInitScore, rtMaxScore, rtOnSelect, children, ...rest} = props
    let myRef = useRef<HTMLDivElement>()
    const [score, setScore] = useState(typeof rtInitScore === 'number'? rtInitScore : 0)
    useEffect(()=> {
        if (typeof rtInitScore === 'function') {
            rtInitScore().then((data:number)=> {
                setScore(data)})            
            }
        }, [])       
    let styleClasses = ['rt', `rt-${rtSize}`, `rt-${(rtShape as string).split(' ').join('-')}`].join(' ')
    if (className) styleClasses += ' ' + className
    useEffect(()=> {
        let parent = myRef.current
        if (parent && score) {
            let icons = (parent as Element).children    
            for (let i =0; i< (rtMaxScore as number); i++){
                icons[i].classList.remove('rt-active')                
            }
            for (let i = ((rtMaxScore as number) - (score as number)) ; i < (rtMaxScore as number); i++){            
                icons[i].classList.add('rt-active')
            }
            if(rtOnSelect) rtOnSelect(score as number)
        }

    }, [score])
    const handleClick = (num:string) => (e:MouseEvent) => {
        e.stopPropagation()
        let target = e.target as Element
        target.classList.add(`rt-${rtAnimation}`)
        window.setTimeout(()=> {
            target.classList.remove(`rt-${rtAnimation}`)
        }, 1000)
        setScore(parseInt(num))    
    }


    let list = (new Array(rtMaxScore).fill(0)).map((el, idx)=> {
        return (<div className='rt-icon' onClick={handleClick(`${rtMaxScore as number - idx}`)}>
                    <Icon name={rtShape as string} size ={rtSize}/>
                </div>)
    })
    return (
   
        <>
            <div ref={myRef as RefObject<HTMLDivElement>} className={styleClasses + ' rt-container'} {...(rest as IRatingProps)}>
                {list}
            </div>
        </>

    )
};

Rating.defaultProps = {

    rtInitScore: 0,
    rtMaxScore: 5,
    rtShape: 'star',
    rtSize: 'medium',
    rtAnimation: 'none',
};


export default Rating;