import React, { useState, useEffect } from 'react';

export default function HalfStarRating(props: any) {
    const { count, disabler, size, handleLabel } = props;

    const [starValue, setStarValue] = useState(0);
    const [disableHandler, setDisableHandler] = useState(disabler);
    const [disableCss, setDisableCss] = useState('');
    const [hoverLabel, setHoverLabel] = useState('');

    const hoverLabels: any = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    const grabStarValue = (e: any) => {
        setStarValue(e.target.value);
        setHoverLabel(hoverLabels[e.target.value]);
    };

    useEffect(() => {
        if (disableHandler) {
            setDisableCss('disabled ');
        }
    });

    const customStarCount = () => {
        let starInputs = [];
        let value1 = 0.5;
        let value2 = 1;
        for (let i = 0; i < count; i++) {
            starInputs.push(
                <input
                    className={`${disableCss} ${size}`}
                    type="radio"
                    value={value1++}
                    onMouseMove={(e) => grabStarValue(e)}
                    name="stars"
                    disabled={disableHandler}
                />
            );
            starInputs.push(
                <input
                    className={`${disableCss} ${size}`}
                    type="radio"
                    value={value2++}
                    onMouseMove={(e) => grabStarValue(e)}
                    name="stars"
                    disabled={disableHandler}
                />
            );
        }
        starInputs.reverse();
        return starInputs;
    };

    return (
        <div className="rating-wrapper">
            <link
                href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
                rel="stylesheet"
            />
            <div className="rating-star">{customStarCount()}</div>
            <div>
                <label id="stars" htmlFor="stars">
                    {handleLabel ? `${starValue} ${hoverLabel}` : ''}
                </label>
            </div>
        </div>
    );
}
