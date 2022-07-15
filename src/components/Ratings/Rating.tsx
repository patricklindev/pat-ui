import React, { useState, useEffect, FC } from 'react';
import StarIcon from './StarIcon';

export interface IRatingProps {
    /**set true or false*/
    disableHandler?: boolean;
    /**set "sm" | "md" | "lg" */
    starSize?: string;
    /**set custom classname by sending in a prop*/
    classNames?: string;
    /**set star count by using array [1,2,3,4,5]*/
    count?: number;
    /**set customized default value of star. Example: 3*/
    customRatingValue?: number;
    /**set true or false to activate label on hover*/
    hoverLabel?: boolean;
    /**set custom icon size by sending prop in. Example: "75px" */
    customSize?: string;
    /**set true or false to activate custom label on hover*/
    customLabel?: boolean;
    /**set your own custom hover label text*/
    customHoverLabel?: any;
    /**send addon-action from storybook as a prop */
    onChange?: () => any;
}

export type patRatingProps = IRatingProps;

export const Rating: FC<patRatingProps> = (props: any) => {
    const {
        disableHandler,
        starSize,
        classNames,
        count,
        customRatingValue,
        hoverLabel,
        customSize,
        onChange,
        customHoverLabel,
        customLabel,
    } = props;

    const [rating, setRating] = useState<number>(customRatingValue);
    const [hoverRating, setHoverRating] = useState<number>(0);
    const [disableCss, setDisableCss] = useState<string>('');
    const [ratingLabel, setRatingLabel] = useState<string>('');
    const [customRatingLabel, setCustomRatingLabel] = useState('');

    //default hover label
    const starLabel: any = {
        1: 'Useless',
        2: 'Poor',
        3: 'OK',
        4: 'Good',
        5: 'Excellent',
    };

    //custom hover labels
    const customStarLabel: any = customHoverLabel;

    //add color on mouse enter
    const highlite = (index: number) => {
        setHoverRating(index);
    };

    //remove color on mouse leave
    const removeHighlite = () => {
        setHoverRating(0);
        removeHoverLabel();
    };

    //save color/rating on click
    const saveRating = (index: number) => {
        setRating(index);
    };

    //if disabled add disabled css
    useEffect(() => {
        if (disableHandler) {
            setDisableCss('disabled');
        }
    });

    //loop through starlabel or customStarLabel object to grab label value
    useEffect(() => {
        if (hoverLabel) {
            for (let i = 0; i < stars().length; i++) {
                if (hoverRating >= stars()[i]) {
                    setRatingLabel(starLabel[hoverRating]);
                }
            }
        }
        if (customLabel) {
            for (let i = 0; i < stars().length; i++) {
                if (hoverRating >= stars()[i]) {
                    setCustomRatingLabel(customStarLabel[hoverRating]);
                }
            }
        }
    });

    //remove hover label on mouse leave and save current index label
    const removeHoverLabel = () => {
        if (hoverLabel) {
            for (let i = 0; i < stars().length; i++) {
                if (hoverRating >= stars()[i]) {
                    setRatingLabel(starLabel[rating]);
                }
            }
        }
        if (customLabel) {
            for (let i = 0; i < stars().length; i++) {
                if (hoverRating >= stars()[i]) {
                    setCustomRatingLabel(customStarLabel[rating]);
                }
            }
        }
    };

    //make stars array function
    const stars = () => {
        let starArr = [];
        for (let i = 1; i <= count; i++) {
            starArr.push(i);
        }
        return starArr;
    };

    //render stars
    const renderStars = stars().map((index: number) => {
        return (
            <button
                key={index}
                name="star-input"
                id="star-input"
                className={`${classNames} star-btn ${disableCss}`}
                onMouseEnter={() => highlite(index)}
                onMouseLeave={() => {
                    removeHighlite();
                }}
                onClick={() => {
                    saveRating(index);
                    onChange(index); //storybook action addon
                }}
                disabled={disableHandler}
                value={index}
                role="button"
            >
                <StarIcon
                    starSize={starSize}
                    hoverRating={hoverRating}
                    rating={rating}
                    index={index}
                    customSize={customSize}
                    count={count}
                />
            </button>
        );
    });

    return (
        <div>
            {renderStars}
            <label htmlFor="star-input">
                {hoverLabel ? ratingLabel : customLabel ? customRatingLabel : ''}
            </label>
        </div>
    );
};

//default setting
Rating.defaultProps = {
    count: 5,
};

export default Rating;
