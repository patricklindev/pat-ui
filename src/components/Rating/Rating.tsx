import React, {FunctionComponent, MouseEvent, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faStar, faHeart, faSmileWink } from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add( fas, faMoon, faStar, faHeart, faSmileWink )


export type RatingShape = 'star' | 'moon' | 'heart' | 'smile-wink';

// export enum RatingShape {
//     Star = 'star',
//     Moon = 'moon',
//     Heart = 'heart',
//     Wink = 'smile-wink'

// }

export type RatingSize =  'sm' | '1x' | 'lg' | '2x' ;

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
    rtScore?:number | Function;
    /** set max score */
    rtMaxScore?:number;
    /** set ajax call function */
    rtAjax?: (score:number) => any;
    /** set click effect */
    rtAnimation?: RatingAnimation;


}

/**
 * 
 * ```js
 * 
 * ```
 */

// type SRatingProps = IRatingProps & HTMLProps<HTMLDivElement>

export const Rating: FunctionComponent<IRatingProps> = (props) => {
    let {className, rtShape, rtSize, rtAnimation, rtScore, rtMaxScore, rtAjax, rtKey, children, ...rest} = props
    const [score, setScore] = useState(rtScore)
    useEffect(()=> {
        if (typeof rtScore === 'function') {
            rtScore().then((data:number)=> {
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
            if(rtAjax) rtAjax(score as number)
        }

    }, [score])
    const handleClick = (e:MouseEvent) => {
        e.stopPropagation()
        let target = e.target as Element
        // if (target.classList.contains('rt-icon')) {
        target.classList.add(`rt-${rtAnimation}`)
        window.setTimeout(()=> {
            target.classList.remove(`rt-${rtAnimation}`)
        }, 1000)
        let num = parseInt(target.id.split('-')[1])
        setScore(num)    
    }


    let list = (new Array(rtMaxScore).fill(0)).map((el, idx)=> {
        return (<div className='rt-icon' onClick={handleClick} id={`rt-${rtMaxScore as number - idx}`} key = {idx}>
                    <FontAwesomeIcon icon={['fas', rtShape as string] as IconProp} size={rtSize}/>
                </div>)
    })
    return (
   
        <>
            <div id={`${rtKey}`} className={styleClasses + ' rt-container'} {...(rest as IRatingProps)}>
                {/* <div className='rt-icon' onClick={handleClick} id='rt-5'>
                    <FontAwesomeIcon icon={[prefix[4], rtShape as string] as IconProp} size={rtSize}/>
                </div>
                <div className='rt-icon' onClick={handleClick} id='rt-4'>
                    <FontAwesomeIcon icon={[prefix[3], rtShape as string] as IconProp} size={rtSize}/>
                </div>
                <div className='rt-icon' onClick={handleClick} id='rt-3'>
                    <FontAwesomeIcon icon={[prefix[2], rtShape as string] as IconProp} size={rtSize}/>
                </div>
                <div className='rt-icon' onClick={handleClick} id='rt-2'>
                    <FontAwesomeIcon icon={[prefix[1], rtShape as string] as IconProp} size={rtSize}/>
                </div >
                <div className='rt-icon' onClick={handleClick} id='rt-1'>
                    <FontAwesomeIcon icon={[prefix[0], rtShape as string] as IconProp} size={rtSize}/>
                </div> */}
                {list}
            </div>
        </>

    )
};

Rating.defaultProps = {

    rtScore: 0,
    rtMaxScore: 5,
    rtShape: 'star',
    rtSize: '1x',
    rtAnimation: 'none',
};


export default Rating;