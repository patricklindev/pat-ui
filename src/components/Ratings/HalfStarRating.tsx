import React, { useState, useEffect } from 'react'

export default function HalfStarRating(props) {

    const { count } = props

    const [starValue, setStarValue] = useState(0)

    const grabStarValue = (e: any) => {
        setStarValue(e.target.value)
    }

    const customStarCount = () => {
        let starInputs = [];
        let value1 = 0.5
        let value2 = 1
        for (let i = 0; i < (count); i++) {
            starInputs.push(<input type="radio" value={value1++} onMouseMove={(e) => grabStarValue(e)} name="stars" />)
            starInputs.push(<input type="radio" value={value2++} onMouseMove={(e) => grabStarValue(e)} name="stars" />)
        }
        starInputs.reverse()
        return starInputs
    }

    return (
        <div className="rating-wrapper">
            <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
            <div className="rating-star">
                {customStarCount()}
                <label htmlFor='stars'>{starValue}</label>
            </div>
        </div>
    )
}
