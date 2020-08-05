import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, FontawesomeObject } from '@fortawesome/fontawesome-svg-core'


export enum RatingShape {
    Star = 'star',
    Moon = 'moon',
    Heart = 'heart',
    Wink = 'smile-wink'

}

export enum RatingSize {
    Small = 'sm',
    Middle = '1x',
    Large = 'lg',
    Larger = '2x'

}

export enum RatingAnimation {
    Default = '',
    Fade = 'fade',
    Bounce = 'bounce',
    Swing = 'swing',

}

export interface RatingProps {
    rtShape?: RatingShape;
    rtSize?: RatingSize;
    rtAnimation?: RatingAnimation;
    children?: React.ReactNode;
    className?: string;
}

 const Rating: React.FC<RatingProps> = (props) => {


    const {className, rtShape, rtSize, rtAnimation, children, ...rest} = props
    const [prefix, prefixState] = useState(new Array(5).fill('fas'))
    // let styleClasses = 'rt'
    let styleClasses = ['rt', `rt-${rtSize}`, `rt-${rtShape}`].join(' ')
    if (className) styleClasses += ' ' + className
    const handleClick = (e:React.MouseEvent) => {
        e.stopPropagation()
        let target = e.target as Element
        // if (target.classList.contains('rt-icon')) {
            target.classList.add(`rt-${rtAnimation}`)
        window.setTimeout(()=> {
            target.classList.remove(`rt-${rtAnimation}`)
        }, 1000)
        let num = parseInt(target.id.split('-')[1])
        console.log(target)
        console.log(num)

        let icons = document.getElementsByClassName(`rt-${rtSize} rt-${rtShape}`)[0].children
        let newfix = []
        for (let i =0; i< 5; i++){
            // newfix[i] = 'far'
            icons[i].classList.remove('rt-active')
            
        }
        for (let i = 5-num; i < 5; i++){            
            // newfix[i] = 'fas'
            icons[i].classList.add('rt-active')
        }
        // prefixState(newfix)
        // console.log(prefix)
        // }        
    }

    return (
        <div id='rt-container' className={styleClasses} {...rest}>
            {/* <div id='rt-container'> */}
                <i className='rt-icon' onClick={handleClick} id='rt-5'>
                    <FontAwesomeIcon icon={[prefix[4], rtShape as string] as IconProp} size={rtSize}/>
                </i>
                <i className='rt-icon' onClick={handleClick} id='rt-4'>
                    <FontAwesomeIcon icon={[prefix[3], rtShape as string] as IconProp} size={rtSize}/>
                </i>
                <i className='rt-icon' onClick={handleClick} id='rt-3'>
                    <FontAwesomeIcon icon={[prefix[2], rtShape as string] as IconProp} size={rtSize}/>
                </i>
                <i className='rt-icon' onClick={handleClick} id='rt-2'>
                    <FontAwesomeIcon icon={[prefix[1], rtShape as string] as IconProp} size={rtSize}/>
                </i >
                <i className='rt-icon' onClick={handleClick} id='rt-1'>
                    <FontAwesomeIcon icon={[prefix[0], rtShape as string] as IconProp} size={rtSize}/>
                </i>
            {/* </div> */}
    </div>
    )
}

Rating.defaultProps = {
    rtShape: RatingShape.Star,
    rtSize: RatingSize.Middle,
    rtAnimation: RatingAnimation.Default
}


export default Rating