import React, { useState, useEffect, FC } from 'react';
import { classNames } from '../../utils/classNames';
import './Rating'

export interface IRatingProps {
  // customized rating
  className?: string;
  // change rating size
  ratingSize?: string;
  // amount of stars
  ratingCount?: any;
  // activate label on hover 
  hoverLabel?: boolean;
  // display label on hover
  ratingLabel?: boolean;
  // active or disabled
  disabled?: boolean;

  onChange?: () => any;
}

export const Rating: FC<IRatingProps> = (props: any) => {
  const {
    ratingSize,
    className,
    ratingCount,
    hoverLabel,
    ratingLabel,
    disabled,
    onChange,
  } = props;

  const [rating, setRating] = useState<number>(1);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [disableRating, setDisableRating] = useState<string>('');
  const [isRatingLabel, setIsRatingLabel] = useState<string>('');
  // const [customRatingLabel, setCustomRatingLabel] = useState('');

  let styleClasses = classNames('', {
    [`rt-${ratingSize}`]: true,
    ['re-label']: !!ratingLabel,
    disabled: !!disabled,
  });

  
  const label: {[key: number] : string} = {
    1: 'Useless',
    2: 'Poor',
    3: 'OK',
    4: 'Good',
    5: 'Excellent',
  };

  // Add color on hover
  const handleHoverOn = (index: number) => {
    setHoverRating(index);
  };

  const handleHoverOff = () => {
    setHoverRating(0);
    removeHoverLabel();
  };

  const saveRating = (index: number) => {
    setRating(index);
  };

  

  //loop through starlabel or customStarLabel object to grab label value
  

  const removeHoverLabel = () => {
    if (hoverLabel) {
      for (let i = 0; i < stars().length; i++) {
        if (hoverRating >= stars()[i]) {
          setIsRatingLabel(label[rating]);
        }
      }
    }
  };

  //make stars array function
  const stars = () => {
    let starArr = [];
    for (let i = 1; i <= ratingCount; i++) {
      starArr.push(i);
    }
    return starArr;
  };
  
  const highliteColor = (idx: number) => {
    if (hoverRating >= idx || rating >= idx) {
      return 'yellow';
    } else {
      return 'none';
    }
  };

  const renderStars = stars().map((idx: number) => {
    return (
      <button
        key={idx}
        className={`${className} star`}
        onMouseEnter={() => handleHoverOn(idx)}
        onMouseLeave={() => {
          handleHoverOff();
        }}
        onClick={() => {
          saveRating(idx);
          onChange(idx); //storybook action addon
        }}
        disabled={disabled}
        value={idx}
      >
        <svg
          className={styleClasses}
          fill={highliteColor(idx)}
          stroke="black"
          viewBox="0 0 24 24"
          width="2rem"
        >
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      </button>
    );
  });

  return (
    <div>
      {renderStars}
      <label htmlFor="star-input">
        {hoverLabel}
       
      </label>
    </div>
  );
};

//default setting
Rating.defaultProps = {
  ratingCount: 5,
  className: 'star'
};

export default Rating;
