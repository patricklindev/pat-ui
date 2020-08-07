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

export type RatingSize = 'lg' | 'sm' | '1x' | '2x' ;

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
    rtKey: string  
    /** set customized style */
    className?: string;
    /** set icon shape */
    rtShape?: RatingShape;
    /** set icon size */
    rtSize?: RatingSize;
    /** set initial score */
    rtScore?:number;
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
    let {className, rtShape, rtSize, rtAnimation, rtScore, rtAjax, rtKey, children, ...rest} = props
    const [score, setScore] = useState(rtScore)
    const prefix = new Array(5).fill('fas')
    let styleClasses = ['rt', `rt-${rtSize}`, `rt-${rtShape}`, `rt-rtKey-${rtKey}`].join(' ')
    if (className) styleClasses += ' ' + className
    useEffect(()=> {
        let parent = document.getElementById(rtKey)
        if (parent && score) {
            let icons = (parent as Element).children    
            for (let i =0; i< 5; i++){
                icons[i].classList.remove('rt-active')                
            }
            for (let i = (5 - (score as number)) ; i < 5; i++){            
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

        // console.log(target)
        
        // let parent = target.parentElement
        // if (parent?.id === 'rt-container') {
        //     let icons = parent.children    
        //     for (let i =0; i< 5; i++){
        //         icons[i].classList.remove('rt-active')                
        //     }
        //     for (let i = 5-num; i < 5; i++){            
        //         icons[i].classList.add('rt-active')
        //     }
        // }    
        // prefixState(newfix)
        // console.log(prefix)
        // }        
    }

    return (
   
        <>
            <div id={`${rtKey}`} className={styleClasses + ' rt-container'} {...(rest as IRatingProps)}>
                <div className='rt-icon' onClick={handleClick} id='rt-5'>
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
                </div>
            </div>
        </>

    )
};

Rating.defaultProps = {
    rtScore: 0,
    rtShape: 'star',
    rtSize: '1x',
    rtAnimation: 'none',
};


export default Rating;