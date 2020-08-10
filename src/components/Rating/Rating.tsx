import React, {FunctionComponent, MouseEvent, useEffect, useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faMoon, faStar, faHeart, faSmileWink } from '@fortawesome/free-regular-svg-icons'
// import {fas} from '@fortawesome/free-solid-svg-icons'
// library.add( fas, faMoon, faStar, faHeart, faSmileWink )

import Icon from '../Icon/Icon'

export type RatingShape = 'star' | 'moon' | 'heart' | 'smile-wink';

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
    /** set unique rtKey */
    rtKey: string | number 
    /** set customized style */
    className?: string;
    /** set icon shape */
    rtShape?: RatingShape;
    /** set icon size */
    rtSize?: RatingSize;
    /** set initial score */
    rtInitScore?:number | Function;
    /** set max score */
    rtMaxScore?:number;
    /** set customiized function */
    rtFunction?: (score:number) => any;
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
    let {className, rtShape, rtSize, rtAnimation, rtInitScore, rtMaxScore, rtFunction, rtKey, children, ...rest} = props
    const [score, setScore] = useState(rtInitScore)
    useEffect(()=> {
        if (typeof rtInitScore === 'function') {
            rtInitScore().then((data:number)=> {
                setScore(data)})            
        }
    }, [])       
    const prefix = new Array(5).fill('fas')
    let styleClasses = ['rt', `rt-${rtSize}`, `rt-${rtShape}`, `rt-rtKey-${rtKey}`].join(' ')
    if (className) styleClasses += ' ' + className
    useEffect(()=> {
        let parent = document.getElementById(`${rtKey}`)
        if (parent && score) {
            let icons = (parent as Element).children    
            for (let i =0; i< (rtMaxScore as number); i++){
                icons[i].classList.remove('rt-active')                
            }
            for (let i = ((rtMaxScore as number) - (score as number)) ; i < (rtMaxScore as number); i++){            
                icons[i].classList.add('rt-active')
            }
            if(rtFunction) rtFunction(score as number)
        }

    }, [score])
    const handleClick = (e:MouseEvent) => {
        e.stopPropagation()
        let target = e.target as Element
        target.classList.add(`rt-${rtAnimation}`)
        window.setTimeout(()=> {
            target.classList.remove(`rt-${rtAnimation}`)
        }, 1000)
        let num = parseInt(target.id.split('-')[1])
        setScore(num)    
    }


    let list = (new Array(rtMaxScore).fill(0)).map((el, idx)=> {
        return (<div className='rt-icon' onClick={handleClick} id={`rt-${rtMaxScore as number - idx}`} key = {idx}>
                    {/* <FontAwesomeIcon icon={['fas', rtShape as string] as IconProp} size={rtSize}/> */}
                    <Icon name={rtShape as string} size ={rtSize}/>
                </div>)
    })
    return (
   
        <>
            <div id={`${rtKey}`} className={styleClasses + ' rt-container'} {...(rest as IRatingProps)}>
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