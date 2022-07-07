import React, { useState, useMemo, useEffect } from "react";

export default function StarIcon(props: any) {
    const { starSize, hoverRating, rating, index, customSize,starCounts } = props;

    // const [colorHalf, setColorHalf] = useState("white")
    // const [colorFull, setColorFull] = useState("white")

    const highliteColor = useMemo(() => {
        if(hoverRating >= index || rating >= index)return "yellow"; //hovering or clicked
        return "none";
    }, [rating, hoverRating, index]);

    // handle half and full star color change
    // const handleHighliteColorChange = (e:any) =>{
    //     console.log('x',e.nativeEvent.offsetX)
    //     //highlite left half of the star if the mouse is on the left of the star.
    //     if(e.nativeEvent.offsetX >= 1 && e.nativeEvent.offsetX < 14)setColorHalf(()=>'yellow')
    //     //highlite the whole star if the mouse is on the right of the star.
    //     if(e.nativeEvent.offsetX >= 13){
    //         setColorHalf('yellow')
    //         setColorFull('yellow')
    //     }
    //     //highlite back to left half only if mouse pointer moves back to the left side.
    //     if(e.nativeEvent.offsetX <= 13)setColorFull(()=> 'white')
    //     //remove color if pointer is out of the star frame.
    //     if(e.nativeEvent.offsetX <= 0 || e.nativeEvent.offsetY > 20 || e.nativeEvent.offsetY <= 0){
    //         setColorHalf('white')
    //         setColorFull('white')
    //     }
    // }

    return (
        <svg
            className={!customSize? starSize:""}
            // fill="url(#starColor)"
            fill={highliteColor}
            stroke="black"
            viewBox="0 0 24 24"
            width={customSize?`${customSize}`:"2rem"}
            // onMouseMove={(e)=>{handleHighliteColorChange(e)}}
        >
            {/* <defs>
                <linearGradient id="starColor">
                    <stop offset="50%" stopColor={colorHalf}/>
                    <stop offset="50%" stopColor={colorFull}/>
                </linearGradient>
            </defs> */}
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
    );
}